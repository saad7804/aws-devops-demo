import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50 dark:bg-navy-950 transition-colors duration-300">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-navy-950/80 border-b border-navy-200 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-navy-900 dark:text-white">
                FluxOps
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <Navbar />
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
