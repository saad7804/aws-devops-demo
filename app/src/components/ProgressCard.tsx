import { Link } from "react-router-dom";
import { CheckCircle2, Circle, RotateCcw, Clock, Signal } from "lucide-react";
import type { LearningPath } from "@/data/learningPaths";
import { useLearningProgress } from "@/hooks/useLearningProgress";

interface ProgressCardProps {
  path: LearningPath;
}

export default function ProgressCard({ path }: ProgressCardProps) {
  const { completed, toggleConcept, resetProgress, completedCount, percentage } =
    useLearningProgress(path.id, path.concepts.length);

  return (
    <div className="card p-6 flex flex-col animate-fade-in">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${path.accent} flex items-center justify-center mb-4 shadow-md`}>
        <Signal className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-1">
        {path.title}
      </h3>
      <p className="text-sm text-navy-600 dark:text-navy-300 mb-4 leading-relaxed">
        {path.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="badge bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
          {path.difficulty}
        </span>
        <span className="badge bg-navy-100 text-navy-600 dark:bg-navy-800 dark:text-navy-300 inline-flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {path.estimatedTime}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs font-medium text-navy-500 dark:text-navy-400 mb-1.5">
          <span>{completedCount} of {path.concepts.length} completed</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-2 bg-navy-200 dark:bg-navy-800 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${path.accent} rounded-full transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <ul className="space-y-2 mb-5 flex-1">
        {path.concepts.map((concept, index) => (
          <li key={index}>
            <button
              onClick={() => toggleConcept(index)}
              className="flex items-start gap-2.5 text-left w-full group"
            >
              {completed[index] ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <Circle className="w-5 h-5 text-navy-300 dark:text-navy-600 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" />
              )}
              <span
                className={`text-sm transition-colors ${
                  completed[index]
                    ? "text-navy-400 dark:text-navy-500 line-through"
                    : "text-navy-700 dark:text-navy-200 group-hover:text-navy-900 dark:group-hover:text-white"
                }`}
              >
                {concept}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 pt-4 border-t border-navy-200 dark:border-navy-800">
        <button
          onClick={resetProgress}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-500 hover:text-red-500 dark:text-navy-400 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset progress
        </button>
        <Link
          to="/commands"
          className="ml-auto text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Browse commands
        </Link>
      </div>
    </div>
  );
}
