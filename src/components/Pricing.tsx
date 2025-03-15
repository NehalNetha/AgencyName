"use client"

const Pricing = () => {
  return (
    <div className="relative">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-white/70">Choose the plan that best fits your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Personal Plan */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20
            transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500/50
            hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/0 to-purple-500/10
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Personal</h3>
                  <p className="text-white/70">For individuals</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">$500</span>
                </div>
                <p className="text-white/70 mt-2">Turn your ideas into MVP's fast.</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full Stack Application
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Get it ready by 2 Weeks
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Maintance Support for one more week.
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                Try Now
              </button>
            </div>
          </div>

          {/* Starter Plan */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 relative
            transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500/50
            hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/0 to-purple-500/10
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm mb-5">Best Deal</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-xl font-medium text-white">Starter</h3>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">$1000</span>
                  <span className="text-white/70 ml-2"></span>
                </div>
                <p className="text-white/70 mt-2">For anyone looking to integrate anything into their business, or want to invest in their idea</p>
              </div>
              <ul className="space-y-4 mb-8">
              <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full Stack Application / mobile app
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Get it ready by 2 - 4 Weeks
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Maintance support for one month
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Request for more features
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Marketing Suggestions
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Starter Plan - remains unchanged */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 relative
            transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-500/50
            hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/0 to-purple-500/10
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">Premium</h3>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">$3000</span>
                </div>
                <p className="text-white/70 mt-2">To fully develop your idea into a business</p>
              </div>
              <ul className="space-y-4 mb-8">
              <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full Stack Application / mobile app
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Get it ready by 2 - 4 Weeks
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Maintance support for two/three month
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Request for more features
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Marketing Suggestions
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Make your idea monetizable
                </li>
                <li className="flex items-center text-white/70">
                  <svg className="h-5 w-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fully Scalable/ Custom Deployments
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing