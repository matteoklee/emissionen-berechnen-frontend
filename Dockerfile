# Build Stage
FROM node:20 AS build-stage
WORKDIR /app

# Install dependencies and build the project
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage with NGINX
FROM nginx:1.25 AS production-stage

# Copy build output to NGINX html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose Port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
