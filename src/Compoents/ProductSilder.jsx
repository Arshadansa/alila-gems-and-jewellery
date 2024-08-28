import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProductSilder() {
  return (
    <Carousel
      autoPlay={true}
      centerMode={true}
      stopOnHover={true}
      showStatus={false}
      infiniteLoop={true}
      swipeable={true}
      showArrows={false}
      showIndicators={false} 
      className="hover:cursor-pointer"
    >
      <div className=" ">
        <img
          src="https://www.gzahav.com/cdn/shop/products/22K-flower-diamonds-ring-1024X1024-70P-darker-v2_600x.jpg?v=1607620246"
          className=" hover:cursor-pointer"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://www.gzahav.com/cdn/shop/files/Tanzanite-center-24K-gold-necklace-600X600-80P-1_400x.jpg?v=1614303115" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://www.gzahav.com/cdn/shop/files/600X600_d2e6c3c7-9d2a-4a12-a540-be9675050334_400x.jpg?v=1614287897" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default ProductSilder;
