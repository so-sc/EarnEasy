import { useNavigate } from 'react-router-dom';

const AuthError = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', padding: '20px' }}>
        <h2 style={{ color: '#e74c3c' }}>Authentication Failed</h2>
        <p>Sorry, there was an error during the authentication process.</p>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default AuthError;