import React from "react";
import { useLeads } from "../../context/LeadsContext";
import { getStateFullName, formatPhoneNumber } from "@/utils/helpers";

function Leads() {
  const { leads, loading } = useLeads();

  return (
    <div className="text-gray-400 overflow-y-scroll h-[calc(100vh-90px)]">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
            {leads.length > 0 ? (
              leads.map((lead) => (
                <div key={lead.id} className="grid grid-cols-[2fr_2fr_1fr_1fr_100px] border-b border-gray-700 px-2 hover:bg-gray-700 hover:text-white">
                  <p className="p-2">{lead.name}</p>
                  <p className="p-2">{lead.email}</p>
                  <p className="p-2">{formatPhoneNumber(lead.phone)}</p>
                  <p className="p-2">{getStateFullName(lead.state)}</p>
                  <div className="flex justify-between items-center">
                    <i class="bi bi-telephone-outbound"></i>
                    <i class="bi bi-chat-left-text"></i>
                    <i class="bi bi-envelope-plus"></i>
                  </div>
                </div>
              ))
            ) : (
              <tr>
                <td colSpan="4" className=" p-4 text-center">
                  No leads found.
                </td>
              </tr>
            )}
        </div>
      )}
    </div>
  );
}

export default Leads;
