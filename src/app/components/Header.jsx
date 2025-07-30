import React from 'react'
import Link from 'next/link'
import MenuItem from './MenuItem'
import { IoHome } from 'react-icons/io5' 
import { TiInfoLarge } from "react-icons/ti";
import DarkThemeSwitch from './DarkThemeSwitch';

export default function Header() {
  return (
    <div className="flex items-center justify-between sm:mx-auto max-w-6xl mx-2 py-6">
      <div className='flex'>
              <MenuItem title='HOME' address='/' Icon={IoHome} />
              <MenuItem title='ABOUT' address='/about' Icon={TiInfoLarge} />
          </div>
          <div className='flex items-center space-x-5'>
              <DarkThemeSwitch/>
              <Link href='/'>
                  <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
              </Link>
          </div>
    </div>
  );
}
