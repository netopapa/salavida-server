#!/usr/bin/env bash
sudo docker run --name salavida_backend \
    -p 3333:3333 \
    --restart=always \
    -d node:13-alpine
