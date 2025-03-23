function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wilderness Camp Academy</h3>
            <p className="text-gray-300">Learn. Explore. Survive.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/roadmap" className="text-gray-300 hover:text-white">Roadmap</a></li>
              <li><a href="/calendar" className="text-gray-300 hover:text-white">Calendar</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@wildernesscamp.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Location: Mountain View, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2023 Wilderness Camp Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
