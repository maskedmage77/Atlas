import express, { Express, Request, Response } from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();
const server = createServer(app);

// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true')
  next();
});

// Initialize Routes
try {
  server.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at https://localhost:${port}`);
  });
} catch (err) {
  console.log(err);
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

