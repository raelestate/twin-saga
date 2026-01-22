import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function EventDetailPage() {
  const event = {
    id: 1,
    title: 'Grand Reunion Festival',
    date: 'January 20 - February 5, 2026',
    location: 'Twin Saga Realm',
    status: 'ONGOING',
    description: 'Celebrate the reunion of the Twin Saga community with exclusive events and rewards.',
    featured_image: 'images/event-featured.png',
    fullDescription: `The Grand Reunion Festival marks the biggest celebration in Twin Saga history. For over a month, players from around the world will come together to participate in exclusive activities, earn rare rewards, and compete for legendary titles.

This festival features multiple stages with different events happening throughout the month. From casual daily activities to hardcore endgame challenges, every player can find something to enjoy.`,
    timeline: [
      { date: 'Jan 20', event: 'Festival Opens - Daily Quests Available', status: 'completed' },
      { date: 'Jan 25', event: 'PvP Tournament Begins', status: 'active' },
      { date: 'Feb 1', event: 'Raid Boss Event', status: 'upcoming' },
      { date: 'Feb 5', event: 'Festival Finale & Rewards', status: 'upcoming' }
    ],
    rewards: [
      { name: 'Festival Rewards Token', value: '5000' },
      { name: 'Exclusive Title', value: '"Reunion Survivor"' },
      { name: 'Character Skin', value: 'Legendary Outfit' },
      { name: 'Mount', value: 'Festival Drake' }
    ]
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={event.featured_image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <span className={`inline-block px-4 py-2 rounded-full font-cinzel text-sm mb-4 ${
              event.status === 'ONGOING' 
                ? 'bg-green-900 bg-opacity-40 text-green-300' 
                : 'bg-blue-900 bg-opacity-40 text-blue-300'
            }`}>
              {event.status}
            </span>
            <h1 className="text-5xl font-cinzel text-yellow-400 drop-shadow-lg mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <span>📅 {event.date}</span>
              <span>📍 {event.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Description */}
          <div>
            <h2 className="text-3xl font-cinzel text-yellow-400 mb-4">About This Event</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {event.fullDescription}
            </p>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-3xl font-cinzel text-yellow-400 mb-8">Event Timeline</h2>
            <div className="space-y-4">
              {event.timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`custom-frame p-6 rounded-lg border-l-4 ${
                    item.status === 'completed' ? 'border-green-500 bg-green-500 bg-opacity-5' :
                    item.status === 'active' ? 'border-yellow-400 bg-yellow-400 bg-opacity-5' :
                    'border-gray-600 bg-gray-800 bg-opacity-20'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-cinzel text-yellow-400 font-bold">{item.date}</p>
                      <p className="text-gray-300 mt-2">{item.event}</p>
                    </div>
                    <span className={`text-sm font-cinzel px-3 py-1 rounded ${
                      item.status === 'completed' ? 'bg-green-500 text-white' :
                      item.status === 'active' ? 'bg-yellow-400 text-black' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {item.status.toUpperCase()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Rewards */}
          <div>
            <h2 className="text-3xl font-cinzel text-yellow-400 mb-8">Event Rewards</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {event.rewards.map((reward, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="custom-frame p-6 rounded-lg border border-yellow-400 border-opacity-40"
                >
                  <p className="text-gray-400 text-sm mb-2">REWARD</p>
                  <p className="text-yellow-400 font-cinzel text-lg mb-2">{reward.name}</p>
                  <p className="text-gray-300">{reward.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Participation */}
          <div className="custom-frame p-8 rounded-lg border border-yellow-400 border-opacity-30 bg-yellow-400 bg-opacity-5">
            <h2 className="text-2xl font-cinzel text-yellow-400 mb-4">How to Participate</h2>
            <ol className="text-gray-300 space-y-2 list-decimal list-inside">
              <li>Complete daily festival quests for rewards</li>
              <li>Participate in special event dungeons</li>
              <li>Join the PvP tournament for competitive rewards</li>
              <li>Complete community challenges for server-wide bonuses</li>
              <li>Visit the Festival Merchant for exclusive items</li>
            </ol>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link
              to="/events"
              className="custom-frame-button px-8 py-3 text-yellow-400 font-cinzel hover:text-yellow-300 transition-all inline-block"
            >
              ← Back to Events
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
