# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy the static website files from the current directory to the container
COPY index.html ./
COPY style.css ./
COPY script.js ./
COPY commands/ ./commands/

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
