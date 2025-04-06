import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const token = JSON.parse(data)?.token;
        if (token) {
            setIsAuthenticated(true);
            if (location.pathname === '/' ||
                location.pathname === '/auth'
            ) {
                navigate('/dashboard', { replace: true }); // { replace: true } - does not add a new entry to the browser history stack 
            }
        }
    }, [location, navigate, setIsAuthenticated])

    return null 
}

export default RefreshHandler