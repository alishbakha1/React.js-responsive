import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../assets/css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page page-enter page-enter-active">
      <Container>
        <div className="products-header">
          <p className="section-subtitle">Get In Touch</p>
          <h1 className="section-title">Contact Us</h1>
          <div className="gold-divider"></div>
          <p className="text-muted-theme" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We&apos;d love to hear from you. Reach out for inquiries, custom orders, or partnership opportunities.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="contact-info-card glass-card">
              <div className="contact-info-item">
                <div className="contact-info-icon"><FaEnvelope /></div>
                <div>
                  <h5>Email Us</h5>
                  <a href="mailto:info@alishbasanaluxury.com">info@alishbasanaluxury.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon"><FaPhone /></div>
                <div>
                  <h5>Call Us</h5>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h5>Visit Us</h5>
                  <p>123 Luxury Avenue, Fashion District, New York, NY 10001</p>
                </div>
              </div>

              <div className="social-links">
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
            </div>
          </Col>

          <Col lg={8}>
            <div className="contact-form-card glass-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                      {errors.name && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.name}</p>}
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                      />
                      {errors.email && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.email}</p>}
                    </div>
                  </Col>
                </Row>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                  />
                  {errors.subject && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.subject}</p>}
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                  />
                  {errors.message && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.message}</p>}
                </div>

                <button type="submit" className="btn-luxury btn-luxury-filled">
                  Send Message
                </button>
              </form>
            </div>
          </Col>
        </Row>

        <div className="contact-map">
          <iframe
            title="Alishba Sana Luxury Location"
            src="https://maps.google.com/maps?q=New+York+Fashion+District&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
