export type CommandCategory =
  | "Linux"
  | "Git"
  | "Docker"
  | "Jenkins"
  | "AWS CLI"
  | "Kubernetes";

export interface DevOpsCommand {
  id: string;
  title: string;
  command: string;
  description: string;
  category: CommandCategory;
  example: string;
  popular?: boolean;
}

export const categories: CommandCategory[] = [
  "Linux",
  "Git",
  "Docker",
  "Jenkins",
  "AWS CLI",
  "Kubernetes",
];

export const commands: DevOpsCommand[] = [
  // ===== Linux =====
  {
    id: "linux-ls-la",
    title: "List All Files with Details",
    command: "ls -la",
    description:
      "Lists all files and directories in the current location, including hidden files, with detailed permissions, owner, size and modification time.",
    category: "Linux",
    example: "ls -la",
    popular: true,
  },
  {
    id: "linux-pwd",
    title: "Print Working Directory",
    command: "pwd",
    description:
      "Displays the absolute path of the directory you are currently working in.",
    category: "Linux",
    example: "pwd",
  },
  {
    id: "linux-cd",
    title: "Change Directory",
    command: "cd directory-name",
    description:
      "Moves you into the specified directory. Use cd .. to go up one level and cd with no arguments to return home.",
    category: "Linux",
    example: "cd fluxops",
  },
  {
    id: "linux-ps-ef",
    title: "List Running Processes",
    command: "ps -ef",
    description:
      "Shows a full list of all running processes on the system, including their process IDs, parent IDs and start times.",
    category: "Linux",
    example: "ps -ef",
  },
  {
    id: "linux-top",
    title: "Monitor System Activity",
    command: "top",
    description:
      "Displays a real-time, continuously updating view of system resource usage including CPU, memory and the most active processes.",
    category: "Linux",
    example: "top",
  },
  {
    id: "linux-df-h",
    title: "Check Disk Space",
    command: "df -h",
    description:
      "Reports available and used disk space on all mounted filesystems in a human-readable format.",
    category: "Linux",
    example: "df -h",
    popular: true,
  },
  {
    id: "linux-du-sh",
    title: "Check Directory Size",
    command: "du -sh directory-name",
    description:
      "Calculates and displays the total disk usage of a specific directory in a human-readable summary form.",
    category: "Linux",
    example: "du -sh /var/log",
  },
  {
    id: "linux-free-h",
    title: "Check Memory Usage",
    command: "free -h",
    description:
      "Displays the amount of used, free and available system memory (RAM) and swap space in a human-readable format.",
    category: "Linux",
    example: "free -h",
  },
  {
    id: "linux-chmod",
    title: "Change File Permissions",
    command: "chmod 755 filename",
    description:
      "Changes the access permissions of a file or directory. 755 gives the owner full access and others read and execute access.",
    category: "Linux",
    example: "chmod 755 deploy.sh",
  },
  {
    id: "linux-chown",
    title: "Change File Ownership",
    command: "chown user:group filename",
    description:
      "Changes the user and group ownership of a file or directory to the specified owner.",
    category: "Linux",
    example: "chown ubuntu:ubuntu app.log",
  },
  {
    id: "linux-systemctl-status",
    title: "Check Service Status",
    command: "systemctl status service-name",
    description:
      "Shows whether a system service is running, stopped or failed, along with recent log output for that service.",
    category: "Linux",
    example: "systemctl status nginx",
    popular: true,
  },
  {
    id: "linux-journalctl",
    title: "View Service Logs",
    command: "journalctl -u service-name",
    description:
      "Displays the systemd journal logs for a specific service, useful for diagnosing startup and runtime failures.",
    category: "Linux",
    example: "journalctl -u docker",
  },
  {
    id: "linux-mkdir",
    title: "Create a Directory",
    command: "mkdir directory-name",
    description:
      "Creates a new directory with the specified name in the current location.",
    category: "Linux",
    example: "mkdir fluxops",
  },
  {
    id: "linux-rm-rf",
    title: "Remove Files or Directories",
    command: "rm -rf directory-name",
    description:
      "Recursively and forcefully removes a directory and all of its contents without prompting for confirmation.",
    category: "Linux",
    example: "rm -rf old-build",
  },
  {
    id: "linux-cat",
    title: "View File Contents",
    command: "cat filename",
    description:
      "Reads and prints the contents of one or more files directly to the terminal.",
    category: "Linux",
    example: "cat nginx.conf",
  },
  {
    id: "linux-grep",
    title: "Search Text in Files",
    command: "grep \"pattern\" filename",
    description:
      "Searches for a specific text pattern inside files and prints every matching line.",
    category: "Linux",
    example: "grep \"error\" app.log",
  },
  {
    id: "linux-apt-update",
    title: "Update Package Index",
    command: "sudo apt update",
    description:
      "Refreshes the local list of available packages and their versions from the Ubuntu repositories.",
    category: "Linux",
    example: "sudo apt update",
  },
  {
    id: "linux-ufw-allow",
    title: "Allow a Firewall Port",
    command: "sudo ufw allow 80/tcp",
    description:
      "Opens a specific TCP port in the Ubuntu firewall so external traffic can reach a service.",
    category: "Linux",
    example: "sudo ufw allow 80/tcp",
  },

  // ===== Git =====
  {
    id: "git-init",
    title: "Initialize a Git Repository",
    command: "git init",
    description:
      "Creates a new empty Git repository in the current directory, adding a hidden .git folder that tracks version history.",
    category: "Git",
    example: "git init",
    popular: true,
  },
  {
    id: "git-status",
    title: "Check Repository Status",
    command: "git status",
    description:
      "Shows which files are staged, modified or untracked, helping you see what would be included in the next commit.",
    category: "Git",
    example: "git status",
    popular: true,
  },
  {
    id: "git-add",
    title: "Stage All Changes",
    command: "git add .",
    description:
      "Stages every change in the current directory so it is ready to be committed to version history.",
    category: "Git",
    example: "git add .",
  },
  {
    id: "git-commit",
    title: "Commit Staged Changes",
    command: "git commit -m \"message\"",
    description:
      "Saves all staged changes to the local repository with a short descriptive message explaining what changed.",
    category: "Git",
    example: "git commit -m \"Add Dockerfile\"",
  },
  {
    id: "git-branch",
    title: "List Branches",
    command: "git branch",
    description:
      "Lists all local branches in the repository and highlights the branch you are currently on.",
    category: "Git",
    example: "git branch",
  },
  {
    id: "git-branch-main",
    title: "Rename Branch to Main",
    command: "git branch -M main",
    description:
      "Renames the current branch to main, the standard default branch name used by most modern repositories.",
    category: "Git",
    example: "git branch -M main",
  },
  {
    id: "git-remote-add",
    title: "Add a Remote Repository",
    command: "git remote add origin REPOSITORY_URL",
    description:
      "Links your local repository to a remote repository on GitHub so you can push and pull changes.",
    category: "Git",
    example: "git remote add origin https://github.com/user/fluxops.git",
  },
  {
    id: "git-push",
    title: "Push to Remote",
    command: "git push -u origin main",
    description:
      "Uploads your local commits to the remote main branch and sets it as the default upstream for future pushes.",
    category: "Git",
    example: "git push -u origin main",
    popular: true,
  },
  {
    id: "git-pull",
    title: "Pull Latest Changes",
    command: "git pull origin main",
    description:
      "Downloads the latest commits from the remote main branch and merges them into your current local branch.",
    category: "Git",
    example: "git pull origin main",
  },
  {
    id: "git-clone",
    title: "Clone a Repository",
    command: "git clone REPOSITORY_URL",
    description:
      "Downloads a complete copy of a remote repository, including its full history, to your local machine.",
    category: "Git",
    example: "git clone https://github.com/user/fluxops.git",
    popular: true,
  },
  {
    id: "git-log",
    title: "View Commit History",
    command: "git log --oneline",
    description:
      "Displays a compact one-line-per-commit history of the repository, useful for quickly reviewing recent work.",
    category: "Git",
    example: "git log --oneline",
  },
  {
    id: "git-checkout",
    title: "Switch Branch",
    command: "git checkout branch-name",
    description:
      "Switches your working directory to a different branch, updating your files to match that branch state.",
    category: "Git",
    example: "git checkout feature-deploy",
  },
  {
    id: "git-stash",
    title: "Stash Uncommitted Changes",
    command: "git stash",
    description:
      "Temporarily saves uncommitted changes so you can work on something else and reapply them later.",
    category: "Git",
    example: "git stash",
  },
  {
    id: "git-merge",
    title: "Merge a Branch",
    command: "git merge branch-name",
    description:
      "Combines the changes from another branch into your current branch.",
    category: "Git",
    example: "git merge feature-deploy",
  },
  {
    id: "git-config",
    title: "Set Git User Identity",
    command: "git config --global user.name \"Your Name\"",
    description:
      "Sets your name and email so every commit you make is correctly attributed to you.",
    category: "Git",
    example: "git config --global user.name \"Jane Developer\"",
  },

  // ===== Docker =====
  {
    id: "docker-version",
    title: "Check Docker Version",
    command: "docker --version",
    description:
      "Displays the installed Docker client version, useful for confirming Docker is installed and working.",
    category: "Docker",
    example: "docker --version",
  },
  {
    id: "docker-build",
    title: "Build a Docker Image",
    command: "docker build -t fluxops:v1 .",
    description:
      "Reads the Dockerfile in the current directory and builds a tagged image named fluxops at version v1.",
    category: "Docker",
    example: "docker build -t fluxops:v1 .",
    popular: true,
  },
  {
    id: "docker-run",
    title: "Run a Container in the Background",
    command: "docker run -d -p 80:80 fluxops:v1",
    description:
      "Starts a new container from the fluxops image in detached mode and maps port 80 on the host to port 80 in the container.",
    category: "Docker",
    example: "docker run -d -p 80:80 fluxops:v1",
    popular: true,
  },
  {
    id: "docker-run-named",
    title: "Run a Named Container",
    command: "docker run -d --name fluxops-container -p 80:80 fluxops:v1",
    description:
      "Starts a detached container with a friendly name, making it easier to manage and reference in later commands.",
    category: "Docker",
    example:
      "docker run -d --name fluxops-container -p 80:80 fluxops:v1",
    popular: true,
  },
  {
    id: "docker-ps",
    title: "List Running Containers",
    command: "docker ps",
    description:
      "Lists all currently running containers along with their IDs, names, image, status and port mappings.",
    category: "Docker",
    example: "docker ps",
    popular: true,
  },
  {
    id: "docker-ps-a",
    title: "List All Containers",
    command: "docker ps -a",
    description:
      "Lists every container including stopped ones, helpful for finding and cleaning up old containers.",
    category: "Docker",
    example: "docker ps -a",
  },
  {
    id: "docker-images",
    title: "List Docker Images",
    command: "docker images",
    description:
      "Displays all Docker images stored locally on the machine, including their tags, IDs and sizes.",
    category: "Docker",
    example: "docker images",
  },
  {
    id: "docker-logs",
    title: "View Container Logs",
    command: "docker logs fluxops-container",
    description:
      "Prints the output logs of a running or stopped container, essential for debugging application errors.",
    category: "Docker",
    example: "docker logs fluxops-container",
    popular: true,
  },
  {
    id: "docker-stop",
    title: "Stop a Container",
    command: "docker stop fluxops-container",
    description:
      "Gracefully stops a running container by sending a termination signal to its main process.",
    category: "Docker",
    example: "docker stop fluxops-container",
  },
  {
    id: "docker-start",
    title: "Start a Stopped Container",
    command: "docker start fluxops-container",
    description:
      "Starts a previously stopped container without recreating it, preserving its configuration and data.",
    category: "Docker",
    example: "docker start fluxops-container",
  },
  {
    id: "docker-rm",
    title: "Remove a Container",
    command: "docker rm fluxops-container",
    description:
      "Removes a stopped container from the system. The container must be stopped before it can be removed.",
    category: "Docker",
    example: "docker rm fluxops-container",
  },
  {
    id: "docker-prune",
    title: "Clean Up Unused Docker Resources",
    command: "docker system prune -a",
    description:
      "Removes all stopped containers, unused networks, dangling images and build cache to free up disk space.",
    category: "Docker",
    example: "docker system prune -a",
  },
  {
    id: "docker-rmi",
    title: "Remove a Docker Image",
    command: "docker rmi fluxops:v1",
    description:
      "Deletes a local Docker image. The image must not be used by any existing container.",
    category: "Docker",
    example: "docker rmi fluxops:v1",
  },
  {
    id: "docker-exec",
    title: "Run a Command Inside a Container",
    command: "docker exec -it fluxops-container /bin/sh",
    description:
      "Opens an interactive terminal session inside a running container so you can inspect its filesystem and processes.",
    category: "Docker",
    example: "docker exec -it fluxops-container /bin/sh",
  },
  {
    id: "docker-compose-up",
    title: "Start Services with Compose",
    command: "docker compose up -d",
    description:
      "Starts all services defined in a docker-compose.yml file in detached mode.",
    category: "Docker",
    example: "docker compose up -d",
  },

  // ===== Jenkins =====
  {
    id: "jenkins-start",
    title: "Start Jenkins Service",
    command: "sudo systemctl start jenkins",
    description:
      "Starts the Jenkins service on the server so the web interface becomes available.",
    category: "Jenkins",
    example: "sudo systemctl start jenkins",
  },
  {
    id: "jenkins-status",
    title: "Check Jenkins Status",
    command: "sudo systemctl status jenkins",
    description:
      "Shows whether Jenkins is running and displays recent service logs for troubleshooting.",
    category: "Jenkins",
    example: "sudo systemctl status jenkins",
  },
  {
    id: "jenkins-enable",
    title: "Enable Jenkins on Boot",
    command: "sudo systemctl enable jenkins",
    description:
      "Configures Jenkins to start automatically every time the server boots up.",
    category: "Jenkins",
    example: "sudo systemctl enable jenkins",
  },
  {
    id: "jenkins-run-docker",
    title: "Run Jenkins in Docker",
    command: "docker run -d --name jenkins -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts",
    description:
      "Starts a Jenkins controller container with the web UI on port 8080 and the agent listener on port 50000.",
    category: "Jenkins",
    example:
      "docker run -d --name jenkins -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts",
    popular: true,
  },
  {
    id: "jenkins-unlock",
    title: "Get Initial Admin Password",
    command: "sudo cat /var/lib/jenkins/secrets/initialAdminPassword",
    description:
      "Prints the initial administrator password needed to unlock Jenkins on first setup.",
    category: "Jenkins",
    example: "sudo cat /var/lib/jenkins/secrets/initialAdminPassword",
    popular: true,
  },
  {
    id: "jenkins-cli-download",
    title: "Download Jenkins CLI",
    command: "java -jar jenkins-cli.jar -s http://localhost:8080/ help",
    description:
      "Runs the Jenkins command-line interface to manage jobs and configuration from the terminal.",
    category: "Jenkins",
    example: "java -jar jenkins-cli.jar -s http://localhost:8080/ help",
  },
  {
    id: "jenkins-build",
    title: "Trigger a Build from CLI",
    command: "java -jar jenkins-cli.jar -s http://localhost:8080/ build fluxops-job",
    description:
      "Triggers a specific Jenkins pipeline or job build directly from the command line.",
    category: "Jenkins",
    example:
      "java -jar jenkins-cli.jar -s http://localhost:8080/ build fluxops-job",
  },
  {
    id: "jenkins-restart",
    title: "Restart Jenkins Safely",
    command: "sudo systemctl restart jenkins",
    description:
      "Restarts the Jenkins service, applying configuration changes or recovering from a stuck state.",
    category: "Jenkins",
    example: "sudo systemctl restart jenkins",
  },
  {
    id: "jenkins-install",
    title: "Install Jenkins on Ubuntu",
    command: "sudo apt install jenkins -y",
    description:
      "Installs the Jenkins package from the Ubuntu repositories after adding the official Jenkins key.",
    category: "Jenkins",
    example: "sudo apt install jenkins -y",
  },
  {
    id: "jenkins-port",
    title: "Check Jenkins Listening Port",
    command: "sudo lsof -i :8080",
    description:
      "Shows which process is listening on port 8080, useful for confirming Jenkins is reachable.",
    category: "Jenkins",
    example: "sudo lsof -i :8080",
  },
  {
    id: "jenkins-log",
    title: "View Jenkins Logs",
    command: "sudo journalctl -u jenkins",
    description:
      "Displays the systemd journal logs for Jenkins, useful for diagnosing startup or plugin errors.",
    category: "Jenkins",
    example: "sudo journalctl -u jenkins",
  },
  {
    id: "jenkins-agent",
    title: "Run a Jenkins Agent Node",
    command: "java -jar agent.jar -jnlpUrl http://jenkins:8080/computer/agent/jenkins-agent.jnlp",
    description:
      "Starts a Jenkins build agent that connects back to the controller to run pipeline jobs.",
    category: "Jenkins",
    example:
      "java -jar agent.jar -jnlpUrl http://jenkins:8080/computer/agent/jenkins-agent.jnlp",
  },

  // ===== AWS CLI =====
  {
    id: "aws-configure",
    title: "Configure AWS CLI",
    command: "aws configure",
    description:
      "Sets up your AWS access key, secret key, default region and output format for all future AWS CLI commands.",
    category: "AWS CLI",
    example: "aws configure",
    popular: true,
  },
  {
    id: "aws-ec2-describe",
    title: "List EC2 Instances",
    command: "aws ec2 describe-instances",
    description:
      "Returns details about all your EC2 instances including their state, type and public IP addresses.",
    category: "AWS CLI",
    example: "aws ec2 describe-instances",
    popular: true,
  },
  {
    id: "aws-ec2-run",
    title: "Launch an EC2 Instance",
    command: "aws ec2 run-instances --image-id ami-id --count 1 --instance-type t2.micro --key-name my-key",
    description:
      "Launches a new EC2 instance using the specified Amazon Machine Image, type and key pair.",
    category: "AWS CLI",
    example:
      "aws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 --count 1 --instance-type t2.micro --key-name fluxops-key",
  },
  {
    id: "aws-ec2-start",
    title: "Start a Stopped Instance",
    command: "aws ec2 start-instances --instance-ids INSTANCE_ID",
    description:
      "Starts a previously stopped EC2 instance so it can receive traffic again.",
    category: "AWS CLI",
    example: "aws ec2 start-instances --instance-ids i-1234567890abcdef0",
  },
  {
    id: "aws-ec2-stop",
    title: "Stop a Running Instance",
    command: "aws ec2 stop-instances --instance-ids INSTANCE_ID",
    description:
      "Stops a running EC2 instance to save costs while keeping its data intact.",
    category: "AWS CLI",
    example: "aws ec2 stop-instances --instance-ids i-1234567890abcdef0",
  },
  {
    id: "aws-s3-ls",
    title: "List S3 Buckets",
    command: "aws s3 ls",
    description:
      "Lists all the S3 buckets in your AWS account, useful for verifying storage setup.",
    category: "AWS CLI",
    example: "aws s3 ls",
  },
  {
    id: "aws-s3-cp",
    title: "Copy Files to S3",
    command: "aws s3 cp filename s3://bucket-name/",
    description:
      "Uploads a local file to an S3 bucket, commonly used for backups or static assets.",
    category: "AWS CLI",
    example: "aws s3 cp build.zip s3://fluxops-deploy/",
  },
  {
    id: "aws-ecr-login",
    title: "Log In to ECR",
    command: "aws ecr get-login-password | docker login --username AWS --password-stdin AWS_ACCOUNT.dkr.ecr.region.amazonaws.com",
    description:
      "Authenticates Docker with Amazon Elastic Container Registry so you can push and pull private images.",
    category: "AWS CLI",
    example:
      "aws ecr get-login-password | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com",
  },
  {
    id: "aws-iam-list",
    title: "List IAM Users",
    command: "aws iam list-users",
    description:
      "Lists all IAM users in your AWS account, useful for auditing access.",
    category: "AWS CLI",
    example: "aws iam list-users",
  },
  {
    id: "aws-ec2-sg",
    title: "Describe Security Groups",
    command: "aws ec2 describe-security-groups",
    description:
      "Lists all security groups and their inbound and outbound rules for verifying firewall configuration.",
    category: "AWS CLI",
    example: "aws ec2 describe-security-groups",
  },
  {
    id: "aws-ec2-authorize",
    title: "Allow HTTP in a Security Group",
    command: "aws ec2 authorize-security-group-ingress --group-id SG_ID --protocol tcp --port 80 --cidr 0.0.0.0/0",
    description:
      "Adds an inbound rule allowing HTTP traffic on port 80 from anywhere to the specified security group.",
    category: "AWS CLI",
    example:
      "aws ec2 authorize-security-group-ingress --group-id sg-123456 --protocol tcp --port 80 --cidr 0.0.0.0/0",
  },
  {
    id: "aws-sts-caller",
    title: "Check Current Identity",
    command: "aws sts get-caller-identity",
    description:
      "Returns the AWS account ID and IAM user or role associated with your current credentials.",
    category: "AWS CLI",
    example: "aws sts get-caller-identity",
  },
  {
    id: "aws-ec2-allocate",
    title: "Allocate an Elastic IP",
    command: "aws ec2 allocate-address --domain vpc",
    description:
      "Allocates a static Elastic IP address in your VPC that can be associated with an EC2 instance.",
    category: "AWS CLI",
    example: "aws ec2 allocate-address --domain vpc",
  },
  {
    id: "aws-ec2-associate",
    title: "Associate an Elastic IP",
    command: "aws ec2 associate-address --instance-id INSTANCE_ID --public-ip ELASTIC_IP",
    description:
      "Attaches a previously allocated Elastic IP to a running EC2 instance.",
    category: "AWS CLI",
    example:
      "aws ec2 associate-address --instance-id i-1234567890abcdef0 --public-ip 203.0.113.5",
  },

  // ===== Kubernetes =====
  {
    id: "k8s-get-pods",
    title: "List All Pods",
    command: "kubectl get pods",
    description:
      "Lists all pods in the current namespace, showing their readiness, status, restart count and age.",
    category: "Kubernetes",
    example: "kubectl get pods",
    popular: true,
  },
  {
    id: "k8s-get-deployments",
    title: "List Deployments",
    command: "kubectl get deployments",
    description:
      "Lists all deployments in the current namespace along with their desired and available replica counts.",
    category: "Kubernetes",
    example: "kubectl get deployments",
    popular: true,
  },
  {
    id: "k8s-get-services",
    title: "List Services",
    command: "kubectl get services",
    description:
      "Lists all services in the current namespace, including their type, cluster IP and exposed ports.",
    category: "Kubernetes",
    example: "kubectl get services",
  },
  {
    id: "k8s-apply-deployment",
    title: "Apply a Deployment File",
    command: "kubectl apply -f deployment.yml",
    description:
      "Creates or updates Kubernetes resources defined in a deployment YAML file, such as the fluxops deployment.",
    category: "Kubernetes",
    example: "kubectl apply -f deployment.yml",
    popular: true,
  },
  {
    id: "k8s-apply-service",
    title: "Apply a Service File",
    command: "kubectl apply -f service.yml",
    description:
      "Creates or updates the Kubernetes service defined in a service YAML file, exposing pods to traffic.",
    category: "Kubernetes",
    example: "kubectl apply -f service.yml",
  },
  {
    id: "k8s-describe-pod",
    title: "Describe a Pod",
    command: "kubectl describe pod POD_NAME",
    description:
      "Shows detailed information about a specific pod including its events, containers and conditions for debugging.",
    category: "Kubernetes",
    example: "kubectl describe pod fluxops-abc123",
  },
  {
    id: "k8s-logs",
    title: "View Pod Logs",
    command: "kubectl logs POD_NAME",
    description:
      "Prints the logs of the main container in a pod, essential for diagnosing application errors.",
    category: "Kubernetes",
    example: "kubectl logs fluxops-abc123",
    popular: true,
  },
  {
    id: "k8s-delete-pod",
    title: "Delete a Pod",
    command: "kubectl delete pod POD_NAME",
    description:
      "Removes a specific pod. If managed by a deployment, a replacement pod is created automatically.",
    category: "Kubernetes",
    example: "kubectl delete pod fluxops-abc123",
  },
  {
    id: "k8s-scale",
    title: "Scale a Deployment",
    command: "kubectl scale deployment fluxops --replicas=3",
    description:
      "Changes the number of running pod replicas for a deployment, enabling horizontal scaling up or down.",
    category: "Kubernetes",
    example: "kubectl scale deployment fluxops --replicas=3",
    popular: true,
  },
  {
    id: "k8s-rollout-status",
    title: "Check Rollout Status",
    command: "kubectl rollout status deployment/fluxops",
    description:
      "Watches the progress of a rolling update and reports when the deployment has successfully rolled out.",
    category: "Kubernetes",
    example: "kubectl rollout status deployment/fluxops",
  },
  {
    id: "k8s-rollout-undo",
    title: "Roll Back a Deployment",
    command: "kubectl rollout undo deployment/fluxops",
    description:
      "Reverts a deployment to its previous version, useful for quickly recovering from a failed release.",
    category: "Kubernetes",
    example: "kubectl rollout undo deployment/fluxops",
  },
  {
    id: "k8s-get-all",
    title: "List All Resources",
    command: "kubectl get all",
    description:
      "Lists pods, services, deployments, replica sets and other resources in the current namespace at once.",
    category: "Kubernetes",
    example: "kubectl get all",
  },
  {
    id: "k8s-exec",
    title: "Open a Shell in a Pod",
    command: "kubectl exec -it POD_NAME -- /bin/sh",
    description:
      "Opens an interactive shell inside a running pod so you can inspect its filesystem and processes.",
    category: "Kubernetes",
    example: "kubectl exec -it fluxops-abc123 -- /bin/sh",
  },
  {
    id: "k8s-port-forward",
    title: "Forward a Local Port to a Pod",
    command: "kubectl port-forward service/fluxops-service 8080:80",
    description:
      "Forwards a local port to a Kubernetes service, letting you access it from your machine for testing.",
    category: "Kubernetes",
    example: "kubectl port-forward service/fluxops-service 8080:80",
  },
  {
    id: "k8s-namespaces",
    title: "List Namespaces",
    command: "kubectl get namespaces",
    description:
      "Lists all namespaces in the cluster, useful for understanding how resources are organised.",
    category: "Kubernetes",
    example: "kubectl get namespaces",
  },
];
