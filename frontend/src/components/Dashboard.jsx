import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [userinfo, setUserinfo] = useState(null)
  const navigate = useNavigate()

  useEffect(()=> {
    const userData = localStorage.getItem('user-info');
    const finalUserData = JSON.parse(userData); 
    setUserinfo(finalUserData);
  }, []) 

  const handleLogout = () => {
    localStorage.removeItem('user-info')
    setUserinfo(null)
    navigate('/') 
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <img src={userinfo?.picture} alt={userinfo?.name} />
      <h2>Welcome {userinfo?.name}</h2>
      <h2>Your email is {userinfo?.email}</h2>
      <button className="bg-black rounded-md text-white cursor-pointer text-center p-4" onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Dashboard