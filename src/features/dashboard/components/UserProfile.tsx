interface UserProfileProps {
  username: string;
  email?: string;
  level?: number;
}

export function UserProfile({ username, email, level = 1 }: UserProfileProps) {
  return (
    <div className="custom-frame p-8 rounded-lg mb-8 bg-linear-to-br from-gray-800 to-gray-900">
      <h2 className="text-3xl font-cinzel text-yellow-400 mb-4">Welcome, {username}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-5xl font-cinzel text-yellow-400 mb-2">{level}</div>
          <p className="text-gray-400">Level</p>
        </div>
        <div className="text-center">
          <div className="text-gray-300 text-lg font-semibold mb-2">{username}</div>
          <p className="text-gray-400">Username</p>
        </div>
        <div className="text-center">
          <div className="text-gray-300 text-sm mb-2">{email || 'Not set'}</div>
          <p className="text-gray-400">Email</p>
        </div>
      </div>
    </div>
  );
}
