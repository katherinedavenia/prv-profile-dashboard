import React, { Suspense } from 'react';
import Login from '../components/pages/Login';

export default function LoginPage() {
  return (
    <Suspense fallback="Loading...">
      <Login />
    </Suspense>
  );
}
