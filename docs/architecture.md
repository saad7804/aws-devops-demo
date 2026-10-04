# AWS DevOps Demo — Architecture

## Architecture Diagram

```
flowchart LR
    DEV["Developer"] --> GH["GitHub Repository"]
    GH --> GA["GitHub Actions"]
    GA --> CHECK["Lint + Typecheck"]
    CHECK --> DOCKER["Docker Build"]
    DOCKER --> ECR["Amazon ECR"]
    ECR --> ECS["Amazon ECS Fargate"]
    SM["AWS Secrets Manager"] --> ECS
    ECS --> ALB["Application Load Balancer"]
    ALB --> APP["FluxOps Application"]
    ECS --> CW["Amazon CloudWatch"]

    subgraph AWS["AWS Cloud"]
        ECR
        ECS
        SM
        ALB
        CW
    end
```

## Architecture Overview

This project demonstrates a complete AWS DevOps workflow for deploying the FluxOps web application.

The application is packaged as a Docker container and deployed to Amazon ECS Fargate. Terraform is used to provision the AWS infrastructure, while GitHub Actions automates the CI/CD process.

## Deployment Flow

1. The developer pushes code to the `main` branch.
2. GitHub Actions starts automatically.
3. The workflow checks out the source code.
4. Application dependencies are installed using `npm ci`.
5. ESLint validates the application.
6. TypeScript type checking is performed.
7. Docker builds the FluxOps application image.
8. The Docker image is pushed to Amazon ECR.
9. GitHub Actions updates the ECS task definition with the new image.
10. Amazon ECS Fargate deploys the new application version.
11. The Application Load Balancer routes HTTP traffic to the ECS task.
12. GitHub Actions waits for ECS service stability.
13. ECS deployment circuit breaker automatically rolls back an unhealthy deployment.

## AWS Infrastructure

Terraform provisions the following resources:

* Amazon VPC
* Two public subnets
* Internet Gateway
* Public route table
* Application Load Balancer
* ALB security group
* ECS security group
* Amazon ECR repository
* Amazon ECS cluster
* Amazon ECS Fargate service
* ECS task definition
* ECS IAM execution role
* GitHub Actions IAM role
* GitHub OIDC identity provider
* AWS Secrets Manager secret integration
* Amazon CloudWatch log group

## CI/CD Pipeline

The GitHub Actions pipeline follows this flow:

```
Git Push
    ↓
GitHub Actions
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
Update ECS Task Definition
    ↓
ECS Fargate Deployment
    ↓
Health Check
    ↓
Deployment Successful
```

If the ECS deployment becomes unhealthy, the ECS deployment circuit breaker is configured to automatically roll back to the previous working task definition.

## Security

### GitHub Actions Authentication

GitHub Actions authenticates to AWS using GitHub OIDC instead of storing a long-lived AWS access key in GitHub.

The authentication flow is:

```
GitHub Actions
      ↓
GitHub OIDC
      ↓
AWS IAM Role
      ↓
Short-lived AWS credentials
      ↓
Amazon ECR + Amazon ECS
```

The IAM role is restricted to the `main` branch of this repository.

### Secrets Manager

The application demo credentials are stored in AWS Secrets Manager.

ECS injects the required values into the container as runtime environment variables:

```
AWS Secrets Manager
        ↓
ECS Task Definition
        ↓
DEMO_EMAIL
DEMO_PASSWORD
        ↓
Express Login API
```

The credentials are not stored in the Git repository, Dockerfile, or GitHub Actions workflow.

## Containerization

The FluxOps application uses a multi-stage Docker build.

### Build Stage

* Uses Node.js 20 Alpine
* Installs application dependencies
* Builds the React/Vite application

### Runtime Stage

* Uses Node.js 20 Alpine
* Installs production dependencies only
* Copies the built application
* Runs the Express server
* Exposes port 80

This separates the build environment from the application runtime and keeps the final image smaller than a full development image.

## Networking

The Application Load Balancer is deployed across two public subnets.

The ECS Fargate task runs in the public subnets with a security group that only allows application traffic from the ALB security group.

Traffic flow:

```
Internet
    ↓
Application Load Balancer :80
    ↓
ECS Security Group
    ↓
ECS Fargate Task :80
    ↓
FluxOps Application
```

The ALB performs health checks against the ECS application before routing traffic.

## Monitoring and Logging

Amazon CloudWatch is used for application logging.

The ECS task sends container logs to:

```
/ecs/aws-devops-demo
```

The ECS cluster also has Container Insights enabled for additional monitoring information.

CloudWatch provides visibility into application and container activity during deployment and runtime.

## Availability and Rollback

The ECS service uses:

* Desired count: 1
* Fargate launch type
* Application Load Balancer health checks
* ECS deployment circuit breaker
* Automatic rollback on failed deployments

The deployment circuit breaker helps prevent an unhealthy new task definition from remaining in service.

## Technology Choices

| Technology                | Purpose                           |
| ------------------------- | --------------------------------- |
| GitHub                    | Source code repository            |
| GitHub Actions            | CI/CD automation                  |
| GitHub OIDC               | Secure AWS authentication         |
| Terraform                 | Infrastructure as Code            |
| Docker                    | Application containerization      |
| Amazon ECR                | Container image registry          |
| Amazon ECS Fargate        | Container deployment              |
| Application Load Balancer | Traffic routing                   |
| AWS Secrets Manager       | Secure credential storage         |
| Amazon CloudWatch         | Logging and monitoring            |
| React + Vite + TypeScript | FluxOps frontend                  |
| Express.js                | Runtime server and demo login API |

## Project Structure

```
aws-devops-demo/
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
│
├── docs/
│   └── architecture.md
│
└── .github/
    └── workflows/
        └── deploy.yml
```

## End-to-End Architecture

The complete deployment architecture is:

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

Supporting AWS services:

```
GitHub Actions → GitHub OIDC → IAM
ECS → Secrets Manager
ECS → CloudWatch
ALB → ECS Health Checks
```

## Assignment Requirements Covered

This architecture addresses the main requirements of the AWS DevOps Engineer demo assignment:

* Infrastructure is provisioned using Terraform.
* Application is containerized using Docker.
* Application is deployed using Amazon ECS Fargate.
* GitHub Actions provides automated CI/CD.
* Code push to `main` triggers deployment.
* ESLint and TypeScript validation run before deployment.
* Docker images are stored in Amazon ECR.
* AWS credentials are handled through GitHub OIDC.
* Application credentials are stored in AWS Secrets Manager.
* CloudWatch provides logging and monitoring.
* ALB health checks are used for application availability.
* ECS deployment circuit breaker provides automatic rollback.
* Architecture and deployment flow are documented.

## Conclusion

The project demonstrates an end-to-end AWS DevOps workflow using modern cloud-native practices.

Terraform provides reproducible infrastructure, GitHub Actions automates the software delivery lifecycle, Docker provides consistent application packaging, Amazon ECR stores container images, and Amazon ECS Fargate runs the application without managing servers.

Application Load Balancer provides traffic routing and health checks, AWS Secrets Manager protects runtime credentials, and CloudWatch provides logging and monitoring.

The resulting workflow is:

```
Developer
    ↓
GitHub
    ↓
GitHub Actions
    ↓
Validation
    ↓
Docker
    ↓
Amazon ECR
    ↓
ECS Fargate
    ↓
Application Load Balancer
    ↓
FluxOps
```

This provides a reproducible, automated, and secure deployment workflow suitable for the AWS DevOps Engineer demo assignment.
