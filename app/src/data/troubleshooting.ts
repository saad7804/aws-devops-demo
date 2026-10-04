export interface TroubleshootingItem {
  id: string;
  title: string;
  problem: string;
  solutions: string[];
  commands?: string[];
}

export const dockerTroubleshooting: TroubleshootingItem[] = [
  {
    id: "docker-permission",
    title: "Docker permission denied",
    problem:
      "Running docker commands returns 'permission denied while trying to connect to the Docker daemon socket'.",
    solutions: [
      "Your user is not in the docker group. Add it and refresh the group session.",
      "Log out and back in if the group change does not take effect immediately.",
    ],
    commands: ["sudo usermod -aG docker $USER", "newgrp docker"],
  },
  {
    id: "port-80-in-use",
    title: "Port 80 already in use",
    problem:
      "The container fails to start because port 80 on the host is already occupied by another process.",
    solutions: [
      "Find which process is using port 80 and stop it.",
      "Alternatively, map the container to a different host port such as 8080.",
    ],
    commands: ["sudo lsof -i :80", "sudo systemctl stop nginx"],
  },
  {
    id: "container-name-exists",
    title: "Container name already exists",
    problem:
      "Docker refuses to create a new container because a container with the same name already exists.",
    solutions: [
      "Remove the existing container before creating a new one.",
      "Use docker ps -a to find the conflicting container.",
    ],
    commands: ["docker rm -f fluxops-container", "docker ps -a"],
  },
  {
    id: "no-space-left",
    title: "No space left on device",
    problem:
      "Docker runs out of disk space because of old images, stopped containers and build cache.",
    solutions: [
      "Check how much disk space Docker is using.",
      "Remove all unused images, containers and cache.",
    ],
    commands: ["docker system df", "docker system prune -a"],
  },
  {
    id: "docker-build-failure",
    title: "Docker image build failure",
    problem:
      "The docker build command fails, often because of a missing Dockerfile or a dependency error.",
    solutions: [
      "Make sure you are in the project root directory that contains the Dockerfile.",
      "Check that package-lock.json exists so npm ci can run successfully.",
      "Review the full build output for the failing step.",
    ],
    commands: ["ls -la Dockerfile", "npm install", "docker build -t fluxops:v1 ."],
  },
  {
    id: "ec2-ip-not-opening",
    title: "EC2 public IP not opening",
    problem:
      "Visiting the EC2 public IP in a browser does not load the application.",
    solutions: [
      "Confirm the container is running and mapped to port 80.",
      "Make sure port 80 is open in the EC2 security group.",
      "Allow port 80 through the Ubuntu firewall if it is enabled.",
    ],
    commands: ["docker ps", "sudo ufw allow 80/tcp", "sudo ufw status"],
  },
  {
    id: "security-group-80",
    title: "HTTP port 80 missing from the security group",
    problem:
      "The security group attached to the EC2 instance does not have an inbound rule for HTTP on port 80.",
    solutions: [
      "Add an inbound rule allowing TCP port 80 from 0.0.0.0/0 in the AWS console.",
      "Or add the rule using the AWS CLI.",
    ],
    commands: [
      "aws ec2 authorize-security-group-ingress --group-id SG_ID --protocol tcp --port 80 --cidr 0.0.0.0/0",
    ],
  },
  {
    id: "react-router-404",
    title: "React Router returning 404 after refresh",
    problem:
      "Navigating to a route works, but refreshing the page returns a 404 from Nginx.",
    solutions: [
      "The Nginx configuration must fall back to index.html for unknown routes.",
      "Make sure nginx.conf contains the try_files directive.",
    ],
    commands: ["nginx -t", "docker restart fluxops-container"],
  },
  {
    id: "nginx-restarting",
    title: "Nginx container restarting repeatedly",
    problem:
      "The fluxops container keeps restarting because Nginx cannot start properly.",
    solutions: [
      "Check the container logs for the exact error.",
      "Make sure the build produced a dist directory before building the image.",
      "Verify the nginx.conf is valid.",
    ],
    commands: ["docker logs fluxops-container", "npm run build", "nginx -t"],
  },
];

export interface GuideStep {
  number: number;
  title: string;
  description: string;
  command?: string;
}

