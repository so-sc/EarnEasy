import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "../api/apiFetch.js";

const GoogleLogin = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				const result = await googleAuth(authResult.code); //Fetch the user data from the backend using the code received from Google
				const { email, name, picture } = result.data.user;
				console.log("Google Auth User result: ", result.data.user);

				const token = result.data.token;
				const obj = { email, name, token, picture };
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
			<button onClick={googleLogin} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer me-2 mb-2">
				<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
					<path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
				</svg>
				Sign in with Google
			</button>
		</div>
	);
};

export default GoogleLogin;
