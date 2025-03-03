import { Twilio } from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { message, to } = req.body; // Get message & recipient number

  const accountSid = process.env.NEXT_TWILIO_ACCOUNT_SID;
  const authToken = process.env.NEXT_TWILIO_AUTH_TOKEN;
  const client = new Twilio(accountSid, authToken);

  try {
    const response = await client.messages.create({
      body: message,
      from: "+12195339216", // Your Twilio number
      to, // The recipient number from the request
    });

    res.status(200).json({ success: true, sid: response.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
