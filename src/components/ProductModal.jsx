import { Modal } from 'react-bootstrap';
import { FaHeart, FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';

const ProductModal = ({ show, onHide, product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  if (!product) return null;

  const handleBuyNow = () => {
    addToCart(product, 1);
    onHide();
    navigate('/checkout', { state: { buyNow: true, product } });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} style={{ opacity: i < Math.floor(rating) ? 1 : 0.3 }} />
    ));
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="product-modal">
      <Modal.Header closeButton>
        <Modal.Title style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Quick View
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="product-modal-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-modal-details">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <div className="product-rating">
                <span className="stars">{renderStars(product.rating)}</span>
                <span className="review-count">({product.reviews} reviews)</span>
              </div>
              <p className="product-price">${product.price.toLocaleString()}</p>
              <p className="product-description">{product.description}</p>

              <div className="product-modal-buttons">
                <button className="btn-luxury" onClick={() => { addToCart(product); onHide(); }}>
                  Add to Cart
                </button>
                <button className="btn-luxury btn-luxury-filled" onClick={handleBuyNow}>
                  Buy Now
                </button>
                <button
                  className={`product-action-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product)}
                  aria-label="Wishlist"
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
