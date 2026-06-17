import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import CustomerReviews from '../components/CustomerReviews';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import jewelleryData from '../data/jewelleryData';
import bagsData from '../data/bagsData';
import { useState } from 'react';
import '../assets/css/home.css';

const Home = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const featuredJewellery = jewelleryData.filter((p) => p.featured).slice(0, 4);
  const featuredBags = bagsData.filter((p) => p.featured).slice(0, 4);

  const handleQuickView = (product) => {
    setModalProduct(product);
    setShowModal(true);
  };

  return (
    <div className="page-enter page-enter-active">
      <Hero />

      {/* Featured Jewellery */}
      <section className="showcase-section section-padding">
        <Container>
          <div className="showcase-header">
            <div>
              <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '8px' }}>Collection</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Featured Jewellery</h2>
            </div>
            <Link to="/jewellery" className="btn-luxury">View More</Link>
          </div>
          <div className="showcase-grid">
            {featuredJewellery.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Crystal Bags */}
      <section className="showcase-section section-padding" style={{ background: 'var(--color-dark-surface)' }}>
        <Container>
          <div className="showcase-header">
            <div>
              <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '8px' }}>Collection</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Crystal Fashion Bags</h2>
            </div>
            <Link to="/bags" className="btn-luxury">View More</Link>
          </div>
          <div className="showcase-grid">
            {featuredBags.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="founder-section section-padding">
        <Container>
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="founder-image-wrapper animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&q=80"
                  alt="Alishba Sana - Founder"
                  className="founder-image"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="founder-content animate-fade-in-up">
                <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '8px' }}>Our Founder</p>
                <h2>The Vision Behind the Brand</h2>
                <p className="founder-name">Alishba Sana</p>
                <p>
                  From a young age, Alishba Sana was captivated by the artistry of fine jewellery and the
                  brilliance of crystals. What began as a passion for creating beautiful pieces for friends
                  and family evolved into a globally recognized luxury brand.
                </p>
                <p>
                  With an unwavering commitment to excellence, Alishba founded her eponymous brand with a
                  singular vision: to create jewellery and fashion accessories that empower women to feel
                  confident, elegant, and extraordinary.
                </p>
                <p>
                  Today, Alishba Sana Luxury serves discerning clients across 50+ countries, each piece
                  telling a story of craftsmanship, passion, and timeless beauty.
                </p>

                <div className="founder-vision-mission">
                  <div className="vision-card">
                    <h4>Vision</h4>
                    <p>To be the world&apos;s most admired luxury fashion brand, celebrated for artistry, innovation, and empowering women worldwide.</p>
                  </div>
                  <div className="mission-card">
                    <h4>Mission</h4>
                    <p>To craft exceptional jewellery and crystal fashion pieces that blend traditional artistry with contemporary elegance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUsSection />
      <CustomerReviews />
      <Testimonials />
      <Newsletter />

      <ProductModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={modalProduct}
      />
    </div>
  );
};

export default Home;
