import { motion } from 'framer-motion';

export function DownloadSection() {
  const downloads = [
    {
      id: 1,
      title: 'Windows Client',
      platform: '',
      version: 'v1.0.5',
      size: '4.2 GB',
      description: 'Optimized for Windows 10 and above. High performance DirectX 12 support.',
      requirements: 'Windows 10/11, 8GB RAM, SSD 50GB',
      date: 'January 15, 2026',
      image: 'src/assets/images/LargerResLogo.png'
    },
    {
      id: 2,
      title: 'Mac Client',
      platform: '',
      version: 'v1.0.5',
      size: '4.1 GB',
      description: 'Universal binary for Intel and Apple Silicon Macs.',
      requirements: 'macOS 11+, 8GB RAM, SSD 50GB',
      date: 'January 15, 2026',
      image: 'src/assets/images/LargerResLogo.png'
    },
    {
      id: 3,
      title: 'Linux Client',
      platform: '',
      version: 'v1.0.5',
      size: '3.9 GB',
      description: 'Full support for Ubuntu, Fedora, and other major distributions.',
      requirements: 'Linux kernel 4.4+, 8GB RAM, SSD 50GB',
      date: 'January 15, 2026',
      image: 'src/assets/images/LargerResLogo.png'
    }
  ];

  return (
    <section 
      className="relative mx-auto px-4 py-20 overflow-hidden bg-cover bg-center min-h-screen flex items-center bg-linear-to-b from-black via-gray-700 to-black">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            animate={{
              y: [0, -400],
              x: Math.sin(i) * 150,
              opacity: [0.8, 0]
            }}
            transition={{
              duration: 4 + i * 0.3,
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-center font-cinzel text-5xl md:text-6xl text-yellow-400 drop-shadow-2xl">
            DOWNLOAD TWIN SAGA
          </h2>
          <p className="text-center text-gray-300 mb-2 max-w-2xl mx-auto text-lg">
            Join millions of adventurers across the world. Choose your platform and begin your journey.
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {downloads.map((download, idx) => (
            <motion.div
              key={download.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(250, 204, 21, 0.3)' }}
              className="custom-frame group overflow-hidden rounded-xl shadow-2xl border border-yellow-400 border-opacity-40 hover:border-opacity-100 transition-all bg-linear-to-br from-gray-900 via-gray-800 to-black"
            >
              {/* Platform Image */}
              <div className="h-48 items-center justify-center relative overflow-hidden">
                <img 
                  src={download.image}
                  alt={download.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute text-6xl opacity-80 group-hover:opacity-100 transition-opacity">
                  {download.platform}
                </div>
              </div>

              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-cinzel text-yellow-400">{download.title}</h3>
                  <span className="text-xs px-3 py-1 bg-yellow-400 bg-opacity-20 text-black rounded-full font-cinzel font-bold">
                    {download.version}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {download.description}
                </p>

                <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 mb-4 border border-yellow-400 border-opacity-20">
                  <p className="text-xs text-gray-500 font-mono">SYSTEM REQUIREMENTS</p>
                  <p className="text-yellow-400 text-sm mt-2 font-cinzel">{download.requirements}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">{download.size}</span>
                  <span className="text-gray-500 text-xs">{download.date}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="custom-frame-button w-full px-6 py-3 text-yellow-400 font-cinzel hover:text-yellow-300 transition-all"
                >
                  DOWNLOAD NOW
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-gray-400"
        >
          <p className="text-sm mb-4">Official Client | 100% Safe | No P2W Elements</p>
        </motion.div>
      </div>
    </section>
  );
}
