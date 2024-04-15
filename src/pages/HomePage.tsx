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
import { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';
import { Tag } from '../components/Tag';
import { Button } from '../components/Button';

const ocktokit = new Octokit();

const skillsMatrix = {
  'Frontend Development': [{ name: 'React', icon: <FaReact />, level: 'Experienced' }],
  'Backend Development': [{ name: 'Node', icon: <FaCircleCheck />, level: 'Experienced' }],
  Data: [{ name: 'MongoDB', icon: <FaCircleCheck />, level: 'Experienced' }],
  Devops: [{ name: 'Docker', icon: <FaCircleCheck />, level: 'Experienced' }],
};

export function HomePage() {
  const [projectData, setProjectData] = useState(
    [] as {
      name: string;
      url: string;
      description: string | null;
      topics: string[] | undefined;
      updated: string | null | undefined;
    }[]
  );
  useEffect(() => {
    ocktokit.rest.repos.listForUser({ username: 'bo-carey', sort: 'updated' }).then(({ data }) => {
      setProjectData(
        data
          .filter((repo) => repo.fork === false)
          .map((repo) => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            topics: repo.topics,
            updated: repo.updated_at,
          }))
      );
    });
  }, []);
  return (
    <>
      <Header />
      <main id="home">
        <section id="profile" className="block h-[83vh] mb-24">
          <img src={ProfileImage} alt="Bo Carey" className="" />
          <p className="intro">Hello, I'm</p>
          <h1>Bo Carey</h1>
          <p className="profession">FullStack Developer</p>
          <div className="flex gap-4">
            <Button accent="primary">Download CV</Button>
            <Button accent="secondary">Contact Info</Button>
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
            {projectData?.length &&
              projectData.map((proj) => (
                <div className="flex flex-col gap-4 items-center">
                  <img src={`../assets/projects/${proj.name}.png`} alt={proj.name} />
                  <h2>{proj.name}</h2>
                  <p className="text-gray-700">{proj.description}</p>
                  {proj.topics && (
                    <div className="flex gap-2 m-auto items-center justify-center">
                      {proj.topics.map((topic) => (
                        <Tag>{topic}</Tag>
                      ))}
                    </div>
                  )}
                  <Button onClick={() => window.open(proj.url, '_blank')}>Github</Button>
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
