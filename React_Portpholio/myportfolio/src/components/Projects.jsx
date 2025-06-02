const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and secure checkout.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://via.placeholder.com/600x400?text=E-commerce",
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "https://via.placeholder.com/600x400?text=Task+App",
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with 5-day forecast using a weather API.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://via.placeholder.com/600x400?text=Weather+App",
    links: {
      live: "#",
      code: "#"
    }
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills (this website).",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://via.placeholder.com/600x400?text=Portfolio",
    links: {
      live: "#",
      code: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 dark:bg-gray-800/50 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg dark:bg-gray-700 bg-gray-100 transition-transform hover:scale-105"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.links.live} 
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.links.code} 
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;