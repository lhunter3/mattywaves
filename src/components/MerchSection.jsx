import React from "react";
import { FaInstagram } from "react-icons/fa";

function MerchSection() {
  const images = [
    { src: "/matty-1.JPG", alt: "Matty Merch 1", description: "How many languages does Matty speak?" },
    { src: "/matty-2.jpg", alt: "Matty Merch 2", description: "Why does he go by Matty LA — hint: it’s not the city." },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center">SHOWCASE</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-72 object-cover transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
              <p className="text-white text-lg font-semibold px-4 text-center">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-base sm:text-lg font-medium mt-4 flex justify-center items-center gap-2">
  Think you know the answers?{" "}
  <span>
    Message me{" "}
    <a
      href="https://www.instagram.com/matty_waves/#"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-600 hover:text-blue-800"
    >
      @mattywaves
    </a>
  </span>
  <FaInstagram className="text-pink-500 text-xl ml-2" />
</p>

    </section>
  );
}

export default MerchSection;
