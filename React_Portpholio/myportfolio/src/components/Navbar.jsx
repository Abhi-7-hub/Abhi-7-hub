import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'dark:bg-gray-800/90 bg-white/90 backdrop-blur-sm py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Portfolio</a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</a>
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a>
          <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Skills</a>
          <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a>
        </div>
        
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;