// pages/api/healthCheckNow.js
import { supabase } from '../../utils/supabaseClient'; // Import Supabase client

export default async function handler(req, res) {

   // Set CORS headers to allow requests from any origin
   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (replace '*' with your frontend URL in production)
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific HTTP methods
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

  
  if (req.method === 'GET') {
    try {
      // Step 1: Start measuring response time
      const startTime = Date.now();

      // Step 2: Call the /api/health endpoint
      const healthCheckUrl = 'https://vet-mutual.vercel.app/api/health'; // Replace with your server's health check URL
      const healthCheckResponse = await fetch(healthCheckUrl);

      // Step 3: Calculate response time and format it as a float with 1 decimal place
      const responseTime = Date.now() - startTime; // Response time in milliseconds
      const speed = parseFloat((responseTime / 1000).toFixed(1)); // Convert to seconds and format as float with 1 decimal

      // Check if the health check response is OK
      if (!healthCheckResponse.ok) {
        throw new Error(`Health check failed with status: ${healthCheckResponse.status}`);
      }

      const statusCode = healthCheckResponse.status; // Get the HTTP status code
      const data = await healthCheckResponse.json(); // Get the response body

      // Step 4: Store the status and speed in Supabase
      const { data: supabaseData, error } = await supabase
        .from('server_status') // Replace with your table name
        .insert([
          {
            code: statusCode,
            message: data.message || 'OK', // Store the error message (if any)
            speed: speed, // Store the speed as a float with 1 decimal
          },
        ]);

      if (error) {
        throw error;
      }

      // Log the result
      console.log('Health check status stored in Supabase:', supabaseData);

      // Respond with a success message
      res.status(200).json({
        message: 'Health check executed successfully',
        statusCode,
        speed: speed, // Return the speed in the response
        data,
      });
    } catch (error) {
      console.error('Error in health check:', error);
      res.status(500).json({ error: 'Failed to execute health check', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}