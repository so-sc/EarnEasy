import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading) {
            if (user) {
                setIsAuthenticated(true);

                // If authenticated user is on auth page, redirect to home
                if (location.pathname === '/auth') {
                    const targetPath = location.state?.from || '/home';
                    navigate(targetPath, { replace: true });
                }
            } else {
                setIsAuthenticated(false);

                // Only redirect to / if user is on a protected route
                // Allow staying on public routes: /, /auth, /add
                const publicRoutes = ['/', '/auth', '/add'];
                const isOnPublicRoute = publicRoutes.includes(location.pathname);

                if (!isOnPublicRoute) {
                    // User is on a protected route without authentication - redirect to home
                    navigate('/', { replace: true });
                }
            }
        }
    }, [user, loading, setIsAuthenticated, location, navigate]);

    return null;
}

export default RefreshHandler;