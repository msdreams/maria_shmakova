import { Link } from "react-router-dom";
import errow from "../../assets/icons/errow.svg";
import photo from "../../assets/images/Photo.png";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import github from "../../assets/icons/github.svg";


export const BioPage = () => {
  return (
    <div className="flex mt-10 flex-col gap-6 px-4 md:px-8 text-white font-roboto font-light" >
      <Link
        to="/"
        className=" mt-4 text-white text-md font-light flex gap-1 items-center"
      >
        <img className='h-5 rotate-90' src={errow} alt="errow" />
        <div className=" border-b-1 border-[#282c34] hover:border-gray-100 transition-color duration-100">
          back
        </div>
      </Link>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex flex-col gap-4 items-center ">
          <img
            className="block w-[250px] h-[250px] object-cover rounded-lg"
            src={photo}
            alt="Maria"
          />
        </div>

        <div className="flex-1 min-w-[320px]">
            <div className="w-full flex flex-row gap-2 pb-4">
              <a
                className="flex items-center justify-center w-8 h-8"
                href="https://github.com/msdreams"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img className="w-6 hover:w-8 transition-w duration-75"
                src={github}
                alt="linkedin" />
              </a>
              <a
                className="flex items-center justify-center w-8 h-8"
                href="https://www.linkedin.com/in/mariashmakova"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 hover:w-8 transition-w duration-75" src={linkedin} alt="instagram" />
              </a>
              <a
                className="flex items-center justify-center w-8 h-8"
                href="https://www.instagram.com/maria_mariash_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 hover:w-8 transition-w duration-75" src={instagram} alt="github" />
              </a>
            </div>
            
          <p className="text-xl">I’m a Frontend Developer, Web Designer, Creative Coder and human-loving optimist.
          </p>
          <p className="">I'm Frontend Developer with a strong background in Data Visualization, UX/UI Design and Animation.
            <br />
            My design background enables me to work effectively on all project stages, from concept to deployment, addressing both design and technical challenges.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
      <div className="p-6 border border-primary rounded-lg">
          <p className="mb-6 border-b-1 font-jura text-primary">ENGINEERING STACK</p>
          <div className="flex flex-col gap-4">
            <div>
              <p className=""> Languages and Frameworks:</p>
              <ul className="flex flex-row flex-wrap gap-2">
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">HTML5</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl"> CSS & SCSS</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">JavaScript</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl"> 🚀 React</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">Redux Toolkit</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">TypeScript</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">Tailwind</li>
              </ul>
            </div>
            <div>
              <p>Data Fetching and APIs:</p>
              <ul className="flex flex-row flex-wrap gap-2">
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">REST API</li>
              </ul>
            </div>
            <div>
              <p>Development Tools and Workflow:</p>
              <ul className="list-disc pl-5 marker:text-primary">
                <li>Git/GitHub for version control and collaborative workflows.</li>
                <li>VS Code, Chrome Developer Tools (including React DevTools), NPM.</li>
              </ul>
            </div>
            <div>
              <p>Programming Concepts and Methodologies:</p>
              <ul className="list-disc pl-5 marker:text-primary">
              <li>Solid understanding of Object-Oriented Programming (OOP) fundamentals.</li>
              <li>Familiarity with Software Development Life Cycle (SDLC), Waterfall, and Agile methodologies (Scrum, Kanban) for efficient project management and development processes.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 border border-primary rounded-lg">
          <p className="mb-6 border-b-1 font-jura text-primary">DESIGN STACK</p>
          <div className="flex flex-col gap-4">
            <div>
              <p>Visual Design:</p>
              <ul className="flex flex-row flex-wrap gap-2">
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">Design Systems</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">UX/UI</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">Interface Prototyping</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">Color Theory</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">Iconography</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">Typography</li>
                <li className=" px-3 py-1 border border-gray-300 rounded-2xl">Animation</li>

              </ul>
            </div>

            <div>
              <p>UX/UI Expertise:</p>
              <ul className="list-disc pl-5 marker:text-primary">
                <li>User Research</li>
                <li>Responsive & Adaptive Design</li>
                <li>User Experience (UX) Design</li>
                <li>Interactive Prototyping</li>
                <li>User Journey Mapping</li>
              </ul>
            </div>
            <div>
              <p>Tool Savvy:</p>
              <ul className="flex flex-row flex-wrap gap-2">
                <li className=" px-2 py-1 border border-gray-300 rounded-2xl">Figma</li>
                <li className=" px-2 py-1 border border-gray-300 rounded-2xl">Adobe XD</li>
                <li className=" px-2 py-1 border border-gray-300 rounded-2xl">Adobe Photoshop</li>
                <li className=" px-2 py-1 border border-gray-300 rounded-2xl">Adobe Illustrator</li>
                <li className=" px-2 py-1 border border-gray-300 rounded-2xl">Adobe After Effects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="p-6 border border-primary rounded-lg">
        <p className="mb-6 text-primary border-b-1 font-jura">EDUCATION</p>
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

      <section className="p-6 border border-primary rounded-lg">
        <p className="mb-6 text-primary border-b-1 font-jura">
          PROFESSIONAL EXPERIENCE
        </p>
        <ul className="list-disc pl-5 marker:text-primary">
          <li className="pb-4">
              <p className="text-lg"> From 2023 Frontend Developer - Present
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
                  className="text-blue-300"
                    href="https://msdreams.github.io/kidty/"
                    target="_blank"
                    rel="noopener noreferrer"
                  > here
                  </a>.
                </li>
              </ul>
          </li>
          <li className="pb-4">
            <p className="text-lg">Product Designer at an American product company
              <a className="text-blue-300" href="https://wchsb.com/"> WCH Service Bureau</a> with an office in Kyiv, 2022 - 2023.
            </p>
        <ul>
            <li>Led the rebranding and restructuring of the company’s internal products related to a medical service platform used by American doctors and clinics.</li>
          <li>Directed the development of commercial software from idea to implementation, resulting in over 100 new clients and simplifying processes within the Credentialing and Medical Billing department. Link to the product webpage with description and demo available 
            <a 
              className="text-blue-300" 
              href="https://credyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            > here
            </a>.
          </li>
        </ul>
          </li>
          <li className="pb-4">
              <p className="text-lg">UX/UI Designer at software development agency Calaton Systems, 2020 - 2021.</p> 
              <ul>
                <li>Worked directly with the project creator, conducting structural market and user analysis and developing a visual system that allows the company to grow in all planned directions.
                  <a 
                  className="text-blue-300"
                    href="https://calaton.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  > calaton.com </a></li>
                  <li>Gained experience working in a team with frontend developers, designing in sequence, reviewing, and refining different parts of the project.</li>
                  <li>Learned SCRUM methodology using Jira software.</li>
              </ul>
          </li>
        </ul>
      </section>
    </div >
  )
}