import React from "react";

const HeroSection = ({ slides = [] }) => {
  if (!slides.length) return null; 

  const { image, title, subtitle, cta } = slides[0];

  return (
    <section className="relative h-auto bg-gray-100 border border-black overflow-hidden">
      <img src={image} alt="Hero" className="w-full h-auto object-cover" /> 
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-wide">{title}</h2>
          {subtitle && (
            <p className="text-xl mb-8 max-w-2xl mx-auto px-4">{subtitle}</p>
          )}
          <button className="text-white px-8 py-3 text-lg font-semibold hover:bg-gray-500 transition-colors">
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;