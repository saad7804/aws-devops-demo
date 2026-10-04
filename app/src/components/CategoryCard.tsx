import { Link } from "react-router-dom";
import {
  Terminal,
  GitBranch,
  Container,
  Settings,
  Cloud,
  Boxes,
  ArrowRight,
} from "lucide-react";
import type { CommandCategory } from "@/data/commands";

interface CategoryCardProps {
  category: CommandCategory;
  count: number;
}

const categoryConfig: Record<
  CommandCategory,
  { icon: typeof Terminal; gradient: string; bg: string; border: string }
> = {
  Linux: {
    icon: Terminal,
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    border: "hover:border-amber-400 dark:hover:border-amber-500",
  },
  Git: {
    icon: GitBranch,
    gradient: "from-rose-500 to-red-600",
    bg: "bg-rose-50 dark:bg-rose-500/10",
    border: "hover:border-rose-400 dark:hover:border-rose-500",
  },
  Docker: {
    icon: Container,
    gradient: "from-sky-500 to-blue-600",
    bg: "bg-sky-50 dark:bg-sky-500/10",
    border: "hover:border-sky-400 dark:hover:border-sky-500",
  },
  Jenkins: {
    icon: Settings,
    gradient: "from-fuchsia-500 to-purple-600",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
    border: "hover:border-fuchsia-400 dark:hover:border-fuchsia-500",
  },
  "AWS CLI": {
    icon: Cloud,
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "hover:border-emerald-400 dark:hover:border-emerald-500",
  },
  Kubernetes: {
    icon: Boxes,
    gradient: "from-indigo-500 to-violet-600",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "hover:border-indigo-400 dark:hover:border-indigo-500",
  },
};

export default function CategoryCard({ category, count }: CategoryCardProps) {
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <Link
      to={`/commands?category=${encodeURIComponent(category)}`}
      className={`card card-hover p-6 ${config.border} group animate-fade-in`}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center mb-4 shadow-md`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-1">
        {category}
      </h3>
      <p className="text-sm text-navy-500 dark:text-navy-400 mb-4">
        {count} commands available
      </p>
      <div className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
        Browse commands
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
