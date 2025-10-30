import React from "react";

const InfoSection = ({ items }) => {
  return (
    <section className="bg-neutral-100 py-12 border-t border-gray-200">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {items.map((info, i) => (
            <div key={i}>
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {info.icon}
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 hover:underline">
                {info.title}
              </h3>
              <p className="text-xs text-black">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;