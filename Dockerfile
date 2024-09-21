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
COPY theme-toggle.js ./ 

# Copy custom nginx configuration for reverse proxy and routing
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Add a health check to verify if Nginx is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Start Nginx server and run in the foreground to keep the container alive
CMD ["nginx", "-g", "daemon off;"]
