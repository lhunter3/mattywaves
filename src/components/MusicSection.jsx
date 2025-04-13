import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const spotifyEmbeds = [
  "https://open.spotify.com/embed/track/6bwSTSCOP2RYZA7MGfnxvb?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/0lHF3wtgnEATKJATrtaWFj?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/album/0hP88hSNAiNipgtxYiqc0k?utm_source=generator&theme=0",
];

function MusicSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: 0,
    mode: "snap", // ensure snapping after drag
    renderMode: "performance", // smoother on mobile
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    animation: {
      duration: 250,
      easing: (t) => t,
    },
  });

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold border-b border-gray-300 inline-block pb-1 tracking-wide">
        MUSIC
      </h2>

      <div className="rounded p-4">
        <audio controls className="w-full">
          <source src="/cuernos-teaser.mp3" type="audio/mp3" />
        </audio>
      </div>

      {/* Mobile Swiper */}
      <div className="sm:hidden">
        <div ref={sliderRef} className="keen-slider">
          {spotifyEmbeds.map((url, i) => (
            <div
              key={i}
              className="keen-slider__slide transition-transform duration-300 rounded overflow-hidden bg-white"
            >
              <iframe
                src={url}
                className="w-full"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="eager"
                title={`Spotify Embed ${i}`}
              ></iframe>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {spotifyEmbeds.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === idx ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6">
        {spotifyEmbeds.map((url, i) => (
          <div
            key={i}
            className="transition-transform duration-300 hover:shadow-2xl rounded overflow-hidden bg-white"
          >
            <iframe
              src={url}
              className="w-full"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager"
              title={`Spotify Embed ${i}`}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MusicSection;
