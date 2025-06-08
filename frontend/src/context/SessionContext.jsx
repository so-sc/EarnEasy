import React, { createContext, useContext, useState, useEffect } from 'react';

const SessionContext = createContext();

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeSession = async () => {
      const savedToken = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');

      if (savedToken && savedUser) {
        try {
          setToken(savedToken);
          setUser(JSON.parse(savedUser));
          
          // Validate token with server
          const response = await fetch('http://localhost:3000/session/validate', {
            headers: {
              'Authorization': `Bearer ${savedToken}`
            }
          });

          if (!response.ok) {
            throw new Error('Token validation failed');
          }

          const data = await response.json();
          if (data.success) {
            setUser(data.user);
          } else {
            throw new Error('Invalid session');
          }
        } catch (error) {
          console.error('Session validation error:', error);
          clearSession();
        }
      }
      setLoading(false);
    };

    initializeSession();
  }, []);
  const setSession = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userToken);
  };

  const clearSession = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const logout = async () => {
    try {
      if (token) {
        await fetch('http://localhost:3000/session/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearSession();
    }
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!user,
    setSession,
    clearSession,
    logout
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};