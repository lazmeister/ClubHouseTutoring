import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import MethodSection from "@/components/MethodSection"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <MethodSection />
    </main>
  )
}
