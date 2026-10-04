import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: { label: string; to: string };
}

import { Link } from "react-router-dom";

export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="card p-12 flex flex-col items-center text-center animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-navy-100 dark:bg-navy-800 flex items-center justify-center mb-5">
        <Icon className="w-8 h-8 text-navy-400 dark:text-navy-500" />
      </div>
      <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-navy-500 dark:text-navy-400 max-w-md mb-6">
        {description}
      </p>
      {action && (
        <Link to={action.to} className="btn-primary">
          {action.label}
        </Link>
      )}
    </div>
  );
}
