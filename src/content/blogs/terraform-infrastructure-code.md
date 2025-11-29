## What is Infrastructure as Code (IaC)?

Infrastructure as Code (IaC) is the managing and provisioning of computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.

**Terraform**, developed by HashiCorp, is the leading open-source tool for IaC. It allows you to define cloud resources in human-readable configuration files that you can version, reuse, and share.

## Core Concepts

### 1. Providers
Terraform relies on plugins called "providers" to interact with cloud platforms (AWS, Azure, GCP).

```hcl
provider "aws" {
  region = "us-west-2"
}
```

### 2. Resources
Resources are the most important element in the Terraform language. Each resource block describes one or more infrastructure objects.

```hcl
resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"
}
```

### 3. State
Terraform stores state about your managed infrastructure and configuration. This state is used by Terraform to map real world resources to your configuration, keep track of metadata, and to improve performance for large infrastructures.

## The Workflow

1.  **Write:** Author infrastructure as code.
2.  **Plan:** Preview changes before applying. `terraform plan` shows you exactly what will happen.
3.  **Apply:** Provision reproducible infrastructure. `terraform apply` executes the changes.

## Best Practices

-   **Remote State:** Store your state file remotely (e.g., AWS S3 + DynamoDB for locking) to allow team collaboration.
-   **Modules:** Encapsulate related resources into reusable modules. For example, a "VPC module" that creates networking, subnets, and security groups.
-   **Variable Validation:** Use type constraints and validation rules for your input variables.

## Conclusion

Terraform empowers DevOps teams to manage infrastructure with the same rigor as application code. It brings consistency, speed, and safety to cloud operations.
