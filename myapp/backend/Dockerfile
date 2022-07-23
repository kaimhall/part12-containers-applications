FROM node:16 as test

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run test

CMD ["npm", "run", "start"]
