import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated }) => {
  const location = useLocation();
  return isAuthenticated ? <Outlet /> :  <Navigate to="/auth" replace state={{ from: location.pathname }} 
/>;
};

export default PrivateRoute;