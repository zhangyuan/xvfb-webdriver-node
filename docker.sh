#!/usr/bin/env bash

IMAGE_NAME=xvfb-webdriver-node

docker build -t ${IMAGE_NAME} .

docker run \
     --rm \
     --shm-size=1024m \
     -v `pwd`/screenshots:/app/screenshots \
     -e HEADLESS_CHROME=TRUE \
     ${IMAGE_NAME} \
     ./go.sh $1 $2 $3 $4

docker rmi ${IMAGE_NAME}
