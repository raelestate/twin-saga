import { useAuth } from '../store/AuthContext';
import { DashboardLayout, UserProfile, DashboardStats } from '../features/dashboard';

export function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-4xl font-cinzel text-yellow-400 mb-8">Welcome, {user.username}!</h1>
        <UserProfile username={user.username} email={user.email} />
        <DashboardStats />

        {/* Quick Links */}
        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <div className="custom-frame p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-cinzel text-yellow-400 mb-3">Active Quests</h3>
            <p className="text-gray-300 mb-4">You have 5 active quests waiting for you.</p>
            <button className="custom-frame-button px-4 py-2 text-yellow-400 font-cinzel text-sm hover:text-yellow-300">
              View Quests
            </button>
          </div>

          <div className="custom-frame p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-cinzel text-yellow-400 mb-3">Guild</h3>
            <p className="text-gray-300 mb-4">You are a member of Shadow Hunters guild.</p>
            <button className="custom-frame-button px-4 py-2 text-yellow-400 font-cinzel text-sm hover:text-yellow-300">
              Guild Hall
            </button>
          </div>

          <div className="custom-frame p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-cinzel text-yellow-400 mb-3">Party</h3>
            <p className="text-gray-300 mb-4">No active party. Create or join one!</p>
            <button className="custom-frame-button px-4 py-2 text-yellow-400 font-cinzel text-sm hover:text-yellow-300">
              Find Party
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
