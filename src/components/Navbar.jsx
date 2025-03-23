import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Wilderness Camp Academy
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/roadmap" className="hover:text-primary">Roadmap</Link>
            <Link to="/calendar" className="hover:text-primary">Calendar</Link>
            <Link to="/pricing" className="hover:text-primary">Pricing</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
