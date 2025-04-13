import React from "react";

function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-md">MATTY LA</h1>
        <a className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition" href="https://open.spotify.com/artist/6ZCJhABXZIjyTj77X9m0Kj?si=woFldsUESX6KsIvkb7sqsA" rel="noopener noreferrer" target="_blank">
          LISTEN NOW
        </a>
      </div>
    </section>
  );
}

export default Hero;
