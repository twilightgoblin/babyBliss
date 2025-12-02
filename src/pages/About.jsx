const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">☁️</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About BabyBliss
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Making parenting easier, one product at a time
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At BabyBliss, we believe that every parent deserves access to safe, high-quality products 
            that make caring for their little ones easier and more enjoyable. We carefully curate each 
            item in our collection to ensure it meets the highest standards of safety, comfort, and functionality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded by parents, for parents, we understand the challenges and joys of raising children. 
            Our goal is to be your trusted partner in this incredible journey, providing products that 
            bring peace of mind and moments of pure bliss.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-700">
                  Every product is tested and certified to meet or exceed safety standards.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">⭐</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-700">
                  We partner with trusted brands known for their commitment to excellence.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🌱</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Conscious</h3>
                <p className="text-gray-700">
                  We prioritize sustainable and environmentally friendly products.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">💙</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Parent-Approved</h3>
                <p className="text-gray-700">
                  Real parents test and review every item before it reaches our store.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-700 font-semibold">Happy Parents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Quality Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-700 font-semibold">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
