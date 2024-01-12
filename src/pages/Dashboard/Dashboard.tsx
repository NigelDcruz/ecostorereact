import React from "react";
import { Route, Routes } from "react-router-dom";
import Orders from "./Orders";

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-72px)]">
        <aside className="col-span-2 border-e">
          <nav>
            <ul>
              <li>You Orders</li>
              <li>Sell On EcoStore</li>
            </ul>
          </nav>
        </aside>
        <main className="col-span-10">
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="dashboard/test" element={<h1>Dashbtestoard</h1>} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
