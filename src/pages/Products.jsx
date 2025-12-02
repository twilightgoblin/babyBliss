import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('default');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
    const category = searchParams.get('category');
    const urlSearch = searchParams.get('search');
    
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }

    let filtered = category
      ? products.filter(p => p.category === category)
      : products;

    // Apply search filter
    if (searchQuery || urlSearch) {
      const query = (searchQuery || urlSearch).toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  }, [searchParams, sortBy, searchQuery]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen gradient-mesh pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-gradient">Our Products</h1>
          
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search baby essentials..."
                className="w-full px-6 py-4 pr-12 rounded-2xl glass border-2 border-transparent focus:border-rose-400 focus:outline-none transition-all shadow-premium"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-bold text-rose-500">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-gray-700 font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="glass border-2 border-transparent focus:border-rose-400 rounded-xl px-5 py-3 focus:outline-none transition-all shadow-premium"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating">Rating: High → Low</option>
                <option value="name">Name: A → Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card-hover glass rounded-3xl shadow-premium hover:shadow-premium-lg overflow-hidden group animate-slide-in-left"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Link to={`/product/${product.id}`} className="block relative">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full text-sm font-bold text-rose-500 shadow-premium">
                  ₹{product.price}
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-bold text-gray-900 mb-3 hover:text-rose-500 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    addedToCart[product.id]
                      ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-white'
                      : 'bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:scale-105 shadow-premium hover:shadow-premium-lg'
                  }`}
                >
                  {addedToCart[product.id] ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Added to Cart
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSortBy('default');
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-xl font-medium shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
