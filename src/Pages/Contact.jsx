import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <section className="lg:pt-24 pt-12 md:pt-16 max-w-screen-xl mx-auto bg-black text-white flex flex-col">
      <div className="flex p-3 flex-col md:flex-row gap-6 justify-between w-full">
        <div className="mt-3 md:w-1/2 pl-2">
          <h2 className="text-2xl md:text-4xl font-bold">
            We’re excited to connect with you!
          </h2>
          <p className="mt-4 md:text-lg">
            Reach out with any questions, ideas, or feedback—your thoughts are
            important to us.
          </p>
          <p className="mt-2 md:text-lg">
            Not seeing exactly what you need?
            <br /> We offer custom solutions. Share your vision with us, and
            let's make it a reality.
          </p>

          <div className="flex mt-4">
            <div className="flex gap-1 items-center">
              <div>
                <MdOutlineMailOutline
                  size={24}
                  className="text-white hover:text-primary hover:cursor-pointer"
                />
              </div>
              <div>
                <GrFacebookOption
                  size={24}
                  className="text-white hover:text-primary hover:cursor-pointer"
                />
              </div>
              <div>
                <IoLogoInstagram
                  size={24}
                  className="text-white hover:text-primary hover:cursor-pointer"
                />
              </div>
              <div>
                <FaWhatsapp
                  size={24}
                  className="text-white hover:text-primary hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col">
          <form className="lg:p-7 p-3 rounded-lg shadow-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded border-buttonborder bg-black placeholder-gray-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded border-buttonborder bg-black placeholder-gray-400"
              />
            </div>
            <div className="mb-4">
              <select className="w-full p-3 rounded border-buttonborder bg-black text-gray-400">
                <option>Choose a topic</option>
                <option>General Inquiry</option>
                <option>Custom Orders</option>
                <option>Feedback</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full p-3 h-32 rounded border-buttonborder bg-black placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-40 p-3 border-buttonborder border hover:underline bg-black rounded transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 p-3 flex flex-col md:flex-row w-full justify-between">
        <div className="md:w-1/2 pt-10">
          <h3 className="md:text-4xl text-3xl font-semibold">Our Location</h3>
          <p className="mt-5 md:text-lg">
            14 Dudu Bagh Sansar Chandra Road Near Sindhi Camp Bus Stand Opp.
            <br />
            City Center Complex Jaipur-302001 (Raj.) Ind.
          </p>
          <p className="mt-5 md:text-lg">
            To book an appointment, feel free to contact us via:
            <br /> Tel / WhatsApp: +91-9667949211
          </p>
        </div>

        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.241669228!2d34.8011978!3d32.0852991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b776b9c7a73%3A0x7d1e0f7e4ae129a!2sHaRakon%20St%2015%2C%20Ramat%20Gan!5e0!3m2!1sen!2sil!4v1633456391986!5m2!1sen!2sil"
            width="100%"
            height="400"
            className="mt-4 rounded"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
