import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ShortsPage from "./pages/ShortsPage.jsx";
import Trending from "./pages/Trending.jsx";

import VideoView from "./pages/VideoView.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast

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
    path: "/video/:videoId",
    element: <App element={<VideoView />} />,
  },
]);
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right" // Set position to bottom-right
        autoClose={3000} // Automatically close after 3 seconds
        limit={1}
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Display newest on top
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ClerkProvider>
  </StrictMode>
);
