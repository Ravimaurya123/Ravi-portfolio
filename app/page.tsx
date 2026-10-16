
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
} from "lucide-react";

import {
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVscodium,
  SiLeetcode,
} from "react-icons/si";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="availability">
                <span className="availability-dot" />
                Open to Internship Opportunities
              </div>

              <p className="hero-eyebrow">
                HELLO, I&apos;M
              </p>

              <h1 className="hero-title">
                Ravikant
                <br />
                <span>Singh.</span>
              </h1>

              <h2 className="hero-role">
                Full Stack Web Developer
              </h2>

              <p className="hero-description">
                I&apos;m a third-year B.Tech CSE student at
                Lovely Professional University. I enjoy
                building practical web applications and
                solving problems with Java and Data
                Structures &amp; Algorithms.
              </p>

              <div className="hero-location">
                <MapPin size={17} />
                <span>Lovely Professional University, Punjab</span>
              </div>

              <div className="hero-buttons">
                <Link href="#projects" className="hero-primary-btn">
                  View My Projects
                  <ArrowUpRight size={18} />
                </Link>

                <a
                  href="/Resume.pdf"
                  download
                  className="hero-secondary-btn"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <div className="hero-socials">
                <span>Connect with me</span>

                <a
                  href="https://github.com/Ravimaurya123"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.76 2.15 3.67 1.63.1-.73.39-1.23.7-1.52-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.61 5.23-5.1 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                </a>



                <a
                  href="https://www.linkedin.com/in/ravi-kant-singh-a039ab321/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.64h.05A4.04 4.04 0 0 1 16.7 8.7c3.9 0 4.62 2.56 4.62 5.9V21h-3.8v-5.68c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3V21H9.4V9Z" />
                  </svg>
                </a>

              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-glow" />

              <div className="hero-image-frame">
                <Image
                  src="/profile.jpg"
                  alt="Ravikant Singh - Full Stack Web Developer"
                  width={420}
                  height={500}
                  priority
                  className="hero-profile-image"
                />
              </div>

              <div className="floating-card floating-card-top">
                <span className="floating-icon">&lt;/&gt;</span>
                <div>
                  <strong>Full Stack</strong>
                  <p>Web Development</p>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <span className="floating-icon">{"{ }"}</span>
                <div>
                  <strong>Java + DSA</strong>
                  <p>Problem Solving</p>
                </div>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </a>
        </section>

        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-heading">
              <p className="section-kicker">GET TO KNOW ME</p>
              <h2>
                About <span>Me</span>
              </h2>
              <p>
                A little about my journey, education, and passion for
                technology.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-content">
                <div className="about-label">
                  <span className="about-label-dot" />
                  WHO I AM
                </div>

                <h3>
                  Learning today.
                  <br />
                  <span>Building for tomorrow.</span>
                </h3>

                <p>
                  I&apos;m Ravikant Singh, a third-year B.Tech Computer
                  Science and Engineering student at Lovely Professional
                  University. I&apos;m passionate about full-stack web
                  development, Java programming, and Data Structures
                  &amp; Algorithms.
                </p>

                <p>
                  I enjoy turning ideas into practical web applications,
                  learning modern technologies, and improving my
                  problem-solving skills through consistent coding
                  practice. My goal is to become a skilled software
                  developer and contribute to real-world projects.
                </p>

                <div className="about-highlights">
                  <div className="about-highlight">
                    <span className="highlight-symbol">&lt;/&gt;</span>
                    <div>
                      <strong>Web Development</strong>
                      <p>Building practical applications</p>
                    </div>
                  </div>

                  <div className="about-highlight">
                    <span className="highlight-symbol">DSA</span>
                    <div>
                      <strong>Problem Solving</strong>
                      <p>Java and coding practice</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="education-content">
                <div className="education-heading">
                  <span className="education-heading-icon">✦</span>
                  <div>
                    <h3>Education</h3>
                    <p>My academic journey</p>
                  </div>
                </div>

                <div className="education-timeline">
                  <article className="education-card">
                    <span className="education-dot" />
                    <p className="education-year">2023 – Present</p>
                    <h4>
                      B.Tech – Computer Science and Engineering
                    </h4>
                    <p className="education-institute">
                      Lovely Professional University
                    </p>
                    <span className="education-status">
                      Currently Pursuing
                    </span>
                  </article>

                  <article className="education-card">
                    <span className="education-dot" />
                    <p className="education-year">Class XII</p>
                    <h4>Senior Secondary Education</h4>
                    <p className="education-institute">
                      SB College, Ara, Bihar
                    </p>
                    <span className="education-score">
                      73.6%
                    </span>
                  </article>

                  <article className="education-card">
                    <span className="education-dot" />
                    <p className="education-year">Class X</p>
                    <h4>Secondary Education</h4>
                    <p className="education-institute">
                      Raj +2 High School, Dumraon, Buxar
                    </p>
                    <span className="education-score">
                      82.4%
                    </span>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section id="skills" className="skills-section">
          <div className="skills-container">
            <div className="skills-heading">
              <p className="section-kicker">MY TECHNICAL EXPERTISE</p>
              <h2>
                Skills &amp; <span>Technologies</span>
              </h2>
              <p>
                Technologies and tools I use to build full-stack applications
                and solve programming problems.
              </p>
            </div>

            <div className="skills-grid">
              <article className="skill-card">
                <div className="skill-card-heading">
                  <span className="skill-card-icon">&lt;/&gt;</span>
                  <div>
                    <h3>Programming Languages</h3>
                    <p>Programming and problem-solving</p>
                  </div>
                </div>
                <div className="skill-tags">
                  <span title="Java" aria-label="Java">
  <FaJava aria-hidden="true" />
  Java
