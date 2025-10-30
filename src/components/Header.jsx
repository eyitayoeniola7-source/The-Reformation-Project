import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react';

const Header = ({ categories }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-stone-400 sticky text-white text-center py-2 text-sm">
        Free shipping on orders over $150
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 border-b border-gray-200">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row - Logo and Right Menu */}
          <div className="flex items-center justify-between h-16 border-b border-gray-200">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <h1 className="text-2xl font-bold tracking-wider">REFORMATION</h1>
            </div>

            {/* Right Menu - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">
                Sustainability
              </a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">
                Our Store
              </a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">
                Sign In
              </a>
              <button className="p-2 hover:text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button className="p-2 hover:text-gray-600 transition-colors relative">
                <ShoppingBag size={20} />
              </button>
            </div>

            {/* Mobile Right Icons */}
            <div className="flex lg:hidden items-center space-x-2">
              <button className="p-2 hover:text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button className="p-2 hover:text-gray-600 transition-colors relative">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>

          {/* Bottom Row - Navigation and Search */}
          <div className="hidden lg:flex items-center justify-between h-12">
            {/* Desktop Navigation */}
            <nav className="flex space-x-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button className="text-sm font-medium hover:text-gray-600 transition-colors py-2">
                    {category.name}
                  </button>
                  
                  {category.subcategories.length > 0 && activeCategory === category.name && (
                    <div className="absolute top-full left-0 bg-white shadow-lg py-4 px-6 min-w-[400px]">
                      {category.subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block py-2 text-sm hover:text-gray-600 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search with underline */}
            <div className="flex items-center space-x-12 border-b border-black pb-1 cursor-pointer">
              <span className="text-sm font-medium">Search</span>
              <Search size={18} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-4">
              {categories.map((category) => (
                <div key={category.name}>
                  <button className="w-full text-left font-medium py-2 flex items-center justify-between">
                    {category.name}
                    {category.subcategories.length > 0 && <ChevronDown size={16} />}
                  </button>
                  {category.subcategories.length > 0 && (
                    <div className="pl-4 space-y-2 mt-2">
                      {category.subcategories.map((sub) => (
                        <a key={sub} href="#" className="block py-1 text-sm text-gray-600">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
