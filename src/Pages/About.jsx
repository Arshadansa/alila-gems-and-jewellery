import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import OurStoryComponent from "../Compoents/OurStoryComponent";

function About() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px", // Consider adjusting the root margin to trigger earlier/later
      }
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

  const data = [
    {
      id: 1,
      image:
        "https://www.gzahav.com/cdn/shop/files/set_1024X1024_00abb1f2-cd8e-440b-aeb9-6059e04ff180_600x.jpg?v=1681554737",
      heading: "Our Story",
      description:
        "Since 1992, Alilaaa Gems and Jewellery has specialized in crafting, wholesaling, and retailing exquisite gems and jewelry. Our commitment to quality and timeless design ensures each piece is a blend of traditional craftsmanship and modern elegance.",
      description1:
        "At Alilaaa Gems and Jewellery, we pride ourselves on being a premier manufacturer, wholesaler, and retailer of exquisite gems and jewelry. Our commitment to quality and craftsmanship ensures that every piece we create is not just a product but a piece of art. From sourcing the finest raw materials to meticulously designing and crafting stunning jewelry, we offer a comprehensive range of options to meet every need.",
    },
    {
      id: 2,
      image:
        "https://www.gzahav.com/cdn/shop/files/birx_1024X1024_bigger_600x.jpg?v=1614291551",
      heading: "Our Craftsmanship",
      description:
        "Our skilled artisans use age-old techniques to bring out the best in every gemstone. Each piece undergoes rigorous quality checks to ensure it meets our high standards.",
      description1:
        "We believe that the essence of luxury lies in the details. Our jewelry is crafted with precision, using only the finest materials and techniques to ensure that every creation is of the highest quality. Each piece tells a story of meticulous craftsmanship and attention to detail.",
    },
    {
      id: 3,
      image:
        "https://www.gzahav.com/cdn/shop/files/0.1_diamond-1080X1080-crop2_600x.jpg?v=1614306899",
      heading: "Our Commitment",
      description:
        "We are dedicated to providing exceptional service and ensuring that every customer has a memorable experience with our brand.",
      description1:
        "Customer satisfaction is at the heart of everything we do. We are committed to providing exceptional service and creating an unforgettable experience for each of our customers. From personalized consultations to aftercare, we are here to support you every step of the way.",
    },
  ];

  return (
    <section  className="pb-16 pt-36">
      <div ref={sectionRef} className="text-center pb-4  bg-gradient-to-t from-[#381a4b] via-[#11021c] to-transparent">
        <motion.h3
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
          className="text-white leading-relaxed text-5xl"
        >
          About Us
        </motion.h3>
        <span className="text-white leading-loose mt-4 block">
          "Crafting Excellence in Gems and Jewelry for Every Occasion"
        </span>
        <hr className="border mt-5 border-red-500 w-32 mx-auto" />
      </div>
      {data.map((item) => (
        <OurStoryComponent
          order={item.id}
          key={item.id}
          img={item.image}
          h={item.heading}
          desc={item.description}
          desc1={item.description1}
        />
      ))}
    </section>
  );
}

export default About;
