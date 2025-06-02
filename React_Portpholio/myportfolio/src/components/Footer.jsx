import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-8 dark:bg-gray-800 bg-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiLinkedin size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiTwitter size={20} />
            </a>
            <a 
              href="mailto:john@example.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;