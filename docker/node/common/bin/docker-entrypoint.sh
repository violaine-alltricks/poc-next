#!/bin/sh
set -e

export HOME="${DOCKER_HOME}"

# If no argument on run, launch nodemon...
# Else execute arguments
if [ -z "$1" ]; then
    trap 'exit 0' TERM
    tail -f /dev/null & wait ${!}
else
    if [ "${1#-}" != "$1" ]; then
        set -- nodejs "$@"
    fi
    exec "$@"
fi
