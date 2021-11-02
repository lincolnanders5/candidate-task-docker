FROM node:17-alpine
RUN npm i -g typescript

WORKDIR /app/encrypt
COPY *.json ./
RUN npm i

COPY src/** ./src/
RUN npm run build
CMD npm run start

