import Image from 'next/image';
import logo from '../images/logo.png'

const Sidebar = () => {
  return (
    <div className=" h-[100vh] w-[250px] py-[30px] border-r border-gray-700">
      <Image src={logo} className='w-[80%] mx-auto'/>
      <p className='text-white mt-[50px] font-semibold ml-3'> Menu </p>
      <div className='mt-[20px] flex flex-col'>
        <button className='text-gray-200 text-[15px] text-left border-b border-gray-700 py-2 pl-3'> <i class="bi bi-person-bounding-box mr-3"></i> Leads </button>
        <button className='text-gray-200 text-[16px] text-left border-b border-gray-700 py-2 pl-3'> <i class="bi bi-person-lock mr-3"></i> Users </button>
      </div>
    </div>
  );
};

export default Sidebar;
