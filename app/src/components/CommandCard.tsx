import { Bookmark, BookmarkCheck } from "lucide-react";
import CopyButton from "./CopyButton";
import type { DevOpsCommand } from "@/data/commands";

interface CommandCardProps {
  command: DevOpsCommand;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  Linux: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
  Git: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400",
  Docker: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-400",
  Jenkins:
    "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/20 dark:text-fuchsia-400",
  "AWS CLI":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
  Kubernetes:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400",
};

export default function CommandCard({
  command,
  isSaved,
  onToggleSave,
}: CommandCardProps) {
  return (
    <div className="card card-hover p-5 flex flex-col animate-fade-in">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-navy-900 dark:text-white text-base mb-1">
            {command.title}
          </h3>
          <span
            className={`badge ${categoryColors[command.category]}`}
          >
            {command.category}
          </span>
        </div>
        <button
          onClick={() => onToggleSave(command.id)}
          className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
            isSaved
              ? "text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
              : "text-navy-400 dark:text-navy-500 hover:bg-navy-100 dark:hover:bg-navy-800"
          }`}
          aria-label={isSaved ? "Remove from saved" : "Save command"}
          title={isSaved ? "Saved" : "Save command"}
        >
          {isSaved ? (
            <BookmarkCheck className="w-5 h-5" />
          ) : (
            <Bookmark className="w-5 h-5" />
          )}
        </button>
      </div>

      <p className="text-sm text-navy-600 dark:text-navy-300 mb-4 leading-relaxed">
        {command.description}
      </p>

      <div className="terminal mt-auto">
        <div className="flex items-center justify-between px-3 py-2 border-b border-navy-800 bg-navy-900">
          <span className="text-xs text-navy-500 font-mono">command</span>
          <CopyButton text={command.command} />
        </div>
        <div className="px-3 py-2.5 overflow-x-auto">
          <code className="text-sm text-cyan-300 whitespace-pre-wrap break-all">
            {command.command}
          </code>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-xs font-medium text-navy-500 dark:text-navy-400 mb-1.5 uppercase tracking-wide">
          Example
        </p>
        <div className="bg-navy-100 dark:bg-navy-800/50 rounded-lg px-3 py-2 font-mono text-xs text-navy-700 dark:text-navy-200 overflow-x-auto">
          {command.example}
        </div>
      </div>
    </div>
  );
}
