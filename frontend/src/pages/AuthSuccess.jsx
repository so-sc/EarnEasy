import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSession } from '../context/SessionContext';

const AuthSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setSession } = useSession();

  useEffect(() => {
    const token = searchParams.get('token');
    const userParam = searchParams.get('user');

    if (token && userParam) {
      try {
        const user = JSON.parse(decodeURIComponent(userParam));
        
        // Set session with user data and token
        setSession({
          id: user.id,
          email: user.email,
          name: user.name,
          picture: user.picture
        }, token);

        console.log('Authentication successful, redirecting to home...');
        
        // Redirect to home page
        navigate('/home', { replace: true });
      } catch (error) {
        console.error('Error parsing user data:', error);
        navigate('/auth-error', { replace: true });
      }
    } else {
      console.error('Missing token or user data');
      navigate('/auth-error', { replace: true });
    }
  }, [searchParams, setSession, navigate]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Completing Authentication...</h2>
        <p>Please wait while we log you in.</p>
        <div style={{ 
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          animation: 'spin 1s linear infinite',
          margin: '20px auto'
        }}></div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AuthSuccess;