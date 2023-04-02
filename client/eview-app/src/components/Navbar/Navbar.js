import { MenuIcon, XIcon, } from "@heroicons/react/outline";
import { useState } from 'react';
import './Navbar.css'

export const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
      <div className='px-2 flex justify-between items-center w-full h-full'>

        <ul className='hidden md:flex menu-items'>
          <li className='hover:bg-transparent hover:text-zinc-700 rounded-md cursor-pointer'>Home</li>
          <li className='hover:bg-transparent hover:text-zinc-700 rounded-md cursor-pointer'>Dashboard</li>
          <li className='hover:bg-transparent hover:text-zinc-700 rounded-md cursor-pointer'>My Watchlist</li>
        </ul>

        <div className="flex items-center justify-start md:justify-start pl-2 pr-10 ">
          <button className=' bg-zinc-300 border-none pl-5 pr-5 py-3 bg-transparent text-black mr-10'>
            Sign In
          </button>
          <button className='pl-5 pr-5 py-3 mr-20 border-none'>Register</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8' }>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>Dashboard</li>
        <li className='border-b-2 border-zinc-300 w-full'>My Watchlist</li>

        <div className='flex flex-col my-4 button-items'>
          <button className='bg-transparent text-zinc-700 px-8 py-3 mb-4 border-indigo-700'>Sign In</button>
          <button className='px-8 py-3'>Register</button>
        </div>
      </ul>
    </div>
  );
};
