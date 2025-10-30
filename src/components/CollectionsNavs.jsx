import React from "react";

const CollectionsNavs = ({ collections }) => {
  return (
    <section className="bg-white py-6 border-t border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
          {collections.map((name) => (
            <a
              key={name}
              href="#"
              className="text-black text-base md:text-lg font-semibold hover:text-gray-600 transition-colors"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsNavs;