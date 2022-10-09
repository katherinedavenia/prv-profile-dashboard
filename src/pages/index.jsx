import React, { Suspense } from 'react';
import Dashboard from '../components/pages/Dashboard';

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <Dashboard />
    </Suspense>
  );
}
