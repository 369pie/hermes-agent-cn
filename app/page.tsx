import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LatestNews from '@/components/LatestNews'
import InstallGuide from '@/components/InstallGuide'
import TerminalDemo from '@/components/TerminalDemo'
import Features from '@/components/Features'
import ProvidersCn from '@/components/ProvidersCn'
import CommandRef from '@/components/CommandRef'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestNews />
      <InstallGuide />
      <TerminalDemo />
      <Features />
      <ProvidersCn />
      <CommandRef />
      <Footer />
    </>
  )
}
