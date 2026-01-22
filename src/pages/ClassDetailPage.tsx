import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function ClassDetailPage() {
  const { id } = useParams<{ id: string }>();
  const classId = id || 'swordmaster';
  const classData = {
    berserker: {
      id: 'berserker',
      name: 'Berserker',
      color: 'from-red-900 to-red-700',
      description: 'Unstoppable warrior fueled by rage and primal power.',
      fullDescription: 'Berserkers are fearless warriors who harness their fury to unleash devastating attacks. The more damage they take, the stronger they become.',
      image: 'src/assets/images/Berserker.webp',
      stats: {
        health: 9,
        attack: 10,
        defense: 7,
        magic: 3,
        dexterity: 6
      },
      abilities: [
        { name: 'Rend', level: 1, description: 'Tear through enemies with raw power' },
        { name: 'Bloodlust', level: 5, description: 'Gain strength when health is low' },
        { name: 'Whirlwind Slash', level: 15, description: 'Strike multiple enemies in a fury' },
        { name: 'Apocalyptic Rage', level: 35, description: 'Ultimate ability - unleash unlimited power' }
      ]
    },
    cleric: {
      id: 'cleric',
      name: 'Cleric',
      color: 'from-yellow-900 to-yellow-700',
      description: 'Holy healer blessed with divine protection and recovery.',
      fullDescription: 'Clerics are devoted healers who channel divine magic to support and protect their allies while smiting their enemies.',
      image: 'src/assets/images/Cleric.webp',
      stats: {
        health: 7,
        attack: 5,
        defense: 8,
        magic: 9,
        dexterity: 6
      },
      abilities: [
        { name: 'Holy Light', level: 1, description: 'Heal an ally with divine energy' },
        { name: 'Divine Shield', level: 5, description: 'Protect allies from damage' },
        { name: 'Judgment', level: 18, description: 'Smite enemies with holy power' },
        { name: 'Resurrection', level: 38, description: 'Ultimate ability - bring fallen allies back to life' }
      ]
    },
    dragonknight: {
      id: 'dragonknight',
      name: 'Dragonknight',
      color: 'from-purple-900 to-purple-700',
      description: 'Dragon-bonded warrior commanding elemental fury and draconic strength.',
      fullDescription: 'Dragonknights have formed pacts with ancient dragons, gaining access to devastating elemental abilities and draconic resilience.',
      image: 'src/assets/images/Dragonknight.webp',
      stats: {
        health: 8,
        attack: 8,
        defense: 9,
        magic: 8,
        dexterity: 5
      },
      abilities: [
        { name: 'Dragon Bite', level: 1, description: 'Bite with draconic force' },
        { name: 'Inferno Breath', level: 8, description: 'Breathe fire upon enemies' },
        { name: 'Draconic Armor', level: 16, description: 'Harden scales for protection' },
        { name: 'Dragon Ascension', level: 40, description: 'Ultimate ability - transform into a dragon' }
      ]
    },
    gunslinger: {
      id: 'gunslinger',
      name: 'Gunslinger',
      color: 'from-gray-900 to-gray-700',
      description: 'Fast-draw expert with precision gunfire and explosive tactics.',
      fullDescription: 'Gunslingers are quick-witted mercenaries who rely on speed, precision, and firepower to outgun their opponents.',
      image: 'src/assets/images/Gunslinger.webp',
      stats: {
        health: 6,
        attack: 8,
        defense: 5,
        magic: 4,
        dexterity: 10
      },
      abilities: [
        { name: 'Quick Draw', level: 1, description: 'Fast single shot attack' },
        { name: 'Burst Fire', level: 6, description: 'Rapid multi-shot barrage' },
        { name: 'Explosive Round', level: 14, description: 'Fire explosive bullets' },
        { name: 'Gunslinger\'s Dance', level: 36, description: 'Ultimate ability - dodge and counter with perfect precision' }
      ]
    },
    hunter: {
      id: 'hunter',
      name: 'Hunter',
      color: 'from-green-900 to-green-700',
      description: 'Skilled tracker and ranged combatant with beast mastery.',
      fullDescription: 'Hunters are masters of nature who track prey and command loyal beasts to fight alongside them in battle.',
      image: 'src/assets/images/Hunter.webp',
      stats: {
        health: 7,
        attack: 7,
        defense: 6,
        magic: 5,
        dexterity: 9
      },
      abilities: [
        { name: 'Power Shot', level: 1, description: 'Powerful arrow attack' },
        { name: 'Beast Call', level: 7, description: 'Summon a loyal beast companion' },
        { name: 'Piercing Arrow', level: 17, description: 'Arrow that penetrates all enemies' },
        { name: 'Primal Pack', level: 37, description: 'Ultimate ability - summon a pack of beasts' }
      ]
    },
    mage: {
      id: 'mage',
      name: 'Mage',
      color: 'from-blue-900 to-blue-700',
      description: 'Wielder of elemental magic with powerful area spells.',
      fullDescription: 'Mages harness the raw power of the elements to control the battlefield from a distance with devastating spells.',
      image: 'src/assets/images/Mage.webp',
      stats: {
        health: 5,
        attack: 4,
        defense: 4,
        magic: 10,
        dexterity: 7
      },
      abilities: [
        { name: 'Fireball', level: 1, description: 'Launch a fireball at enemies' },
        { name: 'Ice Storm', level: 9, description: 'Slow enemies with frost' },
        { name: 'Chain Lightning', level: 19, description: 'Lightning that jumps between foes' },
        { name: 'Meteor Storm', level: 39, description: 'Ultimate ability - rain meteors from above' }
      ]
    },
    occultist: {
      id: 'occultist',
      name: 'Occultist',
      color: 'from-indigo-900 to-indigo-700',
      description: 'Dark sorcerer commanding forbidden magic and dark rituals.',
      fullDescription: 'Occultists delve into forbidden knowledge to cast powerful dark magic, cursing enemies and draining their life force.',
      image: 'src/assets/images/Occultist.webp',
      stats: {
        health: 6,
        attack: 5,
        defense: 5,
        magic: 10,
        dexterity: 6
      },
      abilities: [
        { name: 'Curse', level: 1, description: 'Place a curse on an enemy' },
        { name: 'Drain Life', level: 8, description: 'Steal health from foes' },
        { name: 'Dark Ritual', level: 18, description: 'Perform a ritual for powerful magic' },
        { name: 'Abyssal Summoning', level: 41, description: 'Ultimate ability - summon creatures from the abyss' }
      ]
    },
    paladin: {
      id: 'paladin',
      name: 'Paladin',
      color: 'from-amber-900 to-amber-700',
      description: 'Holy knight balancing offense and defense with sacred power.',
      fullDescription: 'Paladins are noble warriors who combine martial prowess with holy magic, protecting allies and smiting evil.',
      image: 'src/assets/images/Paladin.webp',
      stats: {
        health: 8,
        attack: 7,
        defense: 9,
        magic: 7,
        dexterity: 5
      },
      abilities: [
        { name: 'Holy Strike', level: 1, description: 'Strike with holy power' },
        { name: 'Consecration', level: 6, description: 'Bless the ground for protection' },
        { name: 'Avenging Wrath', level: 16, description: 'Channel righteous fury' },
        { name: 'Divine Intervention', level: 34, description: 'Ultimate ability - intervene to save allies' }
      ]
    },
    rogue: {
      id: 'rogue',
      name: 'Rogue',
      color: 'from-slate-900 to-slate-700',
      description: 'Stealthy assassin dealing critical damage from the shadows.',
      fullDescription: 'Rogues are masters of stealth and precision, striking from the shadows with deadly accuracy.',
      image: 'src/assets/images/Rogue.webp',
      stats: {
        health: 6,
        attack: 8,
        defense: 5,
        magic: 4,
        dexterity: 10
      },
      abilities: [
        { name: 'Backstab', level: 1, description: 'Critical strike from behind' },
        { name: 'Shadow Clone', level: 7, description: 'Create a shadow copy of yourself' },
        { name: 'Death Mark', level: 17, description: 'Mark enemies for increased damage' },
        { name: 'Shadow Mastery', level: 35, description: 'Ultimate ability - merge with shadows for invulnerability' }
      ]
    },
    swordmaster: {
      id: 'swordmaster',
      name: 'Swordmaster',
      color: 'from-orange-900 to-orange-700',
      description: 'Master swordsman with perfect technique and fluid combat.',
      fullDescription: 'Swordmasters have perfected the art of the blade through decades of training, executing flawless techniques in battle.',
      image: 'src/assets/images/Swordmaster.webp',
      stats: {
        health: 8,
        attack: 9,
        defense: 8,
        magic: 3,
        dexterity: 9
      },
      abilities: [
        { name: 'Slash', level: 1, description: 'Quick sword slash' },
        { name: 'Parry Riposte', level: 5, description: 'Block and counter attack' },
        { name: 'Sword Dance', level: 15, description: 'Execute a beautiful sequence of strikes' },
        { name: 'Sword Saint Mode', level: 32, description: 'Ultimate ability - achieve perfect swordsmanship' }
      ]
    }
  };

  const selectedClass = classData[classId as keyof typeof classData] || classData.swordmaster;

  return (
    <>
        <div className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className={`relative h-96 bg-linear-to-br ${selectedClass.color} overflow-hidden`}>
        <img 
          src={selectedClass.image}
          alt={selectedClass.name}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-cinzel text-yellow-400 drop-shadow-lg mb-4">
              {selectedClass.name}
            </h1>
            <p className="text-gray-300 text-lg">
              {selectedClass.description}
            </p>
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
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-cinzel text-yellow-400 mb-4">Class Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {selectedClass.fullDescription}
            </p>
          </div>

          {/* Stats */}
          <div>
            <h2 className="text-3xl font-cinzel text-yellow-400 mb-8">Base Stats</h2>
            <div className="space-y-4">
              {Object.entries(selectedClass.stats).map(([stat, value]) => (
                <div key={stat} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 capitalize">{stat}</span>
                    <span className="text-yellow-400 font-cinzel">{value}/10</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value * 10}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-linear-to-r from-yellow-400 to-yellow-600"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abilities */}
          <div>
            <h2 className="text-3xl font-cinzel text-yellow-400 mb-8">Abilities</h2>
            <div className="space-y-4">
              {selectedClass.abilities.map((ability, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="custom-frame p-6 rounded-lg border border-yellow-400 border-opacity-30"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-yellow-400 font-cinzel text-lg">{ability.name}</h3>
                    <span className="text-xs px-3 py-1 bg-yellow-400 bg-opacity-20 text-yellow-400 rounded-full">
                      Level {ability.level}
                    </span>
                  </div>
                  <p className="text-gray-300">{ability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Playstyle */}
          <div className="custom-frame p-8 rounded-lg border border-yellow-400 border-opacity-30 bg-yellow-400 bg-opacity-5">
            <h2 className="text-2xl font-cinzel text-yellow-400 mb-4">Recommended Playstyle</h2>
            <p className="text-gray-300 mb-4">
              {selectedClass.name}s excel in {selectedClass.name === 'Warrior' ? 'close-range combat and protecting allies' : 'dealing massive damage from a safe distance'}. Focus on positioning and timing to maximize your effectiveness in combat.
            </p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Practice your combo chains in practice dungeons</li>
              <li>Learn when to use defensive and offensive abilities</li>
              <li>Coordinate with your team for maximum impact</li>
              <li>Upgrade your equipment regularly</li>
              <li>Join guild activities to improve faster</li>
            </ul>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link
              to="/"
              className="custom-frame-button px-8 py-3 text-yellow-400 font-cinzel hover:text-yellow-300 transition-all inline-block"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
    </>

  );
}
