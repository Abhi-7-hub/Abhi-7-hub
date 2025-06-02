import { useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  useEffect(() => {
    const particles = [];
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    function initParticles() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particles.length = 0;
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        });
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#4f46e5';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      }

      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
    window.addEventListener('resize', initParticles);

    return () => {
      window.removeEventListener('resize', initParticles);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">John Doe</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          I build exceptional digital experiences with modern web technologies.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg mr-4 transition"
          >
            Contact Me
          </a>
          <a 
            href="#" 
            className="inline-flex items-center border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:text-white font-medium py-3 px-8 rounded-lg transition"
          >
            <FiDownload className="mr-2" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;