import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppContent from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientid = import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientid}>
        <AppContent />
    </GoogleOAuthProvider>
  </StrictMode>,
)
