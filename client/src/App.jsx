import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const App = ({ element }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      toast.success("Logged in successfully");
    }
  }, [isSignedIn]);

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
