export const portfolioData = {
  personal: {
    name: "Sudhakar Soni",
    role: "DevOps Engineer | Linux Admin | SRE",
    location: "Bangalore, India",
    email: "Sudhakarsoni57@gmail.com",
    linkedin: "https://www.linkedin.com/in/sudhakar-soni",
    github: "https://github.com/sudhakar-soni",
  },
  summary:
    "DevOps and Linux Systems Engineer with 3+ years of experience in production infrastructure, automation, cloud, CI/CD, containerization, and monitoring. Strong hands-on expertise with AWS, Kubernetes, Docker, Jenkins, Ansible, Terraform, Prometheus, and Grafana. Proven ability to design, deploy, and maintain enterprise-grade infrastructure while ensuring high availability, security, and cost optimization.",

  experience: [
    {
      id: 1,
      company: "Infosys BPM Ltd",
      role: "Technology Support Specialist",
      duration: "Aug 2025 – Present",
      description:
        "Enterprise-grade infrastructure support and automation for global operations.",
      responsibilities: [
        "L1/L2 production support for enterprise systems",
        "Infrastructure monitoring, incident management, and on-call escalation",
        "Linux administration and troubleshooting across multiple distributions",
        "ServiceNow ticketing and ITIL-based change management",
        "Automation of routine tasks using Bash and Python",
        "Shift-based critical production environment operations",
      ],
    },
    {
      id: 2,
      company: "OS3 Infotech Pvt Ltd",
      role: "Assistant System Engineer",
      duration: "Oct 2022 – Aug 2025",
      description:
        "Full-stack infrastructure engineering and cloud platform management.",
      responsibilities: [
        "Linux server management and administration (RHEL, Ubuntu, CentOS)",
        "CI/CD pipeline design and implementation",
        "Kubernetes and Docker container orchestration",
        "Infrastructure monitoring, logging, and alerting",
        "Automation of deployment and infrastructure scaling",
        "Cloud infrastructure deployment and optimization",
      ],
    },
  ],

  skills: {
    "Operating Systems": [
      "RHEL",
      "Ubuntu",
      "CentOS",
      "SUSE",
      "Windows Server",
    ],
    "Containerization": ["Docker", "Kubernetes", "OpenShift", "Rancher"],
    "CI/CD & Version Control": ["Jenkins", "GitHub Actions", "Git"],
    "Infrastructure as Code": ["Terraform", "Ansible", "Helm"],
    "Monitoring & Observability": [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "LGTM",
      "Splunk",
      "Datadog",
    ],
    "Cloud Platforms": ["AWS (EC2, S3, IAM, CloudWatch)", "Azure", "GCP"],
    "Scripting": ["Bash", "Python", "PowerShell"],
    "Storage & Databases": ["Ceph", "MinIO", "PostgreSQL"],
    "Virtualization": ["VMware", "CloudStack"],
  },

  projects: [
    {
      id: 1,
      title: "OS Upgrade & Standardization",
      client: "Ultratech Cement",
      category: ["Linux", "Automation"],
      description:
        "Enterprise-wide operating system upgrade from RHEL 6/7 to RHEL 8 with standardization across 100+ servers.",
      impact: "Upgraded and standardized 100+ production servers with zero downtime",
      technologies: ["RHEL", "PXE Boot", "Kickstart", "Ansible"],
      highlights: [
        "Designed automated PXE boot and Kickstart configurations for unattended OS deployments",
        "Developed Ansible playbooks for post-deployment configuration and compliance checks",
        "Implemented infrastructure validation and rollback procedures",
        "Achieved 100% uptime during migration with zero service interruption",
      ],
    },
    {
      id: 2,
      title: "Container Security & Runtime Protection",
      client: "Federal Bank",
      category: ["Kubernetes", "Security"],
      description:
        "Implemented enterprise container security using NeuVector with Kubernetes orchestration and harbor registry.",
      impact: "Deployed container security for 500+ production workloads",
      technologies: ["NeuVector", "Kubernetes", "RKE2", "Harbor", "RBAC"],
      highlights: [
        "Deployed NeuVector for real-time container runtime security",
        "Configured Harbor private registry with RBAC and vulnerability scanning",
        "Implemented network policies and security hardening on RKE2 clusters",
        "Automated security compliance monitoring and alerting",
      ],
    },
    {
      id: 3,
      title: "Centralized Logging & Observability",
      category: ["Monitoring", "Logging"],
      description:
        "Built enterprise-grade centralized logging and observability platform using ELK and LGTM stacks.",
      impact: "Centralized logs from 200+ sources with sub-second query latency",
      technologies: [
        "ELK Stack",
        "LGTM Stack",
        "Grafana",
        "Elasticsearch",
        "Prometheus",
      ],
      highlights: [
        "Designed and implemented ELK stack for centralized log aggregation and analysis",
        "Deployed LGTM (Loki, Grafana, Tempo, Mimir) for logs, metrics, and traces",
        "Created 50+ custom Grafana dashboards for operational insights",
        "Configured multi-level alerting with Alertmanager integration",
      ],
    },
    {
      id: 4,
      title: "CI/CD Automation on Kubernetes",
      category: ["CI/CD", "Kubernetes"],
      description:
        "Automated CI/CD pipeline using GitHub Actions with Helm and OpenShift for zero-downtime deployments.",
      impact: "Reduced deployment time by 80% with zero downtime rollouts",
      technologies: ["GitHub Actions", "Helm", "OpenShift", "Kubernetes"],
      highlights: [
        "Designed automated GitHub Actions workflows for build, test, and deploy stages",
        "Implemented Helm charts for application packaging and version control",
        "Configured canary and blue-green deployments with automatic rollbacks",
        "Achieved sub-minute deployment cycles with full automation",
      ],
    },
    {
      id: 5,
      title: "Infrastructure as Code (IaC)",
      category: ["Terraform", "AWS"],
      description:
        "Built reproducible, version-controlled infrastructure using Terraform and Ansible across AWS, Azure, and AKS.",
      impact: "Provisioned and managed 1000+ cloud resources across 3 cloud providers",
      technologies: ["Terraform", "Ansible", "AWS", "Azure", "AKS"],
      highlights: [
        "Developed modular Terraform modules for reusable infrastructure components",
        "Implemented AWS infrastructure including VPCs, EC2, RDS, S3, and IAM",
        "Created Ansible playbooks for configuration management and compliance",
        "Achieved 99.9% deployment success rate with automated testing",
      ],
    },
  ],

  education: [
    {
      degree: "BTech Computer Science Engineering",
      institution: "AKS University",
      year: "2023",
    },
  ],

  certifications: [
    "Linux Administration",
    "Kubernetes & Containers",
    "AWS Cloud Computing",
  ],
};
