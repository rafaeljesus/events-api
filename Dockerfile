FROM node:argon

RUN mkdir -p /events-api

WORKDIR /events-api

COPY package.json /events-api/
RUN npm install
COPY . /events-api

EXPOSE 3000

CMD ["npm", "start"]
