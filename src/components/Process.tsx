"use client"
import { useState, useEffect } from 'react'

const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(2);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    { number: 1, title: 'Research', content: 'Understanding your business needs and market requirements.' },
    { number: 2, title: 'Concept Design', content: `Once the wireframe get approved at step 1, we'll build prototype design to visually the idea` },
    { number: 3, title: 'Implementation', content: 'Bringing the approved design to life with clean, efficient code.' },
    { number: 4, title: 'Testing', content: 'Rigorous testing to ensure quality and performance.' }
  ];

  return (
    <div id="process-section" className="relative overflow-hidden">
      {/* Cursor gradient light effect */}
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
              <img src="/process-diagram.svg" alt="Process Diagram" className="w-full max-w-lg" />
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