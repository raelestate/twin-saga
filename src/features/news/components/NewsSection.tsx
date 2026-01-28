import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'Grand Reunion Festival Begins!',
      date: 'January 20, 2026',
      category: 'Event',
      featured_image: 'src/assets/images/LargerResLogo.png',
      preview: 'The Grand Reunion Festival is now live! Join us for exclusive rewards and exciting challenges.',
      readTime: '8 min'
    }
  ];

  return (
    <section className="relative mx-auto px-4 py-20 bg-linear-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute top-10 right-0 w-500 h-500 pointer-events-none overflow-hidden opacity-20">
        <img
          src="src/assets/images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
          alt="Floating Orb"
          className="absolute w-7xl h-320 -top-160 -right-160 animate-spin-slow"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-2 text-center font-cinzel text-5xl text-yellow-400 drop-shadow-lg">
            LATEST NEWS
          </h2>
          <p className="text-center text-gray-400">
            Stay updated with the latest happenings in Twin Saga. Discover new content, balance updates, and special events.
          </p>
        </motion.div>

        <div className="space-y-8">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="custom-frame group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all border border-yellow-400 border-opacity-40 hover:border-opacity-100 bg-linear-to-br from-gray-900 via-gray-800 to-black"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="md:col-span-1 h-64 md:h-full overflow-hidden">
                  <img
                    src={item.featured_image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="md:col-span-2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-3 py-1 bg-yellow-400 bg-opacity-20 text-black rounded-full font-cinzel">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">{item.readTime}</span>
                    </div>

                    <h3 className="text-3xl font-cinzel text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {item.preview}
                    </p>

                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>

                  <Link
                    to={`/news/${item.id}`}
                    className="custom-frame-button inline-block px-6 py-2 text-yellow-400 font-cinzel text-sm hover:text-yellow-300 transition-all w-fit mt-6"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            to="/news"
            className="custom-frame-button px-8 py-3 text-yellow-400 font-cinzel hover:text-yellow-300 transition-all inline-block"
          >
            View All News
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
