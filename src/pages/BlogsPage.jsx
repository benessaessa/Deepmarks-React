import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

import blogImg1 from '../assets/portfolio.png'
import blogImg2 from '../assets/portfolio2.png'

const BLOGS = [
  {
    id: 'deep-emotion-branding',
    date: 'June 12, 2026',
    title: 'How deep emotion branding creates loyalty',
    badge: 'Brand Psychology',
    image: blogImg1,
  },
  {
    id: 'naming-science',
    date: 'May 29, 2026',
    title: 'Naming science: making brands feel instantly right',
    badge: 'AI Linguistics',
    image: blogImg2,
  },
  {
    id: 'identity-systems',
    date: 'April 18, 2026',
    title: 'Building identity systems that scale across touchpoints',
    badge: 'Design Systems',
    image: blogImg1,
  },
  {
    id: 'voice-and-archetypes',
    date: 'March 05, 2026',
    title: 'Voice & archetypes: the emotional DNA of your brand',
    badge: 'Strategy',
    image: blogImg2,
  },
  {
    id: 'from-brief-to-launch',
    date: 'February 22, 2026',
    title: 'From brief to launch: a process that delivers premium results',
    badge: 'Process',
    image: blogImg1,
  },
  {
    id: 'market-authority',
    date: 'January 10, 2026',
    title: 'Earning market authority through consistent brand execution',
    badge: 'Execution',
    image: blogImg2,
  },
]

function BlogCard({ blog }) {
  return (
    <Link to={`/blogs/${blog.id}`} className="blog-card" aria-label={`Open blog: ${blog.title}`}>
      <div className="blog-card-image">
        <img src={blog.image} alt={blog.title} />
        <span className="blog-card-badge">{blog.badge}</span>
      </div>

      <div className="blog-card-body">
        <div className="blog-card-date">{blog.date}</div>
        <h3 className="blog-card-title">{blog.title}</h3>
      </div>
    </Link>
  )
}

export default function BlogsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="blog-hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="pill mb-4 reveal">
                  <span className="dot"></span> Blogs
                </div>
                <h1 className="deepmarks-h2-xl">Latest insights from Deepmarks</h1>
                <p className="deepmarks-subhead ms-0">Thoughtful articles on naming, brand emotion, and identity systems.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="container">
            <div className="row g-4">
              {BLOGS.map((blog, idx) => (
                <div key={blog.id} className="col-lg-4 col-md-6 reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

