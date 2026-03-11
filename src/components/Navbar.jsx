
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  const socialLinks = [
    { href: "https://github.com/Anupamabramesh", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/anupama-br-19b31225b", icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  return (
    <nav className="sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h2><a href="#hero" className="text-xl font-bold text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Anupama BR
          </a></h2>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.text} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        
          <div className="hidden md:flex items-center gap-4">
            {/* Social Icons */}
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-all"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          
            <ThemeToggle />
          </div>
        
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="container">
            <div className="flex flex-col p-4 space-y-3">
              {links.map((link) => (
                <a 
                  key={link.text} 
                  href={link.href} 
                  className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <div className="flex gap-4 pt-2 border-t border-slate-100 dark:border-slate-700">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

