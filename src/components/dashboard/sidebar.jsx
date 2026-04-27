// components/Sidebar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiPieChart, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition ${
      isActive
        ? "bg-green-500/10 text-green-400 border border-green-500/20"
        : "text-gray-400 hover:bg-slate-800  hover:text-white"
    }`;

  return (
    <aside className={`h-full bg-slate-950 border-r border-white/5 flex flex-col justify-between p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>

      {/* Logo */}
      <div>
        {/* Botón hamburguesa */}
        <button
            onClick={toggleSidebar}
            className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition mb-4"
        >
            {isOpen ? <FiX className="text-gray-300 text-lg" /> : <FiMenu className="text-gray-300 text-lg" />}
        </button>

        {/* Links */}
        <nav className="space-y-3">

            <NavLink to="/dashboard" end className={linkClass}>
              <FiHome className="flex-shrink-0 text-xl"  /> 
              {isOpen && <span className="">Dashboard</span>}
            </NavLink>

            <NavLink to="accounting" className={linkClass}>
              <FiPieChart className="flex-shrink-0 text-xl" /> 
              {isOpen && <span>Contabilidad</span>}
            </NavLink>

            <NavLink to="settings" className={linkClass}>
              <FiSettings className="flex-shrink-0 text-xl" /> 
              {isOpen && <span>Ajustes</span>}
            </NavLink>

            <button className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-red-400 transition rounded-lg ${!isOpen && 'justify-start'}`}>
                <FiLogOut className="flex-shrink-0 text-xl" /> 
                {isOpen && <span>Cerrar</span>}
            </button>
        </nav>
      </div>

      {/* User / Logout */}
      <div className="space-y-3">
        <div className={`bg-slate-900 p-1 pt-3 pb-3 rounded-xl flex items-center ${isOpen ? 'gap-3' : 'justify-start'}`}>
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold flex-shrink-0">
            AV
          </div>
          {isOpen && (
            <div>
              <p className="text-sm text-white">Andrés Vargas</p>
              <p className="text-xs text-gray-400">admin@xpenses.com</p>
            </div>
          )}
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
