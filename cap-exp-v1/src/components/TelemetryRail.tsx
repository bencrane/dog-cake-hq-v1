export function TelemetryRail() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 z-50 flex w-24 flex-col items-center justify-center border-r border-zinc-900 bg-black font-mono text-xs">
      <nav className="flex flex-col gap-12 text-zinc-600">
        <a href="#manifesto" className="hover:text-white transition-colors">01</a>
        <a href="#mandate" className="hover:text-white transition-colors">02</a>
        <a href="#layer" className="hover:text-white transition-colors">03</a>
        <a href="#contact" className="hover:text-white transition-colors">04</a>
      </nav>
    </aside>
  )
}
