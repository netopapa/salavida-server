#!/usr/bin/env bash
sudo docker run --name salavida_db \
    -p 5439:5432 \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=root \
    -e POSTGRES_DB=salavida \
    --restart=always \
    -d postgres:11-alpine
