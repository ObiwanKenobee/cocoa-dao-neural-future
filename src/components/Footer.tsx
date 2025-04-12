
import { BookOpenCheck, Twitter, Github, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cocoa-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-cocoa-200 rounded-full flex items-center justify-center mr-3">
                <BookOpenCheck className="h-5 w-5 text-cocoa-800" />
              </div>
              <span className="text-xl font-sora font-semibold">Cocoa<span className="text-neural-400">DAO</span></span>
            </div>
            <p className="text-cocoa-300 mb-6 max-w-md">
              Cocoa DAO is a decentralized, AI-enhanced ethical cocoa ecosystem, built to eliminate child labor by turning education and ethical farming into economic power.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cocoa-800 hover:bg-cocoa-700 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cocoa-800 hover:bg-cocoa-700 flex items-center justify-center transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cocoa-800 hover:bg-cocoa-700 flex items-center justify-center transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cocoa-800 hover:bg-cocoa-700 flex items-center justify-center transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sora text-white">Ecosystem</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">Impact Dashboard</a></li>
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">Token Exchange</a></li>
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">DAO Governance</a></li>
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">Education Program</a></li>
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">NeuraCoop Sync</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sora text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="text-cocoa-300 hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cocoa-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cocoa-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Cocoa DAO. All rights reserved. Powered by NeuraEnhance™ Technology.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-cocoa-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-cocoa-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-cocoa-400 hover:text-white text-sm transition-colors">Ethics Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
