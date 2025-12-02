import { useState, useEffect } from 'react';

const OfferCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      title: '🎉 New Arrivals',
      description: 'Fresh collection of baby essentials just landed!',
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      title: '🚚 Free Shipping',
      description: 'On all orders above ₹2,000',
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      title: '✨ Premium Quality',
      description: '100% certified safe products for your baby',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      title: '💝 Special Offers',
      description: 'Up to 30% off on selected items',
      gradient: 'from-amber-400 to-orange-400'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [offers.length]);

  return (
    <div className="relative overflow-hidden glass rounded-2xl shadow-premium mb-12">
      <div className="relative h-32 flex items-center justify-center">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${offer.gradient} opacity-10`}></div>
            <div className="relative text-center px-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-rose-500 w-8' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferCarousel;
