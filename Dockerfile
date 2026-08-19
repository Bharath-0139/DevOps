
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Force fresh downloads and aggressive retries to resolve checksum errors
RUN npm cache clean --force && \
    npm ci --no-cache --fetch-timeout=120000 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000 --fetch-retries=5

COPY . .

EXPOSE 3000

CMD ["npm","start"]

