import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './store/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DownloadPage from './pages/DownloadPage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import RankingPage from './pages/RankingPage';
import MediaPage from './pages/MediaPage';
import WikiPage from './pages/WikiPage';
import ChangelogPage from './pages/ChangelogPage';
import DashboardPage from './pages/DashboardPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { ClassDetailPage } from './pages/ClassDetailPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:id" element={<EventDetailPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/wiki" element={<WikiPage />} />
      <Route path="/changelog" element={<ChangelogPage />} />
      <Route path="/class/:id" element={<ClassDetailPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
