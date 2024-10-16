import axios from "axios";
import AuthLayout from "@layouts/AuthLayout";
import AuthForm from "components/AuthForm/AuthForm";
import { useState } from "react";
import { useRouter } from "next/router";

interface UserDetails {
    username: string;
    email: string;
}

const LoginPage = () => {
    const [responseMessage, setResponseMessage] = useState("");
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async ({ email, password }: { email: string; password: string }) => {
        try {
            const requestData = {
                email,
                password,
            };

            const response = await axios.post("http://localhost:8000/login", requestData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setResponseMessage(response.data.message);
            setUserDetails(response.data.user);
        } catch (error: any) {
            setError(error.response?.data?.detail || error.message);
        }
    };

    return (
        <AuthLayout>
            <h1 className="text-2xl font-bold mb-4 text-black">Login</h1>
            <AuthForm mode="login" onSubmit={handleLogin} />
            {responseMessage && <p className="text-green-600">{responseMessage}</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {userDetails && (
                <div>
                    <h2>User Details:</h2>
                    <p>Username: {userDetails.username}</p>
                    <p>Email: {userDetails.email}</p>
                </div>
            )}
            <p className="mt-4 text-sm text-black ">
                Don&apos;t have an account?{" "}
                <button
                    className="text-blue-500 hover:underline"
                    onClick={() => router.push('/signup')}
                >
                    Sign Up
                </button>
            </p>
        </AuthLayout>
    );
};

export default LoginPage;
