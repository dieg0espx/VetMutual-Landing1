import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { formatTimestamp } from '@/utils/helpers';
import HeartLoader from '@/components/heartLoader';
import axios from 'axios'; // Import Axios
import Image from 'next/image';
import logo from '../images/logo.png'

function ServerStatus() {
    const containerRef = useRef(null);
    const [data, setData] = useState([]);
    const [lastMessage, setLastMessage] = useState(null);
    const [speedColor, setSpeedColor] = useState();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      getData();
    }, []);
  
    useEffect(() => {
      // Scroll to the right end on mount
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: 0,
          left: containerRef.current.scrollWidth,
        });
      }
    }, [data]); // Run this effect only when data changes
  
    const getData = async () => {
      let { data: server_status, error } = await supabase
        .from('server_status')
        .select('*')
        .order('id', { ascending: true }); // Order by 'id' in ascending order
  
      if (server_status) {
        setData(server_status);
  
        // Find the last message after data is fetched.
        if (server_status.length > 0) {
          setLastMessage(server_status[server_status.length - 1]);
        }
  
        const totalSpeed = server_status.reduce((sum, status) => sum + status.speed, 0);
        const averageSpeed = totalSpeed / server_status.length;
  
        let iconColor = 'text-green-500'; // Default to green
  
        if (lastMessage && lastMessage.speed) {
          if (lastMessage.speed > averageSpeed) {
            iconColor = 'text-yellow-500';
          }
        }
        setSpeedColor(iconColor);
      }
    };
  
    const checkNow = async () => {
      setLoading(true); // Set loading state to true
  
      try {
        // Step 1: Call the health check endpoint
        const response = await axios.get('https://vet-mutual.vercel.app/api/health-check-now');
        const healthData = response.data; // Access data from response.data
        console.log('Health check response:', healthData);
  
        // Step 2: Fetch updated data from Supabase
        await getData(); // Wait for getData to complete
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching health data:', error);
        // Handle the error (e.g., show a toast or alert)
      } 
    };

  return (
    <div className='px-[30px] py-[50px] md:p-[50px]'>
        <Image src={logo} className='w-[200px] mx-auto mb-[50px]'/>
        <h1 className='text-center text-[20px] md:text-[30px]'> Server & Database Status </h1>
        <p className='text-center text-gray-500 text-[15px] md:text-[20px]'>Current health and performance of the server and database.</p>

        <div className='mt-[50px] max-w-[1000px]  mx-auto border border-gray-700 rounded px-[20px] py-[10px]'>
            {lastMessage && ( // Conditionally render if lastMessage exists
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-[12px] md:text-[20px]'>{lastMessage.message}</p>
                  <p className='text-[10px] md:text-[15px] text-gray-400'>Last Check: {formatTimestamp(lastMessage.created_at)[0]} | {formatTimestamp(lastMessage.created_at)[1]}</p>
                </div>
                <i class={`bi bi-speedometer text-[18px] md:text-[30px] ${speedColor}`}></i>
              </div>
            )}
        </div>

        <div className="flex overflow-x-auto mt-[50px] max-w-[1000px] mx-auto " ref={containerRef}> 
            {data.map((check) => (
                <div key={check.id}> 
                  {(() => { // Immediately Invoked Function Expression (IIFE)
                    switch (check.code) {
                      case 200:
                        return <i className="bi bi-file-check-fill text-green-500 text-[40px] md:text-[60px]"></i>;
                      case 500:
                        return <i className="bi bi-file-minus-fill text-[#ffb22b] text-[40px] md:text-[60px]"></i>;
                      case 405: 
                      return <i className="bi bi-file-excel-fill text-[#c70000] text-[40px] md:text-[60px]"></i>;
                      default:
                        return <span> ? </span>; // Default case
                    }
                   })()}
                </div>
            ))}
        </div> 

        {loading ? (
            <HeartLoader /> 
        ) : (
            <button  className='block border border-gray-700 w-[200px] h-[50px] mt-[100px] rounded-xl mx-auto' onClick={()=>checkNow()}> 
                Test Now 
            </button>
        )}
        
    </div>
  )
}

export default ServerStatus;