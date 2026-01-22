import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/header/Header';

export function NewsDetailPage() {
  const article = {
    id: 1,
    title: 'Grand Reunion Festival Begins!',
    author: 'Twin Saga Team',
    date: 'January 20, 2026',
    category: 'Event',
    featured_image: 'src/assets/images/news-featured.png',
    readTime: '8 min read',
    content: `The Grand Reunion Festival is now live! This is our most ambitious event yet, bringing together the entire Twin Saga community for an unforgettable celebration.

Join us for exclusive rewards, special challenges, and limited-time content that you won't find anywhere else. Whether you're a casual player or a hardcore adventurer, there's something for everyone.

Key Event Features:
• Daily login rewards with progressive bonuses
• Limited-time dungeon with rare drops
• PvP tournament with exclusive titles
• Community challenges with server-wide rewards
• Special merchant with exclusive items

The festival runs from January 20 to February 5, 2026. Don't miss out on this once-in-a-lifetime opportunity!`,
    relatedArticles: [
      { id: 2, title: 'Patch Notes v1.0.5', date: 'January 15, 2026' },
      { id: 3, title: 'New Class Balance Changes', date: 'January 10, 2026' },
      { id: 4, title: 'Server Maintenance Schedule', date: 'January 8, 2026' }
    ]
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black">
      {/* Header */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={article.featured_image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-20 text-yellow-400 rounded-full font-cinzel text-sm mb-4">
              {article.category}
            </span>
            <h1 className="text-5xl font-cinzel text-yellow-400 drop-shadow-lg mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-300">
              <span>By {article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
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
          className="prose prose-invert max-w-none"
        >
          <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>
        </motion.div>

        {/* Related Articles */}
        <div className="mt-20 pt-12 border-t border-yellow-400 border-opacity-20">
          <h2 className="text-3xl font-cinzel text-yellow-400 mb-8">Related Articles</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {article.relatedArticles.map((related) => (
              <Link
                key={related.id}
                to="/news"
                className="custom-frame p-6 rounded-lg hover:shadow-xl transition-all border border-yellow-400 border-opacity-20 group"
              >
                <p className="text-gray-400 text-sm mb-3">{related.date}</p>
                <h3 className="text-yellow-400 font-cinzel group-hover:text-yellow-300 transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/news"
            className="custom-frame-button px-8 py-3 text-yellow-400 font-cinzel hover:text-yellow-300 transition-all inline-block"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
