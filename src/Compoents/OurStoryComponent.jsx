import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function OurStoryComponent({ h, desc, order, img }) {
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

  const isOrderEven = order % 2 === 0;
console.log(isOrderEven);

  return (
    <section>
      <div
        ref={sectionRef}
        className={`my-10 p-3 lg:p-0 flex flex-col md:flex-row  max-w-screen-xl mx-auto items-center ${
          isOrderEven ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <motion.div
          className="md:w-1/2"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <img src={img} alt="Our Story" />
        </motion.div>
        <motion.div
          className="md:w-1/2 h-full flex items-center md:items-start flex-col gap-3"
          variants={contentVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-white text-center md:text-left text-3xl md:text-5xl">
            {h}
          </h2>
          <p className="text-white text-justify md:text-left md:text-lg">
            {desc}
          </p>

          <Link to="/" aria-label="View our designs">
            <button className="border-2 mt-2  text-md w-fit py-2 px-8 rounded-sm hover:underline border-buttonborder  bg-black text-white">
              View Our Desgin
            </button>
          </Link>
        </motion.div>
      </div>
      <hr className="border mt-5 border-red-500 w-32 mx-auto" />
    </section>
  );
}

export default OurStoryComponent;
