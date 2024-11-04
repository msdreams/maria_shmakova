import Banner from "../Banner/Banner.jsx"
import "./AboutSection.scss"
import BannerWrapper from "../BannerWrapper/BannerWrapper.jsx";
import Gexagedron from "../Banner/Gexagedron.jsx";
import errow from "../../assets/icons/errow.svg"

export const AboutSection = ({scrollToProjects}) => {
  return (
    <div className="about">
      <div className="about__animation">
        <div className="about__banner">
          <BannerWrapper sketch={Banner} />
        </div>
        <div className="about__gexagedron">
          <BannerWrapper sketch={Gexagedron} />
        </div>

        <button onClick={scrollToProjects} className='about__pointer'>
          <div className='about__discover'> Discover my Projects</div>
          <img className='about__errow' src={errow} alt="errow"/>
        </button>
      </div>
    </div>
  )
}