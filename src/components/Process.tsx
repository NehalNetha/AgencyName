"use client"
import { useState, useEffect, useRef } from 'react'

const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(2);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Add particle state and ref
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number, opacity: number}>>([]);
  const animationRef = useRef<number | null>(null);

  // Initialize particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      setParticles(newParticles);
    };
    
    createParticles();
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + Math.sin(particle.y / 20) * 0.2,
          ...(particle.y < -5 ? {
            y: 105,
            x: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.1
          } : {})
        }))
      );
      
      animationRef.current = requestAnimationFrame(animateParticles);
    };
    
    animationRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement)?.getBoundingClientRect() ?? new DOMRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const element = document.getElementById('process-section');
    element?.addEventListener('mousemove', handleMouseMove);

    return () => {
      element?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleStep = (stepNumber: number) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };

  const steps = [
    { number: 1, title: 'Discovery & Planning', content: 'We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.' },
    { number: 2, title: 'Design & Prototyping', content: `Our designers create intuitive user interfaces and interactive prototypes that align with your brand and provide optimal user experience.` },
    { number: 3, title: 'Development', content: 'Our developers build your solution using modern technologies and best practices, ensuring scalable, maintainable, and secure code.' },
    { number: 4, title: 'Deployment', content: 'Getting the product to the market is thes single most important thing, so, we ship it fast' }
  ];

  return (
    <div id="process-section" className="relative overflow-hidden">
      {/* Add particles container */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(255, 255, 255, ${particle.opacity})`,
              transform: `translateZ(0)`,
            }}
          />
        ))}
      </div>

      {/* Existing cursor gradient light effect */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
          {/* Left section remains unchanged */}
          <div className="flex-1">
            <h2 className="text-5xl font-medium text-white mb-8">Process</h2>
            <div className="relative">
              <img src="/process.png" alt="Process Diagram" className="w-full max-w-lg" />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-lg text-white/70 mb-12">
              Business challenges are tough, but we have a proven record
              of elevating our partners to their next and best selves.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} 
                  className="border-b border-white/10 pb-6 transition-all duration-300 ease-in-out">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`transition-colors duration-300 ${
                        activeStep === step.number ? "text-red-400" : "text-white/50"
                      }`}>
                        {step.number}.
                      </span>
                      <h3 className={`text-xl transition-colors duration-300 ${
                        activeStep === step.number ? "text-red-400" : "text-white"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <button 
                      onClick={() => toggleStep(step.number)}
                      className={`transform transition-all duration-300 ease-in-out hover:scale-110 ${
                        activeStep === step.number ? "rotate-45 text-red-400" : "text-white/50 hover:text-white"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    activeStep === step.number ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <p className="text-white/70 mt-4 pl-8">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button section remains unchanged */}
          </div>
        </div>
      </div>
    </div>
)
}

export default Process