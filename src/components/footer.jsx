import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail, MapPin } from 'lucide-react';
import logo from '../assets/edciitd.svg';

const Footer = () => {
  return (
    <footer className="bg-[rgb(16,24,40)] text-white py-12 px-6 md:px-8 lg:px-12">
      <div className="w-full px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Left Section - Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="eDC IIT Delhi Logo" 
                className="w-24 h-24 object-contain"
              />
              <div>
                <h3 className="font-bold text-2xl">eDC IIT Delhi</h3>
                <p className="text-lg opacity-90">Entrepreneurship Development Cell</p>
              </div>
            </div>
            <p className="text-lg opacity-80 text-center md:text-left">
              © Copyright eDC IIT Delhi.
            </p>
          </div>

          {/* Middle-Left Section - Quick Access */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold text-xl mb-2">Quick Access</h4>
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <Link to="/" className="hover:opacity-70 transition-opacity duration-200 text-base">
                Home
              </Link>
              <Link to="/about" className="hover:opacity-70 transition-opacity duration-200 text-base">
                About
              </Link>
              <Link to="/initial" className="hover:opacity-70 transition-opacity duration-200 text-base">
                Events
              </Link>
              <Link to="/becon" className="hover:opacity-70 transition-opacity duration-200 text-base">
                Team
              </Link>
              <Link to="/resources" className="hover:opacity-70 transition-opacity duration-200 text-base">
                Sponsors
              </Link>
              <Link to="/gallery" className="hover:opacity-70 transition-opacity duration-200 text-base">
                Contact
              </Link>
            </div>
          </div>

          {/* Middle-Right Section - Follow Us */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold text-xl mb-2">Follow Us</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:opacity-70 transition-opacity duration-200"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Us */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold text-xl mb-2">Contact Us</h4>
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <Mail size={20} className="flex-shrink-0" />
                <a 
                  href="mailto:info@edciitd.ac.in" 
                  className="text-base hover:opacity-70 transition-opacity duration-200"
                >
                  info@edciitd.ac.in
                </a>
              </div>
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <div className="text-base">
                  <div>Indian Institute of Technology Delhi</div>
                  <div>Hauz Khas, New Delhi-110016</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Rights */}
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex justify-center md:justify-end">
            <p className="text-base opacity-80">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
