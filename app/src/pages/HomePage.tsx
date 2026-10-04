import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Terminal,
  ArrowRight,
  Sparkles,
  BookOpen,
  Container,
  Cloud,
  GitBranch,
  Settings,
  Boxes,
  Compass,
  Zap,
  ShieldCheck,
} from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import { commands, categories } from "@/data/commands";
import { learningPaths } from "@/data/learningPaths";
import { getOverallProgress } from "@/hooks/useLearningProgress";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/commands?q=${encodeURIComponent(search)}`);
  };

  const categoryCounts = categories.map((cat) => ({
    category: cat,
    count: commands.filter((c) => c.category === cat).length,
  }));

  const popularCommands = commands.filter((c) => c.popular).slice(0, 6);
  const overallProgress = getOverallProgress(learningPaths);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-500/5 to-transparent dark:from-blue-600/10 dark:via-cyan-500/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">
              <Terminal className="w-10 h-10 text-white" />
            </div>
          </div>

          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase">
            FluxOps
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-4 leading-tight">
            Your DevOps Learning and{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Command Assistant
            </span>
          </h1>
          <p className="text-lg md:text-xl text-navy-600 dark:text-navy-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Continuous and Automated IT Operations. Learn Linux, Git, Docker,
            Jenkins, AWS and Kubernetes with clear explanations, real commands
            and step-by-step deployment guides.
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search for commands, explanations or categories..."
              onSubmit={handleSearch}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={handleSearch} className="btn-primary">
              <Sparkles className="w-4 h-4" />
              Start Exploring
            </button>
            <button
              onClick={() => navigate("/commands")}
              className="btn-secondary"
            >
              <Compass className="w-4 h-4" />
              Browse Commands
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { label: "Total Commands", value: commands.length, icon: Terminal },
          { label: "Categories", value: categories.length, icon: Boxes },
          { label: "Learning Paths", value: learningPaths.length, icon: BookOpen },
          { label: "Overall Progress", value: `${overallProgress}%`, icon: Zap },
        ].map((stat) => (
          <div key={stat.label} className="card p-5 text-center">
            <stat.icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-navy-900 dark:text-white">
              {stat.value}
            </p>
            <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Boxes className="w-5 h-5 text-blue-500" />
          <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
            Browse by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryCounts.map(({ category, count }) => (
            <CategoryCard key={category} category={category} count={count} />
          ))}
        </div>
      </section>

      {/* Popular Commands */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
              Popular Commands
            </h2>
          </div>
          <button
            onClick={() => navigate("/commands")}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularCommands.map((cmd) => (
            <div key={cmd.id} className="card p-4 card-hover">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-navy-500 dark:text-navy-400">
                  {cmd.category}
                </span>
                <Zap className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <h3 className="font-semibold text-navy-900 dark:text-white text-sm mb-2">
                {cmd.title}
              </h3>
              <div className="terminal">
                <div className="px-3 py-2 overflow-x-auto">
                  <code className="text-xs text-cyan-300 whitespace-pre-wrap break-all">
                    {cmd.command}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Paths Preview */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
              Learning Paths
            </h2>
          </div>
          <button
            onClick={() => navigate("/learning-paths")}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningPaths.slice(0, 3).map((path) => (
            <div key={path.id} className="card p-6 card-hover">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${path.accent} flex items-center justify-center mb-4 shadow-md`}>
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-1">
                {path.title}
              </h3>
              <p className="text-sm text-navy-600 dark:text-navy-300 mb-3 line-clamp-2">
                {path.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-navy-500 dark:text-navy-400">
                <span>{path.difficulty}</span>
                <span>·</span>
                <span>{path.estimatedTime}</span>
                <span>·</span>
                <span>{path.concepts.length} concepts</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="mb-8">
        <div className="card p-8 md:p-12 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 dark:from-blue-600/10 dark:to-cyan-500/10">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
              The FluxOps Workflow
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: GitBranch, label: "GitHub Repository", desc: "Push your project to GitHub" },
              { icon: Cloud, label: "Ubuntu AWS EC2", desc: "Launch and connect to your instance" },
              { icon: Container, label: "Docker Image", desc: "Build and run your container" },
              { icon: Settings, label: "Nginx Container", desc: "Serve your app on port 80" },
            ].map((step, index) => (
              <div key={step.label} className="relative">
                <div className="card p-5 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <step.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-navy-900 dark:text-white text-sm mb-1">
                    {step.label}
                  </h3>
                  <p className="text-xs text-navy-500 dark:text-navy-400">
                    {step.desc}
                  </p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-navy-300 dark:text-navy-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
