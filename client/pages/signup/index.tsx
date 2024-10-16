import axios from "axios";
import AuthLayout from "@layouts/AuthLayout";
import { useState } from "react";
import { useRouter } from "next/router";

// Define the shape of the user object
interface UserDetails {
    username: string;
    fullname: string;
    email: string;
    created: string;  // assuming it's a string format of datetime
}

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [error, setError] = useState("");
    const router = useRouter();


const handleRegister = async () => {
    try {
        console.log("Attempting to register user...");

        const requestData = { username, fullname, email, password };
        const response = await axios.post("http://localhost:8000/register", requestData);

        console.log("Registration Response:", response.data);
        setResponseMessage(response.data.message || "Registration successful!");
        setUserDetails(response.data.user);
    } catch (error: any) {
        console.error("Registration Error:", error.response?.data?.detail || error.message);
        setError(error.response?.data?.detail || error.message);
    }
};



    return (
        <AuthLayout>
            <h1 className="text-2xl text-black font-bold mb-4">Sign Up</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full text-black"
            />
            <input
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full text-black"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full text-black"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full text-black"
            />
            <button
                onClick={handleRegister}
                className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200"
            >
                Register
            </button>

            {/* Display response message or error */}
            {responseMessage && <p className="text-green-600">{responseMessage}</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {/* Optionally display the user details */}
            {userDetails && (
                <div>
                    <h2>User Details:</h2>
                    <p>Username: {userDetails.username}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>Full Name: {userDetails.fullname}</p>
                    <p>Created At: {new Date(userDetails.created).toLocaleString()}</p>
                </div>
            )}
            <p className="mt-4 text-sm text-black ">
                Already have an account?{" "}
                <button
                    className="text-blue-500 hover:underline"
                    onClick={() => router.push('/login')}
                >
                    Login
                </button>
            </p>
        </AuthLayout>
    );
};

export default SignupPage;
