import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from '@mui/material'

const ProfilePage = ({ mode, setMode }) => {
    const navigate = useNavigate()
    const [userinfo, setUserinfo] = useState(null)

    useEffect(() => {
        const userData = localStorage.getItem('user-info')
        const finalUserData = JSON.parse(userData)
        setUserinfo(finalUserData)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('user-info')
        setUserinfo(null)
        navigate('/')
    }

    const toggleTheme = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <div className="flex flex-col items-center gap-10 p-5">
            <h1 className="text-5xl">Profile</h1>
            <img src={userinfo?.picture} alt={userinfo?.name} className="rounded-full w-32 h-32" />
            <h2>Welcome {userinfo?.name}</h2>
            <h2>Your email is {userinfo?.email}</h2>

            <Button variant="contained" onClick={toggleTheme}>
                Toggle to {mode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
            <Button variant="contained"
                className="bg-black rounded-md text-white cursor-pointer text-center p-4"
                onClick={handleLogout}
            >
                Log Out
            </Button>
        </div>
    )
}

export default ProfilePage
