# # Dockerfile

# # Use the official Node.js 22 image as the base image
# FROM node:22-alpine

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./   

# # Install project dependencies
# RUN npm install

# # Copy the rest of the application code to the working directory
# COPY . .

# # Build the application
# RUN npm run build

# # Expose the port the app runs on
# EXPOSE 3000

# # Serve the built application (using vite preview for production)
# CMD ["npm", "run", "preview"]


# # Dockerfile
# Stage 1: Build React app
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
