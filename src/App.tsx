
import './index.css'
import profileImage from './profile_image.png'
//import { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'BACKEND ENGINEERING',
    title: 'FinTech Backend Services',
    description:
      'Go-based REST APIs supporting transactional, rewards, brands and wealth-building workflows.',
    stack: ['Go', 'PostgreSQL', 'AWS'],
  },
  {
    number: '02',
    type: 'DATABASE PERFORMANCE',
    title: 'PostgreSQL Optimization',
    description:
      'Query tuning, indexing, schema improvements, and database maintenance to improve API performance.',
    stack: ['PostgreSQL', 'SQL', 'Performance'],
  },
  {
    number: '03',
    type: 'AUTOMATION',
    title: 'Developer Productivity',
    description:
      'Python and Shell automation to reduce repetitive operational work and improve delivery.',
    stack: ['Python', 'Shell', 'CI/CD'],
  },
]

const skills = [
  'Go',
  'REST APIs',
  'PostgreSQL',
  'Redis',
  'AWS',
  'Python',
  'Docker',
  'Git',
  'CI/CD',
  'System Design',
]

function App() {
  return (
    <>
      <header className="navbar">
        <a className="brand navbar-brand" href="#home" aria-label="Akarsha home">
          <img className="navbar-avatar" src={profileImage} alt="" />
          <span className="brand-name"><span>. </span>AKARSHA P G</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let's connect <span>↗</span>
        </a>
      </header>

      <main>
        <section className="section hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              BACKEND ENGINEER · BENGALURU, INDIA
            </div>
            <h1>
              Building reliable
              <br />
              systems that <span>scale.</span>
            </h1>
            <p className="hero-description">
              I'm Akarsha, a backend engineer focused on Go, databases,
              cloud infrastructure, and building software that works
              reliably in production in an AI-assisted environment.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button-secondary" href="#contact">
                Get in touch
              </a>
            </div>
            <div className="hero-meta">
              <span>4+ years in software engineering</span>
              <span className="meta-divider" />
              <span>Backend · APIs · AI & Data</span>
            </div>
          </div>

          <aside className="code-card" aria-label="Engineering principles">
            <div className="code-header">
              <div className="window-dots"><i /><i /><i /></div>
              <span>engineering.go</span>
            </div>

            <div className="code-body">
              <p className="active">
                <span className="line-number">01</span>{" "}
                <span className="code-purple">type</span> Engineer{" "}
                <span className="code-purple">struct</span> {"{"}
              </p>
              <p><span className="line-number">02</span>   Focus <span className="code-muted">string</span></p>
              <p><span className="line-number">03</span>   Quality <span className="code-muted">string</span></p>
              <p><span className="line-number">04</span> {"}"}</p>
              <p className="code-spacer"><span className="line-number">05</span></p>
              <p><span className="line-number">06</span> me := Engineer{"{"}</p>
              <p><span className="line-number">07</span>   Focus: <span className="code-green">"Reliability"</span>,</p>
              <p><span className="line-number">08</span>   Quality: <span className="code-green">"Simplicity"</span>,</p>
              <p>
                <span className="line-number">09</span> {"}"}
                <span className="cursor" aria-hidden="true" />
              </p>
              <p className="code-spacer"><span className="line-number">10</span></p>
              <p><span className="line-number">11</span> <span className="code-comment">// Solve the real problem.</span></p>
              <p><span className="line-number">12</span> <span className="code-comment">// Measure the outcome.</span></p>
            </div>

            <div className="code-footer">
              <span>
                <span className="status-dot" />
                ENGINEERING WITH PURPOSE
              </span>
              <span>GO / BACKEND</span>
            </div>
          </aside>

          <div className="hero-index">PORTFOLIO / 2026</div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span className="eyebrow">01 — ABOUT</span>
            <h2>Engineering with purpose.</h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              Good software isn't just code that works. It's software
              that stays understandable, reliable, and maintainable.
            </p>
            <div className="about-detail">
              <p>
                I have experience building backend services and APIs for
                FinTech platforms, optimizing PostgreSQL queries, automating
                operational workflows, and improving deployment processes.
              </p>
              <p>
                I enjoy investigating root causes, making pragmatic
                engineering decisions, and measuring the impact of changes.
              </p>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat">
              <strong>35<span>%</span></strong>
              <p>API latency reduction</p>
              <small>Reported project outcome</small>
            </div>
            <div className="stat">
              <strong>60<span>%</span></strong>
              <p>Less manual operational effort</p>
              <small>Reported automation outcome</small>
            </div>
            <div className="stat">
              <strong>40<span>%</span></strong>
              <p>Deployment efficiency improvement</p>
              <small>Reported workflow outcome</small>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <span className="eyebrow">02 — TOOLKIT</span>
            <h2>Tools I work with.</h2>
            <p className="section-description">
              Technologies I've used across backend development,
              databases, cloud services, and automation.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading heading-row">
            <div>
              <span className="eyebrow">03 — SELECTED WORK</span>
              <h2>Problems worth solving.</h2>
            </div>
            <span className="project-count">03 CASE STUDIES</span>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span className="project-symbol">↗</span>
                </div>
                <span className="eyebrow">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="disclaimer">
            These summaries describe work areas.
            {/* not public repositories. */}
            {/* Add detailed case studies and links only where you can share
            the work appropriately. */}
          </p>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <span className="eyebrow">04 — EXPERIENCE</span>
            <h2>Where I've contributed.</h2>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-meta">
                <span>APR 2022 — APR 2026</span><span>01</span>
              </div>
              <h3>Software Engineer</h3>
              <p className="company">Multipl Fintech Solutions Pvt Ltd</p>
              <ul className="experience-bullets">
                <li>🔸 Built and maintained Go backend services for FinTech features, including rewards, savings goals, and redemption workflows.</li>
                <li>🔸 Optimized PostgreSQL queries and indexing, reducing API latency by up to 35%.</li>
                <li>🔸 Automated operational workflows using Python and Shell, reducing manual effort by 60%.</li>
                <li>🔸 Improved deployment efficiency by 40% through CI/CD automation.</li>
                <li>🔸 Built internal admin tools integrating REST APIs and PostgreSQL.</li>
                <li>🔸 Used AI-assisted development tools including Claude, OpenCode, Cursor, and Codex to support coding, debugging, and engineering workflows.</li>
                <li>🔸 Explored LLM technologies including OpenAI, Ollama, and generative AI models for development and automation use cases.</li>
              </ul>
              <div className="tag-list">
                <span className="tag">Go</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Redis</span>
                <span className="tag">Docker</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Node.js</span>
                <span className="tag">React.js</span>
                <span className="tag">REST APIs</span>
                <span className="tag">CI/CD</span>
                <span className="tag">AWS</span>
                <span className="tag">Python</span>
                <span className="tag">Bash/Shell</span>
                <span className="tag">Claude</span>
                <span className="tag">OpenCode</span>
                <span className="tag">Cursor</span>
                <span className="tag">Codex</span>
                <span className="tag">OpenAI</span>
                <span className="tag">GenAI</span>
                <span className="tag">Ollama</span>
                <span className="tag">LLMs</span>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-meta">
                <span>JAN 2022 — APR 2022</span><span>02</span>
              </div>

              <h3>Software Engineer Intern</h3>
              <p className="company">Kaleyra Inc. · Tata Communications</p>
              <ul className="experience-bullets">
                <li>
                  🔸 Developed Go REST APIs supporting backend communication platform workflows.
                </li>
                <li>
                  🔸 Built Node.js automation scripts to simplify repetitive engineering and operational tasks.
                </li>
                <li>
                  🔸 Worked with MongoDB and Elasticsearch for data storage, search, and log analysis.
                </li>
                <li>
                  🔸 Used Kibana and KQL to investigate application logs and troubleshoot issues.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Go</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Elasticsearch</span>
                <span className="tag">SQL</span>
                <span className="tag">Kibana(KQL)</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
                <span className="tag">Bitbucket</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">05 — CONTACT</span>
          <h2>Let's build something <span>meaningful.</span></h2>
          <p>
            Interested in backend engineering, distributed systems,
            and solving challenging technical problems.
          </p>
          <div className="contact-actions">
            <a
              className="button-primary"
              href="mailto:pgakarsha@gmail.com"
            >
              Email me <span>↗</span>
            </a>

            <a className="button-secondary"
              href="https://github.com/Akarsh1810" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="button-secondary"
              href="https://www.linkedin.com/in/akarshpg" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span>.   </span>AKARSHA P G</a>
        <p>Designed and built with care.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
