export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner";
  estimatedTime: string;
  concepts: string[];
  accent: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: "linux-fundamentals",
    title: "Linux Fundamentals",
    description:
      "Learn the essential Linux commands for navigating the file system, managing processes and checking system resources on an Ubuntu server.",
    difficulty: "Beginner",
    estimatedTime: "3 hours",
    concepts: [
      "Navigating directories with cd and pwd",
      "Listing files with ls and permissions",
      "Checking disk and memory with df and free",
      "Managing services with systemctl",
      "Reading logs with journalctl",
      "Changing file ownership and permissions",
    ],
    accent: "from-amber-500 to-orange-600",
  },
  {
    id: "git-github",
    title: "Git and GitHub",
    description:
      "Understand version control from scratch, from initialising a repository to pushing your project to GitHub and collaborating with others.",
    difficulty: "Beginner",
    estimatedTime: "2 hours",
    concepts: [
      "Initialising a repository with git init",
      "Staging and committing changes",
      "Creating and switching branches",
      "Connecting a remote repository",
      "Pushing and pulling changes",
      "Reviewing history with git log",
    ],
    accent: "from-rose-500 to-red-600",
  },
  {
    id: "docker-fundamentals",
    title: "Docker Fundamentals",
    description:
      "Containerise your applications with Docker. Learn how to build images, run containers and manage their lifecycle for consistent deployments.",
    difficulty: "Beginner",
    estimatedTime: "4 hours",
    concepts: [
      "Understanding images and containers",
      "Writing a Dockerfile",
      "Building images with docker build",
      "Running containers with docker run",
      "Viewing logs and managing containers",
      "Cleaning up with docker system prune",
    ],
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "jenkins-cicd",
    title: "Jenkins CI/CD",
    description:
      "Set up continuous integration and delivery pipelines with Jenkins to automatically build, test and deploy your applications.",
    difficulty: "Beginner",
    estimatedTime: "5 hours",
    concepts: [
      "Installing and starting Jenkins",
      "Unlocking Jenkins on first run",
      "Creating pipeline jobs",
      "Triggering builds from the CLI",
      "Connecting build agents",
      "Reading Jenkins logs",
    ],
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    id: "aws-fundamentals",
    title: "AWS Fundamentals",
    description:
      "Get started with Amazon Web Services. Launch an EC2 instance, configure security groups and deploy your application to the cloud.",
    difficulty: "Beginner",
    estimatedTime: "4 hours",
    concepts: [
      "Configuring the AWS CLI",
      "Launching an Ubuntu EC2 instance",
      "Configuring security groups",
      "Connecting via SSH",
      "Allocating an Elastic IP",
      "Managing instances with the CLI",
    ],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "kubernetes-fundamentals",
    title: "Kubernetes Fundamentals",
    description:
      "Orchestrate containers at scale with Kubernetes. Learn how to deploy, scale and manage your applications across a cluster.",
    difficulty: "Beginner",
    estimatedTime: "6 hours",
    concepts: [
      "Understanding pods, deployments and services",
      "Applying YAML manifests",
      "Scaling deployments",
      "Rolling out and rolling back updates",
      "Viewing pod logs and describing resources",
      "Forwarding ports for local testing",
    ],
    accent: "from-indigo-500 to-violet-600",
  },
];
