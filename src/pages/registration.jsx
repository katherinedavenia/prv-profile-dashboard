import React, { Suspense } from 'react';
import Registration from '../components/pages/Registration';

export default function RegistrationPage() {
  return (
    <Suspense fallback="Loading...">
      <Registration />
    </Suspense>
  );
}
