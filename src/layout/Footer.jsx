
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">StartupEdu</h3>
            <p className="text-gray-600">
              Empowering entrepreneurs with knowledge and tools to succeed.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/modules" className="text-gray-600 hover:text-primary">
                  Learning Modules
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-600 hover:text-primary">
                  Interactive Tools
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          © {new Date().getFullYear()} StartupEdu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
