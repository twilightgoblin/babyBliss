import { useState, useEffect } from 'react';

const OnboardingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose}></div>
      
      <div className="relative glass rounded-3xl shadow-premium-lg max-w-md w-full p-8 animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-3xl mb-6 shadow-premium">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-gradient">BabyBliss</span>!
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Browse premium baby essentials with ease. Discover quality products designed for your little one's comfort and safety.
          </p>

          <div className="space-y-3 mb-8">
            {[
              { icon: '🛍️', text: 'Curated Collections' },
              { icon: '✨', text: 'Premium Quality' },
              { icon: '🚚', text: 'Fast Delivery' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-left">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-xl font-medium shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPopup;
