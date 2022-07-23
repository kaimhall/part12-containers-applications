FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV REACT_APP_BACKEND_URL=http://localhost:8000/api/persons

ENV DANGEROUSLY_DISABLE_HOST_CHECK=true

CMD ["npm", "start"]
