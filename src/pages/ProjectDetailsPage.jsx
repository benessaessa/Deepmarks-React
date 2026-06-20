import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getProjectById } from '../data/projects'

export default function ProjectDetailsPage() {
  const { id } = useParams()
  const project = getProjectById(id)

  return (
    <>
      <Header />

      <main>
        <section className="project-hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 ">
                {!project ? (
                  <>
                    <div className="pill mb-4 reveal">
                      <span className="dot"></span> Portfolio
                    </div>
                    <h1 className="deepmarks-h2-xl">Project not found</h1>
                    <p className="deepmarks-subhead">We could not find the requested project.</p>
                    <Link to="/" className="btn btn-outline-prim mt-4">Back to Portfolio</Link>
                  </>
                ) : (
                  <>
                    <div className="pill mb-4 reveal">
                      <span className="dot"></span> Portfolio
                    </div>
                    <h1 className="deepmarks-h2-xl">{project.title} - Details</h1>
                    <p className="deepmarks-subhead">{project.description}</p>

                    <div className="project-designer-section">
                      <div className="designer-card">
                        <img src={project.author.avatar} alt={project.author.name} className="designer-avatar" />
                        <div className="designer-info">
                          <div className="designer-name">{project.author.name}</div>
                          <div className="designer-role">{project.author.position}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {project ? (
          <section className="project-content-section">
            <div className="container">
              <div className="row g-5 align-items-start">
                {project.detail.images?.length ? (
                <div className="col-lg-12">
                  <div className="project-detail-image-row">
                    {project.detail.images.map((imageSrc, imageIdx) => (
                      <div key={imageIdx} className="project-image-column">
                        <div className="project-image-wrapper">
                          <img src={imageSrc} alt={`${project.title} screenshot ${imageIdx + 1}`} className="project-detail-img" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="col-lg-12">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.imageAlt} className="project-detail-img" />
                  </div>
                </div>
              )}

                <div className="col-lg-12">
                  <div className="project-details">
                    <div className="project-year">{project.year}</div>
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-description">{project.detail.lead}</p>

                    <div className="project-deliverables">
                      <h4 className="deliverables-heading">What we delivered</h4>
                      <ul className="deliverables-list">
                        {project.detail.deliverables.map((item) => (
                          <li key={item} className="deliverable-item">{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-body">
                      {project.detail.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    <div>
                      <Link to="/" className="btn btn-outline-prim mt-3 px-5">
                        Back to Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section id="cta" className="section-cta">
          <div className="cta-glow"></div>
          <div className="container position-relative">
            <div className="reveal">
              <span className="label-tag">Join Us Now</span>
              <h2 className="mt-2">
                Each Project We Undertake<br />
                <em className="deepmarks-gold">is a Unique Opportunity.</em>
              </h2>
              <p>
                Ready to take the next step? Join us now and start transforming your vision into reality with expert
                support.
              </p>
              <a href="/contact" className="btn btn-prim btn-lg px-5 text-capitalize">
                Start now <span className="deepmarks-arrow ms-2" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

