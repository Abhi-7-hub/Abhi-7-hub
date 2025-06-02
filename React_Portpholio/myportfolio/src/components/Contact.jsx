import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 dark:bg-gray-900 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-8">
              Feel free to reach out to me for any questions or opportunities. I'm always open to 
              discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMail className="text-indigo-600 dark:text-indigo-400 mr-4 text-xl" />
                <span>john@example.com</span>
              </div>
              <div className="flex items-center">
                <FiLinkedin className="text-indigo-600 dark:text-indigo-400 mr-4 text-xl" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/johndoe
                </a>
              </div>
              <div className="flex items-center">
                <FiGithub className="text-indigo-600 dark:text-indigo-400 mr-4 text-xl" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/johndoe
                </a>
              </div>
              <div className="flex items-center">
                <FiTwitter className="text-indigo-600 dark:text-indigo-400 mr-4 text-xl" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  twitter.com/johndoe
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;