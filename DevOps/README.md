## 🧰 Prerequisites

Make sure the following tools are installed:

- [Docker](https://www.docker.com/)
- [kind](https://kind.sigs.k8s.io/docs/user/quick-start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Helm](https://helm.sh/docs/intro/install/)
- [mkcert](https://github.com/FiloSottile/mkcert) *(optional, for local TLS certificates)*


## 🚀 Setup Instructions

### 1 Create Kind Cluster

Create a local Kubernetes cluster using the provided configuration file:

```bash
kind create cluster --config DevOps/infra/kind-config.yaml
```

### 2 Install Nginx

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx --create-namespace \
  -f ./DevOps/k8s/ingress-nginx/values.yaml
```

### 3 Cert Manager

```bash
helm repo add jetstack https://charts.jetstack.io
helm repo update

helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager --create-namespace \
  -f ./DevOps/k8s/cert-manager/values.yaml

# For Self Sign Certificate
kubectl apply -f ./DevOps/k8s/cert-manager//cluster-issuer.yaml
```

### 4 Build the APP  and push to DockerHub
```bash
docker login
cd app
docker build -t mohamedalaaelsafy/devops-task-app:latest . 
docker push mohamedalaaelsafy/devops-task-app:latest
```


### 5 Deploy APP and DB

```bash
export DEPLOY_PATH="./DevOps/k8s/charts"
helm template . -f ${DEPLOY_PATH}/app | k apply -f - 
helm template . -f ${DEPLOY_PATH}/db | k apply -f - 
```

### Test APP 

```bash
echo "127.0.0.1 app.testing.local" >> /etc/hosts
```
Open https://app.testing.local in your browser

