FROM node:16

ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGODB_DB_NAME jobs-docker
ENV MONGODB_CLUSTER_ADDRESS cluster0.fhj1j.mongodb.net
ENV MONGODB_USERNAME ilyakashitsyn
ENV MONGODB_PASSWORD FzcMNYp2XlfXEnj3

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
