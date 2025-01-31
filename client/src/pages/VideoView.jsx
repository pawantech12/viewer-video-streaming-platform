import { useUser } from "@clerk/clerk-react";
import { useRef, useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaShare, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const VideoView = () => {
  const videoRefs = useRef([]); // Array of video references
  const [durations, setDurations] = useState({}); // Store durations for each video
  const [remainingTimes, setRemainingTimes] = useState({});
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false); // State for description expansion

  const { isSignedIn } = useUser();

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleAction = (action) => {
    if (!isSignedIn) {
      toast.warn("Please sign in to perform this action.");
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0; // Reset to the start
      videoRefs.current[index].load(); // Reload to reapply the poster
      setRemainingTimes((prev) => ({
        ...prev,
        [index]: durations[index] || "0:00", // Reset to duration on mouse leave
      }));
    }
  };

  const handleLoadedMetadata = (index) => {
    if (videoRefs.current[index]) {
      const seconds = Math.floor(videoRefs.current[index].duration);
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      setDurations((prev) => ({
        ...prev,
        [index]: `${minutes}:${
          remainingSeconds < 10 ? "0" : ""
        }${remainingSeconds}`,
      }));
    }
  };

  const handleTimeUpdate = (index) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index];
      if (video.duration && !isNaN(video.duration)) {
        const remainingSeconds = Math.max(
          0,
          Math.floor(video.duration - video.currentTime)
        );
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;

        setRemainingTimes((prev) => ({
          ...prev,
          [index]: `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`,
        }));
      }
    }
  };
  const toggleDescription = () => {
    setIsDescriptionExpanded((prev) => !prev);
  };
  return (
    <section className="bg-gray-50 min-h-screen p-4 flex flex-col">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg">
              <video
                className="w-full aspect-video"
                src={"https://docs.material-tailwind.com/demo.mp4"} // Replace with your dynamically fetched video URL
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Video Title Goes Here
              </h1>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">1,234,567 views • Jan 1, 2024</p>
                <div className="flex items-center gap-4 text-gray-700">
                  <button
                    className="flex items-center gap-2 hover:text-blue-600"
                    onClick={() => handleAction("like")}
                  >
                    <FaThumbsUp /> 12K
                  </button>
                  <button
                    className="flex items-center gap-2 hover:text-red-600"
                    onClick={() => handleAction("dislike")}
                  >
                    <FaThumbsDown /> 234
                  </button>
                  <button className="flex items-center gap-2 hover:text-green-600">
                    <FaShare /> Share
                  </button>
                  <button
                    className="flex items-center gap-2 hover:text-yellow-600"
                    onClick={() => handleAction("save")}
                  >
                    <FaBookmark /> Save
                  </button>
                </div>
              </div>
              {/* Description Section */}
              <div className="mt-4">
                <div
                  className={`text-gray-800 overflow-hidden transition-all ease-in-out duration-500`}
                  style={{
                    maxHeight: isDescriptionExpanded ? "1000px" : "48px", // Adjust based on expected height
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                  venenatis euismod malesuada. Curabitur at eros sed turpis
                  auctor blandit. Proin vel ligula id justo condimentum euismod.
                  Nulla facilisi. Ut ac risus vitae elit dictum sodales. Mauris
                  vehicula lectus in ipsum viverra consequat.
                </div>
                <button
                  className="text-zinc-600 text-sm hover:underline mt-2"
                  onClick={toggleDescription}
                >
                  {isDescriptionExpanded ? "Show Less" : "Show More"}
                </button>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/subscribed-profile.png"
                  alt="Author Avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Channel Name
                  </p>
                  <p className="text-sm text-gray-600">1.2M subscribers</p>
                </div>
                <button
                  className="ml-auto bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition-colors ease-in-out duration-300"
                  onClick={() => handleAction("subscribe")}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Comment Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Comments
              </h2>
              {isSignedIn ? (
                <div className="mb-4">
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-4 h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Add a public comment..."
                  ></textarea>
                  <div className="mt-2 flex justify-end gap-4">
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors ease-in-out duration-300">
                      Cancel
                    </button>
                    <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-primary-purple transition-colors ease-in-out duration-300">
                      Comment
                    </button>
                  </div>
                </div>
              ) : (
                <p className="mb-8 text-center text-zinc-500">
                  Please sign in to leave a comment.
                </p>
              )}
              <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="flex gap-4">
                    <img
                      src="/subscribed-profile.png"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        User {idx + 1}
                      </p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                      <p className="mt-1 text-gray-700">
                        This is a sample comment for the video. Really enjoyed
                        it!
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Up Next
            </h2>
            <div className="flex flex-col gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <Link key={index} to={`/video/${index}`}>
                  <div className="flex gap-4 items-start">
                    <div
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="h-28 w-48 rounded-xl object-cover"
                        onLoadedMetadata={() => handleLoadedMetadata(index)}
                        onTimeUpdate={() => handleTimeUpdate(index)}
                        muted
                        poster="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
                      >
                        <source
                          src="https://docs.material-tailwind.com/demo.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <span className="absolute bottom-2 right-2 bg-[#110F15] text-white text-sm px-2 py-1 rounded">
                        {remainingTimes[index] || durations[index] || "0:00"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-bold text-gray-800 line-clamp-2">
                        Suggested Video Title #{index + 1}
                      </h3>

                      <p className="text-xs text-gray-600">
                        123K views • 2 days ago
                      </p>
                      <div className="flex items-center gap-2">
                        <figure>
                          <img
                            src="/subscribed-profile.png"
                            alt="channel profile image"
                            className="w-7 h-7 rounded-full"
                          />
                        </figure>
                        <h4 className="text-xs">Channel Name</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoView;
