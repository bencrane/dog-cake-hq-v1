import { HeroSection } from "@/components/HeroSection"
import { MandateSection } from "@/components/MandateSection"
import { NetworkArchitecture } from "@/components/NetworkArchitecture"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <HeroSection />
      <MandateSection />
      <NetworkArchitecture />
      
      <footer className="border-t border-zinc-900 bg-black px-6 py-12 text-center sm:px-12 lg:px-24">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Capital Expansion. Institutional Private Credit. All rights reserved. <br/>
          Confidential and Proprietary.
        </p>
      </footer>
    </main>
  )
}
