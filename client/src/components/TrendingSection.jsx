import { useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
const TrendingSection = () => {
  const videoRefs = useRef([]); // Array of video references
  const [durations, setDurations] = useState({}); // Store durations for each video
  const [remainingTimes, setRemainingTimes] = useState({});

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
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
  return (
    <section className="px-10 py-4 my-5">
      <h4 className="text-xl font-bold text-neutral-600 border-l-8 border-primary-purple pl-2 uppercase">
        trending
      </h4>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {[1, 2, 3, 4].map((video, index) => (
          <Link key={index} to={`/video/${index}`}>
            <div className="rounded-xl space-y-2">
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="h-44 w-full rounded-xl object-cover"
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
              <h4 className="text-lg leading-[1.5rem]">
                Learn Adobe Illustrator | Free Course
              </h4>
              <div className="flex items-center gap-1 text-sm text-[#88878A]">
                <span>20k views</span>
                <GoDotFill className="w-2 h-2" />
                <span>3 days ago</span>
              </div>
              <div className="flex items-center gap-2">
                <figure>
                  <img
                    src="./subscribed-profile.png"
                    alt={` profile`}
                    className="w-6 h-6 rounded-full"
                  />
                </figure>
                <h4 className="text-sm text-neutral-600 font-semibold">
                  David White
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
