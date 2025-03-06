import teamPhoto from "./assets/team.png"
import logo from "./assets/logo.png"
import Carosel from "./components/Carosel.jsx"
import ourStory from "./assets/ourstory.jpg"
import cards from "./cards.js"
import Links from "./components/Links.jsx"

export default function Home(){

  const cardBlocks = cards.map((card, index) => {
    return (
      <div key={index} className="card">
        <div className="what-we-do-image-container">
          <img className="what-we-do-image" src={card.img} alt="" />
        </div>
        <h2 className="body-text-one-font">{card.text}</h2>
      </div>

    )
  })

  return (
    <>
      <div className="home-team-photo">
      </div>
      <main>
        <nav>
          <div className="logo-container">
            <img className="logo" src={logo} alt="drd's dragon logo" />
          </div>
          <ul className="nav-link-container">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Store</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a className="join-link" href="">Join</a>
            </li>
          </ul>
        </nav>
        <header>
          <div className="header-text-container">
            <h2 className="body-text-one-font">Est. 2004</h2>
            <h1 className="heading-font">Dragonboat at UC Davis</h1>
            <h2 className="body-text-one-font">Culture - Athleticism - Community</h2>
            <a  href="">
              <h2 className="join-link body-text-one-font">Join Now</h2>
            </a>
            
          </div>
          <div className="arrow-container">
            <span className="material-icons arrow-down">keyboard_arrow_down</span>
          </div>
        </header>
      </main>
      <section className="what-is-dragon-boat-section">
        <div className="what-is-db-text">
          <h1 className="sub-heading-font">What is dragonboat?</h1>
          <p className="body-text-two-font">Originating from China, this sport and festival has been a tradition for over 2,000 years. Today, dragon boat is enjoyed worldwide. A typical dragon boat crew consists of 20 people, in addition to a drummer and steersperson.</p>
        </div>
        <Carosel/>
      </section>
      <section className="our-story-section">
        <img src={ourStory} alt="" />
        <div className="our-story-text">
          <h1 className="sub-heading-font">Our Story</h1>
          <p className="body-text-two-font">Davis Racing Dragons was established in 2004 by students who wanted to bring collegiate-level dragonboat to UC Davis. Since then, we have always strived to create a fun, welcoming community built on teamwork and competitive excellence. </p>
          <a className="body-text-two-font" href="">
            <h2 className="body-text-two-font">About Page</h2>
          </a>
        </div>
      </section>
      <section className="what-we-do-section">
        <h1 className="sub-heading-font">What We Do</h1>
        <div className="card-container">
          {cardBlocks}
        </div>
        <a className="body-text-two-font" href="">
          <h2 className="body-text-two-font">Learn More</h2>
        </a>
      </section>
      <Links />
    </>
    
  )
}