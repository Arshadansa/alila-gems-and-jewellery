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
      image: "https://www.gzahav.com/cdn/shop/files/set_1024X1024_00abb1f2-cd8e-440b-aeb9-6059e04ff180_600x.jpg?v=1681554737",
      heading: "Embracing India's Richness",
      description: "At Alila, we bring you the richness and beauty of India, especially from Rajasthan, the land of the Maharajas, known for its stunning gems and jewellery. Our collections are crafted to enhance your beauty and carry forward the traditions of grace and elegance that have been cherished for centuries.",
      additionalContent: "At Alila Gems and Jewellery, we pride ourselves on being a premier manufacturer, wholesaler, and retailer of exquisite gems and jewelry. Our commitment to quality and craftsmanship ensures that every piece we create is not just a product but a piece of art. From sourcing the finest raw materials to meticulously designing and crafting stunning jewelry, we offer a comprehensive range of options to meet every need.",
    },
    {
      id: 2,
      image: "https://www.gzahav.com/cdn/shop/files/birx_1024X1024_bigger_600x.jpg?v=1614291551",
      heading: "Our Commitment to Heritage",
      description: "Under the leadership of Ms. Alvira Ali, along with her family, Alila has been dedicated to preserving and revitalizing India's rich jewellery heritage. With years of expertise, Ms. Alvira and her team of skilled artisans are committed to showcasing the forgotten beauty of ancient India through their exquisite craftsmanship.",
      additionalContent: "Over the years, we have successfully developed a trusted brand name and diverse customer base. We cater to the needs of not only the big brands in this industry but also budding individuals with the same dedication. As a result, we have maintained a strong trading relationship with gemstone buyers from the USA, UK, Australia, Japan, China, Thailand, and many other countries.",
    },
    {
      id: 3,
      image: "https://www.gzahav.com/cdn/shop/files/0.1_diamond-1080X1080-crop2_600x.jpg?v=1614306899",
      heading: "Trusted Brand with Global Reach",
      description: "Over the years, we have successfully developed a trusted brand name and diverse customer base. We cater to the needs of not only the big brands in this industry but also budding individuals with the same dedication. As a result, we have maintained a strong trading relationship with gemstone buyers from the USA, UK, Australia, Japan, China, Thailand, and many other countries.",
      additionalContent: "Customer satisfaction is at the heart of everything we do. We are committed to providing exceptional service and creating an unforgettable experience for each of our customers. From personalized consultations to aftercare, we are here to support you every step of the way.",
    },
    {
      id: 4,
      image: "https://www.gzahav.com/cdn/shop/files/0.1_diamond-1080X1080-crop2_600x.jpg?v=1614306899",
      heading: "A Diverse Selection for Every Taste",
      description: "We offer a diverse selection to cater to varied tastes because we believe that no two people think alike. Our vast range includes gold ornaments, rough stones, vintage silver pieces, precious and semi-precious stones, diamonds, and much more. There's something for everyone to admire and cherish.",
      additionalContent: "Explore our unique offerings, from intricately designed gold jewelry to ethically sourced gemstones. Each piece is crafted with passion, reflecting the rich heritage and artistry of India, ensuring that every customer finds something special to cherish.",
    },
  ];
  

  return (
    <section className="">
      <div
        ref={sectionRef}
        className="text-center pb-4  bg-gradient-to-t from-[#381a4b] via-[#11021c] to-transparent"
      >
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
        />
      ))}
    </section>
  );
}

export default About;
