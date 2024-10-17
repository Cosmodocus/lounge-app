import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface AuthFormProps {
  mode: "login" | "signup";
  onSubmit: (data: any) => Promise<void>;
}

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  fullname: z.string().optional(),
  email: z.string().email("Invalid email").min(1, "Email is required").optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <input
            type="text"
            placeholder="Username"
            {...field}
            className={`border border-gray-300 rounded-md p-2 w-full text-black ${errors.username ? "border-red-500" : ""}`}
          />
        )}
      />
      {errors.username && <p className="text-red-500">{errors.username.message}</p>}

      {mode === "signup" && (
        <>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="email"
                placeholder="Email"
                {...field}
                className={`border border-gray-300 rounded-md p-2 w-full text-black ${errors.email ? "border-red-500" : ""}`}
              />
            )}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </>
      )}

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <input
            type="password"
            placeholder="Password"
            {...field}
            className={`border border-gray-300 rounded-md p-2 w-full text-black ${errors.password ? "border-red-500" : ""}`}
          />
        )}
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200"
      >
        {mode === "signup" ? "Register" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
