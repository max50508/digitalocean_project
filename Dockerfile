FROM node:16-alpine

WORKDIR '/bot'
COPY ./package.json ./
RUN npm install
RUN npm list

COPY ./ ./
RUN npm run build

CMD ["npm","run","start"]