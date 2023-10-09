import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import about from "../assets/about.jpg";
import team from "../assets/team.jpg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="flex lg:gap-20  gap-5  justify-center lg:pb-28 px-10 py-10 lg:flex-row md:flex-row flex-col bg-[#141E46]      ">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-1/2">
          <img src={about} alt="" className=" " />
        </div>

        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"  className='w-1/2'>
          <h1 className="lg:text-4xl text-2xl  text-[#fff] ">
            <span className=" font-extrabold text-[#1AACAC] lg:text-5xl text-3xl">
              About
            </span>
            <span className=" font-extrabold">Us</span>
          </h1>

          <p className="lg:w-[600px] md:w-[500px] w-[300px] py-5 text-[#EEEEEE] font-medium text-lg">
            We are passionate about bringing people together, creating memorable
            experiences, and fostering meaningful connections. With a dedicated
            team and a vision for inclusive and enjoyable gatherings, we strive
            to curate events that celebrate diversity, spark conversations, and
            spread joy. Join us in building a vibrant community where laughter,
            friendship, and shared moments take center stage.
          </p>

          <Link to={"/contect"}>
            {" "}
            <button className="btn btn-outline btn-success px-10 ">
              Contact <BsFillTelephoneFill></BsFillTelephoneFill>
            </button>
          </Link>
        </div>
      </div>

      <div className="my-10 mx-auto max-w-screen-xl "  data-aos="fade-up"
     data-aos-duration="3000">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${team})`,
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 lg:text-5xl text-3xl md:text-4xl font-bold text-[#1AACAC]">
                About
              </h1>
              <p className="mb-5 text-[#EEEEEE] font-medium md:text-xl text-xl lg:text-xl">
                Welcome to Socail Event where we specialize in transforming
                ordinary moments into extraordinary, memorable experiences. Our
                mission is to curate social events that embody the essence of
                togetherness, joy, and meaningful connections. At socail event, we're driven by a passion for creating celebrations that
                go beyond the ordinary. Whether it's an intimate gathering, a
                corporate event, or a grand celebration, we excel in designing
                experiences that leave an indelible mark. Our dedicated and
                creative team invests meticulous attention to detail in every
                aspect of event planning. From elegant soirées with a touch of
                sophistication to dynamic themed parties that bring out your
                playful side, we tailor each event to match your unique vision
                and exceed your expectations. We firmly believe in the power of
                community and the significance of fostering connections in
                today's fast-paced world. That's why our events are thoughtfully
                designed to unite people, spark engaging conversations, and
                nurture lasting friendships. With socail event your event isn't
                just a gathering; it's an opportunity to craft moments that will
                be etched in the hearts of your guests. Join us in making your
                social gatherings truly special and unforgettable. Let's
                collaborate to create memories that will be cherished for a
                lifetime. Feel free to further modify and adapt this description
                based on your company's ethos, services, and the impression you
                want to convey to your audience.At the heart of our approach
                lies a passionate team driven by creativity and a deep sense of
                purpose. 
              </p>

              <div className="flex mt-4 gap-4 justify-center space-x-3 md:mt-6">
                <FaFacebook className="text-4xl" />
                <FaLinkedin className="text-4xl" />
                <FaInstagram className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 mx-auto max-w-screen-xl space-y-3 px-5 lg:-0"  data-aos="fade-up"
     data-aos-duration="3000">

      <h1 className="mb-5 text-center lg:text-5xl text-3xl md:text-4xl font-bold text-[#1AACAC]">
      Question &  Anwser 
              </h1>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  bg-[#141E46] "
        >
          <div className="collapse-title text-xl text-[#1AACAC] font-medium">
            Can you provide examples of social events you've successfully
            organized in the past?
          </div>
          <div className="collapse-content">
            <p className="text-[#fff]">
              {" "}
              Certainly! We have organized a wide range of social events,
              including elegant weddings, milestone birthday celebrations,
              corporate galas, themed parties, and community gatherings. Each
              event is unique and tailored to our clients' preferences, ensuring
              a memorable and delightful experience for all attendees.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  bg-[#141E46] "
        >
          <div className="collapse-title text-xl text-[#1AACAC] font-medium">
          How do you handle unforeseen circumstances or emergencies during an event?
          </div>
          <div className="collapse-content">
            <p className="text-[#fff]">
              {" "}
              We prioritize preparedness and have comprehensive contingency plans in place for all events. Our team is trained to swiftly adapt and handle unforeseen situations with professionalism and composure. We maintain strong communication channels with vendors and partners to quickly address and resolve any issues, ensuring the event continues smoothly.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  bg-[#141E46] "
        >
          <div className="collapse-title text-xl text-[#1AACAC] font-medium">
          Can you assist with finding and securing a suitable venue for our event?
          </div>
          <div className="collapse-content">
            <p className="text-[#fff]">
              {" "}
              Absolutely! Venue selection is a crucial aspect of event planning. We have a wide network of venue partners and can assist in finding the perfect venue that aligns with your event's theme, size, and location preferences. We'll handle negotiations, contracts, and logistics to secure the best possible venue for your event.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  bg-[#141E46] "
        >
          <div className="collapse-title text-xl text-[#1AACAC] font-medium">
          How do you tailor events to suit different budgets?
          </div>
          <div className="collapse-content">
            <p className="text-[#fff]">
              {" "}
              We understand the importance of working within your budget. Our team is skilled in creating tailored event proposals that optimize resources to match your financial parameters. We provide transparent cost breakdowns and offer alternatives and recommendations to help you achieve a successful event while staying within your budget constraints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
