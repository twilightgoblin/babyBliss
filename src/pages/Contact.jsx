import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you! Reach out with any questions or concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Support Info */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">support@babybliss.com</p>
                    <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">1-800-BABY-BLISS</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">💬</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Live Chat</h3>
                    <p className="text-gray-600">Available 24/7</p>
                    <p className="text-sm text-gray-500 mt-1">Click the chat icon below</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Baby Street<br />
                      Parentville, PA 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
              <p className="text-gray-700 mb-6">
                Stay connected for parenting tips, product updates, and special offers!
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl hover:scale-110 transition-transform shadow-md"
                  title="Facebook"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl hover:scale-110 transition-transform shadow-md"
                  title="Instagram"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl hover:scale-110 transition-transform shadow-md"
                  title="Twitter"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl hover:scale-110 transition-transform shadow-md"
                  title="Pinterest"
                >
                  📌
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
