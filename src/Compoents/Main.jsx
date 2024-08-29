import React from "react";
import mainvideo from "../Assets/Video/main.mp4";

function Main() {
  return (
    <section className="w-full ">
      <div className="relative w-full overflow-hidden pb-[48.25%]"> 
      <video
        src={mainvideo}
        autoPlay
        loop
        muted
        className="absolute top-0  left-0 w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
    </section>
  );
}

export default Main;
