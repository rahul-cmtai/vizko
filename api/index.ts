import express from 'express';
import { serveStatic } from '../server/vite';
import { registerRoutes } from '../server/routes';

// Create Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register API routes
(async () => {
  await registerRoutes(app);
})();

// Serve static files
serveStatic(app);

// Export for Vercel serverless function
export default app; 