
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && \
    npm ci --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000 || \
    npm ci --legacy-peer-deps --prefer-offline

COPY . .

EXPOSE 3000

CMD ["npm","start"]

