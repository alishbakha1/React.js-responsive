import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGem, FaHandSparkles, FaCrown, FaGlobeAmericas, FaShieldAlt, FaUsers } from 'react-icons/fa';

const features = [
  { icon: <FaGem />, title: 'Premium Craftsmanship', description: 'Every piece is meticulously handcrafted by master artisans with decades of experience.' },
  { icon: <FaHandSparkles />, title: 'Handmade Crystal Fashion', description: 'Our crystal bags feature hand-set stones, making each piece a unique work of art.' },
  { icon: <FaCrown />, title: 'Luxury Materials', description: 'Only the finest 18K gold, genuine diamonds, and premium crystals are used.' },
  { icon: <FaGlobeAmericas />, title: 'Worldwide Shipping', description: 'Complimentary insured shipping to over 50 countries with elegant packaging.' },
  { icon: <FaShieldAlt />, title: 'Secure Shopping', description: 'SSL encrypted checkout with buyer protection and authenticity guarantee.' },
  { icon: <FaUsers />, title: 'Trusted Globally', description: 'Over 500 satisfied customers worldwide trust our brand for luxury fashion.' },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding">
      <Container>
        <p className="section-subtitle">Our Promise</p>
        <h2 className="section-title">Why Choose Us</h2>
        <div className="gold-divider"></div>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className="preview-card glass-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="preview-card-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center" style={{ marginTop: '50px' }}>
          <Link to="/why-choose-us" className="btn-luxury">
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
