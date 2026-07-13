export function ContactSection() {
  return (
    <section id="contact" className="border-b border-zinc-900 bg-black px-4 sm:px-8 py-24">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row gap-6">
        
        {/* Left Side: Context */}
        <div className="flex flex-col justify-between rounded-sm border border-zinc-900 bg-zinc-950 p-8 lg:w-1/2 lg:p-12">
          <div>
            <h2 className="text-3xl font-normal tracking-tight text-white mb-6">
              Network Access Request
            </h2>
            <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
              Inquiries regarding supply-side indexing, demand-side API integrations, or institutional partnerships. 
            </p>
          </div>
          <div className="mt-12">
            <div className="h-[1px] w-full max-w-md bg-zinc-800"></div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="rounded-sm border border-zinc-900 bg-[#050505] p-8 lg:w-1/2 lg:p-12">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Name</label>
                <input type="text" className="border border-zinc-800 bg-black p-3 text-sm text-white focus:border-emerald-500 focus:outline-none transition-colors rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Company</label>
                <input type="text" className="border border-zinc-800 bg-black p-3 text-sm text-white focus:border-emerald-500 focus:outline-none transition-colors rounded-sm" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Email</label>
              <input type="email" className="border border-zinc-800 bg-black p-3 text-sm text-white focus:border-emerald-500 focus:outline-none transition-colors rounded-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Inquiry</label>
              <textarea rows={4} className="border border-zinc-800 bg-black p-3 text-sm text-white focus:border-emerald-500 focus:outline-none transition-colors rounded-sm resize-none"></textarea>
            </div>
            <button 
              type="button"
              className="mt-4 flex h-12 items-center justify-center border border-zinc-800 bg-zinc-900 px-6 text-xs font-mono tracking-widest text-zinc-400 transition-all hover:border-emerald-500 hover:text-emerald-400 focus:outline-none w-full sm:w-auto self-start"
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
    </section>
  )
}
