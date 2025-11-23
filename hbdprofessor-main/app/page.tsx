import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Timeline from "./components/timeline"
import Gallery from "./components/gallery"
import Letter from "./components/letter"
import FunFacts from "./components/fun-facts"
import ArtGallery from "./components/art-gallery"
import Counter from "./components/counter"
import BucketList from "./components/bucket-list"
import Footer from "./components/footer"
import BalloonBackground from "./components/balloon-background"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-[#faf8f6] via-[#fdf6f1] to-[#f9f3f0]">
      <BalloonBackground />
      <Navbar />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="letter">
          <Letter />
        </section>

        <section id="facts">
          <FunFacts />
        </section>

        <section id="art-gallery">
          <ArtGallery />
        </section>

        <section id="counter">
          <Counter />
        </section>

        <section id="bucket-list">
          <BucketList />
        </section>
      </main>

      <Footer />
    </div>
  )
}
