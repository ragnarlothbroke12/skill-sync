import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen px-6 py-16">
      <section className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About SkillSync
        </motion.h1>

        <motion.p
          className="text-lg mb-6 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          SkillSync is a next-gen smart SaaS platform designed to revolutionize how teams are built and managed. Combining HR functionality, project management, and skill assessment into one powerful tool, SkillSync makes it easy for startups and companies to manage hybrid and remote teams with efficiency and intelligence.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-10 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <FeatureCard
            title="AI-Driven Team Matching"
            description="Automatically match employees or freelancers to projects based on skill set, availability, performance history, and interests."
          />
          <FeatureCard
            title="Dynamic Role-Based Access"
            description="Whether you’re an Admin, Project Manager, Team Member, or Freelancer – SkillSync gives you the right access and view."
          />
          <FeatureCard
            title="Real-Time Collaboration"
            description="Built-in chat, calendar sync, and notifications ensure smooth collaboration across all roles."
          />
          <FeatureCard
            title="Performance & Skill Analytics"
            description="Track how your team performs, identify skill gaps, and make informed decisions backed by data."
          />
        </motion.div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            To empower teams with the tools they need to work smarter, not harder. We believe great work happens when the right people work on the right problems at the right time — and SkillSync is built exactly for that.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-2">Vision</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            To become the standard platform for project-based team collaboration and skill management in modern, distributed workplaces.
          </p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
