import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 bg-divine-bg-light dark:bg-divine-bg-dark shadow-md z-50">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold glow-text">ANUPAMA BR</h1>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.text} href={link.href} className="hover:text-divine-accent transition-colors">
              {link.text}
            </a>
          ))}
        </div>
        <ThemeToggle />
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4 bg-divine-bg-light dark:bg-divine-bg-dark">
          {links.map((link) => (
            <a key={link.text} href={link.href} className="hover:text-divine-accent transition-colors" onClick={() => setIsOpen(false)}>
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}