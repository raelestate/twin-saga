import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/navbar/Navbar";
import { useAuth } from "../store/AuthContext";

const DEFAULT_FLOATING_ELEMENTS = [
  {
    src: "src/assets/images/spark.png",
    size: 1920,
    top: "20%",
    left: "-800%",
    transform: "rotate(40deg)",
  },
];

export function AuthPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  const floatingElements = DEFAULT_FLOATING_ELEMENTS;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLoginMode) {
        if (!email || !password) {
          setError("Please fill in all fields");
          setLoading(false);
          return;
        }
        await login(email, password);
      } else {
        if (!username || !email || !password || !confirmPassword) {
          setError("Please fill in all fields");
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        await login(username, password);
      }

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError("Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLoginMode(!isLoginMode);
    setError("");
    setEmail("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
  };
  const links = [
    { label: 'Main', href: '/' },
    { label: 'Download', href: '/download' },
    { label: 'News', href: '/news' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Events', href: '/events' },
    { label: 'Ranking', href: '/ranking' },
    { label: 'Media', href: '/media' },
    { label: 'Wiki', href: '/wiki' },
  ];
  return (
    <>
      <Navbar links={links} />

      <div className="relative w-full min-h-screen bg-linear-to-b from-gray-900 via-black to-gray-950 flex items-center justify-center overflow-hidden">

        {floatingElements.map((el, index) => (
          <img
            key={`${el.src}-${index}`}
            src={el.src}
            alt=""
            aria-hidden
            className="absolute animate-floating rounded-full z-10 pointer-events-none select-none"
            style={{
              width: el.size,
              height: el.size,
              top: el.top ?? `${15 + index * 12}%`,
              left: el.left ?? `${10 + index * 14}%`,
              transform: el.transform ?? "none",
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}

        <div className="absolute top-0 left-0 w-1000 h-1000 pointer-events-none overflow-hidden">
          <img
            src="src/assets/images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
            alt="Floating Orb"
            className="absolute w-7xl h-320 -top-160 -left-160 animate-spin-slow opacity-40 pointer-events-none select-none"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1000 h-1000 pointer-events-none overflow-hidden">
          <img
            src="src/assets/images/95-951926_go-to-image-magic-circle-anime-png-clipart.png"
            alt="Floating Orb"
            className="absolute w-7xl h-320 -bottom-160 -right-160 animate-spin-slow opacity-40 pointer-events-none select-none"
          />
        </div>
        <AnimatePresence mode="wait">
          <motion.form
            key={isLoginMode ? "login" : "register"}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 w-full max-w-md bg-black backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col gap-6 custom-frame"
          >
            <h1 className="text-3xl font-cinzel text-yellow-400 text-center drop-shadow-lg">
              {isLoginMode ? "Adventurer Login" : "Adventurer Register"}
            </h1>

            {error && (
              <div className="p-4 bg-red-900 border border-red-600 rounded text-red-200 text-sm">
                {error}
              </div>
            )}

            {!isLoginMode && (
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-semibold" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Choose your hero name"
                  className="px-4 py-2 rounded-md bg-gray-700 text-gray-100 focus:border-yellow-400 focus:outline-none"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-gray-300 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="twinsaga@mail.com"
                className="px-4 py-2 rounded-md bg-gray-700 text-gray-100 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-300 font-semibold" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="********"
                className="px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            {!isLoginMode && (
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-semibold" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="********"
                  className="px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:border-yellow-400 focus:outline-none"
                />
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FFD700" }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="custom-frame mt-4 w-full py-3 text-yellow-400 font-cinzel text-lg rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (isLoginMode ? "Logging in…" : "Registering…") : isLoginMode ? "Enter the Realm" : "Create Your Hero"}
            </motion.button>

            <p className="text-gray-400 text-sm text-center mt-2">
              {isLoginMode ? "New adventurer?" : "Already an adventurer?"}{" "}
              <button
                type="button"
                onClick={toggleForm}
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                {isLoginMode ? "Register here" : "Login here"}
              </button>
            </p>
          </motion.form>
        </AnimatePresence>
      </div>
    </>

  );
}

export default AuthPage;
