import { useCallback, useEffect, useRef } from 'react';
import '../styles/ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 100 });

  // Particle class
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update(canvas, ctx) {
      // Boundary checking
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }

      // Mouse interaction
      let dx = mouse.current.x - this.x;
      let dy = mouse.current.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.current.radius + this.size) {
        if (mouse.current.x < this.x && this.x < canvas.width - this.size * 10) {
          this.x += 10;
        }
        if (mouse.current.x > this.x && this.x > this.size * 10) {
          this.x -= 10;
        }
        if (mouse.current.y < this.y && this.y < canvas.height - this.size * 10) {
          this.y += 10;
        }
        if (mouse.current.y > this.y && this.y > this.size * 10) {
          this.y -= 10;
        }
      }

      // Update position
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw(ctx);
    }
  }

  // Initialize particles
  const init = useCallback(() => {
    particlesArray.current = [];
    const canvas = canvasRef.current;
    const numberOfParticles = (canvas.width * canvas.height) / 9000;
    
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (canvas.width - size * 2) + size;
      let y = Math.random() * (canvas.height - size * 2) + size;
      let directionX = (Math.random() * 0.4) - 0.2;
      let directionY = (Math.random() * 0.4) - 0.2;
      let color = 'rgba(100, 181, 246, 0.5)';

      particlesArray.current.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesArray.current.forEach(particle => {
      particle.update(canvas, ctx);
    });

    // Draw connecting lines
    for (let i = 0; i < particlesArray.current.length; i++) {
      for (let j = i; j < particlesArray.current.length; j++) {
        let distance = ((particlesArray.current[i].x - particlesArray.current[j].x) * 
                       (particlesArray.current[i].x - particlesArray.current[j].x)) +
                       ((particlesArray.current[i].y - particlesArray.current[j].y) * 
                       (particlesArray.current[i].y - particlesArray.current[j].y));
        
        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
          ctx.strokeStyle = 'rgba(100, 181, 246, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray.current[i].x, particlesArray.current[i].y);
          ctx.lineTo(particlesArray.current[j].x, particlesArray.current[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }, []);

  // Handle window resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  }, [init]);

  // Mouse move handler
  const handleMouseMove = useCallback((event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    mouse.current.x = event.clientX - rect.left;
    mouse.current.y = event.clientY - rect.top;
  }, []);

  // Mouse out handler
  const handleMouseOut = useCallback(() => {
    mouse.current.x = null;
    mouse.current.y = null;
  }, []);

  // Set up canvas and event listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    init();

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseout', handleMouseOut);
    };
  }, [init, animate, handleResize, handleMouseMove, handleMouseOut]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
    />
  );
};

export default ParticleBackground;