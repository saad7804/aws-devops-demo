import { Link } from "react-router-dom";
import {
  Info,
  Terminal,
  GitBranch,
  Container,
  Settings,
  Cloud,
  Boxes,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import PageHeading from "@/components/PageHeading";

export default function AboutPage() {
  const topics = [
    {
      icon: Terminal,
      title: "Linux",
      desc: "Navigate the file system, manage services and monitor system resources.",
    },
    {
      icon: GitBranch,
      title: "Git and GitHub",
      desc: "Version control, branching and pushing projects to remote repositories.",
    },
    {
      icon: Container,
      title: "Docker",
      desc: "Build images, run containers and manage their lifecycle for consistent deployments.",
    },
    {
      icon: Settings,
      title: "Jenkins CI/CD",
      desc: "Automate building, testing and deploying applications with pipelines.",
    },
    {
      icon: Cloud,
      title: "AWS EC2",
      desc: "Launch Ubuntu instances, configure security groups and deploy to the cloud.",
    },
    {
      icon: Boxes,
      title: "Kubernetes",
      desc: "Orchestrate containers at scale with deployments, services and rollouts.",
    },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeading
        title="About FluxOps"
        subtitle="Continuous and Automated IT Operations."
        icon={
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
            <Info className="w-6 h-6 text-white" />
          </div>
        }
      />

      <section className="card p-8 mb-8">
        <h2 className="text-xl font-semibold text-navy-900 dark:text-white mb-4">
          What is FluxOps?
        </h2>
        <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
          FluxOps is an educational DevOps assistant designed to help beginners
          understand the tools and commands used in modern IT operations. It
          covers Linux, Git and GitHub, Docker, Jenkins CI/CD, AWS EC2,
          Kubernetes and common deployment errors.
        </p>
        <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
          The goal of FluxOps is to make DevOps approachable. Every command
          includes a simple explanation and an example, so you can learn what a
          command does and how to use it without needing prior experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-navy-900 dark:text-white mb-6">
          Topics You Can Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic) => (
            <div key={topic.title} className="card p-6 card-hover">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-4">
                <topic.icon className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-semibold text-navy-900 dark:text-white mb-1">
                {topic.title}
              </h3>
              <p className="text-sm text-navy-600 dark:text-navy-300">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-8 mb-8 bg-gradient-to-br from-amber-500/5 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-500/10 border-amber-200 dark:border-amber-500/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-navy-900 dark:text-white mb-2">
              Educational Application Only
            </h3>
            <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
              FluxOps is an educational frontend application. It does not execute
              terminal commands, connect to cloud accounts or modify cloud
              resources. All commands are shown as reference material for you to
              run manually in your own environment.
            </p>
          </div>
        </div>
      </section>

      <section className="card p-8 text-center">
        <h2 className="text-xl font-semibold text-navy-900 dark:text-white mb-3">
          Ready to start learning?
        </h2>
        <p className="text-navy-600 dark:text-navy-300 mb-6 max-w-lg mx-auto">
          Explore the commands library, follow a learning path or read through
          the deployment guides.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/commands" className="btn-primary">
            Browse Commands
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/learning-paths" className="btn-secondary">
            View Learning Paths
          </Link>
        </div>
      </section>
    </div>
  );
}
