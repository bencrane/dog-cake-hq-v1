"use client"

import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="manifesto" className="flex min-h-[90vh] flex-col justify-end border-b border-zinc-900 bg-black pt-24 px-4 sm:px-8">
      <div className="mx-auto w-full max-w-7xl flex-grow flex flex-col lg:flex-row gap-6 pb-12">
        {/* Left Manifesto Section (Bento Box) */}
        <div className="flex flex-col justify-center rounded-sm border border-zinc-900 bg-zinc-950 p-8 lg:w-2/3 lg:p-16">
          <div className="mb-12 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-emerald-500/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            [ CAPITAL EXPANSION // ROUTING PROTOCOL ]
          </div>
          
          <h1 className="text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-white">
            The middle market is starved for liquidity, yet drowning in fragmented capital options.
          </h1>
          
          <div className="mt-8 max-w-2xl text-base text-zinc-400 sm:text-lg sm:leading-relaxed space-y-6">
            <p>
              Capital Expansion operates a continuous, two-sided routing engine: mathematically mapping the exact deployment appetites of non-bank funds, and automatically detecting the specific catalyst events that require their capital.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button 
              onClick={() => document.getElementById("mandate")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex h-12 items-center justify-between border border-emerald-500 bg-emerald-500/10 px-6 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500 hover:text-black focus:outline-none sm:w-72"
            >
              INITIALIZE ROUTING PROTOCOL
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Abstract Visual Section */}
        <div className="relative flex flex-col justify-end rounded-sm border border-zinc-900 bg-[#050505] overflow-hidden lg:w-1/3 min-h-[400px]">
          {/* Abstract Data Routing Visual */}
          <div className="absolute inset-0 opacity-50">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#3f3f46" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Routing Lines (Dense fill) */}
              <path d="M 0 40 L 80 40 L 120 80 L 800 80" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 4s ease-out forwards', animationDelay: '0.1s' }} />
              <path d="M 200 0 L 200 120 L 240 160 L 800 160" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 3.5s ease-out forwards', animationDelay: '0.4s' }} />
              <path d="M 0 240 L 160 240 L 200 280 L 800 280" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.7" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 3s ease-out forwards', animationDelay: '0.8s' }} />
              <path d="M 120 0 L 120 160 L 80 200 L 0 200" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 2.5s ease-out forwards', animationDelay: '1.2s' }} />
              <path d="M 40 800 L 40 360 L 80 320 L 800 320" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 4.5s ease-out forwards', animationDelay: '0.5s' }} />
              <path d="M 0 400 L 280 400 L 320 440 L 800 440" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 3s ease-out forwards', animationDelay: '1.5s' }} />
              <path d="M 240 800 L 240 520 L 280 480 L 800 480" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 4s ease-out forwards', animationDelay: '2.0s' }} />
              <path d="M 0 600 L 360 600 L 400 560 L 800 560" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 3.2s ease-out forwards', animationDelay: '1.0s' }} />
              <path d="M 160 800 L 160 680 L 120 640 L 0 640" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 5s ease-out forwards', animationDelay: '2.5s' }} />
              <path d="M 0 760 L 480 760 L 520 720 L 800 720" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 3.8s ease-out forwards', animationDelay: '1.8s' }} />
              <path d="M 320 800 L 320 640 L 360 600 L 800 600" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-line 4.2s ease-out forwards', animationDelay: '2.2s' }} />

              {/* Nodes */}
              <g style={{ opacity: 0, animation: 'fade-in 1s ease-out forwards', animationDelay: '1.0s' }}>
                <circle cx="80" cy="40" r="3" fill="#10b981" fillOpacity="0.4" />
                <circle cx="120" cy="80" r="3" fill="#10b981" fillOpacity="0.4" />
                <circle cx="200" cy="120" r="3" fill="#10b981" />
                <circle cx="240" cy="160" r="3" fill="#10b981" />
              </g>
              <g style={{ opacity: 0, animation: 'fade-in 1s ease-out forwards', animationDelay: '2.0s' }}>
                <circle cx="160" cy="240" r="3" fill="#10b981" />
                <circle cx="200" cy="280" r="3" fill="#10b981" />
                <circle cx="120" cy="160" r="3" fill="#10b981" fillOpacity="0.6" />
                <circle cx="80" cy="200" r="3" fill="#10b981" fillOpacity="0.6" />
              </g>
              <g style={{ opacity: 0, animation: 'fade-in 1s ease-out forwards', animationDelay: '2.8s' }}>
                <circle cx="40" cy="360" r="3" fill="#10b981" />
                <circle cx="80" cy="320" r="3" fill="#10b981" />
                <circle cx="280" cy="400" r="3" fill="#10b981" />
                <circle cx="320" cy="440" r="3" fill="#10b981" />
              </g>
              <g style={{ opacity: 0, animation: 'fade-in 1s ease-out forwards', animationDelay: '3.6s' }}>
                <circle cx="240" cy="520" r="2" fill="#10b981" fillOpacity="0.5" />
                <circle cx="280" cy="480" r="2" fill="#10b981" fillOpacity="0.5" />
                <circle cx="360" cy="600" r="2" fill="#10b981" fillOpacity="0.7" />
                <circle cx="400" cy="560" r="2" fill="#10b981" fillOpacity="0.7" />
              </g>
              <g style={{ opacity: 0, animation: 'fade-in 1s ease-out forwards', animationDelay: '4.5s' }}>
                <circle cx="160" cy="680" r="2" fill="#10b981" fillOpacity="0.3" />
                <circle cx="120" cy="640" r="2" fill="#10b981" fillOpacity="0.3" />
                <circle cx="480" cy="760" r="2" fill="#10b981" fillOpacity="0.4" />
                <circle cx="520" cy="720" r="2" fill="#10b981" fillOpacity="0.4" />
                <circle cx="320" cy="640" r="2" fill="#10b981" fillOpacity="0.4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
