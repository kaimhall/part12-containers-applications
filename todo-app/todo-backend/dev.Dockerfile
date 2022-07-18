FROM node:16 as base

WORKDIR /usr/src/app

COPY package.json package.json

COPY package-lock.json package-lock.json

FROM base as dev

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
