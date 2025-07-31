import React, { Suspense } from 'react'
import NavbarItems from './NavbarItems';

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <NavbarItems title='Trending' param='fetchTrending'/>
        <NavbarItems title='Top Rated' param='fetchTopRated'/>
      </Suspense>
    </div>
  )
}
