import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const customers = [
  { id: 1, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80', name: 'Sophia' },
  { id: 2, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80', name: 'Amara' },
  { id: 3, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80', name: 'Yuki' },
  { id: 4, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80', name: 'James' },
  { id: 5, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80', name: 'Elena' },
];

const CustomerReviews = () => {
  return (
    <section className="preview-section section-padding">
      <Container>
        <p className="section-subtitle">Happy Customers</p>
        <h2 className="section-title">Trusted Worldwide</h2>
        <div className="gold-divider"></div>

        <div className="text-center">
          <div className="customer-avatars">
            {customers.map((customer) => (
              <img
                key={customer.id}
                src={customer.image}
                alt={customer.name}
                className="customer-avatar"
                title={customer.name}
              />
            ))}
          </div>

          <div className="testimonial-rating" style={{ justifyContent: 'center', display: 'flex', gap: '4px', marginBottom: '16px' }}>
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} className="text-gold" />
            ))}
          </div>

          <p className="text-muted-theme" style={{ maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.8' }}>
            Join over 500+ satisfied customers from 50+ countries who trust Alishba Sana Luxury
            for their premium jewellery and crystal fashion needs.
          </p>

          <Link to="/customers" className="btn-luxury">
            Read Customer Stories
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CustomerReviews;
