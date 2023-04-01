import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {useState} from 'react'

export const Navbar = () => {

     const [nav, setNav]=useState(false);

     const handleClick = ()=>setNav(!nav)



  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">EquityView</h1>

          <ul className="hidden md:flex">
            <li>Home</li>
            <li>Dashboard</li>
            <li>My Watchlist</li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">


          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Register</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>

            {!nav ?  <MenuIcon className="w-5" /> : <XIcon className="w-5"/>}
         
        </div>
      </div>


      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>Dashboard</li>
            <li className='border-b-2 border-zinc-300 w-full'>My Watchlist</li>

            <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4 border-indigo-600'>Sign In</button>
            <button className='px-8 py-3'>Register</button>
            </div>

      </ul>
    </div>
  );
};
