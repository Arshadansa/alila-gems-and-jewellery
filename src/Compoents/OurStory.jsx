import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurStory = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when at least 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: "-10vw" }, // Slide in from left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
        duration: 0.9,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: "10vw" }, // Slide in from right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
        duration: 0.9,
      },
    },
  };

  return (
    <section className="md:py-24 pb-6  md:p-0 overflow-hidden" ref={sectionRef}>
      <div className="text-center pb-4 bg-gradient-to-t from-[#381a4b] via-[#11021c] to-transparent">
        <motion.h2
          className="text-white  text-center text-3xl md:text-5xl"
          variants={headingVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          The Story Behind Us
        </motion.h2>
        <hr className="border mt-5 mb-3 lg:mb-0 border-red-500 w-32 mx-auto" />
      </div>
      <div className="max-w-screen-xl   mx-auto">
        <div className="md:my-20  p-3 flex gap-5 md:gap-0 md:flex-row flex-col items-center justify-center">
          <motion.div
            className="md:w-1/2"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img
              src="https://www.gzahav.com/cdn/shop/files/DSC02211_600x.jpg?v=1685808698"
              alt="Our Story"
              className="object-contain"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 h-full p-3 lg:p-0 flex lg:items-start items-center flex-col gap-3"
            variants={contentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-white  text-justify lg: md:text-lg">
              Since 1992, Alilaaa Gems and Jewellery has specialized in
              crafting, wholesaling, and retailing exquisite gems and jewelry.
              Our commitment to quality and timeless design ensures each piece
              is a blend of traditional craftsmanship and modern elegance.
            </p>
            <Link to="/about">
              <button className="border text-md w-fit py-2 px-8 rounded-sm hover:underline border-blue-600 bg-black text-white">
                Read More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
