import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section id="contact-hero">
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-lg-8 me-auto text-start">
                <div className="pill mb-4 reveal">
                  <span className="dot"></span> Contact Us
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-process">
          <div className="container">
            <div className="row gy-5 pt-lg-4">
              <div className="col-lg-7 reveal" id="contact-form">
                <div className="contact-us-form">
                  <span className="label-tag">Contact form</span>
                  <h2 className="deepmarks-h2-xl heading-spacer">Tell us about your project</h2>
                  <p className="deepmarks-lead muted-tall max-width-sm">
                    Share your goals and timeline. We'll review your request and get back with next steps.
                  </p>

                  <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label form-label-muted">Your name</label>
                        <input type="text" className="form-control" placeholder="Full name" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label form-label-muted">Email</label>
                        <input type="email" className="form-control" placeholder="name@email.com" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label form-label-muted">Business / brand</label>
                        <input type="text" className="form-control" placeholder="Company or brand name" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label form-label-muted">What are you building?</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Describe your project, audience, and desired vibe..."
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label form-label-muted">Budget range</label>
                        <select className="form-select" required>
                          <option value="">Select one</option>
                          <option>Basic</option>
                          <option>Growth</option>
                          <option>Premium</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label form-label-muted">Timeline</label>
                        <select className="form-select" required>
                          <option value="">Select one</option>
                          <option>ASAP</option>
                          <option>1–2 months</option>
                          <option>3+ months</option>
                        </select>
                      </div>
                      <div className="col-12 d-flex gap-3 align-items-center flex-wrap mt-4">
                        <button type="submit" className="btn btn-prim px-5 text-capitalize">
                          Submit request <span className="deepmarks-arrow ms-2" aria-hidden="true"></span>
                        </button>
                        <span className="form-note">We usually respond within 1–2 business days.</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-5 reveal reveal-delay-2" id="contact-details">
                <span className="label-tag">Quick details</span>
                <h2 className="deepmarks-h2-xl heading-spacer">Reach Deepmarks</h2>
                <p className="deepmarks-lead muted-tall">
                  Choose the fastest way to contact us. We’re happy to help with project questions and recommendations.
                </p>

                <div className="row g-3 mt-1">
                  <div className="col-12">
                    <div className="stat-box-left">
                      <div className="stat-box-sm-title">Email</div>
                      <div className="stat-box-value">hello@deepmarks.com</div>
                      <div className="stat-box-desc">For briefs, partnerships & support</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="stat-box-left">
                      <div className="stat-box-sm-title pb-3">What to send</div>
                      <ul className="stat-checklist">
                        <li className="stat-checklist-item">
                          <i className="bi bi-check-circle-fill"></i> Your brand goals
                        </li>
                        <li className="stat-checklist-item">
                          <i className="bi bi-check-circle-fill"></i> Target audience
                        </li>
                        <li className="stat-checklist-item">
                          <i className="bi bi-check-circle-fill"></i> Timeline + budget range
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

