import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { saveOrder } from '../firebase/firestore';
import '../assets/css/about.css';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    country: '',
    paymentMethod: 'credit-card',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const shipping = cartTotal > 500 ? 0 : 25;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Select a payment method';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      navigate('/cart');
      return;
    }

    setSubmitting(true);

    const orderObject = {
      customerName: formData.customerName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      country: formData.country,
      paymentMethod: formData.paymentMethod,
      products: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      totalAmount: total,
      orderDate: new Date().toISOString(),
      userId: user?.id || 'guest',
      status: 'pending',
    };

    try {
      // Future Firestore Order Save Location
      // This will save the order to Firestore when Firebase is connected
      await saveOrder(orderObject);

      const orders = JSON.parse(localStorage.getItem('asl_orders') || '[]');
      orders.push({ ...orderObject, id: `order-${Date.now()}` });
      localStorage.setItem('asl_orders', JSON.stringify(orders));

      clearCart();
      toast.success('Order placed successfully! Thank you for shopping with us.');
      navigate('/');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page page-enter page-enter-active">
        <Container>
          <div className="cart-empty">
            <h3>No Items to Checkout</h3>
            <p>Add some products to your cart first.</p>
            <button className="btn-luxury btn-luxury-filled" onClick={() => navigate('/jewellery')}>
              Shop Now
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="checkout-page page-enter page-enter-active">
      <Container>
        <div className="products-header">
          <p className="section-subtitle">Secure Checkout</p>
          <h1 className="section-title">Complete Your Order</h1>
          <div className="gold-divider"></div>
        </div>

        <Row>
          <Col lg={7}>
            <div className="checkout-form-card glass-card">
              <form className="checkout-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="customerName"
                    className="form-control"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                  {errors.customerName && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.customerName}</p>}
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your full address"
                  />
                  {errors.address && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.address}</p>}
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter your country"
                  />
                  {errors.country && <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '6px' }}>{errors.country}</p>}
                </div>

                <div className="form-group">
                  <label>Payment Method</label>
                  <select
                    name="paymentMethod"
                    className="form-select"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                  >
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Bank Transfer</option>
                  </select>
                </div>

                <button type="submit" className="btn-luxury btn-luxury-filled" disabled={submitting} style={{ width: '100%', marginTop: '16px' }}>
                  {submitting ? 'Processing...' : `Place Order — $${total.toLocaleString()}`}
                </button>
              </form>
            </div>
          </Col>

          <Col lg={5}>
            <div className="checkout-summary glass-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                Order Summary
              </h3>

              {cartItems.map((item) => (
                <div key={item.id} className="checkout-item">
                  <div className="checkout-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="checkout-item-details">
                    <p className="checkout-item-name">{item.name}</p>
                    <p className="checkout-item-qty">Qty: {item.quantity}</p>
                  </div>
                  <p className="checkout-item-price">${(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}

              <div className="summary-row" style={{ marginTop: '16px' }}>
                <span>Subtotal</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
