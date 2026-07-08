export function NetworkArchitecture() {
  return (
    <section className="bg-black px-4 sm:px-8 py-12 pb-24">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row gap-6">
        
        {/* Left Explanation Bento */}
        <div className="rounded-sm border border-zinc-900 bg-zinc-950 p-8 lg:w-1/2 lg:p-12 xl:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-normal tracking-tight sm:text-4xl text-white">The Matching Layer</h2>
          <div className="mt-8 space-y-6 text-sm text-zinc-400 leading-relaxed">
            <p>
              On the supply side, we ingest SEC filings, Form ADVs, and historical deployment data to reverse-engineer the exact underwriting mandate of over 500 private credit funds. We know what they want to fund before they issue a term sheet.
            </p>
            <p>
              When our detection engine isolates a demand trigger—or when a company manually submits a mandate—the matching layer instantly correlates the specific catalyst (e.g., GovCon mobilization) with the exact subset of funds configured for that risk profile.
            </p>
            <p className="text-emerald-400 font-medium">
              We replace mass syndication with algorithmic routing. Absolute systemic isolation. Zero market leakage.
            </p>
          </div>
        </div>
        
        {/* Right Data Terminal Bento */}
        <div className="rounded-sm border border-zinc-900 bg-[#050505] p-8 lg:w-1/2 lg:p-12 xl:p-16 flex items-center justify-center font-mono text-xs sm:text-sm shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
          <div className="w-full max-w-lg space-y-2 text-zinc-500">
            <div className="flex justify-between border-b border-zinc-900 pb-2">
              <span>ALGO.ROUTING_ENGINE</span>
              <span className="text-emerald-500 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE_LISTENING
              </span>
            </div>
            
            <div className="py-4 space-y-1">
              <div className="flex justify-between">
                <span>[TRIGGER_EVENT_DETECTED]</span>
                <span className="text-white">$50M GOVCON AWARD</span>
              </div>
              <div className="flex justify-between">
                <span>&gt; PARSE_CAPITAL_REQUIREMENT()</span>
                <span className="text-zinc-300">RECEIVABLES FACTORING</span>
              </div>
              <div className="flex justify-between">
                <span>&gt; QUERY_SUPPLY_MAP(ADV_FILINGS)</span>
                <span className="text-zinc-300">YIELD: 142 FUNDS</span>
              </div>
              <div className="flex justify-between">
                <span>&gt; FILTER_MANDATE(GOVCON_ONLY)</span>
                <span className="text-zinc-300">YIELD: <span className="text-emerald-400">03 FUNDS</span></span>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-4 space-y-2">
              <div className="flex justify-between text-zinc-400">
                <span>MATCH_01</span>
                <span>FUND_ID_77A9 (GOVCON ABL)</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>MATCH_02</span>
                <span>FUND_ID_2B41 (RECEIVABLES)</span>
              </div>
              <div className="flex justify-between text-emerald-500/80">
                <span>MATCH_03</span>
                <span>FUND_ID_9C88 (SPECIAL_SIT)</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between border-t border-zinc-900 pt-2">
              <span>TRANSMISSION_STATE</span>
              <span className="text-emerald-400 animate-pulse">AWAITING_NDA_EXECUTION_</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
