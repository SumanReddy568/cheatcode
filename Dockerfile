# Use the official Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to install dependencies
# You can create a package.json if needed for this project, or just copy the files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all project files to the container's working directory
COPY . .

# Expose the port your application will run on (if applicable)
EXPOSE 8080

# Start the script (update based on your project’s entry point)
CMD ["node", "script.js"]
