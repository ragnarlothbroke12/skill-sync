import { useState,} from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, } from "framer-motion";
import { TextInput, Alert, Spinner } from "flowbite-react";

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); 
  const navigate = useNavigate();

   const handleChange = (e)=>{
    setFormData({
      ...formData,[e.target.id]: e.target.value
    });
  };

 // console.log(formData);
  

  const handleSubmit = async (e)=> {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill out all field.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      });
    const data = await res.json();
    if(data.success === false){
      return setErrorMessage(data.message);
    }
    setLoading(false);
    if (res.ok){
      navigate('/sign-in');
    }
   } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
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

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <TextInput type="text" placeholder="Username" id="username" onChange={handleChange}/>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <TextInput type="text" placeholder="name@company.com" id="email" onChange={handleChange}/>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <TextInput type="password" placeholder="Password" id="password" onChange={handleChange}/>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
              disabled={loading}
            >{
            loading ? (
              <>
              <Spinner size='sm'/> 
              <span className="pl-3">Loading...</span>
              </>
            ) : 'Sign Up'
            }     
            </motion.button>
          </form>
            <p className="text-sm mt-2 text-center text-gray-300">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-blue-400 hover:underline">
                Log In
              </Link>
            </p>
        
        </div>
        {
          errorMessage && (
            <Alert className="mt-5" color='failure'>
              {errorMessage}
            </Alert>
          )
        }
      </motion.div>
    </div>
  );
}
