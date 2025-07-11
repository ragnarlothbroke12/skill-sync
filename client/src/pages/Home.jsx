import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Smart Team Management with <span className="text-blue-600">SkillSync</span>
          </h1>
          <p className="text-lg mb-6">
            An AI-powered SaaS platform that combines HR, project management, and skill assessment for dynamic teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/get-started" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Get Started
            </Link>
            <Link to="/features" className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-600 hover:text-white">
              View Features
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://stories.freepiklabs.com/storage/30959/Remote-Team-01.svg"
            alt="Teamwork"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </section>

      {/* Project Explanation Section */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">What is SkillSync?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          SkillSync is a smart SaaS platform where companies and startups can build teams and assign employees or freelancers to projects using AI-driven logic. Based on a user's skills, availability, interests, and performance history, SkillSync helps ensure the right people are assigned to the right tasks. This hybrid tool merges the capabilities of HR systems, project management tools, and skill assessment platforms, making it perfect for remote, hybrid, and agile teams.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Whether you're managing internal teams or collaborating with external freelancers, SkillSync provides dynamic dashboards, smart assignment suggestions, real-time communication tools, and performance tracking features to optimize your workflow and team productivity.
        </p>
      </section>

      {/* Core Features */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Core Features</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f, i) => (
              <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build smart teams?</h2>
        <p className="mb-6 text-lg">Start assigning people to the right projects with AI assistance.</p>
        <Link to="/sign-up" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100">
          Create Your Account
        </Link>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "🔐",
    title: "Role-based Access",
    desc: "Admins, managers, team members, and freelancers with secure JWT auth."
  },
  {
    icon: "📋",
    title: "Smart Profiles",
    desc: "Auto-tagged skills, interests, and tools from real usage and input."
  },
  {
    icon: "🤖",
    title: "AI Matching Engine",
    desc: "Assign people to projects based on skill fit, availability, and history."
  },
  {
    icon: "🔁",
    title: "Assignment Workflow",
    desc: "Suggest, approve, notify, and feedback users on each project cycle."
  },
  {
    icon: "📊",
    title: "Performance Metrics",
    desc: "Track and review teammate contributions project-wise."
  },
  {
    icon: "💬",
    title: "Real-time Chat",
    desc: "Socket.io powered project and private messaging system."
  }
];

function Feature({ icon, title, desc }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-left">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
    </div>
  );
}