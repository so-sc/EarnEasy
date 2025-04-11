import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
      <div className="flex flex-col items-center justify-center gap-5 p-5">
        <h1 className="text-5xl">Landing Page</h1>
        
        <Button variant="contained"
                className="cursor-pointer bg-black text-white px-4 py-2 rounded"
                onClick={() => navigate('/auth')}
            >
                Sign In
            </Button>
      </div>
  )
}

export default LandingPage