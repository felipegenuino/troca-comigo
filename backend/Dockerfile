# syntax=docker/dockerfile:1
ARG RUBY_VERSION=3.2.2
FROM ruby:$RUBY_VERSION-slim AS base

# Define o diretório de trabalho
WORKDIR /rails

# Instalação de dependências do sistema
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    curl \
    libjemalloc2 \
    libvips \
    libgmp-dev \
    sqlite3 && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copia o Gemfile e o Gemfile.lock para instalar as gems
COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle /usr/local/bundle/ruby/*/cache

# Copia o restante do código da aplicação
COPY . .

# Dockerfile do Backend
CMD ["sh", "-c", "rm -f tmp/pids/server.pid && bundle exec rails server -b 0.0.0.0 -p 3000"]