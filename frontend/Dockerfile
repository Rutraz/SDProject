FROM node:13.12.0-alpine

# Create app directory
WORKDIR /frontend


ENV PATH /frontend/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY package-lock.json ./


RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .


CMD [ "npm", "start" ]