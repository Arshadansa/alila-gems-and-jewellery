import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Silder from "./Silder";

function OurGallery() {
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

  return (
    <section ref={sectionRef} className="pb-16">
      <div className="max-w-screen-full mx-auto  ">
        <div className="text-center pb-4 bg-gradient-to-t from-[#381a4b] via-[#11021c] to-transparent">
          <motion.h3
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headingVariants}
            className="text-white leading-relaxed text-5xl"
          >
            Explore Our Gallery
          </motion.h3>
          <span className="text-white leading-loose mt-4">
            where each unique piece of jewelry at Alilaaa Gems and Jewellery is
            a true work of art.
          </span>
          <hr className="border mt-5 border-red-500 w-32 mx-auto" />
        </div>
        <div className=" max-w-screen-xl overflow-hidden mx-auto">
          <Silder />
        </div>
      </div>
    </section>
  );
}

export default OurGallery;
