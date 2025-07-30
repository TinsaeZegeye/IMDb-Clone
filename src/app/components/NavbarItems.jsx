'use client';
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function NavbarItems({ title, param }) {
    const searchParam = useSearchParams();
    const genre = searchParam.get('genre');
  return (
    <div>
          <Link href={`/?genre=${param}`}
              className={`m-4 hover:text-amber-600 font-semibold 
                ${genre && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'}`}
          >
            {title}
          </Link>
    </div>
  )
}
