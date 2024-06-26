# https://github.com/danlynn/ember-cli
ARG EMBER_VERSION=4.11.0
ARG NODE_VERSION=18.14

FROM danlynn/ember-cli:${EMBER_VERSION}-node_${NODE_VERSION}

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    git zsh curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && npm install -g pnpm@latest-8 \
    && pnpm config set store-dir ~/.pnpm-store

# Default powerline10k theme, no plugins installed
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.2.0/zsh-in-docker.sh)"
