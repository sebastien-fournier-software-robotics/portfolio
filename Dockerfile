# Node (Alpine Linux)
FROM node:22-alpine

# App working dir
WORKDIR /app

# Copy dependencies in cache
COPY package*.json ./

# install dependencies in container (not WSL)
RUN npm install

# Using port 3000 for communication
EXPOSE 3000

# Starting default command
CMD ["npm", "start"]