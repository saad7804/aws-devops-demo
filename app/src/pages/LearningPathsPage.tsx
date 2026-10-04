import { BookOpen, GraduationCap } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import ProgressCard from "@/components/ProgressCard";
import { learningPaths } from "@/data/learningPaths";
import { getOverallProgress } from "@/hooks/useLearningProgress";

export default function LearningPathsPage() {
  const overallProgress = getOverallProgress(learningPaths);

  return (
    <div className="animate-fade-in">
      <PageHeading
        title="Learning Paths"
        subtitle="Follow structured learning paths to master DevOps fundamentals step by step. Track your progress and mark concepts as you learn."
        icon={
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
        }
      />

      <div className="card p-6 mb-8 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 dark:from-blue-600/10 dark:to-cyan-500/10">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-navy-900 dark:text-white">
            Overall Progress
          </h3>
        </div>
        <div className="h-2.5 bg-navy-200 dark:bg-navy-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p className="text-sm text-navy-500 dark:text-navy-400 mt-2">
          {overallProgress}% of all concepts completed across all learning paths.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {learningPaths.map((path) => (
          <ProgressCard key={path.id} path={path} />
        ))}
      </div>
    </div>
  );
}
