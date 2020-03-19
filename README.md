# Nodejs app on k8s
## Install and have a minikube run it locally
The instructions can be followed in
```
https://kubernetes.io/docs/tasks/tools/install-minikube/
```
### Checkout the code from the git repo
```
git checkout https://github.com/olje/k8stest.git
```
### Apply the configuration yaml file
After minikube login 
```
ssh minikube
```
Lauch the pods within minikube
```
kubectl apply -f mysql-pv.yaml
kubectl apply -f mysql.yaml
kubectl apply -f app.yaml 
```
