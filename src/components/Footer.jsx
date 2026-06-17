import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Footer = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      e.target.reset();
    }
  };

  return (
    <footer className="luxury-footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="footer-brand">
            <h3>ALISHBA SANA</h3>
            <p>
              Premium luxury jewellery and customized crystal fashion bags.
              Crafted with passion, worn with pride. Worldwide shipping available.
            </p>
            <div className="social-links" style={{ marginTop: '20px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/why-choose-us">Why Choose Us</Link></li>
              <li><Link to="/customers">Happy Customers</Link></li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="footer-links">
            <h5>Products</h5>
            <ul>
              <li><Link to="/jewellery">Jewellery</Link></li>
              <li><Link to="/bags">Crystal Bags</Link></li>
              <li><Link to="/cart">Shopping Cart</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Col>

          <Col lg={4} md={6} className="footer-newsletter">
            <h5>Newsletter</h5>
            <p>Subscribe for exclusive offers and new collection updates.</p>
            <form onSubmit={handleNewsletter}>
              <input type="email" name="email" placeholder="Your email address" required />
              <button type="submit" className="btn-luxury btn-luxury-filled" style={{ width: '100%' }}>
                Subscribe
              </button>
            </form>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} <span>Alishba Sana Luxury</span>. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
