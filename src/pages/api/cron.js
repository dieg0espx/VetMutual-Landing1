// pages/api/cron.js
import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Step 1: Call the health check endpoint
      const healthCheckUrl = 'https://vet-mutual.vercel.app/api/health'; // Replace with your server's health check URL
      const healthCheckResponse = await fetch(healthCheckUrl);
      const statusCode = healthCheckResponse.status; // Get the HTTP status code
      const data = await healthCheckResponse.json(); // Get the response body

      // Step 2: Store the status in Supabase
      const { data: supabaseData, error } = await supabase
        .from('server_status') // Replace with your table name
        .insert([
          {
            code: statusCode,
            message: data.message || 'OK', // Store the error message (if any)
          },
        ]);

      if (error) {
        throw error;
      }

      // Log the result
      console.log('Health check status stored in Supabase:', supabaseData);

      // Respond with a success message
      res.status(200).json({ message: 'Cron job executed successfully', statusCode, data });
    } catch (error) {
      console.error('Error in cron job:', error);
      res.status(500).json({ error: 'Failed to execute cron job' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}