FROM node:8

# Create app directory
WORKDIR /usr/src/app

ENV SERVICE_HOST=$SERVICE_HOST

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8435
CMD [ "npm", "start" ]