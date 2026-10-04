# AWS DevOps Demo

A complete AWS DevOps demonstration project for deploying the **FluxOps** application using Terraform, Docker, GitHub Actions, Amazon ECR, Amazon ECS Fargate, Application Load Balancer, AWS Secrets Manager, and Amazon CloudWatch.

## Project Objective

This project demonstrates an end-to-end DevOps workflow:

* Infrastructure as Code using Terraform
* Docker containerization
* Automated CI/CD using GitHub Actions
* Secure AWS authentication using GitHub OIDC
* Container image management using Amazon ECR
* Application deployment using Amazon ECS Fargate
* Application Load Balancer health checks
* Secure runtime credentials using AWS Secrets Manager
* Logging and monitoring using Amazon CloudWatch
* Automatic rollback using the ECS deployment circuit breaker

The project uses the existing FluxOps application as the application workload while keeping this assignment in a separate repository.

## Architecture

The complete architecture is documented in:

`docs/architecture.md`

High-level flow:

```
Developer
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
Lint + Typecheck
    ↓
Docker Build
    ↓
Amazon ECR
    ↓
Amazon ECS Fargate
    ↓
Application Load Balancer
    ↓
FluxOps Application
```

Supporting services:

```
GitHub Actions → GitHub OIDC → AWS IAM
ECS → AWS Secrets Manager
ECS → Amazon CloudWatch
```

## Live Application

The application is deployed using:

```
Amazon ECS Fargate
        +
Application Load Balancer
```

Live application:

```
http://aws-devops-demo-alb-558716079.ap-south-1.elb.amazonaws.com
```

## Technology Stack

| Technology                | Purpose                           |
| ------------------------- | --------------------------------- |
| GitHub                    | Source code management            |
| GitHub Actions            | CI/CD automation                  |
| GitHub OIDC               | Secure AWS authentication         |
| Terraform                 | Infrastructure as Code            |
| Docker                    | Containerization                  |
| Amazon ECR                | Container image registry          |
| Amazon ECS Fargate        | Container deployment              |
| Application Load Balancer | Traffic routing and health checks |
| AWS Secrets Manager       | Runtime credential storage        |
| Amazon CloudWatch         | Logging and monitoring            |
| React                     | Frontend application              |
| Vite                      | Frontend build tool               |
| TypeScript                | Application development           |
| Express.js                | Runtime server and demo login API |

## Why These Technologies?

### Terraform

Terraform provides reproducible infrastructure and allows the complete AWS environment to be created from code.

### GitHub Actions

GitHub Actions provides an automated CI/CD pipeline directly connected to the Git repository.

### Docker

Docker provides consistent application packaging between development, CI, and production.

### Amazon ECR

ECR provides a secure AWS-native container registry for storing application images.

### Amazon ECS Fargate

ECS Fargate runs containers without requiring EC2 instance management. It is suitable for demonstrating managed container deployment.

### Application Load Balancer

The ALB provides HTTP traffic routing and health checks for the ECS application.

### AWS Secrets Manager

Secrets Manager prevents application credentials from being hardcoded into source code or container images.

### CloudWatch

CloudWatch provides centralized application and container logging.

## Repository Structure

```
aws-devops-demo/
│
├── app/
│   ├── src/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── iac/
│   └── terraform/
│       ├── versions.tf
│       ├── variables.tf
│       ├── main.tf
│       ├── ecr.tf
│       ├── iam.tf
│       ├── github-actions.tf
│       ├── alb.tf
│       ├── ecs.tf
│       ├── service.tf
│       └── outputs.tf
│
├── pipeline/
│   └── README.md
│
├── docs/
│   └── architecture.md
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── README.md
```

## Application

The application is based on FluxOps, a DevOps learning and command assistant.

The application contains guides and command references for:

* Linux
* Git
* Docker
* Jenkins
* AWS
* Kubernetes
* DevOps learning paths

For this assignment, a demo login gate was added.

The login request is handled by the Express runtime server and the credentials are supplied to the ECS container from AWS Secrets Manager.

The login mechanism is intended for the assignment demo and is not presented as production-grade authentication.

## Demo Account

Use the demo credentials provided in the assignment to access the application.

