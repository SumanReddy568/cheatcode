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

on:
  push:
    branches:
      - main  # This workflow runs when you push to the main branch
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the repository
      - name: Checkout code
        uses: actions/checkout@v3

      # Step 2: Log in to Docker Hub
      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME }}
          password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}

      # Step 3: Build the Docker image
      - name: Build the Docker image
        run: docker build -t ${{ secrets.DOCKER_HUB_USERNAME }}/sumanreddy:latest .

      # Step 4: Push the Docker image to Docker Hub
      - name: Push the Docker image
        run: docker push ${{ secrets.DOCKER_HUB_USERNAME }}/sumanreddy:latest
      
      # Trigger the Render deploy hook
      - name: Trigger Render Deploy Hook
        run: |
          curl -X POST "${{ secrets.YOUR_RENDER_DEPLOY_HOOK_URL }}"


# Expose port 80
EXPOSE 80

# Add a health check to verify if Nginx is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Start Nginx server and run in the foreground to keep the container alive
CMD ["nginx", "-g", "daemon off;"]
