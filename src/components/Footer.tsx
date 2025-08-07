import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Organization Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Basti Ki Pathshala</span>
            </div>
            <p className="text-slate-600 max-w-xs">
              Empowering communities through education. Building brighter futures, one child at a time.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Facebook className="h-5 w-5 hover:text-primary transition-smooth cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-primary transition-smooth cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-primary transition-smooth cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-600 hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-slate-600 hover:text-primary transition-smooth">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-slate-600">+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-slate-600">info@bastikipathshala.org</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-slate-600">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-slate-600 max-w-xs">
              To provide quality education and create opportunities for underprivileged children in our communities.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-slate-500">
            © 2025 Basti Ki Pathshala. All rights reserved. | Built with ❤️ for education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
