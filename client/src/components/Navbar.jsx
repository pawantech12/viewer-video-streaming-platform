import { IoClose, IoMenu } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { LuCircleUser, LuSearch } from "react-icons/lu";
import { HiMiniMicrophone } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <header className="p-5 flex items-center justify-between border-b border-zinc-200 gap-5">
      <div className="flex items-center gap-8">
        <button onClick={toggleSidebar} className="">
          {isOpen ? (
            <IoClose className="w-7 h-7 text-zinc-700 " />
          ) : (
            <IoMenu className="w-7 h-7 text-zinc-700" />
          )}
        </button>
        <div className="flex items-center gap-2 text-primary-purple">
          <FaPlay className="w-6 h-6" />
          <span className="font-medium text-xl">Viewer</span>
        </div>
      </div>
      <div className="w-1/2 flex items-center gap-2">
        <form
          action=""
          className="flex items-center gap-2 border border-zinc-200 px-4 py-3 rounded-lg w-full"
        >
          <LuSearch className="w-5 h-5 text-zinc-600" />
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none border-none text-base font-medium w-full"
          />
        </form>
        <button className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-100 w-fit">
          <HiMiniMicrophone className="w-5 h-5" />
        </button>
      </div>
      <div className="w-fit">
        <button className="border border-zinc-200 px-4 py-3 rounded-lg text-zinc-700 hover:text-white hover:bg-primary-purple transition-colors ease-in-out duration-200">
          <Link className="flex items-center gap-2 text-lg font-medium">
            <LuCircleUser className="w-5 h-5" />
            Login
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
