const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Express', level: 70 },
  { name: 'MongoDB', level: 65 },
  { name: 'Git', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
];

const techStack = [
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'VS Code', icon: 'vscode' },
  { name: 'Figma', icon: 'figma' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 dark:bg-gray-900 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
        </h2>
        
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-32"
              >
                <div className="text-4xl mb-3">
                  {/* In a real app, you would use actual icons here */}
                  <span className="text-gray-500">{tech.icon}</span>
                </div>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;