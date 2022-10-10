import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../components/pages/Dashboard';

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <Dashboard />
      <ToastContainer />
    </Suspense>
  );
}
