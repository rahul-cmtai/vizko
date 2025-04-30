import type { VercelRequest, VercelResponse } from '@vercel/node';

// Simple health check endpoint for Vercel
export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  response.status(200).json({
    status: 'ok',
    message: 'Vizko Exports API is running',
    timestamp: new Date().toISOString()
  });
} 