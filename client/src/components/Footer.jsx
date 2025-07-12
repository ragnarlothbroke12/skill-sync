import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-20 border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">About SkillSync</h2>
          <p className="text-sm">
            SkillSync is a smart SaaS platform that helps companies assign the right people to the right projects using AI-based skill matching.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/sign-in" className="hover:text-white transition">Login</a></li>
            <li><a href="/sign-up" className="hover:text-white transition">Sign Up</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="mailto:your@email.com" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SkillSync. All rights reserved.
      </div>
    </footer>
  );
}
