import React, { useState } from "react";
import { supabase } from '../utils/supabaseClient';
import NortonBadge from '../images/nortonBadge.png';
import Image from "next/image";
import { formatTimestamp, getStateFullName } from "../utils/helpers";

function FormQuote({bg}) {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      state: "",
    });

    const [error, setError] = useState(""); // State for validation error

    const states = [
      { code: "AL", name: "Alabama" },
      { code: "AK", name: "Alaska" },
      { code: "AZ", name: "Arizona" },
      { code: "AR", name: "Arkansas" },
      { code: "CA", name: "California" },
      { code: "CO", name: "Colorado" },
      { code: "CT", name: "Connecticut" },
      { code: "DE", name: "Delaware" },
      { code: "FL", name: "Florida" },
      { code: "GA", name: "Georgia" },
      { code: "HI", name: "Hawaii" },
      { code: "ID", name: "Idaho" },
      { code: "IL", name: "Illinois" },
      { code: "IN", name: "Indiana" },
      { code: "IA", name: "Iowa" },
      { code: "KS", name: "Kansas" },
      { code: "KY", name: "Kentucky" },
      { code: "LA", name: "Louisiana" },
      { code: "ME", name: "Maine" },
      { code: "MD", name: "Maryland" },
      { code: "MA", name: "Massachusetts" },
      { code: "MI", name: "Michigan" },
      { code: "MN", name: "Minnesota" },
      { code: "MS", name: "Mississippi" },
      { code: "MO", name: "Missouri" },
      { code: "MT", name: "Montana" },
      { code: "NE", name: "Nebraska" },
      { code: "NV", name: "Nevada" },
      { code: "NH", name: "New Hampshire" },
      { code: "NJ", name: "New Jersey" },
      { code: "NM", name: "New Mexico" },
      { code: "NY", name: "New York" },
      { code: "NC", name: "North Carolina" },
      { code: "ND", name: "North Dakota" },
      { code: "OH", name: "Ohio" },
      { code: "OK", name: "Oklahoma" },
      { code: "OR", name: "Oregon" },
      { code: "PA", name: "Pennsylvania" },
      { code: "RI", name: "Rhode Island" },
      { code: "SC", name: "South Carolina" },
      { code: "SD", name: "South Dakota" },
      { code: "TN", name: "Tennessee" },
      { code: "TX", name: "Texas" },
      { code: "UT", name: "Utah" },
      { code: "VT", name: "Vermont" },
      { code: "VA", name: "Virginia" },
      { code: "WA", name: "Washington" },
      { code: "WV", name: "West Virginia" },
      { code: "WI", name: "Wisconsin" },
      { code: "WY", name: "Wyoming" }
    ];
    
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setError(""); // Clear error when user types
    };

    const validateForm = () => {
      const { name, phone, email, state } = formData;

      if (!name.trim().includes(" ")) {
        setError("Full name must contain at least two words.");
        return false;
      }
      
      if (!/^\d{10}$/.test(phone)) {
        setError("Phone number must be exactly 10 digits.");
        return false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Please enter a valid email address.");
        return false;
      }

      if (!state) {
        setError("Please select a state.");
        return false;
      }

      return true;
    };

  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (!validateForm()) return; // Stop submission if validation fails
    
      const { data, error } = await supabase
        .from("leads")
        .insert([formData])
        .select("*") // Fetch inserted data
        .single(); // Get only one record
    
      if (error) {
        setError("Error submitting form: " + error.message);
      } else {
        alert("Form submitted successfully!");
    
        // Format SMS Message
        const smsMessage = `
        New Lead Received:
        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        State: ${getStateFullName(data.state)}
        ${formatTimestamp(new Date().toISOString())[0]} at ${formatTimestamp(new Date().toISOString())[1]}
        `.trim();
    
        // Send SMS
        sendSMS(smsMessage);
    
        // Reset form
        setFormData({ name: "", phone: "", email: "", state: "" });
      }
    };
    
    // Function to send SMS
    async function sendSMS(text) {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          to: "+4915213451741",
        }),
      });
    
      const data = await response.json();
      console.log(data);
    }
    



      
  return (
    <div>
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] md:text-[30px] font-semibold"> Free Quote </h2>
          <Image src={NortonBadge} alt="Norton Badge" className="hidden md:block"/>
        </div>
        <p className={`${bg == 'red' ? 'text-white' :'text-gray-500'} mb-4 text-[15px] md:text-[20px]`}>
          In just a few steps, find a cost-effective plan with no obligation.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="block md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Full Name*" 
              className="p-3 border rounded-[7px] w-full" 
              required 
            />
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Phone Number*" 
              className="p-3 border rounded-[7px] w-full" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email*" 
              className="p-3 border rounded-[7px] w-full" 
              required 
            />
            <select 
              name="state" 
              value={formData.state} 
              onChange={handleChange} 
              className="p-3 border rounded-md w-full bg-white text-gray-400 h-[45px] md:h-full" 
              required
            >
              <option value="">Select State*</option>
              {states.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button type="submit" className={`${bg == 'red'?'bg-darkBlue':'bg-red-600'} mt-4 text-white px-6 py-3 rounded-md w-full hover:bg-red-700"`}>
            Submit
          </button>
        </form>        
    </div>
  )
}

export default FormQuote