import React from "react";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import Footer from './components/Footer';



import { categories } from './data/categories';
import { featuredProducts, featuredProducts2 } from './data/products';
import { heroSlides } from './data/heroSlides';
import { pageOneSections, pageTwoSections } from './data/sections';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header categories={categories} />
      <HeroSection slides={heroSlides} />
      <FeaturedProducts
        pageOneSections={pageOneSections}
        pageTwoSections={pageTwoSections}
        featuredProducts={featuredProducts}
        featuredProducts2={featuredProducts2}
      />
      <Footer />
    </div>
  );
}

export default App;