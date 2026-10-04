# CI/CD Pipeline

## Overview

This project uses GitHub Actions to automate the build, validation, containerization, and deployment of the FluxOps application to Amazon ECS Fargate.

The pipeline is triggered automatically whenever code is pushed to the `main` branch.

## Pipeline Flow

```
Developer
    ↓
Git Push
    ↓
GitHub Actions
    ↓
Checkout Source
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
ECS Health Check
    ↓
Deployment Successful
```

## Pipeline Stages

### 1. Source

GitHub Actions checks out the latest source code from the `main` branch.

### 2. Application Validation

The pipeline installs dependencies using:

```
npm ci
```

It then performs:

```
npm run lint
```

and:

```
npm run typecheck
```

The deployment does not continue if these validation steps fail.

### 3. Docker Build

The application is packaged into a Docker image using the Dockerfile located in the `app/` directory.

Each image is tagged using the Git commit SHA:

```
<ECR_REGISTRY>/aws-devops-demo:<COMMIT_SHA>
```

Using the commit SHA provides a unique and traceable image version for every deployment.

### 4. Amazon ECR

The Docker image is pushed to the Amazon ECR repository:

```
aws-devops-demo
```

Amazon ECR stores the container images used by ECS.

### 5. ECS Task Definition

GitHub Actions retrieves the current ECS task definition and replaces the application container image with the newly built ECR image.

### 6. ECS Fargate Deployment

The updated task definition is deployed to:

```
Cluster: aws-devops-demo-cluster
Service: aws-devops-demo-service
```

The deployment uses Amazon ECS Fargate, so no EC2 instances need to be managed.

### 7. Health Check

The Application Load Balancer performs health checks against the ECS application.

GitHub Actions waits for ECS service stability before marking the deployment as successful.

### 8. Automatic Rollback

The ECS service uses a deployment circuit breaker with rollback enabled.

If the new deployment fails to become healthy, ECS automatically rolls back to the previous working task definition.

## Authentication and Security

GitHub Actions does not use a long-lived AWS access key.

Authentication uses:

```
GitHub Actions
    ↓
GitHub OIDC
    ↓
AWS IAM Role
    ↓
Temporary AWS Credentials
```

The IAM trust policy restricts the role to this repository's `main` branch.

Application demo credentials are stored in AWS Secrets Manager and injected into the ECS task at runtime.

## Workflow File

The pipeline implementation is located at:

```
.github/workflows/deploy.yml
```

The workflow performs the complete build and deployment process automatically.

## Deployment Result

A successful pipeline results in:

```
Git Push
    ↓
Validation Passed
    ↓
Docker Image Built
    ↓
Image Pushed to ECR
    ↓
ECS Task Definition Updated
    ↓
ECS Fargate Deployment
    ↓
ALB Health Check Passed
    ↓
Application Live
```

## Rollback Strategy

Rollback is handled by the Amazon ECS deployment circuit breaker.

The Terraform configuration enables:

```
deployment_circuit_breaker {
    enable   = true
    rollback = true
}
```

This allows ECS to automatically return to the previous stable deployment when the new deployment fails health checks.

## CI/CD Benefits

This pipeline provides:

* Automated deployments
* Automated code validation
* Docker-based application packaging
* Immutable ECR image tags
* Secure AWS authentication through OIDC
* Automated ECS deployments
* Application health checks
* Automatic rollback
* Traceability through Git commit SHA tags
* No manual server deployment
