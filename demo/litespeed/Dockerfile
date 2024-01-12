FROM debian:bullseye-slim
# Note to self: never try to port this to Alpine again. You have tried and failed twice. It's not worth it.
# Also don't try building from source. Their build scripts are all kinds of broken. Their repo has the latest release anyway.
# Consider using the unstable channel: https://openlitespeed.org/kb/upgrade-ols-to-edge-tier/#Setup-2

WORKDIR /app

RUN apt -y update && apt -y upgrade && apt -y install wget && wget 'https://openlitespeed.org/packages/openlitespeed-1.7.17-x86_64-linux.tgz'

RUN tar xf 'openlitespeed-1.7.17-x86_64-linux.tgz' && cd openlitespeed && ./install.sh

RUN mkdir -p /usr/local/lsws/Example/html/.ssh
COPY id_rsa /usr/local/lsws/Example/html/.ssh/id_rsa
RUN mkdir -p /usr/local/lsws/Example/html/profiles/ad664532-9fc7-4a28-b001-d71047da44ee
COPY profile.json /usr/local/lsws/Example/html/profiles/ad664532-9fc7-4a28-b001-d71047da44ee/profile.json

CMD script -q /dev/stdout -c '/usr/local/lsws/bin/openlitespeed -d'
