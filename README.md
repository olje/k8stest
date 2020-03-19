# Nodejs app on k8s
## Install and have a minikube run it locally
The instructions can be followed in
```
https://kubernetes.io/docs/tasks/tools/install-minikube/
```
## Checkout the code from the git repo
```
git checkout https://github.com/olje/k8stest.git
```
## Build the docker image locally from the Dockerfile
```
docker build -t nodejs-app .
```
## Start the minikube environment
```
minikube start
```
### Apply thre configuration yaml file
After minikube login 
```
ssh minikube
```
Launch the pods within minikube
```
kubectl apply -f mysql-pv.yaml
kubectl apply -f mysql.yaml
kubectl apply -f app.yaml 
```
### Init the mysql DB
```
 kubectl exec -it $(kubectl get pods| grep mysql| cut -f1 -d" ") -- mysql -p changeme -u root < mysql/init.db
```
