import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../assets/css/cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const shipping = cartTotal > 0 ? (cartTotal > 500 ? 0 : 25) : 0;
  const total = cartTotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page page-enter page-enter-active">
        <Container>
          <div className="cart-empty">
            <FaShoppingCart className="cart-empty-icon" />
            <h3>Your Cart is Empty</h3>
            <p>Discover our exquisite collections and add something special.</p>
            <div className="cart-actions" style={{ justifyContent: 'center' }}>
              <Link to="/jewellery" className="btn-luxury btn-luxury-filled">Shop Jewellery</Link>
              <Link to="/bags" className="btn-luxury">Shop Bags</Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="cart-page page-enter page-enter-active">
      <Container>
        <div className="products-header">
          <p className="section-subtitle">Shopping</p>
          <h1 className="section-title">Your Cart</h1>
          <div className="gold-divider"></div>
        </div>

        <Row>
          <Col lg={8}>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item glass-card">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price.toLocaleString()}</p>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)} aria-label="Decrease quantity">−</button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => increaseQuantity(item.id)} aria-label="Increase quantity">+</button>
                  </div>
                </div>
                <p className="cart-item-total">${(item.price * item.quantity).toLocaleString()}</p>
                <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                  <FaTrash />
                </button>
              </div>
            ))}

            <div className="cart-actions">
              <Link to="/jewellery" className="btn-luxury">Continue Shopping</Link>
              <button className="btn-luxury" onClick={clearCart}>Clear Cart</button>
            </div>
          </Col>

          <Col lg={4}>
            <div className="cart-summary glass-card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              {cartTotal < 500 && cartTotal > 0 && (
                <p className="cart-note">
                  Free shipping on orders over $500
                </p>
              )}
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <button className="btn-luxury btn-luxury-filled" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
