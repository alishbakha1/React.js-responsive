import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Laurent',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    text: 'The celestial diamond necklace exceeded all my expectations. The craftsmanship is absolutely breathtaking. Alishba Sana Luxury is my go-to for special occasions.',
  },
  {
    id: 2,
    name: 'Amara Williams',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
    text: 'My crystal aurora clutch received so many compliments at the gala. The attention to detail and quality of crystals is unmatched. Truly a luxury experience.',
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
    rating: 5,
    text: 'International shipping was seamless and the packaging was exquisite. The rose gold eternity ring is even more beautiful in person. Highly recommend!',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding">
      <Container>
        <p className="section-subtitle">Testimonials</p>
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="gold-divider"></div>

        <Row className="g-4">
          {testimonials.map((item, index) => (
            <Col lg={4} md={6} key={item.id}>
              <div
                className="testimonial-card glass-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img src={item.image} alt={item.name} className="testimonial-avatar" />
                <div className="testimonial-rating">
                  {Array.from({ length: item.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{item.text}&rdquo;</p>
                <p className="testimonial-author">{item.name}</p>
                <p className="testimonial-location">{item.location}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
