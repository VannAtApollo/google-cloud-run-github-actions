FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json .



# Copy local code to the container image.
COPY ./src/data .
COPY ./src/datasources .
COPY ./src/resolvers .
COPY ./src/*.js .

RUN npm install

CMD [ "npm", "gateway.js" ]
