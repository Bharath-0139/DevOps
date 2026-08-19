
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Clean cache and install with retry logic and improved timeout settings
RUN npm cache clean --force && \
    npm ci --prefer-offline --no-audit --fetch-timeout=120000 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000

COPY . .

EXPOSE 3000

CMD ["npm","start"]

