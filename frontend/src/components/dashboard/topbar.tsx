import UserMenu from "@/components/dashboard/userMenu";

const Topbar = () => {
  return (
    <div className="h-16 bg-gray-800 flex items-center justify-between px-6 border-b border-gray-700">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <UserMenu />
    </div>
  );
};

export default Topbar;