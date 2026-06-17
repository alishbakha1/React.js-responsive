import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import WhyChooseUs from '../pages/WhyChooseUs';
import Customers from '../pages/Customers';
import Jewellery from '../pages/Jewellery';
import Bags from '../pages/Bags';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/jewellery" element={<Jewellery />} />
      <Route path="/bags" element={<Bags />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
