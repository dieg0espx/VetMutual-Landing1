import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

const LeadsContext = createContext();

export const LeadsProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching leads:", error);
      } else {
        // Sort alphabetically if created_at is the same
        const sortedLeads = data.sort((a, b) => {
          if (a.created_at === b.created_at) {
            return a.name.localeCompare(b.name); // Alphabetical order
          }
          return 0;
        });

        setLeads(sortedLeads);
      }
      setLoading(false);
    };

    fetchLeads();
  }, []);

  return (
    <LeadsContext.Provider value={{ leads, loading, setLeads }}>
      {children}
    </LeadsContext.Provider>
  );
};

export const useLeads = () => useContext(LeadsContext);
