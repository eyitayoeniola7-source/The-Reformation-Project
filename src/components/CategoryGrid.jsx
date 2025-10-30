import React from "react";

const CategoryGrid = ({ categories }) => {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="relative group cursor-pointer">
            <img
              src={cat.img}
              alt={cat.label}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
              <span className="text-white text-2xl font-light">{cat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;