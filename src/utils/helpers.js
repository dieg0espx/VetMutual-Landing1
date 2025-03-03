
// TIMESTAM (2025-01-30T20:00:14.707598+00:00) > [0] = Month,dd,yyy [1] = hh:mm 
export function formatTimestamp(timestamp) {
    // Remove the initial "m" if it exists
    timestamp = timestamp.replace(/^m/, ''); 
  
    const dateObj = new Date(timestamp);
  
    // Format date as Month,dd,yyyy
    const dateStr = dateObj.toLocaleDateString('en-US', {
      month: 'short', // Use short month name (e.g., Jan)
      day: '2-digit',
      year: 'numeric',
    });
  
    // Format time as hh:mm
    const timeStr = dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // Use 24-hour format
    });
  
    return [dateStr, timeStr];
  }

  const states = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
  };

  export function getStateFullName(abbreviation) {
    if (!abbreviation) return "- - -"; // Handles null, undefined, and empty strings
    const formattedAbbreviation = abbreviation.toUpperCase().trim(); // Prevents case & whitespace issues
    return states[formattedAbbreviation] || "Unknown State"; // Returns state name or fallback
  }

  export function formatPhoneNumber(phone) {
    if (!phone) return "Invalid Input"; // Handle null, undefined, or empty values
  
    // Remove all non-numeric characters
    const digits = phone.toString().replace(/\D/g, "");
  
    // Check if the number has exactly 10 digits
    if (digits.length !== 10) return "Invalid Phone Number";
  
    // Format: (XXX) XXX-XXXX
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }