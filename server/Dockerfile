FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install


# Copy the rest of the application code
COPY . .

EXPOSE 4000

CMD ["npm", "start"]
