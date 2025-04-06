import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GoogleLogin from './components/GoogleLogin'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import ErrorPage from './components/ErrorPage'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<GoogleLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
