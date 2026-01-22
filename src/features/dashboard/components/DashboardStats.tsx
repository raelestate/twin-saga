export function DashboardStats() {
  const stats = [
    { label: 'Experience Points', value: '1,234,567', icon: '⭐' },
    { label: 'Play Time', value: '342 hours', icon: '⏱️' },
    { label: 'Achievements', value: '28/50', icon: '🏆' },
    { label: 'Guild Rank', value: 'Captain', icon: '👑' },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="custom-frame p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">{stat.icon}</div>
          <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
          <p className="text-2xl font-cinzel text-yellow-400">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
