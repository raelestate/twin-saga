import { useChangelog } from './hooks/useChangelog';
import { ChangelogCardItem } from './components/ChangelogCardItem';
import { ChangelogSkeleton } from './components/ChangelogSkeleton';
import { LocalChangelogService } from "./services/localChangelogService";
import { motion } from 'framer-motion';

const service = new LocalChangelogService();

export function ChangelogSection() {
  const { items, loading, hasMore } = useChangelog(service);

  return (
    <section className="relative mx-auto px-4 py-20 bg-linear-to-b from-gray-900 via-black to-gray-950 overflow-hidden">

      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-1000 h-1000 pointer-events-none overflow-hidden">
        {/* Floating Orb 1 */}
        <img
          src="src/assets/images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
          alt="Floating Orb"
          className="absolute w-7xl h-320 -top-160 -left-160 animate-spin-slow opacity-40 pointer-events-none select-none"
        />

       
      </div>
      <div className="absolute bottom-0 right-0 w-1000 h-1000 pointer-events-none overflow-hidden">
        {/* Floating Orb 2 */}
        <img
          src="src/assets/images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
          alt="Floating Orb"
          className="absolute w-7xl h-320 -bottom-160 -right-160 animate-spin-slow opacity-40 pointer-events-none select-none"
        />
      </div>


      <h2 className="mb-12 text-center font-cinzel text-3xl text-yellow-400 drop-shadow-lg">
        Changelogs
      </h2>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(360px,1fr))] relative z-10">
        {items.map(card => (
          <ChangelogCardItem key={card.id} card={card} />
        ))}

        {loading && Array.from({ length: 4 }).map((_, i) => (
          <ChangelogSkeleton key={i} />
        ))}
      </div>

      {/* Pagination / Show More */}
      <div className="mt-12 text-center relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <span className="text-gray-400 font-mono tracking-wider">Keep exploring the realms...</span>
        {hasMore && (
          <motion.button
            disabled={loading}
            whileHover={{ scale: 1.05, textShadow: '0 0 12px #FFD700', boxShadow: '0 0 20px #FFD700' }}
            whileTap={{ scale: 0.95 }}
            className="custom-frame-button mt-2 sm:mt-0 px-10 py-5 text-yellow-400 font-cinzel text-lg hover:text-yellow-300 transition-all duration-300 shadow-md"
          >
            {loading ? "Loading…" : "Show More"}
          </motion.button>
        )}
      </div>
    </section>
  );
}
