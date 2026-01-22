import { Link } from 'react-router-dom';

export function WikiSection() {
  return (
    <section className="relative mx-auto px-4 py-20 bg-linear-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute bottom-0 right-0 w-500 h-500 pointer-events-none overflow-hidden opacity-20">
        <img
          src="images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
          alt="Floating Orb"
          className="absolute w-7xl h-320 -bottom-160 -right-160 animate-spin-slow"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="mb-2 text-center font-cinzel text-4xl text-yellow-400 drop-shadow-lg">
          Game Wiki
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Everything you need to know about Twin Saga. Our comprehensive wiki covers characters, mechanics, dungeons, and more. 
          Whether you're a new adventurer or a seasoned player, find answers to all your questions.
        </p>

        <div className="custom-frame p-12 rounded-lg text-center">
          <div className="text-6xl mb-6">📚</div>
          <Link
            to="/wiki"
            className="custom-frame-button px-12 py-4 text-yellow-400 font-cinzel text-lg hover:text-yellow-300 transition-all inline-block"
          >
            Explore Wiki
          </Link>
        </div>
      </div>
    </section>
  );
}
