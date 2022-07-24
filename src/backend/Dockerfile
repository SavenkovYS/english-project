FROM node:16.13.2-alpine as base
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production \
    && npm cach clean --force \
ENV PATH /app/node_modules/.bin:$PATH

FROM base as dev
ENV NODE_ENV=development
RUN npm install --only=development
CMD ["/app/node_modules/.bin/nodemon", "-L"]

FROM dev as build
COPY . .
RUN tsc

FROM base as prod
COPY --from=build /app/dist/ .
CMD ["node", "app.js"]