import { NavLink } from "react-router";
import { Briefcase, Clock, CheckCircle, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { label: "Applications", path: "/dashboard/applications", icon: <Briefcase className="h-5 w-5" /> },
    { label: "Interviews", path: "/dashboard/interviews", icon: <Clock className="h-5 w-5" /> },
    { label: "Offers", path: "/dashboard/offers", icon: <CheckCircle className="h-5 w-5" /> },
  ];

  return (
    <div className="w-64 bg-gray-900 text-gray-300 h-screen p-6 space-y-6">
      <h2 className="text-xl font-bold text-white">Job Tracker</h2>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.label}
            end={item.path === "/dashboard"} // ✅ only for the Dashboard root link
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
