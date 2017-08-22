#!/usr/bin/env bash

IMAGE_NAME=xvfb-webdriver-node

docker build -t ${IMAGE_NAME} .

docker run \
     --rm \
     -e HEADLESS_CHROME=TRUE \
     ${IMAGE_NAME} \
     ./go.sh $1 $2 $3 $4

docker rmi ${IMAGE_NAME}