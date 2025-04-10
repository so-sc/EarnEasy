import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GoogleLogin from './components/GoogleLogin';
import LandingPage from './pages/LandingPage.jsx';
import ExplorePage from "./pages/ExplorePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from './pages/ErrorPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import CartPage from "./pages/CartPage.jsx";
import RefreshHandler from './RefreshHandler';
import BottomNavBar from './components/BottomNavBar.jsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { indigo } from '@mui/material/colors';

const getTheme = (mode) =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: mode === 'light' ? '#0091ea' : '#039be5', // Button color
            },
            secondary: indigo,
            background: {
                default: mode === 'light' ? '#f4f6f8' : '#121212',
                paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
            },
        },
    });

// To fix authentication and /auth
const AppContent = ({ isAuthenticated, setIsAuthenticated, mode, setMode }) => {
    const location = useLocation();
    const theme = getTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/auth" element={<GoogleLogin />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<ProfilePage mode={mode} setMode={setMode} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            {location.pathname !== '/auth' && location.pathname !== "/" && <BottomNavBar />}
        </ThemeProvider>
    );
};

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'light');

    useEffect(() => {
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    return (
        <BrowserRouter>
            <AppContent
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                mode={mode}
                setMode={setMode}
            />
        </BrowserRouter>
    );
};

export default App;
