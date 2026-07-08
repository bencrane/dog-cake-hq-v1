"use client"

import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex min-h-[90vh] flex-col justify-end border-b border-zinc-900 bg-black pt-24 px-4 sm:px-8">
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

        {/* Right Product Index Section (Bento Box) */}
        <div className="flex flex-col justify-end rounded-sm border border-zinc-900 bg-[#050505] p-8 lg:w-1/3">
          <div className="mb-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
            INDEXED FINANCIAL PRODUCTS
          </div>
          <ul className="flex flex-col gap-y-4 font-mono text-xs sm:text-sm text-zinc-300">
            <li className="flex items-center gap-4 border-b border-zinc-900 pb-3">
              <span className="text-emerald-500/50">01</span>
              <span>Asset-Backed Facilities (ABL)</span>
            </li>
            <li className="flex items-center gap-4 border-b border-zinc-900 pb-3">
              <span className="text-emerald-500/50">02</span>
              <span>ARR / Recurring Revenue Lines</span>
            </li>
            <li className="flex items-center gap-4 border-b border-zinc-900 pb-3">
              <span className="text-emerald-500/50">03</span>
              <span>Equipment Sale-Leasebacks</span>
            </li>
            <li className="flex items-center gap-4 border-b border-zinc-900 pb-3">
              <span className="text-emerald-500/50">04</span>
              <span>Mezzanine & Subordinated Debt</span>
            </li>
            <li className="flex items-center gap-4 border-b border-zinc-900 pb-3">
              <span className="text-emerald-500/50">05</span>
              <span>Unitranche Facilities</span>
            </li>
            <li className="flex items-center gap-4 border-b border-zinc-900 pb-3">
              <span className="text-emerald-500/50">06</span>
              <span>Bridge-to-Acquisition</span>
            </li>
            <li className="flex items-center gap-4 border-b border-zinc-900 pb-3">
              <span className="text-emerald-500/50">07</span>
              <span>GovCon Receivables / PO Financing</span>
            </li>
            <li className="flex items-center gap-4 border-b border-zinc-900 pb-3">
              <span className="text-emerald-500/50">08</span>
              <span>DIP Financing</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
