import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
        <Terminal className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold text-navy-900 dark:text-white mb-2">
        404
      </h1>
      <p className="text-navy-600 dark:text-navy-300 mb-6">
        This page could not be found.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
