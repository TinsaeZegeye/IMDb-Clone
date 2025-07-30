'use client';
import React, { useDeferredValue } from 'react';
import { useEffect } from 'react';

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error)
    }, [error]);
    
  return (
      <div className='text-center mt-50'>
          <h2>Something Went Wrong!</h2>
          <button className='hover:text-amber-600' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
