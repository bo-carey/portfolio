import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import ProfileImage from '../assets/profile.jpg';
import {
  FaAward,
  FaCircleCheck,
  FaEnvelope,
  FaGraduationCap,
  FaLinkedin,
  FaReact,
} from 'react-icons/fa6';
import './pages.css';

const skillsMatrix = {
  'Frontend Development': [{ name: 'React', icon: <FaReact />, level: 'Experienced' }],
  'Backend Development': [{ name: 'Node', icon: <FaCircleCheck />, level: 'Experienced' }],
  Data: [{ name: 'MongoDB', icon: <FaCircleCheck />, level: 'Experienced' }],
  Devops: [{ name: 'Docker', icon: <FaCircleCheck />, level: 'Experienced' }],
};

const projectsMatrix = {
  'Project 1': {
    image: 'https://tangerine-hummingbird-1479b6.netlify.app/assets/project-1.png',
    links: [
      { name: 'GitHub', url: '' },
      { name: 'Live Demo', url: '' },
    ],
  },
  'Project 2': {
    image: 'https://tangerine-hummingbird-1479b6.netlify.app/assets/project-2.png',
    links: [
      { name: 'GitHub', url: '' },
      { name: 'Live Demo', url: '' },
    ],
  },
  'Project 3': {
    image: 'https://tangerine-hummingbird-1479b6.netlify.app/assets/project-3.png',
    links: [
      { name: 'GitHub', url: '' },
      { name: 'Live Demo', url: '' },
    ],
  },
};

export function HomePage() {
  return (
    <>
      <Header />
      <main id="home">
        <section id="profile" className="block h-[83vh] mb-24">
          <img src={ProfileImage} alt="Bo Carey" className="" />
          <p className="intro">Hello, I'm</p>
          <h1>Bo Carey</h1>
          <p className="profession">FullStack Developer</p>
          <div className="rounded-buttons">
            <button>Download CV</button>
            <button>Contact Info</button>
          </div>
        </section>
        <section id="about">
          <p>Get To Know More</p>
          <h1>About Me</h1>
          <div className="experience-cards">
            <div>
              <FaAward />
              <h3>Experience</h3>
              <p>
                5+ years
                <br />
                FullStack Development
              </p>
            </div>
            <div>
              <FaGraduationCap />
              <h3>Education</h3>
              <p>B.Sc Bachelors Degree</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et
            laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime
            facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam?
            Nulla, impedit fuga!
          </p>
        </section>
        <section id="experience">
          <p>Explore My</p>
          <h1>Experience</h1>
          <div className="experience-cards">
            {Object.entries(skillsMatrix).map(([category, skills]) => (
              <div>
                <h2>{category}</h2>
                <ul>
                  {skills.map(({ icon, level, name }) => (
                    <li>
                      {icon ? icon : <FaCircleCheck />}
                      <div>
                        <h3>{name}</h3>
                        <p>{level}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section id="projects">
          <p>Browse My Recent</p>
          <h1>Projects</h1>
          <div className="project-cards">
            {Object.entries(projectsMatrix).map(([name, { image, links }]) => (
              <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <div className="buttons">
                  {links.map(({ name, url }) => (
                    <button onClick={() => window.open(url, '_blank')}>{name}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contact">
          <p>Get in Touch</p>
          <h1>Contact</h1>
          <div>
            <a href="mailto:bo.carey@bashwebdev.com">
              <FaEnvelope />
              <span>Bo.Carey@bashwebdev.com</span>
            </a>
            <a href="https://www.linkedin.com/in/bocarey">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
