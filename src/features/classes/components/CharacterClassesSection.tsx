import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function CharacterClassesSection() {
  const classes = [
    {
      id: 'cleric',
      name: 'Cleric',
      description: 'Holy healer combining support and divine magic for protection.',
      color: 'from-yellow-900 to-yellow-700',
      image: 'src/assets/images/Cleric.webp',
      stats: '💚 HEL 10 | ✨ MAG 9'
    },
    {
      id: 'warrior',
      name: 'Warrior',
      description: 'Master of melee combat with heavy armor and devastating attacks.',
      color: 'from-red-900 to-red-700',
      image: 'src/assets/images/Warrior.webp',
      stats: '⚔️ ATK 10 | 🛡️ DEF 9'
    },
    {
      id: 'mage',
      name: 'Mage',
      description: 'Wielder of elemental magic with powerful area spells.',
      color: 'from-purple-900 to-purple-700',
      image: 'src/assets/images/Mage.webp',
      stats: '✨ MAG 10 | 🎯 DEX 8'
    },
    {
      id: 'archer',
      name: 'Archer',
      description: 'Swift and precise with deadly ranged attacks and crowd control.',
      color: 'from-green-900 to-green-700',
      image: 'src/assets/images/Archer.webp',
      stats: '🏹 RNG 10 | 🎯 DEX 9'
    },
    {
      id: 'rogue',
      name: 'Rogue',
      description: 'Stealthy assassin dealing critical damage from the shadows.',
      color: 'from-gray-900 to-gray-700',
      image: 'src/assets/images/Rogue.webp',
      stats: '💥 CRT 10 | 🎯 DEX 9'
    },
    {
      id: 'mystic',
      name: 'Mystic',
      description: 'Ancient mystic channeling forbidden energy for transformation.',
      color: 'from-indigo-900 to-indigo-700',
      image: 'src/assets/images/Mystic.webp',
      stats: '✨ MAG 9 | 💜 MYS 10'
    }
  ];

  return (
    <section className="relative mx-auto px-4 py-20 bg-linear-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-500 h-500 pointer-events-none overflow-hidden opacity-20">
        <img
          src="src/assets/images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
          alt="Floating Orb"
          className="absolute w-7xl h-320 -top-160 -left-160 animate-spin-slow"
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-yellow-400 rounded-full"
            animate={{
              y: [0, -500],
              x: Math.sin(i) * 100,
              opacity: [0.8, 0]
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.15
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-cinzel text-5xl text-yellow-400 drop-shadow-lg">
            CHARACTER CLASSES
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your path. Each class offers unique abilities and playstyle. Master one or explore them all.
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem, idx) => (
            <Link
              key={classItem.id}
              to={`/class/${classItem.id}`}
              className="no-underline"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(250, 204, 21, 0.2)' }}
                className="custom-frame group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all border border-yellow-400 border-opacity-30 hover:border-opacity-100 h-full"
              >
                {/* Class Image */}
                <div className={`bg-linear-to-br ${classItem.color} h-48 overflow-hidden relative flex items-center justify-center`}>
                  <img 
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-cinzel text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
                    {classItem.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {classItem.description}
                  </p>

                  <div className="flex items-center justify-between py-3 px-3 bg-gray-900 bg-opacity-50 rounded-lg mb-4 border border-yellow-400 border-opacity-20">
                    <span className="text-yellow-400 text-xs font-cinzel">{classItem.stats}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="custom-frame-button w-full px-4 py-2 text-yellow-400 font-cinzel text-sm hover:text-yellow-300 transition-all"
                  >
                    View Abilities →
                  </motion.button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center custom-frame p-8 rounded-lg border border-yellow-400 border-opacity-30 bg-yellow-400 bg-opacity-5"
        >
          <h3 className="text-xl font-cinzel text-yellow-400 mb-2">Can't decide which class to play?</h3>
          <p className="text-gray-400 mb-4">Each class has a unique playstyle. Visit the class pages to view detailed stats, abilities, and recommended builds.</p>
          <p className="text-sm text-gray-500">💡 Pro tip: You can create multiple characters and try every class!</p>
        </motion.div>
      </div>
    </section>
  );
}
