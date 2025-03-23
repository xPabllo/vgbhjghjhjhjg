import React from 'react';

function Roadmap() {
  const milestones = [
    {
      level: 'Beginner',
      title: 'Basic Camping Skills',
      duration: '4 weeks',
      skills: [
        'Camp Site Selection',
        'Tent Setup and Care',
        'Basic Fire Building',
        'Outdoor Safety Fundamentals'
      ],
      image: '/src/assets/images/basic-camping.jpg'
    },
    {
      level: 'Intermediate',
      title: 'Advanced Camping',
      duration: '6 weeks',
      skills: [
        'Advanced Fire Techniques',
        'Weather Reading',
        'Navigation Skills',
        'Camp Cooking'
      ],
      image: '/src/assets/images/advanced-camping.jpg'
    },
    {
      level: 'Advanced',
      title: 'Survival Skills',
      duration: '8 weeks',
      skills: [
        'Wilderness First Aid',
        'Natural Shelter Building',
        'Water Procurement',
        'Wild Edibles Identification'
      ],
      image: '/src/assets/images/survival.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Roadmap</h1>
        <p className="text-lg text-gray-600">Your journey from beginner to wilderness expert</p>
      </div>

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div 
            key={milestone.level}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={milestone.image}
                alt={milestone.title}
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm">
                {milestone.level}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{milestone.title}</h2>
              <p className="text-gray-600">Duration: {milestone.duration}</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">What you'll learn:</h3>
                <ul className="space-y-2">
                  {milestone.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-600">
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
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
        <a
          href="/pricing"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          View Pricing Plans
        </a>
      </div>
    </div>
  );
}

export default Roadmap;
