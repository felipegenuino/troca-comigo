FROM node:18

WORKDIR /app

# Copiar arquivos necessários para instalar dependências
COPY package.json package-lock.json ./

# Instalar TODAS as dependências, incluindo devDependencies
RUN npm install --legacy-peer-deps

# Copiar o restante do código
COPY . .

# Construir a aplicação
RUN npm run build

CMD ["npm", "start"]