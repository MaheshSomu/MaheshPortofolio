import { useState } from 'react';
import resumePdf from '../assets/Mahesh Resume .pdf';

export default function HeroSection() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Somu Mahesh Kiran Babu</h1>
        <p>Full Stack Developer | Creative Problem Solver | Tech Enthusiast</p>
        <div className="hero-buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowResume(true)}
          >
            <i className="fas fa-eye"></i> View Resume
          </button>
          <a href="#contact" className="btn btn-outline-light">
            <i className="fas fa-envelope"></i> Contact Me
          </a>
        </div>
      </div>

      {showResume && (
        <div className="modal fade show d-block" tabIndex="-1" aria-labelledby="resumeModalLabel" aria-modal="true" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0">
                <h5 className="modal-title" id="resumeModalLabel">My Resume</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowResume(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0" style={{ height: '70vh', overflow: 'hidden' }}>
                <iframe
                  src={resumePdf}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  title="Resume PDF"
                ></iframe>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowResume(false)}
                >
                  Close
                </button>
                <a
                  href={resumePdf}
                  download="Mahesh_Resume.pdf"
                  className="btn btn-primary"
                >
                  <i className="fas fa-download"></i> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {showResume && <div className="modal-backdrop fade show"></div>}
    </section>
  );
}
