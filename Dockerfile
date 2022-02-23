FROM node:16-slim AS build
WORKDIR /app
COPY package*.json ./
COPY . ./
RUN npm install && npm run build && npm prune --production

FROM node:16-alpine
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

EXPOSE 8080
ENTRYPOINT [ "node" ]
CMD [ "dist/main.js" ]