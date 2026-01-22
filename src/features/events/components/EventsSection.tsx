import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function EventsSection() {
  const events = [
    {
      id: 1,
      title: 'Grand Reunion Festival',
      date: 'January 20 - February 5, 2026',
      location: 'Twin Saga Realm',
      status: 'ONGOING',
      featured_image: 'src/assets/images/LargerResLogo.png',
      description: 'Celebrate the reunion of the Twin Saga community with exclusive events and rewards.',
      participants: 15243
    }
  ];

  return (
    <section className="relative mx-auto px-4 py-20 bg-linear-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-yellow-400 rounded-full"
            animate={{
              y: [0, -600],
              opacity: [0.8, 0]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0
            }}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-0 left-0 w-500 h-500 pointer-events-none overflow-hidden opacity-20">
        <img
          src="src/assets/images/Dr-Strange-Magic-Circle-Mystical-Energy-Effect-PNG.png"
          alt="Floating Orb"
          className="absolute w-7xl h-320 -bottom-160 -left-160 animate-spin-slow"
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
            ACTIVE EVENTS
          </h2>
          <p className="text-center text-gray-400">
            Participate in thrilling events and earn exclusive rewards. Check back regularly for new challenges and opportunities.
          </p>
        </motion.div>

        <div className="space-y-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="custom-frame group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all border border-yellow-400 border-opacity-40 hover:border-opacity-100 bg-linear-to-br from-gray-900 via-gray-800 to-black"
            >
              {/* Event Image */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="md:col-span-1 h-64 md:h-full overflow-hidden relative">
                  <img
                    src={event.featured_image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-10 right-4">
                    <span className={`px-4 py-2 rounded-full font-cinzel text-sm font-bold ${
                      event.status === 'ONGOING' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-cinzel text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-300">
                        <span className="mr-3 text-lg"></span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <span className="mr-3 text-lg"></span>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <span className="mr-3 text-lg"></span>
                        <span className="font-cinzel">{event.participants.toLocaleString()} Participants</span>
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <Link
                    to={`/events/${event.id}`}
                    className="custom-frame-button inline-block px-6 py-2 text-yellow-400 font-cinzel text-sm hover:text-yellow-300 transition-all w-fit mt-6"
                  >
                    View Details →
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
            to="/events"
            className="custom-frame-button px-8 py-3 text-yellow-400 font-cinzel hover:text-yellow-300 transition-all inline-block"
          >
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