The credentials are stored in AWS Secrets Manager and are not hardcoded into the application source code or Docker image.

## Infrastructure as Code

Terraform is located in:

```
iac/terraform/
```

The Terraform configuration creates:

* VPC
* Two public subnets
* Internet Gateway
* Public route table
* ECR repository
* ECS cluster
* ECS Fargate service
* ECS task definition
* Application Load Balancer
* Security groups
* IAM roles
* GitHub OIDC IAM role
* CloudWatch log group
* Secrets Manager integration

## Prerequisites

Install the following tools:

* AWS CLI
* Terraform
* Docker Desktop
* Git
* Node.js 20 or later
* npm

Configure AWS CLI:

```
aws configure
```

Verify the AWS account:

```
aws sts get-caller-identity
```

Verify Docker:

```
docker version
```

Verify Terraform:

```
terraform version
```

## Terraform Deployment

Move into the Terraform directory:

```
cd iac/terraform
```

Initialize Terraform:

```
terraform init
```

Format the configuration:

```
terraform fmt
```

Validate the configuration:

```
terraform validate
```

Review the infrastructure plan:

```
terraform plan
```

Apply the infrastructure:

```
terraform apply
```

The Terraform configuration creates the AWS networking, ECR, ECS, ALB, IAM, and CloudWatch resources.

## Container Image

Build the application locally:

```
cd ~/aws-devops-demo/app

docker build -t aws-devops-demo:local .
```

Run the application locally:

```
docker run --rm -p 8080:80 aws-devops-demo:local
```

The application can then be tested locally at:

```
http://localhost:8080
```

## Amazon ECR

Authenticate Docker with Amazon ECR:

```
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 888869353635.dkr.ecr.ap-south-1.amazonaws.com
```

Build an image:

```
docker build -t aws-devops-demo:local .
```

Tag the image:

```
docker tag aws-devops-demo:local 888869353635.dkr.ecr.ap-south-1.amazonaws.com/aws-devops-demo:local
```

Push the image:

```
docker push 888869353635.dkr.ecr.ap-south-1.amazonaws.com/aws-devops-demo:local
```

## GitHub Actions CI/CD

The CI/CD workflow is located at:

```
.github/workflows/deploy.yml
```

The pipeline runs automatically when code is pushed to `main`.

Pipeline stages:

```
Git Push
    ↓
Checkout
    ↓
npm ci
    ↓
ESLint
    ↓
TypeScript Typecheck
    ↓
Docker Build
    ↓
Amazon ECR
    ↓
ECS Task Definition Update
    ↓
ECS Deployment
    ↓
Health Check
    ↓
Deployment Complete
```

The workflow uses the GitHub commit SHA as the Docker image tag.

Example:

```
aws-devops-demo:<github-commit-sha>
```

This makes every deployment traceable to a specific source-code commit.

## GitHub OIDC

GitHub Actions uses OpenID Connect to authenticate with AWS.

Authentication flow:

```
GitHub Actions
    ↓
GitHub OIDC
    ↓
AWS STS
    ↓
IAM Role
    ↓
Temporary AWS Credentials
```

No long-lived AWS access key is stored in GitHub Actions.

The IAM trust policy restricts access to the repository's `main` branch.

## Secrets Manager

The demo account credentials are stored in:

```
AWS Secrets Manager
```

Secret name:

```
aws-devops-demo/demo-account
```

ECS retrieves the secret values at container startup.

The application receives them as:

```
DEMO_EMAIL
DEMO_PASSWORD
```

The secret values are never included in:

* Git source code
* Dockerfile
* GitHub Actions workflow
* Terraform state committed to Git

## Monitoring and Logging

ECS sends container logs to Amazon CloudWatch.

Log group:

```
/ecs/aws-devops-demo
```

To view recent log streams:

```
aws logs describe-log-streams \
  --log-group-name /ecs/aws-devops-demo \
  --order-by LastEventTime \
  --descending \
  --max-items 5
```

To view logs from the AWS CLI:

```
aws logs tail /ecs/aws-devops-demo \
  --since 10m \
  --region ap-south-1
```

ECS Container Insights is also enabled.

## Health Checks

The Application Load Balancer performs HTTP health checks against the ECS application.

