// pages/api/health.js
import { supabase } from '../../utils/supabaseClient'; // Import Supabase client

export default async function handler(req, res) {
  try {
    // Step 1: Check if the Vercel server is running
    const isServerRunning = true; // The fact that this code is running means the server is up

    // Step 2: Check if Supabase is connected and responsive
    const { data: supabaseData, error: supabaseError } = await supabase
      .from('server_status') // Replace with a table in your Supabase project
      .select('*')
      .limit(1);

    if (supabaseError) {
      // Return 503 Service Unavailable if Supabase is down
      return res.status(503).json({
        status: 'error',
        message: 'Supabase is unavailable',
        details: supabaseError.message,
      });
    }

    // Step 3: If everything is fine, return 200 OK
    res.status(200).json({
      status: 'ok',
      message: 'Vercel server and Supabase are healthy',
      supabaseData: supabaseData, // Optional: Include Supabase data in the response
    });
  } catch (error) {
    // Handle unexpected errors and return 500 Internal Server Error
    console.error('Health check failed:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      details: error.message,
    });
  }
}