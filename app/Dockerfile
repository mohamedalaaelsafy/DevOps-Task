FROM node:20-slim as builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

FROM node:20-slim

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY --from=builder /app /usr/src/app

EXPOSE 3000

RUN useradd --user-group --create-home --shell /bin/false appuser
USER appuser

CMD ["node", "/usr/src/app/index.js"]