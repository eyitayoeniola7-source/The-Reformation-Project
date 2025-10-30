import React from "react";

const ProductGrid = ({ products, showMoreText = "Show More" }) => {
  return (
    <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium">
                  {product.tag}
                </span>
              )}
            </div>
            <h3 className="font-medium mb-1">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
      <button className="mt-12 mx-auto block border border-black text-black bg-white px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors">
        {showMoreText}
      </button>
    </section>
  );
};

export default ProductGrid;