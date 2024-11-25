import "./BioPage.scss";
import { Link } from "react-router-dom";
import errow from "../../assets/icons/errow.svg";
import photo from "../../assets/images/Photo.png";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import github from "../../assets/icons/github.svg";




export const BioPage = () => {
  return (
    < div className="bioPage" >
      <Link
        to="/"
        className="bioPage__navigation"
      >
        <img className='bioPage__errow' src={errow} alt="errow"/>
        back
      </Link>

      <div className="bioPage__presentation">
        <div className="bioPage__personal">
          <img
            className="bioPage__photo"
            src={photo}
            alt="personal-photo"
          />

        </div>

        <div className="bioPage__text">
            <div className="bioPage__sotial">
              <a
                href="https://github.com/msdreams"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="linkedin" />
              </a>
              <a
                href="https://www.linkedin.com/in/mariashmakova"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="instagram" />
              </a>
              <a
                href="https://www.instagram.com/maria_mariash_"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="github" />
              </a>
            </div>
            
          <p className="bioPage__header">I’m a Frontend Developer, Web Designer, Creative Coder and human-loving optimist.
             I really love what I do.</p>
          <p className="bioPage__paragraph">I'm Open-minded frontend developer and web designer with a strong background in creative coding, data visualization, and interactive animations.
            Passionate about web development and moving toward expanding the stack of technologies mastered.
            <br />
            I have commercial experience in web design, and a long-standing interest in creative coding led me to master programming and the React framework.
            With a background in UX/UI design enables me to work effectively on all project stages, from concept to deployment, addressing both design and technical challenges.
          </p>
        </div>
      </div>

      <div className="bioPage__skills">
      <div className="bioPage__block">
        <p className="bioPage__title">DESIGN STACK</p>
        <p>Visual Design:</p>
        <ul>
          <li>Design Systems: Ability to create and maintain design systems that ensure brand uniqueness.</li>
          <li>Color Theory: Strong understanding of color harmony, contrast, and psychology, enabling color choices that elevate UI/UX and create visual appeal.</li>
          <li>Iconography: Experience in designing and utilizing icons that are intuitive and consistent.</li>
          </ul>
        
          <p>Typography:</p>
        <ul>
          <li>Skilled in selecting and applying typefaces, typography hierarchies, and styles that improve readability and convey the right tone.</li>
          </ul>
          
          <p>Animation:</p>
        <ul>
          <li> Knowledge of animation principles to build smooth, engaging interactions that improve user feedback and overall interface dynamics.</li>
        </ul>
        
        <p>UX/UI Expertise:</p>
        <ul>
          <li>User Research</li>
          <li>Responsive & Adaptive Design</li>
          <li>User Experience (UX) Design</li>
          <li>Interactive Prototyping</li>
          <li>User Journey Mapping</li>
        </ul>
        
        <p>Tool Savvy:</p>
        <ul className="ul__row">
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe After Effects</li>
        </ul>
      </div>

    <div className="bioPage__block">
      <p className="bioPage__title">ENGINEERING STACK</p>
      <p>Languages and Frameworks:</p>
        <ul>
          <li>TypeScript and JavaScript (ES2015–2019)</li>
          <li>HTML5 and CSS3</li>
          <li>Tailwind CSS and Bulma for utility-first CSS styling</li>
          <li>React, with expertise in Redux Toolkit for state management, Redux Persist for persisting application state</li>
        </ul>
        
        <p>Development Tools and Workflow:</p>
        <ul>
          <li>Git/GitHub for version control and collaborative workflows.</li>
          <li>VS Code, Chrome Developer Tools (including React DevTools), NPM.</li>
        </ul>
        
        <p>Data Fetching and APIs:</p>
        <ul>
          <li>Skilled in using Fetch, AJAX, and REST API for asynchronous data handling, and knowledge of WebSockets for real-time communication.</li>
        </ul>
        
          <p>Programming Concepts and Methodologies:</p>
        <ul>
          <li>Solid understanding of Object-Oriented Programming (OOP) fundamentals.</li>
          <li>Familiarity with Software Development Life Cycle (SDLC), Waterfall, and Agile methodologies (Scrum, Kanban) for efficient project management and development processes.</li>
          </ul>
          
        <p>Design and Prototyping:</p>
        <ul>
          <li>Proficient in Figma for creating and prototyping responsive, user-centered designs.</li>
          <li>Knowledge of responsive web design principles to ensure a seamless experience across devices.</li>
        </ul>
    </div>
      </div>

      <section className="bioPage__block">
        <p className="bioPage__title">EDUCATION</p>
          <ul>
              <li>2005 - 2012: Higher Education in the Faculty of Graphic Design</li>
              <li>2019: Graphic Design course at the School of Visual Communication </li>
              <li>2020: UX/UI Design course at Apollo Design Center </li>
              <li>2021: Domestika online course "Brand Strategy for Online Platforms" </li>
              <li>2021: Motion Design course at Projector </li>
              <li>2022: UX/UI Animation course at Projector </li>
              <li>2023 - 2024: Front End Development course at Mate Academy</li>
              <li>2024: Udemy course "Data Visualization in JavaScript with React and D3.js" </li>
          </ul>
      </section>

      <section className="bioPage__block">
        <p className="bioPage__title">PROFESSIONAL EXPERIENCE</p>
        <ul>
        <li className="bioPage__list-header">
            <p>Frontend Developer July 2024 - Present
            </p>
            <ul>
                <li>Technologies: JavaScript, React, Redux Toolkit, Redux Persist, TypeScript, HTML, CSS, BEM, Docker </li>
              <li>
                Engineering and maintaining intuitive web applications using React,
                ensuring adaptability and visualizing and storing data, featuring a main page and a dashboard.
              </li>
              <li>
              Work in a team with backend developers who code in Java, collaboratively developing the database interaction logic.
              </li>
              <li>
                Creating adaptive designs from Figma using technologies such as Grid, Flex, SCSS, and JS.
                See project under construction
                <a 
                className="bioPage__link" 
                  href="https://msdreams.github.io/kidty/"
                  target="_blank"
                  rel="noopener noreferrer"
                > here
                </a>.
              </li>
            </ul>
        </li>
        <li className="bioPage__list-header">
            <p>Product Designer at an American product company <a className="bioPage__link" href="https://wchsb.com/"> WCH Service Bureau</a> with an office in Kyiv, 2022 - 2023.
            </p>
            <ul>
                <li>Led the rebranding and restructuring of the company’s internal products related to a medical service platform used by American doctors and clinics.</li>
              <li>Directed the development of commercial software from idea to implementation, resulting in over 100 new clients and simplifying processes within the Credentialing and Medical Billing department. Link to the product webpage with description and demo available 
                <a 
                  className="bioPage__link" 
                  href="https://credyapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                > here
                </a>.
              </li>
            </ul>
        </li>
        <li>
            <p>Course Instructor in Generative Design at the
              <a 
              className="bioPage__link" 
                href="https://svc.com.ua/"
                target="_blank"
                rel="noopener noreferrer"
              > School of Visual Communication
              </a>, project-based work, since 2022.
            </p> 
            <ul>
                <li>As the lead instructor, I teach as a guest expert in generative design, focusing on creating graphics through code. My goal is to inspire students to explore the limitless possibilities of programming by demonstrating how code enables endless experiments with graphical objects.</li>
                <li>This passion not only inspires my students but also introduced me to the fascinating world of programming, where creativity and technology intertwine.</li>
            </ul>
        </li>
        <li>
            <p> Freelance Designer | October – December 2021.</p> 
            <ul>
              <li>Collaborated with
                <a 
                className="bioPage__link" 
                  href="https://simplaq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                > Simplaq
                </a> to create an animated promotional video for the company.</li>
              <li>Collaborated with
                <a 
                className="bioPage__link" 
                  href="https://www.brandrenos.com/"
                  target="_blank"
                  rel="noopener noreferrer"> Brand Renos
                </a> to develop a series of 12 animations using creative coding, forming the visual foundation of the company’s brand.</li>
            </ul>
        </li>
        <li>
            <p>UX/UI Designer at software development agency Calaton Systems, 2020 - 2021.</p> 
            <ul>
              <li>Worked directly with the project creator, conducting structural market and user analysis and developing a visual system that allows the company to grow in all planned directions.
                <a 
                className="bioPage__link" 
                  href="https://calaton.com"
                  target="_blank"
                  rel="noopener noreferrer"
                > calaton.com </a></li>
                <li>Gained experience working in a team with frontend developers, designing in sequence, reviewing, and refining different parts of the project.</li>
                <li>Learned SCRUM methodology using Jira software.</li>
            </ul>
        </li>
        <li>
            <p>Graphic Designer and Brand Development Manager in a product company,
              <a 
              className="bioPage__link" 
                href="https://shmed.com.ua/en"
                target="_blank"
                rel="noopener noreferrer"
              > Honey Shmoney</a> full-time, 2015 - 2019.
            </p> 
            <ul>
                <li>Launched and built a brand from scratch, growing it to 15,000 Instagram followers and over 100 points of sale across Ukraine.</li>
                <li>Created a website on the Shopify platform and implemented an SRM system to manage online sales effectively.</li>
                <li>Handled marketing, advertising, and product positioning in the market.</li>
            </ul>
        </li>
    </ul>
      </section>


    </div >
  )
}