import { Link } from "react-router-dom";
import { Terminal, Github, BookOpen, Container, Cloud } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-navy-200 dark:border-navy-800 bg-navy-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-navy-900 dark:text-white">
                FluxOps
              </span>
            </div>
            <p className="text-sm text-navy-600 dark:text-navy-400 max-w-md leading-relaxed mb-4">
              Continuous and Automated IT Operations. An educational DevOps
              command and deployment assistant for students and beginners.
            </p>
            <p className="text-xs text-navy-400 dark:text-navy-500">
              FluxOps is an educational frontend application. It does not execute
              terminal commands or modify cloud resources.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-900 dark:text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/commands"
                  className="text-sm text-navy-600 dark:text-navy-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Commands Library
                </Link>
              </li>
              <li>
                <Link
                  to="/docker-guide"
                  className="text-sm text-navy-600 dark:text-navy-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Docker Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/ec2-guide"
                  className="text-sm text-navy-600 dark:text-navy-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  EC2 Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/learning-paths"
                  className="text-sm text-navy-600 dark:text-navy-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Learning Paths
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-900 dark:text-white mb-4">
              Topics
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-navy-600 dark:text-navy-400">
                <Terminal className="w-4 h-4" /> Linux
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-600 dark:text-navy-400">
                <BookOpen className="w-4 h-4" /> Git and GitHub
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-600 dark:text-navy-400">
                <Container className="w-4 h-4" /> Docker
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-600 dark:text-navy-400">
                <Cloud className="w-4 h-4" /> AWS and Kubernetes
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500 dark:text-navy-400">
            © {new Date().getFullYear()} FluxOps. Built for learning DevOps.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-navy-500 dark:text-navy-400 inline-flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" />
              Ready for GitHub
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
