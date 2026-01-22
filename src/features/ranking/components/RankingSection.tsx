import { motion } from 'framer-motion';

export function RankingSection() {
    const rankings = [
        { rank: 1, player: 'ShadowBlade', level: 120, exp: 9999999, server: 'Lumina', avatar: '' },
        { rank: 2, player: 'CelestialMage', level: 119, exp: 9899999, server: 'Lumina', avatar: '' },
        { rank: 3, player: 'VenomStrike', level: 119, exp: 9899998, server: 'Solaris', avatar: '' },
        { rank: 4, player: 'PhoenixRisen', level: 118, exp: 9799999, server: 'Solaris', avatar: '' },
        { rank: 5, player: 'FrostWarden', level: 118, exp: 9799998, server: 'Lumina', avatar: '' },
    ];

    return (
        <section className="relative mx-auto px-4 py-20 bg-linear-to-b from-gray-900 via-black to-gray-950 overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute top-0 left-0 w-1000d h-1000 pointer-events-none overflow-hidden">
                <img
                    src="images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
                    alt="Floating Orb"
                    className="absolute w-7xl h-320 -top-160 -left-160 animate-spin-slow opacity-40 pointer-events-none select-none"
                />
            </div>
            <div className="absolute bottom-0 right-0 w-1000 h-1000 pointer-events-none overflow-hidden">
                <img
                    src="images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
                    alt="Floating Orb"
                    className="absolute w-7xl h-320 -bottom-160 -right-160 animate-spin-slow opacity-40 pointer-events-none select-none"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center relative z-10"
            >
                <h2 className="mb-4 font-cinzel text-5xl text-yellow-400 drop-shadow-lg">
                    GLOBAL RANKINGS
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The most powerful adventurers in Twin Saga. Compete with players worldwide to claim your spot on the leaderboard.
                </p>
            </motion.div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="custom-frame rounded-xl overflow-hidden shadow-2xl border border-yellow-400 border-opacity-30"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-linear-to-r from-gray-900 to-gray-800 border-b border-yellow-400">
                                    <th className="px-6 py-4 text-left text-yellow-400 font-cinzel text-lg">RANK</th>
                                    <th className="px-6 py-4 text-left text-yellow-400 font-cinzel text-lg">PLAYER</th>
                                    <th className="px-6 py-4 text-left text-yellow-400 font-cinzel text-lg">LEVEL</th>
                                    <th className="px-6 py-4 text-left text-yellow-400 font-cinzel text-lg">EXP</th>
                                    <th className="px-6 py-4 text-left text-yellow-400 font-cinzel text-lg">SERVER</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankings.map((entry, idx) => (
                                    <motion.tr
                                        key={entry.rank}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className={`border-b border-gray-700 hover:bg-gray-800 transition-colors ${entry.rank === 1 ? 'bg-yellow-900 bg-opacity-10' : ''
                                            }`}
                                    >
                                        <td className="px-6 py-4 text-yellow-400 font-cinzel font-bold text-2xl">
                                            #{entry.rank}
                                        </td>


                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{entry.avatar}</span>
                                                <span className="text-gray-200 font-cinzel font-semibold">{entry.player}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                                className="flex items-center gap-3 origin-left"
                                            >
                                                <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${(entry.level / 120) * 100}%` }}
                                                        transition={{ duration: 1, delay: idx * 0.1 }}
                                                        className="h-full bg-linear-to-r from-yellow-400 to-yellow-600"
                                                    ></motion.div>
                                                </div>
                                                <span className="text-yellow-400 font-cinzel font-bold min-w-10">{entry.level}</span>
                                            </motion.div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-300 font-mono text-sm">{entry.exp.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-yellow-400 bg-opacity-20 text-black rounded-full font-cinzel text-sm">
                                                {entry.server}
                                            </span>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 custom-frame p-6 rounded-lg bg-opacity-5"
                >
                    <p className="text-white text-center">
                        Climb the rankings and earn exclusive rewards! Rankings update daily.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
