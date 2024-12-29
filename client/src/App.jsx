import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = ({ element }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className="">
        <div>{element}</div>
      </main>
    </>
  );
};

export default App;
