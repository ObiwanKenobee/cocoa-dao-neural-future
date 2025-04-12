
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpenCheck, Brain, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-cocoa-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-cocoa-600 rounded-full flex items-center justify-center">
                  <BookOpenCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-sora font-semibold text-cocoa-800">Cocoa<span className="text-neural-700">DAO</span></span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <a href="#impact" className="font-medium text-cocoa-600 hover:text-cocoa-800 transition-colors">
                  Impact
                </a>
                <a href="#token" className="font-medium text-cocoa-600 hover:text-cocoa-800 transition-colors">
                  Token Exchange
                </a>
                <a href="#dao" className="font-medium text-cocoa-600 hover:text-cocoa-800 transition-colors">
                  DAO
                </a>
                <a href="#education" className="font-medium text-cocoa-600 hover:text-cocoa-800 transition-colors">
                  Education
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-cocoa-200 text-cocoa-700 hover:bg-cocoa-50">
                Connect Wallet
              </Button>
              <Button className="bg-cocoa-700 hover:bg-cocoa-800 text-white neural-glow">
                Join DAO
              </Button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-cocoa-600 hover:text-cocoa-900 hover:bg-cocoa-100 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-cocoa-100">
          <a href="#impact" className="block px-3 py-2 rounded-md text-base font-medium text-cocoa-600 hover:text-cocoa-800 hover:bg-cocoa-50">
            Impact
          </a>
          <a href="#token" className="block px-3 py-2 rounded-md text-base font-medium text-cocoa-600 hover:text-cocoa-800 hover:bg-cocoa-50">
            Token Exchange
          </a>
          <a href="#dao" className="block px-3 py-2 rounded-md text-base font-medium text-cocoa-600 hover:text-cocoa-800 hover:bg-cocoa-50">
            DAO
          </a>
          <a href="#education" className="block px-3 py-2 rounded-md text-base font-medium text-cocoa-600 hover:text-cocoa-800 hover:bg-cocoa-50">
            Education
          </a>
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="border-cocoa-200 text-cocoa-700 w-full">
              Connect Wallet
            </Button>
            <Button className="bg-cocoa-700 hover:bg-cocoa-800 text-white w-full">
              Join DAO
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
