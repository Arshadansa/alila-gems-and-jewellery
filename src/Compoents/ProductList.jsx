import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Descrition from "./Descrition";

function Silder() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
      partialVisibilityGutter: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="overflow-hidden max-w-screen-xl pb-12 mx-auto">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={true}
        showDots={false}
        arrows={false}
        dotListClass="custom-dot-list-style"
        className="hover:cursor-pointer"
      >
        <div className="relative group">
          <img
            className="object-cover w-full h-48"
            src="https://www.gzahav.com/cdn/shop/products/22K-flower-diamonds-ring-1024X1024-70P-darker-v2_600x.jpg?v=1607620246"
            alt="Ring"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl">£1,265.96</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="object-cover w-full h-48"
            src="https://www.gzahav.com/cdn/shop/products/22K-flower-diamonds-ring-1024X1024-70P-darker-v2_600x.jpg?v=1607620246"
            alt="Ring"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl">£1,265.96</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="object-cover w-full h-48"
            src="https://www.gzahav.com/cdn/shop/products/22K-flower-diamonds-ring-1024X1024-70P-darker-v2_600x.jpg?v=1607620246"
            alt="Ring"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl">£1,265.96</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="object-cover w-full h-48"
            src="https://www.gzahav.com/cdn/shop/products/22K-flower-diamonds-ring-1024X1024-70P-darker-v2_600x.jpg?v=1607620246"
            alt="Ring"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl">£1,265.96</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="object-cover w-full h-48"
            src="https://www.gzahav.com/cdn/shop/products/22K-flower-diamonds-ring-1024X1024-70P-darker-v2_600x.jpg?v=1607620246"
            alt="Ring"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl">£1,265.96</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Silder;
