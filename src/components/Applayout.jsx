import React from "react";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <main className="sm:pt-22 lg:pt-22">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
