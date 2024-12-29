import { FiHome } from "react-icons/fi";
import {
  MdAccessTime,
  MdOutlineAppShortcut,
  MdOutlineVideoSettings,
} from "react-icons/md";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { RiHeartAdd2Line } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <aside
      className={` h-screen w-56  transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out border-r border-x-zinc-200 z-50 absolute left-0 bg-white`}
    >
      <div>
        <ul className="flex flex-col px-3 py-2">
          <li
            className={`hover:bg-zinc-100 rounded-md ${
              isActive("/") ? "bg-zinc-100" : ""
            }`}
          >
            <Link
              className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
              to={"/"}
            >
              <FiHome className="w-6 h-6 " />
              <span className="font-medium ">Home</span>
            </Link>
          </li>
          <li
            className={`hover:bg-zinc-100 rounded-md ${
              isActive("/shorts") ? "bg-zinc-100" : ""
            }`}
          >
            <Link
              className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
              to={"/shorts"}
            >
              <MdOutlineAppShortcut className="w-6 h-6 " />
              <span className="font-medium ">Shorts</span>
            </Link>
          </li>
          <li
            className={`hover:bg-zinc-100 rounded-md ${
              isActive("/trending") ? "bg-zinc-100" : ""
            }`}
          >
            <Link
              className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
              to={"/trending"}
            >
              <HiOutlineTrendingUp className="w-6 h-6 " />
              <span className="font-medium ">Trending</span>
            </Link>
          </li>
        </ul>
        <div className="mt-4">
          <h4 className="text-zinc-500 uppercase px-4 text-sm font-medium">
            library
          </h4>
          <ul className="flex flex-col px-3 py-2">
            <li
              className={`hover:bg-zinc-100 rounded-md ${
                isActive("/recent") ? "bg-zinc-100" : ""
              }`}
            >
              <Link
                className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
                to={"/recent"}
              >
                <MdAccessTime className="w-6 h-6 " />
                <span className="font-medium ">Recent</span>
              </Link>
            </li>
            <li
              className={`hover:bg-zinc-100 rounded-md ${
                isActive("/favourite") ? "bg-zinc-100" : ""
              }`}
            >
              <Link
                className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
                to={"/favourite"}
              >
                <RiHeartAdd2Line className="w-6 h-6 " />
                <span className="font-medium ">Favourite</span>
              </Link>
            </li>
            <li
              className={`hover:bg-zinc-100 rounded-md ${
                isActive("/saved") ? "bg-zinc-100" : ""
              }`}
            >
              <Link
                className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
                to={"/saved"}
              >
                <MdOutlineVideoSettings className="w-6 h-6 " />
                <span className="font-medium ">Saved</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-zinc-500 uppercase px-4 text-sm font-medium">
            Subscribed
          </h4>
          <ul className="flex flex-col px-3 py-2">
            <li
              className={`hover:bg-zinc-100 rounded-md ${
                isActive("/subscribed/profile") ? "bg-zinc-100" : ""
              }`}
            >
              <Link
                className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
                to={"/subscribed/profile"}
              >
                <img src="./subscribed-profile.png" alt="subscribed profile" />
                <h4 className="font-medium ">Eleanor Pena</h4>
              </Link>
            </li>
            <li
              className={`hover:bg-zinc-100 rounded-md ${
                isActive("/subscribed/profile") ? "bg-zinc-100" : ""
              }`}
            >
              <Link
                className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
                to={"/subscribed/profile"}
              >
                <img src="./subscribed-profile.png" alt="subscribed profile" />
                <h4 className="font-medium ">Eleanor Pena</h4>
              </Link>
            </li>
            <li
              className={`hover:bg-zinc-100 rounded-md ${
                isActive("/subscribed/profile") ? "bg-zinc-100" : ""
              }`}
            >
              <Link
                className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
                to={"/subscribed/profile"}
              >
                <img src="./subscribed-profile.png" alt="subscribed profile" />
                <h4 className="font-medium ">Eleanor Pena</h4>
              </Link>
            </li>
            <li
              className={`hover:bg-zinc-100 rounded-md ${
                isActive("/subscribed/profile") ? "bg-zinc-100" : ""
              }`}
            >
              <Link
                className="flex items-center gap-4 px-4 py-3 w-full text-zinc-700"
                to={"/subscribed/profile"}
              >
                <img src="./subscribed-profile.png" alt="subscribed profile" />
                <h4 className="font-medium ">Eleanor Pena</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
