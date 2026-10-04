variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "aws-devops-demo"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "dev"
}

variable "container_image" {
  description = "Docker image used by the ECS task"
  type        = string
  default     = "888869353635.dkr.ecr.ap-south-1.amazonaws.com/aws-devops-demo:fluxops-auth-v1"
}
