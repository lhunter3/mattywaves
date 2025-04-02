// components/MerchSection.jsx
import React from "react";

function MerchSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">LORENISPE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-gray-100 p-4 rounded">
            <img src={`https://via.placeholder.com/200x200?text=Item+${i}`} alt={`Example ${i}`} className="rounded mb-2" />
            <div className="h-4 bg-gray-300 w-3/4 mb-1"></div>
            <div className="h-4 bg-gray-300 w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MerchSection;