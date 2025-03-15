"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  expandedContent?: string;
}

interface ExpandableCardProps {
  cards: CardData[];
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ cards }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number; opacity: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Initialize particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.5 + 0.1,
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
            opacity: Math.random() * 0.5 + 0.1,
          } : {}),
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

  // Debounce mouse move handler
  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleMouseMove = useCallback(
    debounce((e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }, 16),
    []
  );

  useEffect(() => {
    const element = containerRef.current;
    element?.addEventListener('mousemove', handleMouseMove);
    return () => {
      element?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  // Define a smoother transition for all animations
  const smoothTransition = {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1], // Cubic bezier curve for smoother motion without bounce
  };

  const handleCardExpand = (index: number) => {
    if (expandedIndex === index || isTransitioning) return;
    setIsTransitioning(true);
    setExpandedIndex(index);
    
    // Add a timeout to ensure the transition state is properly managed
    setTimeout(() => {
      setIsTransitioning(false);
    }, 450); // Slightly longer than animation duration to ensure completion
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardExpand(index);
    }
  };

  const getGradient = (index: number) => {
    const gradients = [
      'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(91, 33, 182, 0.25))',
      'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(29, 78, 216, 0.25))',
      'linear-gradient(135deg, rgba(52, 211, 153, 0.4), rgba(6, 95, 70, 0.25))',
      'linear-gradient(135deg, rgba(251, 146, 60, 0.4), rgba(194, 65, 12, 0.25))',
      'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(157, 23, 77, 0.25))',
      'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(107, 33, 168, 0.25))',
      'linear-gradient(135deg, rgba(45, 212, 191, 0.4), rgba(17, 94, 89, 0.25))',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="relative py-16 md:py-32" id="services-section" ref={containerRef}>
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, rgba(107, 33, 168, 0.1) 25%, transparent 70%)',
          }}
        />
        <div
          className="absolute w-full h-full opacity-60"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))',
          }}
        />
        
        {/* Animated particles background */}
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
      </div>
      
      {/* Cursor gradient light effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[rgba(168,85,247,0.95)] via-[rgba(168,85,247,0.7)] to-[rgba(168,85,247,0.3)]">
              Services
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Transforming your ideas into digital reality with our comprehensive range of services
            </p>
          </motion.div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-8 md:justify-center scrollbar-hide">
          {cards.map((card, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={card.id}
                className={`flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ease-out relative backdrop-blur-xl border border-white/10 ${
                  isExpanded ? 'w-[90vw] md:w-96' : 'w-24'
                } h-[32rem] group`}
                style={{
                  background: isExpanded
                    ? getGradient(index)
                    : 'rgba(255, 255, 255, 0.03)',
                  backgroundImage: isExpanded
                    ? `${getGradient(index)}, url('/noise.png')`
                    : 'url("/noise.png")',
                  backgroundBlendMode: 'overlay',
                }}
                animate={{
                  width: isExpanded ? '24rem' : '6rem', // Remove array to prevent bounce
                  boxShadow: isExpanded
                    ? '0 0 50px rgba(168, 85, 247, 0.2)'
                    : '0 0 0 rgba(168, 85, 247, 0)',
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth motion
                }}
                // Remove onAnimationComplete and use setTimeout instead
                onClick={() => handleCardExpand(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                aria-label={`Expand ${card.title}`}
                whileHover={{ 
                  scale: 1.02, 
                  transition: { 
                    duration: 0.2, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  } 
                }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Particle effect */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  <div className="absolute w-full h-full bg-[url('/particles.svg')] bg-repeat opacity-10" />
                </div>
                
                <div className="h-full flex flex-col relative">
                  {/* Vertical Title - Only shown when collapsed */}
                  <AnimatePresence mode="wait">
                    {!isExpanded && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.2, 
                          ease: [0.25, 0.1, 0.25, 1] 
                        }}
                      >
                        <div className="vertical-text transform -rotate-180 whitespace-nowrap text-lg font-medium text-white/90 tracking-wider">
                          {card.title}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expanded Content - Only show when fully expanded and not transitioning */}
                  <AnimatePresence mode="wait">
                    {isExpanded && !isTransitioning && (
                      <motion.div
                        className="absolute inset-0 p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          ease: [0.25, 0.1, 0.25, 1] 
                        }}
                      >
                        <div className="h-full flex flex-col">
                          <motion.div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-white/10 mb-6 backdrop-blur-xl border border-white/5 relative overflow-hidden group-hover:border-white/20 transition-colors"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }} // Smooth icon animation
                            whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.2, ease: 'easeInOut' } }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                            <div className="text-2xl">{card.icon}</div>
                          </motion.div>
                          
                          <motion.h3
                            className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                          >
                            {card.title}
                          </motion.h3>
                          
                          <motion.p
                            className="text-white/80 leading-relaxed text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.15 }}
                          >
                            {card.description}
                          </motion.p>
                          
                          {card.expandedContent && (
                            <motion.div
                              className="mt-auto pt-6 border-t border-white/10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
                            >
                              <p className="text-white/70">{card.expandedContent}</p>
                            </motion.div>
                          )}
                          
                          <motion.button
                            className="mt-auto self-start px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm flex items-center gap-2 hover:bg-white/20 transition-colors"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.25 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } }}
                          >
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;