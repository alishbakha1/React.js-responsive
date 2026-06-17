import { Container, Row, Col } from 'react-bootstrap';
import { FaGem, FaHandSparkles, FaGlobeAmericas, FaHeart } from 'react-icons/fa';
import '../assets/css/about.css';

const About = () => {
  const values = [
    { icon: <FaGem />, title: 'Luxury Craftsmanship', description: 'Every piece undergoes a rigorous 12-step quality process, ensuring perfection in every detail.' },
    { icon: <FaHandSparkles />, title: 'Handmade Crystal Collection', description: 'Our artisans hand-set each crystal with precision, creating unique patterns that cannot be replicated.' },
    { icon: <FaGlobeAmericas />, title: 'Worldwide Shipping', description: 'We deliver luxury to your doorstep in over 50 countries with insured, trackable shipping.' },
    { icon: <FaHeart />, title: 'Passion & Dedication', description: 'Founded on love for beauty and artistry, every creation reflects our founder\'s personal touch.' },
  ];

  return (
    <div className="about-page page-enter page-enter-active">
      <Container>
        <section className="about-hero">
          <p className="section-subtitle">Our Story</p>
          <h1>About Alishba Sana Luxury</h1>
          <div className="gold-divider"></div>
          <p>
            Born from a passion for exquisite beauty and unparalleled craftsmanship, Alishba Sana Luxury
            has become a beacon of elegance in the world of fine jewellery and crystal fashion accessories.
          </p>
        </section>

        <div className="about-image-section animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1617032215733-0a0a0a0a0a0a?w=1200&q=80"
            alt="Luxury craftsmanship"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80'; }}
          />
          <div className="about-image-overlay">
            <h3>Where Art Meets Luxury</h3>
          </div>
        </div>

        <Row className="g-5 about-content-block">
          <Col lg={6}>
            <h3>Brand Story</h3>
            <p>
              Alishba Sana Luxury was founded with a simple yet powerful belief: every woman deserves
              to own pieces that make her feel extraordinary. What started in a small atelier has grown
              into an internationally acclaimed luxury brand.
            </p>
            <p>
              Our collections blend traditional craftsmanship techniques passed down through generations
              with contemporary design sensibilities, creating pieces that are both timeless and trendsetting.
            </p>
          </Col>
          <Col lg={6}>
            <h3>Founder Story</h3>
            <p>
              Alishba Sana&apos;s journey began with a single necklace crafted for her mother&apos;s birthday.
              The overwhelming response from friends and family inspired her to pursue her dream of creating
              a luxury brand that celebrates femininity and elegance.
            </p>
            <p>
              With formal training in gemology and fashion design, Alishba brings a unique perspective
              that bridges the worlds of fine jewellery and haute couture accessories.
            </p>
          </Col>
        </Row>

        <section className="section-padding" style={{ paddingTop: 0 }}>
          <p className="section-subtitle">Our Values</p>
          <h2 className="section-title">What We Stand For</h2>
          <div className="gold-divider"></div>

          <div className="about-values">
            {values.map((value, index) => (
              <div
                key={index}
                className="about-value-card glass-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="about-value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Row className="g-5 about-content-block">
          <Col lg={6}>
            <h3>Company Vision</h3>
            <p>
              To redefine luxury fashion by creating pieces that transcend trends and become cherished
              heirlooms. We envision a world where every woman has access to truly exceptional craftsmanship
              that celebrates her unique beauty and strength.
            </p>
          </Col>
          <Col lg={6}>
            <h3>Company Mission</h3>
            <p>
              To deliver unparalleled quality in every piece we create, while maintaining ethical sourcing
              practices and supporting artisan communities. We are committed to making luxury accessible
              to discerning women worldwide through our online boutique.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
