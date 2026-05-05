import React, { useState } from 'react'
import Navbar from '../components/dashboard/navbar.jsx'
import Sidebar from '../components/dashboard/sidebar.jsx'
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen bg-slate-900">
      
      {/* Navbar fijo */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar toggleSidebar={() => setOpen(!open)} />
      </div>

      <div className="flex">
        
        {/* Sidebar fijo */}
        {open && (
          <div className="fixed top-16 left-0 h-[calc(100vh-64px)] w-64 z-40">
            <Sidebar />
          </div>
        )}

        {/* Contenido */}
        <main
          className={` 
            flex-1
            mt-16
            p-6
            overflow-y-auto
            h-[calc(100vh-64px)]
            transition-all duration-300
            ${open ? 'ml-20' : 'ml-0'}
          `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
