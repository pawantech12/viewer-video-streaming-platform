import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ShortsPage from "./pages/ShortsPage.jsx";
import Trending from "./pages/Trending.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import VideoView from "./pages/VideoView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/shorts",
    element: <App element={<ShortsPage />} />,
  },
  {
    path: "/trending",
    element: <App element={<Trending />} />,
  },
  {
    path: "/register",
    element: <App element={<Register />} />,
  },
  {
    path: "/login",
    element: <App element={<Login />} />,
  },
  {
    path: "/video/:videoId",
    element: <App element={<VideoView />} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
