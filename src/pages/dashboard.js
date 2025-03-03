import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { useAuth } from '../hooks/useAuth';
import Leads from '../components/Dashboard/Leads'; // Example Component
import Users from '../components/Dashboard/Users';


export default function Dashboard() {
  const { user } = useAuth();
  const [title, setTitle] = useState('Leads');

  if (!user) return null; // Prevent flashing unauthorized content

  return (
    <div className='bg-[#09090b] h-[100vh] grid grid-cols-[250px_auto]'>
      <Sidebar />
      <div>
        {/* Header Section */}
        <div className='w-full h-[60px] border-b border-gray-700 px-[30px] flex items-center justify-between'>
          <h1 className='text-[25px] text-white'>{title}</h1>
          <i className="bi bi-person-plus text-white text-[20px]"></i>
        </div>

        {/* Conditional Component Rendering */}
        <div className='px-[20px] pt-[10px]'>
          {title === 'Leads' ? <Leads /> : <p> loading </p>}
          {title === 'Users' ? <Users /> : <p> loading </p>}
        </div>
      </div>
    </div>
  );
}
