import React, { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <div>Home</div>
    </Suspense>
  );
}
