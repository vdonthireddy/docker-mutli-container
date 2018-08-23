FROM node:8

RUN npm config set proxy http://proxy-src.research.ge.com:8080
RUN npm config set https-proxy http://proxy-src.research.ge.com:8080

# Create app directory
WORKDIR /usr/src/app

ENV SERVICE_HOST=$SERVICE_HOST
ENV SERVICE_PORT=$SERVICE_PORT
ENV CLIENT_PORT=$CLIENT_PORT

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE $CLIENT_PORT
CMD [ "npm", "start" ]