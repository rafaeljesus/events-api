FROM node:6

RUN mkdir -p /events-api

WORKDIR /events-api

COPY package.json /events-api/
RUN npm i
COPY . /events-api

EXPOSE 3000

CMD ["npm", "start"]
