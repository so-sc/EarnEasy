import axios from 'axios';
import jwt from 'jsonwebtoken';
import UserModel from '../models/authModel.js';
import oauth2Client from '../utils/googleClient.js';
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
        }

        const { _id } = user; //destructuring the id from the user object

        //Creating JWT token
        const token = jwt.sign({ _id, email },
            process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_TIMEOUT,
        });

        //Sendin the response back to the frontend
        res.status(200).json({
            message: 'successss',
            token,
            user,
        });

    } catch (error) {
        console.error(error); 
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}