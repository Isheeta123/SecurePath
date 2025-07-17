import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Lock, Activity, Linkedin, Twitter, Github
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-inter">
      {/* Header */}
      <header className="bg-gray-900 shadow-md py-4 px-6 md:px-12 flex justify-between items-center fixed w-full z-10 top-0">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="text-blue-500 w-6 h-6" />
          <span className="text-xl font-bold text-white">Secure Path</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</Link>
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</a>
          <a href="#team" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Team</a>
        </nav>
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-5 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors duration-300 shadow-lg">
              Register
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-gray-950 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            Secure Your <br /> Digital Future
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Advanced cybersecurity solutions powered by AI to protect your organization from evolving threats.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link to="/login">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg text-lg">
                Login
              </button>
            </Link>
            <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors duration-300 shadow-lg text-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/275/401/large_2x/cyber-security-protection-technology-background-vector.jpg"
            alt="Cybersecurity Dashboard"
            className="rounded-lg shadow-2xl max-w-full h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1a202c/e2e8f0?text=Image+Not+Found"; }}
          />
        </div>
      </section>

      {/* Advanced Security Features */}
      <section className="py-20 px-6 md:px-12 bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Advanced Security Features</h2>
        <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Comprehensive protection for the modern enterprise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<ShieldCheck className="w-12 h-12 text-blue-500" />}
            title="AI Threat Detection"
            description="Machine learning algorithms that proactively identify and neutralize threats in real-time."
          />
          <FeatureCard
            icon={<Lock className="w-12 h-12 text-blue-500" />}
            title="Zero Trust Security"
            description="Never trust, always verify. A modern network security architecture."
          />
          <FeatureCard
            icon={<Activity className="w-12 h-12 text-blue-500" />}
            title="Real-time Analytics"
            description="Aggregated dashboards with actionable security insights."
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">About Secure Path</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          We're a cybersecurity company dedicated to protecting organizations from the evolving threat landscape.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatCard value="500+" label="Protected Organizations" />
          <StatCard value="99.9%" label="Threat Detection Rate" />
          <StatCard value="24/7" label="Security Monitoring" />
          <StatCard value="10M+" label="Threats Blocked" />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 md:px-12 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Our Expert Team</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Security professionals with decades of combined experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TeamMemberCard
            image="https://placehold.co/150x150/0f172a/e2e8f0?text=Alex+Chen"
            name="Alex Chen"
            title="Chief Security Officer"
            description="15+ years in cybersecurity and threat intelligence."
          />
          <TeamMemberCard
            image="https://placehold.co/150x150/0f172a/e2e8f0?text=Sarah+Johnson"
            name="Sarah Johnson"
            title="Lead Security Architect"
            description="Expert in Zero-Trust architecture and cloud security."
          />
          <TeamMemberCard
            image="https://placehold.co/150x150/0f172a/e2e8f0?text=Mike+Rodriguez"
            name="Mike Rodriguez"
            title="Threat Intelligence Director"
            description="Specialized in AI-powered threat detection systems."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Future?</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Join hundreds of organizations that trust Secure Path to protect their digital assets.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/login">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg text-lg">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors duration-300 shadow-lg text-lg">
              Start Free Trial
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 md:px-12 text-gray-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="text-blue-500 w-6 h-6" />
              <span className="text-xl font-bold text-white">Secure Path</span>
            </div>
            <p className="text-sm">
              Protecting your digital future with innovative, AI-driven security solutions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400">AI Threat Detection</Link></li>
              <li><Link to="/" className="hover:text-blue-400">Zero Trust Platform</Link></li>
              <li><Link to="/" className="hover:text-blue-400">GRC Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-400"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-400"><Github className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-12">
          &copy; 2024 Secure Path. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Reusable Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-700 p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
    <div className="text-5xl font-bold text-blue-400 mb-2">{value}</div>
    <div className="text-lg text-gray-300">{label}</div>
  </div>
);

const TeamMemberCard = ({ image, name, title, description }) => (
  <div className="bg-gray-700 p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-blue-500"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/0f172a/e2e8f0?text=User"; }}
    />
    <h3 className="text-2xl font-semibold text-white mb-2">{name}</h3>
    <p className="text-blue-400 mb-4">{title}</p>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default landingPage;
