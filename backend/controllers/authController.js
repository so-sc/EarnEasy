import axios from 'axios';
import jwt from 'jsonwebtoken';
import UserModel from '../models/authModel.js';
import oauth2Client from '../utils/googleClient.js';
import { generateAccessToken, blacklistToken } from '../middleware/authMiddleware.js';
import 'dotenv/config';

export const googleAuth = async (req, res) => {
    const { code } = req.query; //get the code from the frontend

    try {
        const resfromGoogle = await oauth2Client.getToken(code);
        //   console.log(resfromGoogle.tokens);
        oauth2Client.setCredentials(resfromGoogle.tokens);

        const resofUser = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${resfromGoogle.tokens.access_token}`
            }
        });

        console.log(resofUser.data); //user data from google
        const { email, name, picture } = resofUser.data;

        let user = await UserModel.findOne({ email });

        if (!user) {
            user = await UserModel.create({
                email,
                name,
                picture
            });
        }
        const { _id } = user; //destructuring the id from the user object

        //Creating JWT access token using the middleware function
        const token = generateAccessToken({ userId: _id, email });

        // Set HTTP-only cookie for security
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        //Sending the response back to the frontend
        res.status(200).json({
            message: 'success',
            user,
        });
    } catch (error) {
        console.error('Error during Google authentication:', error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const validateAuth = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId).select('-__v');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Session is valid',
            user
        });
    } catch (error) {
        console.error('Session validation error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

// Logout endpoint
export const logout = async (req, res) => {
    try {
        // Get token from cookie or header
        let token = req.cookies?.authToken;
        if (!token) {
            const authHeader = req.headers.authorization;
            token = authHeader && authHeader.split(' ')[1];
        }

        // Blacklist the token if it exists (or else it will be persistent across devices, even after logout from one device)
        if (token) {
            blacklistToken(token);
        }

        // Clear the HTTP-only cookie
        res.clearCookie('authToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        });

        res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};