The target group checks:

```
HTTP :80
Path: /
```

A successful deployment requires the ECS task to become healthy behind the ALB.

## Rollback

The ECS service uses the deployment circuit breaker:

```
deployment_circuit_breaker {
    enable   = true
    rollback = true
}
```

If a new deployment fails to become healthy, ECS automatically rolls back to the previous stable deployment.

This provides a basic automated rollback mechanism without requiring a separate rollback script.

## Testing

### Application Validation

Run:

```
cd ~/aws-devops-demo/app

npm ci
```

Run ESLint:

```
npm run lint
```

Run TypeScript validation:

```
npm run typecheck
```

Build the application:

```
npm run build
```

### Docker Validation

Build the Docker image:

```
docker build -t aws-devops-demo:test .
```

Run the container:

```
docker run --rm -p 8080:80 aws-devops-demo:test
```

Open:

```
http://localhost:8080
```

### AWS Validation

Check ECS service status:

```
aws ecs describe-services \
  --cluster aws-devops-demo-cluster \
  --services aws-devops-demo-service \
  --region ap-south-1
```

Check running tasks:

```
aws ecs list-tasks \
  --cluster aws-devops-demo-cluster \
  --service-name aws-devops-demo-service \
  --region ap-south-1
```

Check ECR images:

```
aws ecr describe-images \
  --repository-name aws-devops-demo \
  --region ap-south-1
```

## Security Practices

This project follows several security practices:

1. GitHub Actions uses OIDC instead of long-lived AWS credentials.
2. Application credentials are stored in AWS Secrets Manager.
3. Secrets are injected into ECS at runtime.
4. Terraform state files are excluded from Git.
5. `.env` files are excluded from Git.
6. Docker build context excludes local secrets.
7. ECS application traffic is restricted to the ALB security group.
8. ECR image scanning is enabled.
9. ECR image tags are immutable.
10. IAM permissions are separated between ECS execution and GitHub Actions.

## Cost Considerations

The project is designed as a demonstration environment.

AWS resources can generate charges depending on usage.

After completing the demonstration, destroy the infrastructure when it is no longer required:

```
cd ~/aws-devops-demo/iac/terraform

terraform destroy
```

Review the Terraform destroy plan carefully before confirming.

## Important Cleanup

If the project is no longer required, also verify that no unrelated AWS resources remain running.

Check ECS:

```
aws ecs list-clusters --region ap-south-1
```

Check load balancers:

```
aws elbv2 describe-load-balancers --region ap-south-1
```

Check ECR:

```
aws ecr describe-repositories --region ap-south-1
```

Check CloudWatch log groups:

```
aws logs describe-log-groups --region ap-south-1
```

## Assignment Requirements

The project covers the main requirements of the AWS DevOps Engineer demo assignment:

| Requirement          | Implementation                 |
| -------------------- | ------------------------------ |
| AWS infrastructure   | Terraform                      |
| Application          | FluxOps                        |
| Containerization     | Docker                         |
| Container registry   | Amazon ECR                     |
| Deployment           | Amazon ECS Fargate             |
| CI/CD                | GitHub Actions                 |
| Code push deployment | GitHub Actions on `main`       |
| Credentials          | AWS Secrets Manager            |
| AWS authentication   | GitHub OIDC                    |
| Monitoring           | Amazon CloudWatch              |
| Logging              | CloudWatch Logs                |
| Health checks        | Application Load Balancer      |
| Rollback             | ECS deployment circuit breaker |
| Documentation        | README + architecture.md       |

## Final Result

The project provides a complete automated DevOps workflow:

```
Developer
    ↓
GitHub
    ↓
GitHub Actions
    ↓
Lint + Typecheck
    ↓
Docker Build
    ↓
Amazon ECR
    ↓
Amazon ECS Fargate
    ↓
Application Load Balancer
    ↓
FluxOps
```

With supporting security and monitoring services:

```
GitHub OIDC → IAM
ECS → Secrets Manager
ECS → CloudWatch
```

The result is a reproducible AWS DevOps deployment with Infrastructure as Code, automated CI/CD, secure credential management, containerized deployment, health checks, logging, and automatic rollback.
