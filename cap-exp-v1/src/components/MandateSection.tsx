export function MandateSection() {
  return (
    <section id="mandate" className="bg-black px-4 sm:px-8 py-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-6">
        
        {/* Header Bento Box */}
        <div className="rounded-sm border border-zinc-900 bg-[#050505] p-8 lg:p-12">
          <h2 className="text-2xl font-normal tracking-tight text-white">Demand Detection Engine</h2>
          <p className="mt-4 max-w-3xl text-sm text-zinc-400 leading-relaxed">
            We continuously monitor public and proprietary datasets for leading indicators of capital distress or sudden growth. By isolating middle-market entities experiencing critical catalyst events, we route them instantly to the specialty capital providers best equipped to underwrite the transaction before a mandate ever hits the broader market.
          </p>
        </div>
        
        {/* Lower Split Bento Boxes */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Triggers Tracked */}
          <div className="rounded-sm border border-zinc-900 bg-[#050505] p-8 lg:w-2/3 lg:p-12">
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-500/80 mb-8">Data Ingestion: Detected Catalyst Triggers</h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col">
                <span className="font-medium text-white border-l-2 border-emerald-500 pl-3">GovCon Award Mobilization</span>
                <span className="text-zinc-500 mt-2 pl-3 text-sm">Real-time ingestion of federal contract award databases indicating sudden capital requirements for mobilization.</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-white border-l-2 border-emerald-500 pl-3">UCC Filings & Lien Data</span>
                <span className="text-zinc-500 mt-2 pl-3 text-sm">Detecting when existing senior debt facilities are maxed out, approaching maturity, or entering technical default.</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-white border-l-2 border-emerald-500 pl-3">SBA Pipeline Bottlenecks</span>
                <span className="text-zinc-500 mt-2 pl-3 text-sm">Identifying middle-market entities with approved but undisbursed capital facing immediate liquidity shortfalls.</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-white border-l-2 border-emerald-500 pl-3">Post-M&A Integration Velocity</span>
                <span className="text-zinc-500 mt-2 pl-3 text-sm">Tracking post-acquisition signals that historically require sudden structural capital injections or bridge financing.</span>
              </div>
            </div>
          </div>

          {/* Detection Parameters */}
          <div className="rounded-sm border border-zinc-900 bg-zinc-950 p-8 lg:w-1/3 lg:p-12">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8">Detection Parameters</h3>
            <div className="space-y-6">
              <div className="border-b border-zinc-900 pb-4">
                <div className="font-mono text-xs text-zinc-500">TARGET EBITDA</div>
                <div className="mt-1 text-2xl font-medium tracking-tight text-white">$10M - $50M+</div>
              </div>
              <div className="border-b border-zinc-900 pb-4">
                <div className="font-mono text-xs text-zinc-500">CAPITAL SHORTFALL (EST.)</div>
                <div className="mt-1 text-2xl font-medium tracking-tight text-emerald-400">$5M - $150M</div>
              </div>
              <div className="border-b border-zinc-900 pb-4">
                <div className="font-mono text-xs text-zinc-500">SIGNAL LATENCY</div>
                <div className="mt-1 text-2xl font-medium tracking-tight text-white">&lt; 24 Hours</div>
              </div>
              <div>
                <div className="font-mono text-xs text-zinc-500">PIPELINE VOLUME</div>
                <div className="mt-1 text-2xl font-medium tracking-tight text-emerald-400">1,200+ Nodes/Mo</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
