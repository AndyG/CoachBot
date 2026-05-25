# Use an official Node.js runtime as the base image
FROM node:20-alpine

# set a working directory outside the root of the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the port your Express app runs on (usually 3000)
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/app.mjs"]