import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Commands", to: "/commands" },
  { label: "Docker Guide", to: "/docker-guide" },
  { label: "EC2 Guide", to: "/ec2-guide" },
  { label: "Learning Paths", to: "/learning-paths" },
  { label: "Saved Commands", to: "/saved" },
  { label: "About", to: "/about" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2.5 rounded-xl border border-navy-200 dark:border-navy-700 text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 card p-2 animate-fade-in z-50">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.to)
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                  : "text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
