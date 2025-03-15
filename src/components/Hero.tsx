const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto -mt-20 px-4">
      <h1 className="text-4xl md:text-7xl font-medium text-white leading-tight tracking-wide">
      Turn your ideas into reality <br />
      We ship fast
      </h1>
      
      <p className="text-lg text-white/80 mt-6 max-w-2xl">
        From concept to development, we develop MVP's to full scale applications.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex items-center gap-4 mt-10">
        <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors flex items-center gap-2">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <button className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
          Start demo
        </button>
      </div>

      {/* Stats Blocks Row */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-16 w-full">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-sm">+6%</span>
            <span className="text-white/70 text-sm">recent project</span>
          </div>
          <div className="mt-1">
            <span className="text-4xl font-semibold text-white">47%</span>
            <p className="text-white/60 text-sm">increase level</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">network service</span>
            <span className="text-white/50 text-xs">Mar 2024</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span className="text-white/80">meetings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero