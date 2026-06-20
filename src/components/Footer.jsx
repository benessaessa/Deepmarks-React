export default function Footer() {
  return (
    <footer>
      <div className="container">

        <div className="row gy-5 justify-content-between">
          <div className="col-lg-4">
            <div className="footer-logo">deepmarks</div>
            <p className="footer-desc">Discover premium branding and visual design solutions tailored to your business vision.</p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address" />
              <button type="button" className="newsletter-btn text-white">Submit</button>
            </div>
            <div className="social-links">
              <a href="https://x.com/Deepmark194898" target="_blank" rel="noreferrer" className="social-btn">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@deepmarksai" target="_blank" rel="noreferrer" className="social-btn">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="https://www.linkedin.com/company/deep-marks/" target="_blank" rel="noreferrer" className="social-btn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2 offset-lg-2">
            <p className="footer-heading">Pages</p>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>

              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <p className="footer-heading">Social</p>
            <ul className="footer-links">
              <li>
                <a href="https://x.com/Deepmark194898" target="_blank" rel="noreferrer">
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@deepmarksai" target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/deep-marks/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="mb-0">© 2026 Deepmarks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

