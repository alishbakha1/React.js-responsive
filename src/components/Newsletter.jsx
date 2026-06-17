import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success('Welcome to the Alishba Sana family! Check your inbox for exclusive offers.');
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section section-padding">
      <Container>
        <div className="newsletter-content glass-card" style={{ padding: '60px 40px' }}>
          <p className="section-subtitle" style={{ marginBottom: '16px' }}>Stay Connected</p>
          <h2>Join Our Exclusive Circle</h2>
          <p>
            Be the first to discover new collections, exclusive offers, and luxury fashion insights.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-luxury btn-luxury-filled">
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
