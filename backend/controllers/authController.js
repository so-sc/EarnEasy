import axios from 'axios';
import jwt from 'jsonwebtoken';
import UserModel from '../models/authModel.js';
import oauth2Client from '../utils/googleClient.js';
import { generateToken } from '../middleware/authMiddleware.js';
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

        let user = await UserModel.findOne( { email });

        if (!user) {
            user = await UserModel.create({ 
                email, 
                name,
                picture
             });
        }        const { _id } = user; //destructuring the id from the user object

        //Creating JWT token using the middleware function
        const token = generateToken(_id, email);

        //Sendin the response back to the frontend
        res.status(200).json({
            message: 'successss',
            token,
            user,
        });    } catch (error) {
        console.error('Error during Google authentication:', error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// Session validation endpoint
export const validateSession = async (req, res) => {
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
        // For JWT, we don't need to do anything server-side
        // Client will remove the token
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