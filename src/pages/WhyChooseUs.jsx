import { Container } from 'react-bootstrap';
import { FaGem, FaHandSparkles, FaCrown, FaGlobeAmericas, FaShieldAlt, FaUsers } from 'react-icons/fa';
import '../assets/css/about.css';

const reasons = [
  {
    icon: <FaGem />,
    title: 'Premium Craftsmanship',
    description: 'Each piece is meticulously handcrafted by master artisans with over 20 years of experience. Our 12-step quality assurance process ensures every item meets the highest standards of luxury.',
  },
  {
    icon: <FaHandSparkles />,
    title: 'Handmade Crystal Fashion',
    description: 'Our signature crystal bags feature individually hand-set stones, creating unique patterns that make each bag a one-of-a-kind masterpiece. No two pieces are ever identical.',
  },
  {
    icon: <FaCrown />,
    title: 'Luxury Materials',
    description: 'We source only the finest materials — 18K gold, VS1 diamonds, South Sea pearls, and premium Swarovski crystals. Every material is ethically sourced and certified.',
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'Worldwide Shipping',
    description: 'Complimentary insured express shipping to over 50 countries. Each order arrives in our signature luxury packaging with a certificate of authenticity.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure Shopping',
    description: 'Shop with confidence using our SSL-encrypted checkout. We offer buyer protection, 30-day returns, and a lifetime craftsmanship warranty on all jewellery pieces.',
  },
  {
    icon: <FaUsers />,
    title: 'Trusted Global Customers',
    description: 'Join our community of 500+ satisfied customers across 50+ countries. Our 4.9-star average rating speaks to the quality and service our clients experience.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-page page-enter page-enter-active">
      <Container>
        <section className="about-hero">
          <p className="section-subtitle">Our Promise</p>
          <h1>Why Choose Alishba Sana</h1>
          <div className="gold-divider"></div>
          <p>
            We don&apos;t just sell luxury — we deliver an experience. Here&apos;s what sets us apart
            from the ordinary and makes us extraordinary.
          </p>
        </section>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card glass-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="why-card-icon">{reason.icon}</div>
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
