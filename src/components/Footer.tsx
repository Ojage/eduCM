import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import logo_cm from "../asseets/images/logo_cm.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo_cm} alt="Logo" className="h-10 w-10 rounded-full" />

              <div>
                <h3 className="font-bold text-xl">Cameroon Schools</h3>
                <p className="text-gray-400 text-sm">Directory</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your comprehensive resource for finding educational institutions
              across all levels in Cameroon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Search Schools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Add Your School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Update Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Statistics</a></li>
            </ul>
          </div>

          {/* Education Levels */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Education Levels</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nursery Schools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Primary Schools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Secondary Schools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Universities</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Yaoundé, Cameroon</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@cmschools.cm</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+237 2XX XXX XXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 eduCM -Cameroon Schools Directory. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center space-x-1">
              <span>Support</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;