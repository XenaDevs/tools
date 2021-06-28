# Dockerfile

# base image
FROM node:14

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install --ignore-engines

# start app
RUN npm run build
EXPOSE 3000
CMD yarn start
