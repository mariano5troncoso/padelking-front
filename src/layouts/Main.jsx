import React from "react";
import { Outlet } from "react-router-dom";


export default function Main() {
  return (
    <div className="h-screen w-screen bg-black p-0 overflow-x-hidden">
      <Outlet />
      
    </div>
  );
}
