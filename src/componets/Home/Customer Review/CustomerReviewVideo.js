import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const CustomerReviewVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [VideoPost, setVideoPost] = useState([]);
  useEffect(() => {
    fetch("Home/CustomerReviewVideo.json")
      .then((res) => res.json())
      .then((data) => setVideoPost(data));
  }, []);

  const handleClick = () => {
    setIsVideoOpen(true);
  };
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {VideoPost?.map((video) => (
        <div key={video._id}>
          <div className="">
            <>
              <label htmlFor="videoModal" className=" ">
                <img
                  className=" w-full h-full ease-in-out duration-500 transform hover:scale-95"
                  src={video?.videoImg}
                  onClick={handleClick}
                />
              </label>
            </>

            <input type="checkbox" id="videoModal" className="modal-toggle" />
            <div className="modal ">
              <div className="modal-box md:w-full w-10/12 mx-auto  max-w-5xl bg-transparent p-0 relative ">
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

export default CustomerReviewVideo;
