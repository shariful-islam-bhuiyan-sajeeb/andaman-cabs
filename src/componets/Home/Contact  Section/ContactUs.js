import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import "./contactUs.css";
import {
  HiDevicePhoneMobile,
  HiOutlineEnvelopeOpen,
  HiOutlineMapPin,
} from "react-icons/hi2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5w4jjrn",
        "template_v36rkio",
        form.current,
        "GU_biZQ10b2xXV_Da"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative max-w-[1900px] w-full ">
      <div>
        <div className="">
          <img
            className="w-full "
            src="https://www.andamancab.in/assets/img/bgs/bg-contact.jpg"
            alt=""
          />
        </div>
        <div className=" ">
          <img
            className=" absolute  2xl:bottom-10 xl:-bottom-[380px] lg:-bottom-[400px] top-10  border-2 "
            src="https://www.andamancab.in/assets/img/bottom-svg.svg"
            alt=""
          />
        </div>
        <div className="   w-full h-full ">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-6 gap-x-0 lg:gap-0 gap-6 px-4  bg-white w-full">
            <div className=" flex justify-center shadow xl:w-[500px] lg:w-[400px] md:w-[420px] sm:w-[413px] w-[280px] xl:h-[400px] lg:h-[380px] md:h-[300px] sm:h-[200px] h-[300px] border-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6562042661503!2d92.74106187581444!3d11.647829142515018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x308895d2f7728785%3A0x8b23583c219934d0!2sAndaman%20Cabs!5e0!3m2!1sen!2sbd!4v1684121874323!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="border shadow-md ">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="lg:py-4 py-2 lg:px-4 px-2  lg:space-y-3 sm:space-y-2 space-y-1   mx-auto"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className=" py-2 lg:px-4 px-2 w-full border text-black required"
                />
                <div className="flex items-center lg:gap-x-4 gap-x-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className=" text-sm py-2 lg:px-4 px-2 w-full border text-black required"
                  />
                  <input
                    type="number"
                    name="mobile"
                    placeholder="Mobile"
                    className=" py-2 lg:px-4 px-2 w-full border text-black required"
                  />
                </div>
                <div className="flex items-center lg:gap-x-4 gap-x-2">
                  <input
                    type="number"
                    name="mobile_number"
                    placeholder="Total Adults"
                    className=" py-2 lg:px-4 px-2 w-full border text-black required"
                  />
                  <input
                    type="number"
                    name="total_adults"
                    placeholder="Total Kinds"
                    className=" py-2 lg:px-4 px-2 w-full border text-black required"
                  />
                </div>
                <input
                  type="text"
                  name="message"
                  placeholder="Write Message"
                  className="lg:py-10 md:py-6 py-4 lg:px-4 px-2 text-justify w-full border text-black required"
                />
                {/*================= submite button */}
                <button className="py-2 rounded-sm lg:text-lg md:text-md text-sm font-semibold w-full mx-auto translate duration-1000 text-black hover:text-white bg-[#32a067] hover:bg-black ">
                  Submit Enquiry
                </button>
                <h2 className="w-3/4 mx-auto md:text-md text-xs ">
                  No money charged in this step
                </h2>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*======== background fully black section  */}
      <div className="lg:py-10 md:py-7 sm:py-5 py-4 lg:mt-10 md:mt-8 sm:mt-6 mt-4 w-full mx-auto bg-[#121921] ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-col-1  gap-4 xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-10/12 w-full mx-auto ">
          <div className="flex flex-col items-center  px-6  w-full mx-auto ">
            <div className="text-3xl  text-white">
              <HiOutlineMapPin />
            </div>
            <h2 className="text-xl mt-3 text-[#ffd000] font-semibold">
              Address
            </h2>
            <p className="text-md sm:text-left text-center text-[#fff]">
              Shop No. 01, Pulikeezu Bhavan Bargat Line, near juvenile home,
              DRDO TRANSIST, Nayagaon, Port Blair, Andaman and Nicobar Islands
              744106
            </p>
          </div>
          <div className="flex flex-col items-center   w-full mx-auto">
            <div className="text-3xl text-white ">
              <HiOutlineEnvelopeOpen />
            </div>
            <h2 className="text-xl mt-3 text-[#ffd000] font-semibold">
              Email address
            </h2>
            <p className="text-md text-left text-[#fff]">
              contact@andamancab.in{" "}
            </p>
            <p className="text-xs text-center w-full  text-[#fff]">
              Monday to Friday 9am - 7pm
            </p>
          </div>
          <div className="flex flex-col items-center md:w-[1/4] w-full mx-auto">
            <div className="text-3xl text-white">
              <HiDevicePhoneMobile />
            </div>
            <h2 className="text-xl mt-3 text-[#ffd000] font-semibold">
              Address
            </h2>
            <p className="text-md text-left text-[#fff]">
              9933263867, 9531955441
            </p>
          </div>
        </div>
      </div>
      {/*================= car image section is here */}
      <div className="relative mt-10 lg:px-0 px-4 xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-10/12 w-full  mx-auto">
        <img
          className="w-full xl:h-[500px] h-full brightness   mx-auto"
          src="https://www.andamancab.in/assets/img/bgs/bg-about-us.png"
          alt=""
        />
        <div className="absolute lg:bottom-24 md:bottom-16 sm:bottom-12 bottom-6  lg:left-5 md:left-3 left-2 text-left font-serif px-3 text-white lg:w-8/12 w-full mx-auto ">
          <h5 className="lg:text-xl md:text-lg text-md">KNOW ABOUT US</h5>
          <h2 className="2xl:text-3xl xl:text-2xl lg:text-lg md:text-lg sm:text-md text-sm font-bold">
            Your Perfect
          </h2>
          <h2 className="2xl:text-3xl xl:text-2xl lg:text-lg md:text-lg sm:text-md text-sm md:mt-1 mt-0 font-bold">
            Ride Partner
          </h2>
          <p className="lg:text-lg md:text-md text-xs pr-3">
            Andaman Cab Services is a online cab booking agency based in Port
            Blair offering online car rental services, which has enabled clients
            to avail our car hire services which has made us outperform th...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
