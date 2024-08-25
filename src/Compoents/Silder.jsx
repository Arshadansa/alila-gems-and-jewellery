import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Silder() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
      partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className=" overflow-hidden">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={true}
        dotListClass="custom-dot-list-style"
      >
        
        <div className="text-white">Item 1</div>
        <div className="text-white">Item 2</div>
        <div className="text-white">Item 3</div>
        <div className="text-white">Item 4</div>
      </Carousel>
    </div>
  );
}

export default Silder;
