# Basic Express Server for EC2

This is a simple Node.js server using Express, designed for easy deployment on AWS EC2 for learning purposes.

## Features

- Two endpoints:
  - `/` returns a welcome message
  - `/hello` returns a hello message

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm start
```

The server will run on port 3000 by default. You can change the port by setting the `PORT` environment variable.

### 3. Test the endpoints

- Visit `http://localhost:3000/` to see the welcome message.
- Visit `http://localhost:3000/hello` to see the hello message.

## Deploying on EC2

1. Copy the project files to your EC2 instance.
2. Install Node.js and npm if not already installed.
3. Run `npm install` and `npm start` as above.
4. Make sure your EC2 security group allows inbound traffic on the port you use (default 3000).
