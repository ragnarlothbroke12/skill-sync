import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Sign up successful! (Just a demo)");
  };

  const password = watch("password", "");

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      {/* Left Side */}
      <motion.div 
        className="flex flex-col items-center justify-center p-10 bg-gray-900"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://stories.freepiklabs.com/storage/30959/Remote-Team-01.svg"
          alt="SkillSync Logo"
          className="w-60 mb-6 drop-shadow-lg"
        />
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to SkillSync
        </h1>
        <p className="text-gray-300 text-center max-w-sm">
          Create your account to join smart projects, collaborate with teams, and unlock AI-based project assignment.
        </p>
      </motion.div>

      {/* Right Side Form */}
      <motion.div 
        className="flex items-center justify-center p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-2 rounded border focus:outline-none bg-gray-700 text-white ${
                  errors.name ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-400 mt-1 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-2 rounded border focus:outline-none bg-gray-700 text-white ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="your@example.com"
              />
              {errors.email && <p className="text-red-400 mt-1 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required", minLength: 6 })}
                className={`w-full px-4 py-2 rounded border focus:outline-none bg-gray-700 text-white ${
                  errors.password ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-400 mt-1 text-sm">
                  {errors.password.type === "minLength"
                    ? "Password must be at least 6 characters"
                    : errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => value === password || "Passwords do not match",
                })}
                className={`w-full px-4 py-2 rounded border focus:outline-none bg-gray-700 text-white ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 mt-1 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
            >
              Sign Up
            </motion.button>

            <p className="text-sm text-center text-gray-300">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-blue-400 hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
