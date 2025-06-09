import React from 'react';
import { useSession } from '../context/SessionContext';

const SessionInfo = () => {
  const { user, token, isAuthenticated, logout } = useSession();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 10, right: 10, background: '#f0f0f0', padding: '10px', borderRadius: '5px', fontSize: '12px', zIndex: 1000 }}>
      <div>User: {user?.name || user?.email}</div>
      <div>Token: {token ? 'Valid' : 'None'}</div>
      <button 
        onClick={logout}
        style={{ marginTop: '5px', padding: '2px 8px', fontSize: '10px' }}
      >
        Logout
      </button>
    </div>
  );
};

export default SessionInfo;