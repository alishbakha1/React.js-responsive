import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../assets/css/about.css';

const carouselReviews = [
  {
    id: 1,
    name: 'Sophia Laurent',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    review: 'The celestial diamond necklace is a masterpiece. I wore it to Paris Fashion Week and received countless compliments. Alishba Sana Luxury truly understands what modern elegance means.',
  },
  {
    id: 2,
    name: 'Amara Williams',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    review: 'My crystal aurora clutch was the star of every event last season. The quality of craftsmanship is extraordinary — you can feel the luxury in every detail.',
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    rating: 5,
    review: 'International shipping was flawless. The packaging alone made me feel like royalty. The rose gold eternity ring is now my most treasured possession.',
  },
  {
    id: 4,
    name: 'James Mitchell',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    review: 'Bought the sapphire royal bracelet as an anniversary gift for my wife. She was speechless. The presentation and quality exceeded every expectation.',
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    location: 'Madrid, Spain',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    rating: 5,
    review: 'The midnight crystal tote is my everyday luxury. It elevates every outfit and the crystals catch light beautifully. Already planning my next purchase!',
  },
];

const successStories = [
  {
    name: 'Sophia Laurent',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    story: 'After discovering Alishba Sana at a luxury expo, Sophia became a brand ambassador, showcasing pieces at Paris Fashion Week events.',
  },
  {
    name: 'Amara Williams',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    story: 'A fashion influencer with 2M followers, Amara featured our crystal bags in her NYC street style series, generating worldwide interest.',
  },
  {
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    story: 'Yuki ordered custom jewellery for her wedding. The bespoke pieces became family heirlooms passed down through generations.',
  },
];

const Customers = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % carouselReviews.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + carouselReviews.length) % carouselReviews.length);

  const current = carouselReviews[activeSlide];

  return (
    <div className="customers-page page-enter page-enter-active">
      <Container>
        <section className="about-hero">
          <p className="section-subtitle">Testimonials</p>
          <h1>Happy Customers</h1>
          <div className="gold-divider"></div>
          <p>Real stories from our global community of luxury fashion enthusiasts.</p>
        </section>

        {/* Customer Avatars */}
        <div className="text-center" style={{ marginBottom: '50px' }}>
          <div className="customer-avatars" style={{ justifyContent: 'center' }}>
            {carouselReviews.map((customer, index) => (
              <img
                key={customer.id}
                src={customer.image}
                alt={customer.name}
                className="customer-avatar"
                style={{
                  width: '80px',
                  height: '80px',
                  cursor: 'pointer',
                  opacity: index === activeSlide ? 1 : 0.6,
                  transform: index === activeSlide ? 'scale(1.15)' : 'scale(1)',
                }}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="customer-carousel glass-card animate-fade-in">
          <div className="customer-slide">
            <img src={current.image} alt={current.name} className="customer-slide-avatar" />
            <h4>{current.name}</h4>
            <p className="customer-location">{current.location}</p>
            <div className="customer-rating">
              {Array.from({ length: current.rating }, (_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="customer-review">&ldquo;{current.review}&rdquo;</p>
          </div>

          <div className="carousel-controls">
            <button className="btn-luxury" onClick={prevSlide} style={{ padding: '8px 20px' }}>
              Prev
            </button>
            {carouselReviews.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            <button className="btn-luxury" onClick={nextSlide} style={{ padding: '8px 20px' }}>
              Next
            </button>
          </div>
        </div>

        {/* Success Stories */}
        <section style={{ marginTop: '80px' }}>
          <p className="section-subtitle">Success Stories</p>
          <h2 className="section-title">Customer Journeys</h2>
          <div className="gold-divider"></div>

          <div className="customer-stories">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="customer-story-card glass-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="customer-story-header">
                  <img src={story.image} alt={story.name} className="customer-story-avatar" />
                  <div>
                    <h5>{story.name}</h5>
                    <span>{story.location}</span>
                  </div>
                </div>
                <p className="text-muted-theme" style={{ lineHeight: '1.7', fontSize: '0.9rem' }}>{story.story}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Customers;
