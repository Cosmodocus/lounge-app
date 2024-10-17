import axios from "axios";
import AuthLayout from "@layouts/AuthLayout";
import AuthForm from "components/AuthForm/AuthForm";
import { useState } from "react";
import { useRouter } from "next/router";

interface UserDetails {
  username: string;
  fullname: string;
  email: string;
  created: string;
}

const SignupPage = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (formData: { username: string; fullname: string; email: string; password: string }) => {
    try {
      const response = await axios.post("http://localhost:8000/register", formData);
      setResponseMessage(response.data.message || "Registration successful!");
      setUserDetails(response.data.user);
    } catch (error: any) {
      setError(error.response?.data?.detail || error.message);
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-4 text-black">Sign Up</h1>
      <AuthForm mode="signup" onSubmit={handleRegister} />
      {responseMessage && <p className="text-green-600">{responseMessage}</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <p className="mt-4 text-sm text-black">
        Already have an account?{" "}
        <button
          className="text-blue-500 hover:underline"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </p>
    </AuthLayout>
  );
};

export default SignupPage;
