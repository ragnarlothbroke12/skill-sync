import {Button, Navbar} from "flowbite-react";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar className="border-b-2 border-gray-200 bg-gray-200 dark:bg-gray-200 dark:border-gray-200">
    <div className="flex self-center items-center justify-between w-full md:order-2"> 
       <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold
        dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white">Skill</span>
            Sync
       </Link>
       <div className="flex items-center space-x-8">
       <Link to='/' className="font-bold " pill='true'>Home</Link>
       <Link to='/about' className="font-bold">About</Link>
       </div>
       <div className="flex items-center space-x-8">
        <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
           <FaMoon />
        </Button>
        <Link to='/sign-in'>
         <Button color="purple" outline pill='true'> Sign In</Button>   
        </Link>
        </div>
        </div>
       </Navbar>
  );
}
