# DevOps Technical Task: Deploy a Node.js Web App on Kubernetes

## 🎯 Objective

Deploy a **Node.js + PostgreSQL** application stack on Kubernetes using Helm. The application should be exposed via Ingress NGINX. Use Kubernetes Secrets to secure environment variables, containerize the app, and optionally include CI automation.

---

## ✅ Requirements

### 🐳 Containerization

- Dockerize the provided Node.js app.
- Expose on **port 3000**.
- App must use environment config (`.env`).
- Local Docker builds are sufficient for testing.

### 📦 PostgreSQL Database

- Deploy as a **StatefulSet** with a **PersistentVolumeClaim (PVC)**.
- Store DB credentials using **Kubernetes Secrets**.
- Configure DB connection via environment variables.

### 🚀 Kubernetes Deployment (via Helm Chart)

- Prepare your kubernetes cluster using Minikube or Kind on Linux.
- Deploy the following using Helm:
  - Node.js **Deployment** + **Service**
  - PostgreSQL **StatefulSet** + **Service**
  - **Secrets**
  - **Ingress** + TLS (you can use self signed certificates)  -->  (Bonus): Use cert-manager with Let's Encrypt Staging
  - (Bonus): Add resource requests/limits and liveness/readiness probes in the deployment yml files.

### 🌐 Ingress

- Use **NGINX Ingress Controller**.
- Route traffic to the Node.js app.
- Use self signed certificates for TLS  -->  (Bonus): Use cert-manager with Let's Encrypt Staging

### ⚙️ Continuous Integration *(Bonus)*

- Implement a **GitHub Actions** pipeline with:
  - **Lint & Docker Build Job**:
    - Lint YAML and JS files.
    - Build Docker image.
  - **Helm Lint Job**:
    - Lint the Helm chart.

### 📝 Documentation

- Include a comprehensive `DEPLOYMENT_GUIDE.md` with:
  - Setup instructions
  - Reproducible deployment steps

### 💡 Bonus Features

- Add **resource requests/limits**, **liveness**, and **readiness probes** in deployment YAMLs
- Enable **HTTPS** (TLS termination) via **cert-manager**
- Implement a full **CI pipeline** (preferably with GitHub Actions)

---

## 🧰 Technologies to Use

- Docker
- Node.js
- PostgreSQL
- Ingress NGINX
- Kubernetes (Minikube or KIND)
- Helm 3
- GitHub Actions
- cert-manager *(optional for TLS)*

---

## 📦 Deliverables

Submit a **GitHub repository** containing:

- All code and manifests:
  - Application source
  - Helm charts
  - CI configurations
- A complete `DEPLOYMENT_GUIDE.md`

---

## 📦 Delivery Date

July 28th, 2025

