import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 shadow-premium">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-gradient">BabyBliss</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {isHome ? (
              <>
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-rose-500 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    {item}
                  </a>
                ))}
              </>
            ) : (
              <>
                <Link to="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-rose-500 rounded-lg hover:bg-gray-50 transition-all">
                  Home
                </Link>
                <Link to="/products" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-rose-500 rounded-lg hover:bg-gray-50 transition-all">
                  All Products
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2.5 text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Button with Badge */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2.5 rounded-xl font-medium shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce-subtle shadow-premium">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="pb-4 animate-slide-up">
            <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search baby essentials..."
                className="w-full px-5 py-3 pr-12 rounded-xl border-2 border-gray-200 focus:border-rose-400 focus:outline-none transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