</span>
                  <span title="JavaScript" aria-label="JavaScript">
                    <FaJs aria-hidden="true" />
                    JavaScript
                  </span>
                  <span>C++</span>
                  <span>c</span>
                  <span>Python</span>
                </div>
              </article>

              <article className="skill-card">
                <div className="skill-card-heading">
                  <span className="skill-card-icon">UI</span>
                  <div>
                    <h3>Frontend Development</h3>
                    <p>Responsive and interactive interfaces</p>
                  </div>
                </div>

                <div className="skill-tags">
                  <span title="HTML5" aria-label="HTML5">
                    <FaHtml5 aria-hidden="true" />
                    HTML5
                  </span>
                  <span title="CSS3" aria-label="CSS3">
                    <FaCss3Alt aria-hidden="true" />
                    CSS3
                  </span>
                  <span title="React" aria-label="React">
                    <FaReact aria-hidden="true" />
                    React
                  </span>
                  <span title="Next.js" aria-label="Next.js">
                    <SiNextdotjs aria-hidden="true" />
                    Next.js
                  </span>
                  <span title="TypeScript" aria-label="TypeScript">
                    <SiTypescript aria-hidden="true" />
                    TypeScript
                  </span>
                  <span title="Tailwind CSS" aria-label="Tailwind CSS">
                    <SiTailwindcss aria-hidden="true" />
                    Tailwind CSS
                  </span>
                </div>

              </article>

              <article className="skill-card">
                <div className="skill-card-heading">
                  <span className="skill-card-icon">{ }</span>
                  <div>
                    <h3>Backend Development</h3>
                    <p>Server-side logic and APIs</p>
                  </div>
                </div>

                <div className="skill-tags">
                  <span><FaNodeJs /></span>
                  <span><SiExpress /></span>
                  <span>REST APIs</span>
                  <span>JWT Authentication</span>
                </div>

              </article>

              <article className="skill-card">
                <div className="skill-card-heading">
                  <span className="skill-card-icon">DB</span>
                  <div>
                    <h3>Database Management</h3>
                    <p>Storing and managing application data</p>
                  </div>
                </div>

                <div className="skill-tags">
                  <span><SiMongodb /></span>
                  <span>DBMS</span>
                </div>

              </article>

              <article className="skill-card">
                <div className="skill-card-heading">
                  <span className="skill-card-icon">DSA</span>
                  <div>
                    <h3>Computer Science</h3>
                    <p>Core concepts and coding practice</p>
                  </div>
                </div>
                <div className="skill-tags">
                  <span>Data Structures</span>
                  <span>Algorithms</span>
                  <span>OOP</span>
                  <span>Problem Solving</span>
                </div>
              </article>

              <article className="skill-card">
                <div className="skill-card-heading">
                  <span className="skill-card-icon">DEV</span>
                  <div>
                    <h3>Tools &amp; Practices</h3>
                    <p>Development workflow and maintenance</p>
                  </div>
                </div>

                <div className="skill-tags">
                  <span><FaGitAlt /></span>
                  <span><FaGithub /></span>
                  <span>API Integration</span>
                  <span>Debugging</span>
                  <span>Deployment</span>
                </div>

              </article>
            </div>

            <p className="skills-note">
              Continuously learning and applying my skills through real-world
              full-stack projects.
            </p>
          </div>
        </section>



        <section id="projects" className="projects-section">
          <div className="projects-container">
            <div className="projects-heading">
              <p className="section-kicker">WHAT I HAVE BUILT</p>
              <h2>
                Featured <span>Projects</span>
              </h2>
              <p>
                A selection of applications where I apply my development
                skills to solve practical problems.
              </p>
            </div>

            <div className="projects-grid">
              <article className="project-card">
                <div className="project-visual project-rescuenet">
                  <span className="project-number">01</span>
                  <div className="project-visual-content">
                    <span className="project-symbol">RN</span>
                    <h3>RescueNet</h3>
                    <p>Disaster Management Platform</p>
                  </div>
                  <span className="project-type">FULL STACK</span>
                </div>

                <div className="project-body">
                  <div className="project-status">Web Application</div>
                  <h3>RescueNet — Disaster Response</h3>
                  <p className="project-description">
                    A platform designed to connect users with emergency
                    response agencies, featuring agency information,
                    location mapping and real-time updates.
                  </p>

                  <div className="project-tags">
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                    <span>Socket.io</span>
                    <span>Leaflet.js</span>
                  </div>


                  <div className="project-actions">
                    <a
                      className="project-link"
                      href="https://github.com/Ravimaurya123/RescueNet-for-Disaster-Management"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Repository <span>↗</span>
                    </a>


                    <a
                      className="project-demo-btn"
                      href="https://rescue-net-for-disaster-management.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <span>↗</span>
                    </a>

                  </div>

                </div>
              </article>

              <article className="project-card">
                <div className="project-visual project-ecommerce">
                  <span className="project-number">02</span>
                  <div className="project-visual-content">
                    <span className="project-symbol">SE</span>
                    <h3>Smart-Ecommerce</h3>
                    <p>Online Shopping Application</p>
                  </div>
                  <span className="project-type">FULL STACK</span>
                </div>

                <div className="project-body">
                  <div className="project-status">Web Application</div>
                  <h3>Smart-Ecommerce</h3>
                  <p className="project-description">
                    An e-commerce application with customer authentication,
                    product browsing, shopping cart, checkout, order
                    management and admin functionality.
                  </p>

                  <div className="project-tags">
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                    <span>JWT</span>
                  </div>

                  <div className="project-actions">

                    <a
                      className="project-link"
                      href="https://github.com/Ravimaurya123/Smart-Ecommerce"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository <span>↗</span>
                    </a>


                    <a className="project-demo-btn" href="#contact">
                      Live Demo <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-visual project-civicfix">
                  <span className="project-number">03</span>
                  <div className="project-visual-content">
                    <span className="project-symbol">CF</span>
                    <h3>CivicFix</h3>
                    <p>Civic Issue Reporting Platform</p>
                  </div>
                  <span className="project-type">WEB PLATFORM</span>
                </div>

                <div className="project-body">
                  <div className="project-status">Civic Technology</div>
                  <h3>CivicFix — Report to Resolve</h3>
                  <p className="project-description">
                    A platform for reporting public issues such as potholes,
                    broken streetlights, garbage and water leakage, with
                    workflows to verify, assign and track reports.
                  </p>

                  <div className="project-tags">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>MongoDB</span>
                    <span>REST APIs</span>
                  </div>

                  <div className="project-actions">

                    <a
                      className="project-link"
                      href="https://github.com/Ravimaurya123"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore GitHub <span>↗</span>
                    </a>


                    {/* <a className="project-demo-btn" href="#contact">
                      Live Demo <span>↗</span>
                    </a> */}
                  </div>
                </div>
              </article>
            </div>

            <div className="projects-footer">
              <p>Want to explore more of my work?</p>
              <a
                href="https://github.com/Ravimaurya123"
                target="_blank"
                rel="noreferrer"
                className="all-projects-btn"
              >
                Visit My GitHub <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <section id="achievements" className="achievements-section section">
          <div className="section-heading">
            <span className="section-label">MY PROGRESS</span>

            <h2>
              Achievements & <span>Certifications</span>
            </h2>

            <p>
              My learning journey, practical development experience, and
              continuous efforts to improve my technical skills.
            </p>
          </div>

          <div className="achievement-grid">
            <article className="achievement-card">
              <div className="achievement-icon">{"</>"}</div>

              <h3>Java & DSA Practice</h3>

              <p>
                Improving problem-solving skills through data structures,
                algorithms, coding challenges, and regular practice.
              </p>

              <span className="achievement-tag">
                Problem Solving
              </span>
            </article>

            <article className="achievement-card">
              <div className="achievement-icon">{"{ }"}</div>

              <h3>Full-Stack Development</h3>

              <p>
                Developing web applications with frontend interfaces,
                backend APIs, database integration, and authentication.
              </p>

              <span className="achievement-tag">
                Project-Based Learning
              </span>
            </article>

            <article className="achievement-card">
              <div className="achievement-icon">★</div>

              <h3>Continuous Learning</h3>

              <p>
                Expanding technical knowledge through hands-on projects,
                programming practice, and modern web technologies.
              </p>

              <span className="achievement-tag">
                Growth Mindset
              </span>
            </article>
          </div>

          <div className="certification-note">
            <h3>Certifications & Achievements</h3>
            <p className="certification-subtitle">
              Courses and certifications completed to strengthen my technical and professional skills.
            </p>

            <div className="certification-grid">
              <div className="certification-card">
                <div className="certification-icon">📘</div>
                <h4>Fundamentals of DSA</h4>
                <p>Data Structures and Algorithms</p>
                <span>Technical</span>

                <a
                  href="/certificates/fundamentals-of-dsa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-btn"
                >
                  View Certificate ↗
                </a>

              </div>

              <div className="certification-card">
                <div className="certification-icon">💻</div>
                <h4>Computer Programming in C</h4>
                <p>Programming Fundamentals</p>
                <span>Programming</span>

                <a
                  href="/certificates/fundamentals-of-dsa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-btn"
                >
                  View Certificate ↗
                </a>

              </div>

              <div className="certification-card">
                <div className="certification-icon">⚛️</div>
                <h4>React.js</h4>
                <p>Frontend Web Development</p>
                <span>Web Development</span>

                <a
                  href="/certificates/fundamentals-of-dsa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-btn"
                >
                  View Certificate ↗
                </a>

              </div>

              <div className="certification-card">
                <div className="certification-icon">🧠</div>
                <h4>Introduction to DSA</h4>
                <p>Data Structures and Algorithms Basics</p>
                <span>Technical</span>
                <a
                  href="/certificates/fundamentals-of-dsa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-btn"
                >
                  View Certificate ↗
                </a>

              </div>

              <div className="certification-card">
                <div className="certification-icon">⏱️</div>
                <h4>Effective Time Management</h4>
                <p>Productivity and Time Management</p>
                <span>Professional Skills</span>

                <a
                  href="/certificates/fundamentals-of-dsa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-btn"
                >
                  View Certificate ↗
                </a>

              </div>
            </div>
          </div>

        </section>

        <section id="contact" className="contact-section section">
          <div className="section-heading">
            <span className="section-label">GET IN TOUCH</span>
            <h2>
              Let's Work <span>Together</span>
            </h2>
            <p>
              I am open to internship opportunities and web development projects.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                Have an opportunity or project in mind? Feel free to contact me.
              </p>


              <div className="contact-socials">
                <a
                  href="https://github.com/Ravimaurya123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <span className="contact-social-icon">GH</span>
                  <span className="contact-social-text">
                    <strong>GitHub</strong>
                    <small>Explore my projects</small>
                  </span>
                  <span className="contact-social-arrow">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ravi-kant-singh-a039ab321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <span className="contact-social-icon">in</span>
                  <span className="contact-social-text">
                    <strong>LinkedIn</strong>
                    <small>Let's connect professionally</small>
                  </span>
                  <span className="contact-social-arrow">↗</span>
                </a>
              </div>

              <div className="contact-details">
                <a className="contact-detail-item" href="mailto:YOUR_EMAIL@gmail.com">
                  <span className="contact-detail-icon">✉</span>
                  <span>
                    <strong>Email</strong>
                    <small>YOUR_EMAIL@gmail.com</small>
                  </span>
                </a>

                <div className="contact-detail-item">
                  <span className="contact-detail-icon">⌖</span>
                  <span>
                    <strong>Location</strong>
                    <small>Punjab, India</small>
                  </span>
                </div>
              </div>

            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>

  );

}
