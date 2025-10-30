import React from "react";

const TextDivider = ({ text }) => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg md:text-2xl text-black font-bold">{text}</p>
      </div>
    </section>
  );
};

export default TextDivider;