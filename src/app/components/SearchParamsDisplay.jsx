// components/SearchParamsDisplay.js
'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchParamsDisplay() {
  const searchParams = useSearchParams();
  
  // Your existing logic using searchParams
  const error = searchParams.get('error');
  const id = searchParams.get('id');
  
  return (
    <div>
      {error && <p>Error: {error}</p>}
      {id && <p>ID: {id}</p>}
      {/* Your existing UI code that uses search params */}
    </div>
  );
}