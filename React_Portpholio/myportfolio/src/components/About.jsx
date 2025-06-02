const About = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-800/50 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-lg">
              <img 
                src="https://via.placeholder.com/400x400" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-lg mb-6">
              I'm a passionate Full Stack Developer with 5+ years of experience building web applications. 
              I specialize in JavaScript technologies across the whole stack (React.js, Node.js, Express, MongoDB).
            </p>
            <p className="text-lg mb-6">
              My journey in web development started when I was in college and I've been in love with coding 
              ever since. I enjoy creating beautiful, functional, and user-friendly applications that solve 
              real-world problems.
            </p>
            <p className="text-lg mb-8">
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source 
              projects. I believe in continuous learning and staying updated with the latest technologies.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p>John Doe</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p>john@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Experience:</h4>
                <p>5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold">From:</h4>
                <p>San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold">Freelance:</h4>
                <p>Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;