# syntax=docker/dockerfile:1
ARG RUBY_VERSION=3.2.2
FROM ruby:$RUBY_VERSION-slim AS base

WORKDIR /rails

# Instalar dependências básicas e libpq-dev
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    curl \
    libjemalloc2 \
    libvips \
    libgmp-dev \
    libpq-dev \
    sqlite3 && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Instalar dependências do projeto
COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle /usr/local/bundle/ruby/*/cache

# Copiar o código da aplicação
COPY . .

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]