import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import NotificationButton from '../components/NotificationButton';
import OfferCarousel from '../components/OfferCarousel';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { addToCart } = useCart();
  const [addedProducts, setAddedProducts] = useState({});
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.querySelectorAll('.hero-content > *'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
    );

    gsap.fromTo(
      heroRef.current.querySelector('.hero-image'),
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: 'power2.out' }
    );

    gsap.fromTo(
      categoriesRef.current.querySelectorAll('.category-card'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: categoriesRef.current, start: 'top 85%' }
      }
    );

    gsap.fromTo(
      productsRef.current.querySelectorAll('.product-card'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: productsRef.current, start: 'top 85%' }
      }
    );

    gsap.fromTo(
      aboutRef.current.querySelectorAll('.about-section'),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: aboutRef.current, start: 'top 85%' }
      }
    );

    gsap.fromTo(
      contactRef.current.querySelectorAll('.contact-item'),
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: { trigger: contactRef.current, start: 'top 85%' }
      }
    );
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const categories = [
    { name: 'Clothing', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop', gradient: 'from-cyan-300 to-blue-300' },
    { name: 'Baby Care', image: 'https://images.unsplash.com/photo-1584462689827-c0e0c7c7e0c7?w=400&h=400&fit=crop', gradient: 'from-pink-300 to-rose-300' },
    { name: 'Toys', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop', gradient: 'from-green-300 to-emerald-300' },
    { name: 'Essentials', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop', gradient: 'from-amber-300 to-orange-300' }
  ];

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
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative gradient-mesh min-h-screen flex items-center px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content space-y-8">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-700">Trusted by 10,000+ Parents</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Premium Care for Your
                <span className="text-gradient block">Little Ones</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Carefully curated collection of premium baby products designed for comfort, safety, and style.
              </p>

              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex -space-x-3 flex-shrink-0">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 border-4 border-white"></div>
                  ))}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 whitespace-nowrap">10,000+ Happy Parents</div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 flex-wrap">
                    {renderStars(5)}
                    <span className="ml-1 whitespace-nowrap">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#products" className="group inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-xl font-medium shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                  Explore Collection
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#about" className="inline-flex items-center gap-2 glass text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-white transition-all duration-300">
                  Learn More
                </a>
              </div>

              <div className="pt-4">
                <NotificationButton />
              </div>
            </div>

            <div className="hero-image relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-300 rounded-[3rem] blur-3xl opacity-20"></div>
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-premium-lg">
                  <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=800&fit=crop" alt="Happy baby" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl shadow-premium p-6 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Certified Safe</div>
                      <div className="text-sm text-gray-600">100% Quality Assured</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 glass rounded-2xl shadow-premium p-4 text-center">
                  <div className="text-3xl font-bold text-gradient">99%</div>
                  <div className="text-xs text-gray-600 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Discover our curated collections</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <a key={index} href="#products" className="category-card group relative glass rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 lg:px-8 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>, title: 'Free Delivery', desc: 'On orders over ₹2,000', gradient: 'from-cyan-300 to-blue-300' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, title: '24/7 Support', desc: 'Always here to help', gradient: 'from-pink-300 to-rose-300' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Trusted Quality', desc: 'Certified products', gradient: 'from-green-300 to-emerald-300' }
            ].map((feature, index) => (
              <div key={index} className="glass rounded-3xl p-8 text-center shadow-premium hover:shadow-premium-lg transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} id="products" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Handpicked essentials for your little one</p>
          </div>

          <OfferCarousel />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.slice(0, 8).map((product, index) => (
              <div 
                key={product.id} 
                className="product-card product-card-hover group glass rounded-3xl shadow-premium hover:shadow-premium-lg overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                    <h3 className="font-bold text-gray-900 mb-3 hover:text-rose-500 transition-colors line-clamp-2 group-hover:scale-105 transition-transform duration-300">{product.name}</h3>
                  </Link>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  
                  <button 
                    onClick={() => handleAddToCart(product)} 
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      addedProducts[product.id] 
                        ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-white' 
                        : 'bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:scale-105 shadow-premium hover:shadow-premium-lg'
                    }`}
                  >
                    {addedProducts[product.id] ? (
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
          
          <div className="text-center">
            <Link to="/products" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-10 py-4 rounded-xl font-medium shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300">
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 px-6 lg:px-8 gradient-mesh">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              About <span className="text-gradient">BabyBliss</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Making parenting easier, one premium product at a time</p>
          </div>

          <div className="about-section glass rounded-[3rem] p-12 mb-8 shadow-premium-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At BabyBliss, we believe that every parent deserves access to safe, high-quality products that make caring for their little ones easier and more enjoyable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by parents, for parents, we understand the challenges and joys of raising children.
            </p>
          </div>

          <div className="about-section grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Safety First', desc: 'Every product is tested and certified', gradient: 'from-green-300 to-emerald-300' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, title: 'Quality Guaranteed', desc: 'Trusted brands known for excellence', gradient: 'from-amber-300 to-orange-300' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Eco-Conscious', desc: 'Sustainable and environmentally friendly', gradient: 'from-teal-300 to-cyan-300' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, title: 'Parent-Approved', desc: 'Real parents test every item', gradient: 'from-pink-300 to-rose-300' }
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-8 flex gap-5 shadow-premium hover:shadow-premium-lg transition-all duration-500 group">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-section glass rounded-[3rem] p-12 shadow-premium-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { value: '10,000+', label: 'Happy Parents', gradient: 'from-cyan-400 to-blue-400' },
                { value: '500+', label: 'Quality Products', gradient: 'from-pink-400 to-rose-400' },
                { value: '99%', label: 'Satisfaction Rate', gradient: 'from-green-400 to-emerald-400' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>{stat.value}</div>
                  <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, title: 'Email', info: 'support@babybliss.com', gradient: 'from-cyan-300 to-blue-300' },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, title: 'Phone', info: '1800-BABY-BLISS', gradient: 'from-pink-300 to-rose-300' },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, title: 'Live Chat', info: 'Available 24/7', gradient: 'from-green-300 to-emerald-300' },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Visit Us', info: 'Mumbai, India', gradient: 'from-amber-300 to-orange-300' }
            ].map((contact, i) => (
              <div key={i} className="contact-item group glass rounded-2xl shadow-premium hover:shadow-premium-lg p-8 text-center transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {contact.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600 text-sm">{contact.info}</p>
              </div>
            ))}
          </div>

          <div className="contact-item glass rounded-[3rem] shadow-premium-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Follow Us</h3>
            <div className="flex justify-center gap-4 mb-8">
              {[
                { gradient: 'from-blue-500 to-blue-600', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { gradient: 'from-pink-500 to-rose-600', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { gradient: 'from-blue-400 to-cyan-500', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg> },
                { gradient: 'from-red-500 to-rose-600', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> }
              ].map((social, i) => (
                <a key={i} href="#" className={`w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-500 shadow-premium hover:shadow-premium-lg`}>
                  {social.icon}
                </a>
              ))}
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-10 py-4 rounded-xl font-medium shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300">
              Send us a Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
