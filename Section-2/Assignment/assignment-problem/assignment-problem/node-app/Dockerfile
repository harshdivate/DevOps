FROM node:14
WORKDIR /app
COPY package.json /app

EXPOSE 3000

RUN npm install 
COPY . /app

CMD ["node","server.js"];