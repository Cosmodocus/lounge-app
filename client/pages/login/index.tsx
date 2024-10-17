import axios from "axios";
import AuthLayout from "@layouts/AuthLayout";
import AuthForm from "components/AuthForm/AuthForm";
import { useState } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async ({ username, password }: { username: string; password: string }) => {
    try {
      const requestData = { username, password };
      console.log("Request Payload:", requestData); // Debugging request payload

      const response = await axios.post("http://localhost:8000/login", requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Assuming the response contains a success message
      setResponseMessage(response.data.message || "Login successful!");
      setError(""); // Clear any previous error

      // Redirect to the homepage upon successful login
      if (response.status === 200) {
        router.push('/'); // Ensure this executes on success
      }
    } catch (error: any) {
      const errorDetail = error.response?.data?.detail || error.message;
      setError(errorDetail); // Set error message from response
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-4 text-black">Login</h1>
      <AuthForm mode="login" onSubmit={handleLogin} />
      {responseMessage && <p className="text-green-600">{responseMessage}</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <p className="mt-4 text-sm text-black">
        Don&apos;t have an account?{" "}
        <button className="text-blue-500 hover:underline" onClick={() => router.push('/signup')}>
          Sign Up
        </button>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
