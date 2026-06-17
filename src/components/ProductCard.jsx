import { FaHeart, FaEye, FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate('/checkout', { state: { buyNow: true, product } });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} style={{ opacity: i < Math.floor(rating) ? 1 : 0.3 }} />
    ));
  };

  return (
    <div className="product-card glass-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <button
          className={`product-action-btn product-wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Add to wishlist"
        >
          <FaHeart />
        </button>
        <div className="product-card-overlay">
          <div className="product-card-actions">
            <button
              className="product-action-btn"
              onClick={() => onQuickView(product)}
              aria-label="Quick view"
            >
              <FaEye />
            </button>
          </div>
        </div>
      </div>

      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        <p className="product-price">${product.price.toLocaleString()}</p>

        <div className="product-card-buttons">
          <button className="btn-luxury" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="btn-luxury btn-luxury-filled" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
