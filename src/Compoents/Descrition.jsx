import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import ProductSilder from "./ProductSilder";

function Descrition() {
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
    <section ref={sectionRef} className="w-full mt-24 lg:pt-16">
        <div className="text-center pb-4 bg-gradient-to-t from-[#381a4b] via-[#11021c] to-transparent">
          <motion.h3
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headingVariants}
            className="text-white leading-relaxed text-3xl lg:text-5xl"
          >
            Monthly Design Highlight
          </motion.h3>
          <hr className="border mt-5 border-red-500 w-32 mx-auto" />
        </div>
      <div className=" pt-4   ">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
          className=" grid md:grid-cols-2  gap-4 max-w-screen-xl overflow-hidden mx-auto"
        >
          <div className="p-3">
            <ProductSilder />
          </div>
          <div className="text-white md:text-lg p-3 lg:p-0 flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="text-2xl">
                'Lotus' Blue Topaz and Diamond Pendant{" "}
              </span>
              <span className="text-2xl">£1,725.55</span>
            </div>
            <div>
              <span>
                Handmade Lotus made from 24K gold - Blue topaz pedals and a
                Diamond center
              </span>
            </div>
            <div className="flex flex-col ">
              <span>
                Measurements: <br />
                Full size: 18X16mm / 0.71X0.63 in{" "}
              </span>
              <span>
                Blue-topaz: 10X6.5mm / 0.4X0.26 in 7X5mm / 0.28X0.2 in
              </span>
              <span> Diamond: 2.5mm / 0.1 in</span>
            </div>
            <div>
              <button className="border px-20 py-2 bg-black text-white hover:underline">
                Add to cart
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <FaCheck className=" text-green-600 text-sm " />
                <span>
                  Pickup available at <strong>15 HaRakon St</strong>
                </span>
              </div>

              <span>Usually ready in 24 hours</span>
              <span className="mt-2 underline hover:cursor-pointer">
                View store information
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Descrition;
