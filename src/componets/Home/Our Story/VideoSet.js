import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const VideoSet = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [VideoPost, setVideoPost] = useState([]);
  useEffect(() => {
    fetch("Home/videosection.json")
      .then((res) => res.json())
      .then((data) => setVideoPost(data));
  }, []);

  const handleClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <div>
      {VideoPost?.map((video) => (
        <div key={video._id}>
          <div className="">
            <>
              <label htmlFor="videoModal" className=" ">
                <img
                  className=" w-full 2xl:h-[580px] xl:h-[600px] lg:h-[700px] md:h-[350px] h-[250px] ease-in-out duration-500 transform hover:scale-95"
                  src={video?.videoImg}
                  onClick={handleClick}
                />
              </label>
            </>

            <input type="checkbox" id="videoModal" className="modal-toggle" />
            <div className="modal ">
              <div className="modal-box w-10/12 mx-auto  sm:h-full h-[300px] max-w-5xl bg-transparent p-0 relative ">
                <div className="modal-action">
                  <label htmlFor="videoModal" className=" text-white">
                    <RxCross2 className="text-2xl" />
                  </label>
                </div>
                {isVideoOpen && (
                  <iframe
                    width="100%"
                    height="90%"
                    src={video?.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSet;
