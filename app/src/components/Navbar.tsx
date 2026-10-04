import { Link, useLocation } from "react-router-dom";
import { Terminal } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Commands", to: "/commands" },
  { label: "Docker Guide", to: "/docker-guide" },
  { label: "EC2 Guide", to: "/ec2-guide" },
  { label: "Learning Paths", to: "/learning-paths" },
  { label: "Saved Commands", to: "/saved" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive(link.to)
              ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
              : "text-navy-600 dark:text-navy-300 hover:text-navy-900 dark:hover:text-white hover:bg-navy-100 dark:hover:bg-navy-800"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
