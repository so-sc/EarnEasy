import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>LandingPage</div>
    <button className='cursor-pointer bg-black text-white px-4 py-2 rounded' onClick={() => {
      navigate('/auth')
    }}>Sign In</button>
    </>
  )
}

export default LandingPage