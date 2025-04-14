// api/index.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import serverlessExpress from '@vendia/serverless-express';
import app from '../src/app';
import connectDB from '../src/config/database';

let server: any;
let isConnected = false;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      server = serverlessExpress({ app });
    } catch (err) {
      console.error('Failed to connect to DB:', err);
      return res.status(500).json({ message: 'Database connection failed' });
    }
  }

  return server(req, res);
}