export const dockerGuideSteps: GuideStep[] = [
  {
    number: 1,
    title: "Clone the GitHub repository",
    description:
      "Download a copy of the FluxOps project from your GitHub repository onto the EC2 instance.",
    command: "git clone YOUR_GITHUB_REPOSITORY_URL",
  },
  {
    number: 2,
    title: "Enter the project directory",
    description: "Move into the project folder that was created by git clone.",
    command: "cd fluxops",
  },
  {
    number: 3,
    title: "Install dependencies",
    description:
      "Install all the npm packages the project needs before building it.",
    command: "npm install",
  },
  {
    number: 4,
    title: "Start the development server",
    description:
      "Run the development server to test the application locally before building for production.",
    command: "npm run dev",
  },
  {
    number: 5,
    title: "Run the production build",
    description:
      "Create an optimised production build of the application in the dist directory.",
    command: "npm run build",
  },
  {
    number: 6,
    title: "Review the Dockerfile",
    description:
      "Open the Dockerfile to understand how the application is built and served with Nginx.",
    command: "cat Dockerfile",
  },
  {
    number: 7,
    title: "Build the Docker image",
    description:
      "Build a Docker image named fluxops at version v1 using the Dockerfile in the current directory.",
    command: "docker build -t fluxops:v1 .",
  },
  {
    number: 8,
    title: "Run the Docker container",
    description:
      "Start a detached container named fluxops-container that maps port 80 and restarts automatically.",
    command:
      "docker run -d --name fluxops-container --restart always -p 80:80 fluxops:v1",
  },
  {
    number: 9,
    title: "Check running containers",
    description: "Confirm the container is running and view its port mapping.",
    command: "docker ps",
  },
  {
    number: 10,
    title: "View container logs",
    description:
      "Read the container output logs to confirm Nginx started without errors.",
    command: "docker logs fluxops-container",
  },
  {
    number: 11,
    title: "Restart or remove the container",
    description:
      "Stop, restart or remove the container when you need to deploy an updated image.",
    command: "docker stop fluxops-container && docker rm fluxops-container",
  },
  {
    number: 12,
    title: "Open the application using the EC2 public IP",
    description:
      "Visit the application in your browser using the public IPv4 address of your EC2 instance.",
    command: "http://YOUR_EC2_PUBLIC_IP",
  },
];

export interface EC2ChecklistItem {
  id: string;
  label: string;
  command?: string;
}

export const ec2Checklist: EC2ChecklistItem[] = [
  { id: "ec2-launch", label: "Launch an Ubuntu EC2 instance" },
  { id: "ec2-type", label: "Choose an instance type (t2.micro or t3.micro)" },
  { id: "ec2-keypair", label: "Create or select a key pair" },
  { id: "ec2-sg", label: "Configure the security group" },
  { id: "ec2-ssh", label: "Allow SSH on port 22" },
  { id: "ec2-http", label: "Allow HTTP on port 80" },
  { id: "ec2-connect", label: "Connect using SSH" },
  {
    id: "ec2-update",
    label: "Update Ubuntu packages",
    command: "sudo apt update",
  },
  {
    id: "ec2-upgrade",
    label: "Upgrade installed packages",
    command: "sudo apt upgrade -y",
  },
  {
    id: "ec2-git-docker",
    label: "Install Git and Docker",
    command: "sudo apt install git docker.io -y",
  },
  {
    id: "ec2-enable-docker",
    label: "Enable Docker to start on boot",
    command: "sudo systemctl enable docker",
  },
  {
    id: "ec2-start-docker",
    label: "Start the Docker service",
    command: "sudo systemctl start docker",
  },
  {
    id: "ec2-docker-group",
    label: "Add the Ubuntu user to the Docker group",
    command: "sudo usermod -aG docker ubuntu",
  },
  {
    id: "ec2-newgrp",
    label: "Apply the Docker group immediately",
    command: "newgrp docker",
  },
  {
    id: "ec2-clone",
    label: "Clone the FluxOps repository",
    command: "git clone YOUR_GITHUB_REPOSITORY_URL",
  },
  {
    id: "ec2-cd",
    label: "Enter the project directory",
    command: "cd fluxops",
  },
  {
    id: "ec2-build",
    label: "Build the Docker image",
    command: "docker build -t fluxops:v1 .",
  },
  {
    id: "ec2-run",
    label: "Run the container",
    command:
      "docker run -d --name fluxops-container --restart always -p 80:80 fluxops:v1",
  },
  {
    id: "ec2-open",
    label: "Open the application using the EC2 public IPv4 address",
  },
];
