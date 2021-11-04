SHELL = /bin/bash
DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_EXEC = $(DOCKER_COMPOSE) exec
DOCKER_COMPOSE_EXEC_NODE = $(DOCKER_COMPOSE_EXEC) nodejs

up:
	$(DOCKER_COMPOSE) up -d

stop:
	$(DOCKER_COMPOSE) stop

logs:
	$(DOCKER_COMPOSE) logs

image-build:
	$(DOCKER_COMPOSE) build

install:
	$(DOCKER_COMPOSE_EXEC_NODE) yarn install

build:
	$(DOCKER_COMPOSE_EXEC_NODE) yarn build

start:
	$(DOCKER_COMPOSE_EXEC_NODE) yarn dev

