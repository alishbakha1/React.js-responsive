import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import '../assets/css/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <BSNavbar
      expand="lg"
      className={`luxury-navbar ${scrolled || !isHome ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          ALISHBA <span>SANA</span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="luxury-navbar-nav" />

        <BSNavbar.Collapse id="luxury-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/why-choose-us">Why Choose Us</Nav.Link>
            <Nav.Link as={NavLink} to="/customers">Happy Customers</Nav.Link>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="nav-link">
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/jewellery">Jewellery</Dropdown.Item>
                <Dropdown.Item as={Link} to="/bags">Crystal Bags</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>

          <div className="navbar-icons">
            <button
              className="navbar-icon-btn"
              onClick={() => navigate('/jewellery')}
              aria-label="Wishlist"
              title="Wishlist"
            >
              <FaHeart />
              {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
            </button>

            <button
              className="navbar-icon-btn"
              onClick={() => navigate('/cart')}
              aria-label="Cart"
              title="Cart"
            >
              <FaShoppingCart />
              {cartCount > 0 && <span className="icon-badge">{cartCount}</span>}
            </button>

            <Dropdown className="account-dropdown">
              <Dropdown.Toggle as="button" className="navbar-icon-btn" aria-label="Account">
                <FaUser />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {isAuthenticated ? (
                  <>
                    <Dropdown.Header>Hello, {user?.name}</Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>
                      <FaSignOutAlt /> Logout
                    </Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item as={Link} to="/login">
                      <FaSignInAlt /> Login
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/signup">
                      <FaUserPlus /> Signup
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
