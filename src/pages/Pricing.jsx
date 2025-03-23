import React from 'react';

function Pricing() {
  const pricingPlans = [
    {
      name: 'Basic Explorer',
      price: '$199',
      duration: 'per month',
      features: [
        'Basic camping skills training',
        '4 lessons per month',
        'Basic gear provided',
        'Weekend sessions',
        'Access to online resources',
        'Group learning environment'
      ],
      image: '/src/assets/images/basic-camping.jpg',
      recommended: false
    },
    {
      name: 'Advanced Adventurer',
      price: '$299',
      duration: 'per month',
      features: [
        'Advanced camping techniques',
        '6 lessons per month',
        'Complete gear provided',
        'Flexible scheduling',
        'One-on-one mentoring',
        'Weekend camping trips',
        'Online & offline resources'
      ],
      image: '/src/assets/images/advanced-camping.jpg',
      recommended: true
    },
    {
      name: 'Survival Expert',
      price: '$499',
      duration: 'per month',
      features: [
        'Comprehensive survival training',
        '8 lessons per month',
        'Professional gear kit included',
        'Priority scheduling',
        'Private instruction',
        'Extended wilderness trips',
        'Certification program',
        '24/7 expert support'
      ],
      image: '/src/assets/images/survival.jpg',
      recommended: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Adventure</h1>
        <p className="text-lg text-gray-600">Select the perfect plan for your outdoor journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
              plan.recommended ? 'border-4 border-primary' : ''
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg">
                Recommended
              </div>
            )}
            
            <div className="h-48 overflow-hidden">
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-gray-600">/{plan.duration}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Plan?</h2>
        <p className="text-gray-600 mb-6">
          We offer customized training programs for groups and special requirements.
          Contact us to discuss your needs.
        </p>
        <button className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-6 rounded-lg border-2 border-primary transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Pricing;
