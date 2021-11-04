FROM node:14-buster-slim

ENV TZ Europe/Paris
ENV DOCKER_HOME='/home/docker'

RUN apt-get update -yqq && \
    apt-get install --no-install-recommends -yqq \
        apt-transport-https \
        ca-certificates \
        git \
        curl \
        wget \
        dbus-x11 \
        locales \
        xvfb \
        libgtk2.0-0 \
        libnotify-dev \
        libgconf-2-4 \
        libnss3 \
        libxss1 \
        libasound2 \
        libpng-dev \
        libatk-bridge2.0-0 \
        libgtk3.0 \
        libgbm1 \
        openssh-client

RUN echo "fr_FR.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen && \
    update-locale LANG=fr_FR.UTF-8

RUN npm install -g nodemon

RUN userdel -r node && \
    mkdir -p ${DOCKER_HOME}/.config/alltricks-terminal && \
    chmod -R 777 ${DOCKER_HOME} /etc/passwd /etc/group

# Copy config/bin files
COPY ./common/bin/docker-entrypoint.sh /usr/local/bin/docker-entrypoint

EXPOSE 3000
EXPOSE 3001

ENTRYPOINT ["docker-entrypoint"]