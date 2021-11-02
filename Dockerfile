FROM node:17-alpine
RUN npm i -g typescript

WORKDIR /app/encrypt
COPY *.json ./
RUN npm i

COPY src/ src/
RUN npm run build
RUN npm run test
CMD npm run start

