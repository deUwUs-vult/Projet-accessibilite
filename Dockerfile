FROM node:18-alpine3.18

WORKDIR /usr/accessibilite

COPY package.json ./

RUN npm install

COPY . ./
COPY .env .env
RUN npx prisma generate
#RUN npx prisma db push

CMD ["npm", "run", "dev"]

