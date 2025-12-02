import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/products" className="text-blue-500 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-2xl">
            {i < rating ? '⭐' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-500">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                {renderStars(product.rating)}
                <span className="text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-5xl font-bold text-blue-600 mb-6">
                ${product.price}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors font-bold text-xl"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    added
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
                  }`}
                >
                  {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
                </button>
                <button
                  onClick={() => navigate('/cart')}
                  className="px-6 py-4 rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors font-bold"
                >
                  View Cart
                </button>
              </div>

              {/* Features */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-gray-700">Safe & Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚚</span>
                    <span className="text-gray-700">Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">↩️</span>
                    <span className="text-gray-700">Easy Returns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💬</span>
                    <span className="text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
