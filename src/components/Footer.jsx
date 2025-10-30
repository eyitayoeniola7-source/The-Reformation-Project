import React from "react";
import { ChevronDown } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            {/* Left: compact link groups */}
            <div className=" md:flex-shrink-0 ">
              <div className="grid grid-cols-2 font-semibold sm:grid-cols-3 md:grid-cols-3 gap-x-16 gap-y-4">
                <div>
                  <ul className="space-y-2 text-sm text-black">
                    <li><a href="#" className="hover:underline">About Ref</a></li>
                    <li><a href="#" className="hover:underline">Stores</a></li>
                    <li><a href="#" className="hover:underline">Careers</a></li>
                    <li><a href="#" className="hover:underline">Affiliates</a></li>
                  </ul>
                </div>

                <div>
                  <ul className="space-y-2 text-sm text-black">
                    <li><a href="#" className="hover:underline">FAQ</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><a href="#" className="hover:underline">Size guide</a></li>
                    <li><a href="#" className="hover:underline">E-gift cards</a></li>
                  </ul>
                </div>

                <div>
                  <ul className="space-y-2 text-sm text-black">
                    <li><a href="#" className="hover:underline">Sign in</a></li>
                    <li><a href="#" className="hover:underline">Returns & exchanges</a></li>
                    <li><a href="#" className="hover:underline">Order lookup</a></li>
                    <li>
                      <button className="flex items-center hover:underline text-sm">
                        Nigeria
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            
            {/* Right: newsletter - positioned at far right edge */}
            <div className="mt-6 md:mt-0 md:w-96 md:ml-auto flex flex-col items-start w-full">
              <h3 className="text-xs font-semibold mb-3">We make great emails</h3>
              <div className='border border-black w-full flex'>
                <div className="w-full flex flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Give us your email"
                    className="flex-1 px-4 sm:px-8 py-3 sm:py-4 focus:outline-none focus:border-black w-full"
                  />
                  <a href='#' className="bg-black text-center sm:border-l-2 border-black text-white px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-800 transition-colors whitespace-nowrap">
                    Sign up
                  </a>
                </div>
              </div>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
         <div className='mx-auto flex flex-col pt-16 md:flex-row md:items-center md:justify-between'>
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs mx-8 font-semibold text-black">
                   <li><a href="#" className="hover:underline">Do not sell or share my info</a></li>
                    <li><a href="#" className="hover:underline">Terms</a></li>
                    <li><a href="#" className="hover:underline">Privacy</a></li>
                    <li><a href="#" className="hover:underline">California Privacy Notice</a></li>
                    <li><a href="#" className="hover:underline">Sitemap</a></li>
                    <li><a href="#" className="hover:underline">Accessibility</a></li>
                    <li><a href="#" className="hover:underline">CA Supply Chain</a></li>
                  </ul>
                  
                </div>
                <p className='text-xs text-stone-500 mt-6 mx-8'>© 2025 Reformation</p>
      </footer>
   );
};

export default Footer;