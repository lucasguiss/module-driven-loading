#!/bin/bash

## Receives the project name via params
PROJECT=$1


## Optional in case GCloud SDK is not authenticated:
## gcloud auth login --no-launch-browser
## gcloud config set project $PROJECT


## Cloud Run service name
SERVICE_NAME=module-driven-loading

## Container Registry url for the container
GCR_URL=gcr.io/$PROJECT/$SERVICE_NAME

## Deploy the Dockerfile as a container in Google Cloud Container Registry
gcloud builds submit --tag $GCR_URL --project=$PROJECT

## Deploy a Cloud Run instance using the Container Registry Image
gcloud run deploy $SERVICE_NAME --image $GCR_URL --region=southamerica-west1 --allow-unauthenticated