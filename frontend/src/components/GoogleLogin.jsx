import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleLogin = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				const result = await axios.get(`http://localhost:3000/auth/google?code=${authResult.code}`);

				const { email, name, image } = result.data.user;
				const token = result.data.token;
				const obj = { email, name, token, image };

				localStorage.setItem("user-info", JSON.stringify(obj));
				navigate("/dashboard");
			} else {
				console.log("Google Auth failed", authResult);
				throw new Error(authResult);
			}
		} catch (error) {
			console.log("Error during Google Login:", error);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
        // ux_mode: "redirect"
	});

	return (
		<div className="justify-center items-center flex flex-col h-screen">
			<button className="bg-black text-white text-center px-8 py-2 rounded-xl my-auto mx-auto cursor-pointer" onClick={googleLogin}>
				Sign in with Google
			</button>
		</div>
	);
};

export default GoogleLogin;
