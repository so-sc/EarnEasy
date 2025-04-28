import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GoogleLogin from './components/GoogleLogin'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import ErrorPage from './components/ErrorPage'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'
import RefreshHandler from './RefreshHandler'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  //To prevent non authenticated users from accessing the dashboard
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />
  }

  return (
    <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<GoogleLogin />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/feedback" element={<FeedbackSection />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
