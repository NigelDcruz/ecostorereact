import React from "react";
import { Link, Outlet} from "react-router-dom";


const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 h-[calc(100vh-72px)]">
        <aside className="col-span-2 border-e">
          <nav>
            <ul className="">
              <li><Link className="block border-b font-medium text-md py-3 px-3 cursor-pointer hover:bg-slate-100 " to='/dashboard/orders'>All Orders</Link></li>
              <li><Link className="block border-b font-medium text-md py-3 px-3 cursor-pointer hover:bg-slate-100" to='/dashboard/profile-settings'>Profile Settings</Link></li>
              {/* <li><Link className="block border-b font-medium text-md py-3 px-3 cursor-pointer hover:bg-slate-100" to='/dashboard/notifications'>Notifications</Link></li> */}
            </ul>
          </nav>
        </aside>
        <main className="col-span-10">
          {<Outlet />}
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
