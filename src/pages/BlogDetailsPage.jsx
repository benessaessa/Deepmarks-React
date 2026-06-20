import { Link, useParams } from 'react-router-dom'
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
    author: {
      name: 'Noor Hassan',
      title: 'Creative Director',
      avatar: blogImg1,
    },
    image: blogImg1,
    content: [
      'Deep emotion branding is not about being loud — it is about being resonant. When your brand consistently signals the same feelings, audiences stop “noticing” and start “trusting.”',
      'Names, visuals, and tone should work together like one system. The moment they align, your brand becomes easy to remember and easier to choose.',
      'At Deepmarks, we treat emotional clarity as a design requirement — translating it into naming, identity rules, and real touchpoints.' ,
    ],
  },
  {
    id: 'naming-science',
    date: 'May 29, 2026',
    title: 'Naming science: making brands feel instantly right',
    badge: 'AI Linguistics',
    author: {
      name: 'Mariam Saeed',
      title: 'Brand Strategist',
      avatar: blogImg2,
    },
    image: blogImg2,
    content: [
      'A great name is more than a label. It is a promise — delivered through sound, rhythm, and meaning.',
      'Our approach combines linguistic intelligence with brand archetype research to create names that feel aligned before the first interaction.',
      'You get options that are structured, distinctive, and ready to scale across marketing, product, and community.' ,
    ],
  },
  {
    id: 'identity-systems',
    date: 'April 18, 2026',
    title: 'Building identity systems that scale across touchpoints',
    badge: 'Design Systems',
    author: {
      name: 'Tarek Amin',
      title: 'Design Lead',
      avatar: blogImg1,
    },
    image: blogImg1,
    content: [
      'Modern brands live everywhere: web, mobile, packaging, slides, social, and internal tools. Identity systems make your brand consistent without slowing you down.',
      'We build rules — not just assets. That means typography logic, spacing patterns, color usage, and flexible logo behavior across real scenarios.' ,
      'The result is execution that looks premium today and still holds up tomorrow.' ,
    ],
  },
  {
    id: 'voice-and-archetypes',
    date: 'March 05, 2026',
    title: 'Voice & archetypes: the emotional DNA of your brand',
    badge: 'Strategy',
    author: {
      name: 'Lina Farouk',
      title: 'Strategy Partner',
      avatar: blogImg2,
    },
    image: blogImg2,
    content: [
      'Brand archetypes define the emotional “why” behind your voice. They guide language choices so your messaging feels coherent at every touchpoint.',
      'When archetypes and naming agree, everything else becomes easier: tone, visuals, and the way your story lands.',
      'Deepmarks turns this into a practical direction you can use immediately.' ,
    ],
  },
  {
    id: 'from-brief-to-launch',
    date: 'February 22, 2026',
    title: 'From brief to launch: a process that delivers premium results',
    badge: 'Process',
    author: {
      name: 'Youssef Nader',
      title: 'Project Lead',
      avatar: blogImg1,
    },
    image: blogImg1,
    content: [
      'A great outcome is the result of a great process. Clear inputs reduce ambiguity and speed up high-quality decisions.',
      'We collaborate in steps — strategy first, then design execution, then systemization — so each stage improves the next.' ,
      'That’s how premium work stays consistent and repeatable.' ,
    ],
  },
  {
    id: 'market-authority',
    date: 'January 10, 2026',
    title: 'Earning market authority through consistent brand execution',
    badge: 'Execution',
    author: {
      name: 'Sara Khalil',
      title: 'Execution Partner',
      avatar: blogImg2,
    },
    image: blogImg2,
    content: [
      'Market authority is built through consistency. People remember patterns — and trust forms when those patterns hold up over time.',
      'Identity systems make that possible: you can ship new content without breaking the brand.' ,
      'Deepmarks helps teams execute with clarity, so the brand voice stays unmistakable.' ,
    ],
  },
]

export default function BlogDetailsPage() {
  const { id } = useParams()
  const blog = BLOGS.find((b) => b.id === id)

  return (
    <>
      <Header />

      <main>
        <section className="blog-details-hero">
          <div className="container">
            {!blog ? (
              <>
                <div className="pill mb-4 reveal">
                  <span className="dot"></span> Blog not found
                </div>
                <h1 className="deepmarks-h2-xl">We couldn’t find that post</h1>
                <Link to="/blogs" className="btn btn-outline-prim mt-4">Back to Blogs</Link>
              </>
            ) : (
              <div className="row g-5 align-items-start">
                <div className="col-lg-7">
                  <div className="pill mb-3 reveal">
                    <span className="dot"></span> {blog.badge}
                  </div>
                  <h1 className="deepmarks-h2-xl reveal">{blog.title}</h1>
                  <div className="blog-details-date reveal">{blog.date}</div>

                  <div className="author-info reveal mt-4">
                    <img src={blog.author.avatar} alt={blog.author.name} className="author-avatar" />
                    <div>
                      <div className="author-name">{blog.author.name}</div>
                      <div className="author-position">{blog.author.title}</div>
                    </div>
                  </div>

                  <p className="blog-details-lead reveal mt-4">
                    {blog.title} — a Deepmarks perspective on what makes brand execution feel instant, emotional, and premium.
                  </p>

                  <Link to="/blogs" className="btn btn-outline-prim mt-4 px-5 reveal">Back to Blogs</Link>
                </div>

                <div className="col-lg-5">
                  <div className="blog-details-image-wrapper reveal">
                    <img className="blog-details-image" src={blog.image} alt={blog.title} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {blog ? (
          <section className="blog-details-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="blog-details-body">
                    {blog.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </>
  )
}

