import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login successful! (This is a demo)");
  };

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
          Welcome Back to SkillSync
        </h1>
        <p className="text-gray-300 text-center max-w-sm">
          Log in to manage projects, collaborate with your team, and track your progress.
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
          <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                {...register("password", { required: "Password is required" })}
                className={`w-full px-4 py-2 rounded border focus:outline-none bg-gray-700 text-white ${
                  errors.password ? "border-red-500" : "border-gray-600"
                }`}
                placeholder="Enter password"
              />
              {errors.password && <p className="text-red-400 mt-1 text-sm">{errors.password.message}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
            >
              Log In
            </motion.button>

            <p className="text-sm text-center text-gray-300">
              Don't have an account?{' '}
              <Link to="/sign-up" className="text-blue-400 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
