// app/not-found.js
import { Suspense } from 'react';
import SearchParamsDisplay from './components/SearchParamsDisplay';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      
      {/* Wrap the search params component in Suspense */}
      <Suspense fallback={<div>Loading URL parameters...</div>}>
        <SearchParamsDisplay />
      </Suspense>
      
      {/* Rest of your 404 page content */}
      <p>The page you requested could not be found</p>
    </div>
  );
}