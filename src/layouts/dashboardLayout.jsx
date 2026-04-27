import React from 'react'
import Navbar from '../components/dashboard/navbar.jsx'
import Sidebar from '../components/dashboard/sidebar.jsx'
import { useState } from "react";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='h-screen flex flex-col'>
      {/* Navbar */}
      <Navbar toggleSidebar={() => setOpen(!open)} />
      <div className='flex flex-1'> 
        {/* Sidebar */}
        {open && <Sidebar />}
        
        {/* Main */}
        <main className="flex-1 p-6 bg-slate-900">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
