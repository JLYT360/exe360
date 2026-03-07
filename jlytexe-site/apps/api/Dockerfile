
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN corepack enable && pnpm install --prod=false
COPY . .
RUN pnpm build
EXPOSE 8787
CMD ["node", "dist/server.js"]
