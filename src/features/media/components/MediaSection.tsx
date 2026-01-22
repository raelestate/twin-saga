import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function MediaSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const media = [
    { id: 1, title: 'Cinematic Trailer', type: 'Video', thumbnail: '▶' },
    { id: 2, title: 'Behind the Scenes', type: 'Video', thumbnail: '▶' },
    { id: 3, title: 'Character Showcase', type: 'Screenshot', thumbnail: '🖼' },
    { id: 4, title: 'World Exploration', type: 'Screenshot', thumbnail: '🖼' },
    { id: 5, title: 'Raid Boss Fight', type: 'Video', thumbnail: '▶' },
    { id: 6, title: 'Guild Hall Preview', type: 'Screenshot', thumbnail: '🖼' },
  ];

  const featured = media[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <section className="relative mx-auto px-4 py-20 bg-linear-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 right-0 w-500 h-500 pointer-events-none overflow-hidden opacity-20">
        <img
          src="images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
          alt="Floating Orb"
          className="absolute w-7xl h-320 -top-160 -right-160 animate-spin-slow"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="mb-2 text-center font-cinzel text-4xl text-yellow-400 drop-shadow-lg">
          Media Gallery
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Discover stunning visuals from Twin Saga. Experience cinematic trailers, exclusive behind-the-scenes content, and breathtaking screenshots.
        </p>

        {/* Slideshow */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="custom-frame rounded-lg overflow-hidden mb-8"
        >
          <div className="w-full h-96 bg-linear-to-b from-gray-800 to-gray-900 flex items-center justify-center relative group cursor-pointer">
            <div className="text-yellow-400 text-8xl opacity-80 group-hover:opacity-100 transition-opacity">
              {featured.thumbnail}
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400 bg-opacity-20 hover:bg-opacity-40 text-yellow-400 px-4 py-2 rounded transition-all z-20"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 bg-opacity-20 hover:bg-opacity-40 text-yellow-400 px-4 py-2 rounded transition-all z-20"
            >
              →
            </button>
          </div>

          <div className="p-6 bg-gray-900 bg-opacity-60">
            <h3 className="text-2xl font-cinzel text-yellow-400 mb-2">{featured.title}</h3>
            <p className="text-sm text-gray-400">{featured.type}</p>
            <p className="text-xs text-gray-500 mt-2">{currentSlide + 1} / {media.length}</p>
          </div>
        </motion.div>

        <div className="text-center">
          <Link
            to="/media"
            className="custom-frame-button px-8 py-3 text-yellow-400 font-cinzel hover:text-yellow-300 transition-all inline-block"
          >
            View All Media
          </Link>
        </div>
      </div>
    </section>
  );
}
