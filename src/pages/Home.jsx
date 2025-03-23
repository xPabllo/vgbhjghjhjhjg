import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      title: 'Expert Instructors',
      description: 'Learn from certified wilderness experts with years of experience',
      icon: '🎓'
    },
    {
      title: 'Hands-on Learning',
      description: 'Practice real survival skills in authentic outdoor environments',
      icon: '🏕️'
    },
    {
      title: 'Small Groups',
      description: 'Intimate class sizes ensure personalized attention and better learning',
      icon: '👥'
    },
    {
      title: 'Safety First',
      description: 'Comprehensive safety protocols and emergency preparedness',
      icon: '🛡️'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Graduates' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '50+', label: 'Unique Skills Taught' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/src/assets/images/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">
                Master the Art of Wilderness Survival
              </h1>
              <p className="text-xl mb-8 max-w-2xl">
                Join our expert-led camping and survival skills program. Learn essential outdoor techniques in a safe, structured environment.
              </p>
              <Link
                to="/pricing"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wilderness Camp Academy has been training outdoor enthusiasts since 2013. 
              Our mission is to empower individuals with the knowledge and skills needed 
              to safely explore and survive in the great outdoors.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <img
              src="/src/assets/images/basic-camping.jpg"
              alt="Basic camping setup"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="/src/assets/images/advanced-camping.jpg"
              alt="Advanced camping techniques"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="/src/assets/images/survival.jpg"
              alt="Survival skills training"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="/src/assets/images/hero-bg.jpg"
              alt="Outdoor experience"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our next class and begin your journey to becoming an outdoor expert.
          </p>
          <Link
            to="/calendar"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            View Class Schedule
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
