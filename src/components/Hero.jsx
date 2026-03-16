import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="d-flex flex-column text-center align-items-center g-4 g-lg-5">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

export default Hero
