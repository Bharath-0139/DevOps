
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies with standard npm ci
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm","start"]

