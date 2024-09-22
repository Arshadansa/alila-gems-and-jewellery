import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function Category() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Stagger the animation by 0.3s for each item
        duration: 0.5,
      },
    }),
  };
  return (
    <section ref={sectionRef} className="  overflow-hidden">
        <div className="text-center py-8 bg-gradient-to-t from-[#381a4b] via-[#11021c] to-transparent">
          <motion.h1
            className="lg:text-5xl text-3xl  text-white text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headingVariants}
          >
            Explore Categories
          </motion.h1>
          <hr className="border mt-5 border-red-500 w-32 mx-auto" />
        </div>
      <div className="max-w-screen-xl mx-auto py-12 h-full">
        <div className="text-white gap-2 p-3 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-fit">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="border h-72"
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <img src="" className="h-[78%]" alt="" />
              <div className="flex flex-col gap-3 border w-full items-center justify-center">
                <span>Product/Stone Name</span>
                <button>View Design</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
