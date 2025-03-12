
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import ProjectShowcase from '@/components/ProjectShowcase';
import ExpandableCard from '@/components/ExpendableCard';
import { Code, Laptop, PenTool, Layout, Database, Phone, Globe } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  const serviceCards = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies. We create responsive, scalable, and performant solutions tailored to your needs.',
      icon: <Code className="text-xl" />,
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
      icon: <Phone className="text-xl" />,
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.',
      icon: <PenTool className="text-xl" />,
    },
    {
      id: 'frontend-development',
      title: 'Frontend Development',
      description: 'Modern, responsive frontends built with React, Next.js, and other cutting-edge technologies.',
      icon: <Layout className="text-xl" />,
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
      description: 'Robust and scalable backend solutions that power your applications with reliable performance.',
      icon: <Database className="text-xl" />,
    },
    {
      id: 'consulting',
      title: 'Tech Consulting',
      description: 'Strategic technology consulting to help you make informed decisions about your digital projects.',
      icon: <Laptop className="text-xl" />,
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your online visibility and drive organic traffic.',
      icon: <Globe className="text-xl" />,
    }
  ];



  return (
    <div className="relative bg-black">
      {/* Enhanced Gradient backgrounds */}
      <div className="fixed inset-0">
        <div 
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200vh]"
          style={{
            background: 'radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.4) 0%, rgba(107, 33, 168, 0.2) 35%, rgba(0, 0, 0, 0.8) 85%, rgba(0, 0, 0, 1) 100%)',
          }}
        />
        <div 
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150vh]"
          style={{
            background: 'radial-gradient(ellipse at 25% 25%, rgba(168, 85, 247, 0.15) 0%, transparent 85%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Add new linear gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(107, 33, 168, 0.05) 100%)',
          }}
        />
      </div>
    
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Content sections with enhanced gradients */}
      <div className="relative">
        <Nav />
        <section className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-black" />
          <Process />
        </section>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <ExpandableCard cards={serviceCards} />
        </section>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent" />
          <Pricing />
        </section>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/95 to-black" />
          <ProjectShowcase />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
