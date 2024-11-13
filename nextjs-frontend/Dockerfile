# Dockerfile para o Next.js Frontend
FROM node:18 # Escolha a versão do Node.js que você está usando
WORKDIR /app

# Copie o package.json e instale as dependências
COPY package.json package-lock.json /app/
RUN npm install

# Copie o restante do código para dentro do container
COPY . /app

# Construa a aplicação Next.js
RUN npm run build

# Exponha a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]