import React from "react";
import TextDivider from './TextDivider';
import CategoryGrid from './CategoryGrid';
import CollectionsNavs from './CollectionsNavs';
import HeroSection from './HeroSection';
import ProductGrid from './ProductGrid';
import InfoSection from './InfoSection';

const FeaturedProducts = ({
  pageOneSections = [],
  pageTwoSections = [],
  featuredProducts = [],
  featuredProducts2 = [],
}) => {
  const categories = [
    { img: "/images/new-this-week.jpeg", label: "New This Week" },
    { img: "/images/bestsellers.jfif", label: "Bestsellers" },
    { img: "/images/date-night.jpeg", label: "Date Night" },
    { img: "/images/dress-shop.jpeg", label: "Dress Shop" },
  ];

  const collections = ["New This Week", "Bestsellers", "Date Night", "Dress Shop"];

  const infoItems = [
    {
      icon: (
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      ),
      title: "Free shipping",
      text: "Oh, and we updated our return policy",
    },
    {
      icon: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </>
      ),
      title: "Ref stores",
      text: "We're all over the place",
    },
    {
      icon: (
        <>
          <path d="M3 3h18v18H3z"></path>
          <path d="M3 9h18"></path>
          <path d="M9 21V9"></path>
        </>
      ),
      title: "Committed to climate action",
      text: "And we have big plans",
    },
    {
      icon: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </>
      ),
      title: "Customer love",
      text: "We got you via email or text",
    },
  ];

  return (
    <div>
      <TextDivider text="Being naked is the #1 most sustainable option. We're #2." />
      <CategoryGrid categories={categories} />
      <CollectionsNavs collections={collections} />
      {pageOneSections.length > 0 && <HeroSection slides={pageOneSections} />}
      {featuredProducts.length > 0 && <ProductGrid products={featuredProducts} />}
      {pageTwoSections.length > 0 && <HeroSection slides={pageTwoSections} />}
      {featuredProducts2.length > 0 && <ProductGrid products={featuredProducts2} />}
      <InfoSection items={infoItems} />
    </div>
  );
};

export default FeaturedProducts;