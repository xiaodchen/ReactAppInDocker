# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:boron

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Tell Docker about the port we'll run on.
EXPOSE 8008
EXPOSE 80
EXPOSE 8080

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm install

# Set the command to start the node server.
CMD [ "npm", "start" ]

