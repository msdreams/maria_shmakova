import "./AboutSection.scss"

export const AboutSection = () => {
  return (
    <div className="about">
      <div className="about__animation"></div>

      <div className="about__banner">
      </div>

      <div className="about__skills">
        <div className="about__block about__block--design">
        <p className="about__text ">DESIGN STACK</p>
        </div>
        <div className="about__block about__block--engineering">
        <p className="about__text ">ENGINEERING STACK</p>
        </div>
      </div>
    </div>
  )
}