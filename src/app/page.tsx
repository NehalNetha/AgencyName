
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import ProjectShowcase from '@/components/ProjectShowcase';

export default function Home() {
  return (
    <div className="relative bg-black">
      {/* Gradient backgrounds */}
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
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Content */}
      <div className="relative">
        <Nav />
        <section className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
          <Process />
        </section>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" />
          <Pricing />
        </section>

      </div>
    </div>
  );
}
