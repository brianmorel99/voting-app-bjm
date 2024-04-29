# How to Run the Voting App on Google Kubernetes Engine

### Instruction for this mainly sourced from the below page

https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster

For any issues with the below, please reference that page.

### First Steps

1. In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
2. Go to project selector
3. Make sure that billing is enabled for your Google Cloud project.
4. Enable the Artifact Registry and Google Kubernetes Engine APIs.
5. Go to the Google Cloud console.

### From the Cloud Console
```
gcloud config set project PROJECT_ID
```
Replace PROJECT_ID with your project ID.

1. Create cluster
```
gcloud container clusters create-auto voting-app --location=us-central1
```
2. Get the configuration for kubectl and credentials to access cluster
```
gcloud container clusters get-credentials voting-app --location us-central1
```
3. Clone the git repository with the voting-app project
```
git clone https://github.com/brianmorel99/voting-app-bjm.git
```
4. Deploy the app to the cluster
```
 kubectl create -f k8s-specifications/
```
5. It may take some time to deploy and start the containers.  Run the below command until you see the "External IP" display for both the vote and result container.
```
kubectl get services
```
