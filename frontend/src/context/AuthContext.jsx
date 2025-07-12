import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/validate', {
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error(`Token validation failed: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success) {
          setUser(data.user);
        } else {
          throw new Error('Invalid authentication');
        }
      } catch (error) {
        console.error('Auth validation error:', error);
        clearAuth();
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const setAuth = (userData) => {
    setUser(userData);
  };

  const clearAuth = () => {
    setUser(null);
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:3000/profile/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearAuth();
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    setAuth,
    clearAuth,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};