import { useState, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import jewelleryData from '../data/jewelleryData';
import '../assets/css/products.css';

const Jewellery = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [modalProduct, setModalProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = ['All', ...new Set(jewelleryData.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let result = [...jewelleryData];

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }

    if (priceRange === 'under1000') {
      result = result.filter((p) => p.price < 1000);
    } else if (priceRange === '1000-2500') {
      result = result.filter((p) => p.price >= 1000 && p.price <= 2500);
    } else if (priceRange === 'over2500') {
      result = result.filter((p) => p.price > 2500);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [search, category, priceRange, sortBy]);

  const handleQuickView = (product) => {
    setModalProduct(product);
    setShowModal(true);
  };

  return (
    <div className="products-page page-enter page-enter-active">
      <Container>
        <div className="products-header">
          <p className="section-subtitle">Collection</p>
          <h1 className="section-title">Luxury Jewellery</h1>
          <div className="gold-divider"></div>
          <p className="text-muted-theme" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Discover our exquisite collection of handcrafted jewellery, where every piece tells a story of elegance and artistry.
          </p>
        </div>

        <div className="products-filters glass-card">
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Search jewellery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <label>Category</label>
            <select className="filter-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Price Range</label>
            <select className="filter-select" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="all">All Prices</option>
              <option value="under1000">Under $1,000</option>
              <option value="1000-2500">$1,000 - $2,500</option>
              <option value="over2500">Over $2,500</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Sort By</label>
            <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        <p className="products-count">{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</p>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}

        <ProductModal show={showModal} onHide={() => setShowModal(false)} product={modalProduct} />
      </Container>
    </div>
  );
};

export default Jewellery;
