import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { PROJECTS } from '../data/projects'

function ProjectCard({ project, delay }) {
  return (
    <div className={`portfolio-item col-lg-4 col-md-6 col-sm-9 reveal reveal-delay-${delay}`}>
      <Link to={`/projects/${project.id}`} className="portfolio-card">
        <div>
          <img className="portfolio-img img-1" src={project.image} alt={project.title} />
        </div>
        <div className="portfolio-body">
          <div className="year">{project.year}</div>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="portfolio-footer">
            <div className="author-info">
              <img src={project.author.avatar} alt={project.author.name} className="author-avatar" />
              <div>
                <div className="author-name">{project.author.name}</div>
                <div className="author-position">{project.author.position}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Header />

      <main>

        <section id="hero" className="section-hero">
          <div className="hero-glow"></div>
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-lg-8 me-auto text-start">
                <div className="pill mb-4 reveal">
                  <span className="dot"></span> DEEPMARKS INTELLIGENT SYSTEM
                </div>
                <h1 className="hero-title reveal reveal-delay-1">
                  Brand names that connect on a<br />
                  <em>deep emotional level</em>.
                  <br />
                  Powered by <em>expert AI linguistics </em>
                </h1>
                <p className="hero-sub mx-auto reveal reveal-delay-2">
                  Skip the generic lists. <strong>deepmarks </strong> is an elite naming platform driven by an expert
                  linguistic AI designed to solve your branding needs instantly. We unlock distinctive, domain-ready
                  brand names that go beyond surface definitions to build
                  <strong> deep </strong> emotional connections with your audience and command ultimate market authority.
                </p>
                <div className="mt-4 reveal reveal-delay-3">
                  <a
                    href="https://deepmarks.vercel.app/name-branding"
                    className="btn btn-prim me-3 text-capitalize mb-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Generate Your Brand Name{' '}
                    <span className="bi bi-arrow-right ms-1" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-about pb-5">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-5 reveal">
                <span className="label-tag">About Deepmarks</span>
                <h2 className="deepmarks-h2-xl">Visual Case Studies & Brand Execution Guides</h2>
                <p className="deepmarks-lead muted-tall">
                  We turn your generated brand name into a complete visual brand identity and comprehensive execution
                  guide. We build out logo marks, color systems, and strict typography rules to bring your concept to
                  life and carve deep emotional connections with your clients.
                </p>
                <ul className="deepmarks-bullets">
                  <li className="deepmarks-bullet">
                    <i className="bi bi-check-circle-fill deepmarks-icon"></i> Science based naming · based on name
                    archetypes
                  </li>
                  <li className="deepmarks-bullet">
                    <i className="bi bi-check-circle-fill deepmarks-icon"></i> 47% growth in new customers
                  </li>
                  <li className="deepmarks-bullet">
                    <i className="bi bi-check-circle-fill deepmarks-icon"></i> Precise names that fit your brand
                  </li>
                </ul>
                  <Link to="/" className="btn btn-prim mt-5 text-capitalize">
                  Generate Your Brand Name{' '}
                  <span className="bi bi-arrow-right ms-1" aria-hidden="true"></span>
                </Link>
              </div>
              <div className="col-lg-6 offset-lg-1 reveal reveal-delay-2">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="stat-box">
                      <div className="stat-num">200+</div>
                      <div className="stat-label">Happy Customers</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-box">
                      <div className="stat-num">47%</div>
                      <div className="stat-label">Avg. Growth</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-box">
                      <div className="stat-num">3</div>
                      <div className="stat-label">Expert Packages</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-box">
                      <div className="stat-num">∞</div>
                      <div className="stat-label">Creative Ideas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section-portfolio">
          <div className="container">
            <div className="text-center mb-5 reveal">
              <span className="label-tag">Portfolio</span>
              <h2 className="deepmarks-h2-xl">
                Our Selected Projects
                <br />
                <em className="deepmarks-gold">That Elevate Brands</em>
              </h2>
              <p className="deepmarks-subhead">
                A curated collection of our best work — crafted with precision and brought to life in collaboration
                with visionary entrepreneurs, startups, and small businesses.
              </p>
            </div>

            <div className="row g-4 items-scroll-row">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={project.id} project={project} delay={idx + 1} />
              ))}
            </div>

            <div className="text-center mt-5 reveal">
              <a href="#" className="btn btn-outline-prim">
                See More
                <span className="deepmarks-arrow ms-1" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="section-features">
          <div className="container">
            <div className="text-center mb-5 reveal">
              <span className="label-tag">Built for Entrepreneurs</span>
              <h2 className="deepmarks-h2-xl deepmarks-center-tight">
                Powered by branding science &amp; world-class design
              </h2>
            </div>

            <div className="row g-4 items-scroll-row">
              <div className="col-md-6 reveal reveal-delay-1">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="bi bi-layers"></i>
                  </div>
                  <h4>Intentional Branding — Not Just a Logo</h4>
                  <p>
                    Your brand's visual identity shows people who you are — how they see, trust, and remember your
                    business. At Deepmarks, we don't just make random visuals. We deliver branding and identity solutions
                    designed with strategy, clarity, and impact — mixing brand strategy consulting, brand design services,
                    and brand identity development.
                  </p>
                </div>
              </div>

              <div className="col-md-6 reveal reveal-delay-2">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="bi bi-person-hearts"></i>
                  </div>
                  <h4>Emotionally Aligned Brand Archetypes</h4>
                  <p>
                    A strong brand has a personality people remember. We use research-backed archetypes to define your
                    brand's emotional core, so your logo, colors, typography, and messaging all speak with the same voice.
                    Archetypes are the emotional DNA of every brand — universal patterns that shape how people connect,
                    trust, and remember.
                  </p>
                </div>
              </div>

              <div className="col-md-6 reveal reveal-delay-1">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h4>Brand Positioning &amp; Strategy</h4>
                  <p>
                    We work with you to define your unique space in the market. Through competitive analysis, audience
                    research, and strategic positioning frameworks, we ensure your brand stands out with clarity, authority,
                    and purpose.
                  </p>
                </div>
              </div>

              <div className="col-md-6 reveal reveal-delay-2">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="bi bi-palette2"></i>
                  </div>
                  <h4>Complete Visual Identity System</h4>
                  <p>
                    From logo creation to typography, color palettes, and real-world brand applications — we build cohesive
                    systems that scale. Every touchpoint is crafted to look premium, consistent, and aligned with your
                    brand's core personality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section-process pt-5">
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-lg-4 reveal">
                <span className="label-tag">How it Works</span>
                <h2 className="deepmarks-h2-xl">Four steps to your premium brand</h2>
                <p className="deepmarks-small muted-tall">
                  From first brief to final delivery — a clear, collaborative process designed to bring your brand to life
                  with precision and purpose.
                </p>
                <a href="https://deepmarks.vercel.app/name-branding" className="btn btn-prim mt-4" target="_blank" rel="noreferrer">
                  Get started
                </a>
              </div>

              <div className="col-lg-7 offset-lg-1 reveal reveal-delay-2">
                <div className="step-row">
                  <div className="step-num">01</div>
                  <div className="step-body">
                    <h5>Explore Our Creative Work</h5>
                    <p>
                      Browse Deepmarks' portfolio and discover premium brand identities crafted for modern businesses. From
                      logos to full visual systems, every project showcases our design quality and creative direction.
                    </p>
                  </div>
                </div>
                <div className="step-connector"></div>
                <div className="step-row">
                  <div className="step-num">02</div>
                  <div className="step-body">
                    <h5>Submit Your Brand Request</h5>
                    <p>
                      Fill out the form with your business details, your name, email, and project goals. Choose the package
                      that fits your needs and tell us what kind of visual identity you're looking for.
                    </p>
                  </div>
                </div>
                <div className="step-connector"></div>
                <div className="step-row">
                  <div className="step-num">03</div>
                  <div className="step-body">
                    <h5>Connect With Our Designers</h5>
                    <p>
                      Our team reviews your submission and reaches out to discuss your vision, timeline, and expectations.
                      You'll be matched with the designer whose style best fits your brand direction.
                    </p>
                  </div>
                </div>
                <div className="step-connector"></div>
                <div className="step-row">
                  <div className="step-num">04</div>
                  <div className="step-body">
                    <h5>Launch with Confidence</h5>
                    <p>
                      Walk away with a complete visual identity system — premium, consistent, and ready to scale. From logo
                      to real-world applications, your brand will look strong across every touchpoint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section-pricing">
          <div className="container">
            <div className="text-center mb-5 reveal">
              <span className="label-tag">Pricing</span>
              <h2 className="deepmarks-h2-xl">Plans for all businesses</h2>
              <p className="deepmarks-pricing-sub">Suitable for Personal, Agencies &amp; Startups.</p>
            </div>

            <div className="row g-4 align-items-stretch items-scroll-row">
              <div className="col-lg-4 col-md-8 reveal reveal-delay-1">
                <div className="pricing-card">
                  <div className="pricing-tier">Basic</div>
                  <div className="pricing-price">
                    <sup>$</sup>499
                  </div>
                  <p className="pricing-desc">
                    For early-stage founders validating their brand — everything you need to start strong.
                  </p>
                  <ul className="pricing-features">
                    <li>
                      <i className="bi bi-check-lg"></i> 1 Project
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Brand name refinement (if needed)
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Custom Logo Design
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> 2 revision rounds
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Color palette
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Logo files (PNG, SVG, PDF)
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-prim w-100">
                    Start Now
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-8 reveal reveal-delay-2">
                <div className="pricing-card recommended">
                  <div className="pricing-badge">Recommended</div>
                  <div className="pricing-tier">Growth</div>
                  <div className="pricing-price">
                    <sup>$</sup>1,200
                  </div>
                  <p className="pricing-desc">
                    For growing businesses looking to appear more established and cohesive across platforms.
                  </p>
                  <ul className="pricing-features">
                    <li>
                      <i className="bi bi-check-lg"></i> 250+ Revisions
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Everything in Basic
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> 3 Logo concepts
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> 4 revision rounds
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Business Card Design
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Social Media Post Templates
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-prim w-100">
                    Start Now
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-8 reveal reveal-delay-3">
                <div className="pricing-card">
                  <div className="pricing-tier">Premium</div>
                  <div className="pricing-price">
                    <sup>$</sup>2,500
                  </div>
                  <p className="pricing-desc">
                    For established businesses, agencies, and brands preparing for scaling or premium positioning.
                  </p>
                  <ul className="pricing-features">
                    <li>
                      <i className="bi bi-check-lg"></i> 250+ Revisions
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Everything in Growth
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Advanced Brand Strategy Direction
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Unlimited Revisions
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Full Brand Identity System
                    </li>
                    <li>
                      <i className="bi bi-check-lg"></i> Website UI Direction / Visual Assets
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-outline-prim w-100">
                    Start Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0 reveal">
                <span className="label-tag">FAQ</span>
                <h2 className="deepmarks-h2-xl">Frequently Asked Questions</h2>
                <p className="deepmarks-lead muted-tall deepmarks-faq-sub">
                  Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
                </p>
              </div>

              <div className="col-lg-7 offset-lg-1 reveal reveal-delay-2">
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                      >
                        <span className="faq-question">How Does Deepmarks Work?</span>
                        <i className="faq-plus-icon bi bi-plus-lg" aria-hidden="true"></i>
                        <i className="faq-minus-icon bi bi-dash-lg" aria-hidden="true"></i>
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        You submit your brand details through our form, we review your goals and match you with the right
                        designer. You'll then collaborate on a brand identity tailored to your business — from concept to
                        final deliverables.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                      >
                        <span className="faq-question">What Branding Services Can I Request?</span>
                        <i className="faq-plus-icon bi bi-plus-lg" aria-hidden="true"></i>
                        <i className="faq-minus-icon bi bi-dash-lg" aria-hidden="true"></i>
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        We offer logo design, brand strategy consulting, full visual identity systems, color palette creation,
                        typography selection, business card design, social media templates, and website UI direction.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                      >
                        <span className="faq-question">How Are Top Designers Chosen for My Project?</span>
                        <i className="faq-plus-icon bi bi-plus-lg" aria-hidden="true"></i>
                        <i className="faq-minus-icon bi bi-dash-lg" aria-hidden="true"></i>
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Our team curates matches based on your brief, budget, and aesthetic direction. Each designer goes
                        through a vetting process to ensure quality, style diversity, and strategic thinking.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                      >
                        <span className="faq-question">What Happens After I Submit My Brief?</span>
                        <i className="faq-plus-icon bi bi-plus-lg" aria-hidden="true"></i>
                        <i className="faq-minus-icon bi bi-dash-lg" aria-hidden="true"></i>
                      </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Our team reviews your submission within 1–2 business days and reaches out to align on vision,
                        timeline, and package. You'll receive a clear proposal and a designer match before any work begins.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                      >
                        <span className="faq-question">Is Deepmarks a Marketplace or Full-Service Agency?</span>
                        <i className="faq-plus-icon bi bi-plus-lg" aria-hidden="true"></i>
                        <i className="faq-minus-icon bi bi-dash-lg" aria-hidden="true"></i>
                      </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Deepmarks is a full-service branding agency. We manage the entire process — from brand strategy to
                        final file delivery — giving you a curated, high-touch experience rather than an open marketplace.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq6"
                      >
                        <span className="faq-question">Do I Work Directly With the Designer?</span>
                        <i className="faq-plus-icon bi bi-plus-lg" aria-hidden="true"></i>
                        <i className="faq-minus-icon bi bi-dash-lg" aria-hidden="true"></i>
                      </button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes. Once matched, you communicate directly with your assigned designer — sharing feedback, approving
                        concepts, and guiding the direction. Our team stays available to support at every stage.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              <Link to="/contact" className="btn btn-prim btn-lg px-5 text-capitalize">
                Start now <span className="deepmarks-arrow ms-2" aria-hidden="true"></span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

