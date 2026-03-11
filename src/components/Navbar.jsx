
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

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
    { href: "https://github.com/Anupamabramesh", icon: <FaGithub /> },
    { href: "https://linkedin.com/in/anupama-br-19b31225b", icon: <FaLinkedin /> },
  ];

  return (
    <nav className="sticky top-0 bg-divine-bg-light dark:bg-divine-bg-dark shadow-md z-50">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold glow-text">ANUPAMA BR</h1>

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a key={link.text} href={link.href} className="hover:text-divine-accent transition-colors">
              {link.text}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-divine-accent transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Resume Download Button */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-divine-accent transition-colors"
            title="View Resume"
          >
            <FaFilePdf />
          </a>

          <ThemeToggle />
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4 bg-divine-bg-light dark:bg-divine-bg-dark">
          {links.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="hover:text-divine-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </a>
          ))}
          {/* Social Icons - Mobile */}
          <div className="flex gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-divine-accent transition-colors"
              >
                {social.icon}
              </a>
            ))}
            {/* Resume - Mobile */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-divine-accent transition-colors"
              title="View Resume"
            >
              <FaFilePdf />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

