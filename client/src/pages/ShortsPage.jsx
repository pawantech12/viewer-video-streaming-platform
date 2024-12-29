import { useRef } from "react";
import { Link } from "react-router-dom";

const ShortsPage = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
      videoRefs.current[index].load(); // Reset to the poster
    }
  };

  return (
    <section className="px-10 py-4 my-10">
      <h4 className="text-xl font-bold text-neutral-600 border-l-8 border-primary-purple pl-2 uppercase">
        Shorts
      </h4>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((short, index) => (
          <Link key={index}>
            <div
              className="relative w-full h-96 rounded-lg group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="h-full w-full rounded-lg object-cover"
                muted
              >
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <span className="absolute top-4 right-4 ring-2 ring-white  text-white text-sm rounded-full">
                <img
                  src="./subscribed-profile.png"
                  alt="subscribed profile image"
                  className="w-8 h-8 rounded-full"
                />
              </span>
              <div className="absolute bottom-5 left-5 flex flex-col">
                <h4 className=" text-white font-medium text-lg">
                  Shorts Title
                </h4>
                <span className="text-sm text-white">20k views</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShortsPage;
