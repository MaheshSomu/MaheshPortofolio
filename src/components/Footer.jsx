export default function Footer() {
  return (
    <footer>
      <div className="footer-social">
        <a href="https://github.com/MaheshSomu" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mahesh-somu-533044315/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:somumahesh8886@gmail.com" className="social-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="footer-content">
        <a href="#home" className="footer-link">Home</a>
        <a href="#about" className="footer-link">About</a>
        <a href="#projects" className="footer-link">Projects</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>
      <p className="footer-copyright">
        <i className="fas fa-heart" style={{ color: 'var(--accent-color)' }}></i> Made with React & Bootstrap | 
        <strong> © 2026 Somu Mahesh Kiran Babu. All rights reserved.</strong>
      </p>
    </footer>
  );
}
