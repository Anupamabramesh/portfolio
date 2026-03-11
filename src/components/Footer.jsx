
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: "https://github.com/Anupamabramesh", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/anupama-br-19b31225b", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "mailto:anupamabramesh@gmail.com", icon: <FaEnvelope />, label: "Email" },
    { href: "tel:+918431918469", icon: <FaPhone />, label: "Phone" },
  ];

  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white text-slate-600 dark:text-slate-400 hover:text-white transition-all duration-300"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} <span className="text-slate-800 dark:text-white font-medium">Anupama BR</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

