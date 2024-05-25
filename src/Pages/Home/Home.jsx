import React, { useEffect } from "react";
import MouseMoveParallax from "../../Components/MouseMoveParallax/MouseMoveParallax";
import motionArtLogo from "../../assets/MotionArtEffect-logo.png";
import "../../../src/App.css";

import reviewImg2 from "../../assets/motionarteffect-img2.png";
import reviewImg1 from "../../assets/motionarteffect-img1.png";
import reviewImg3 from "../../assets/motionarteffect-img3.png";
import reviewStarsImg from "../../assets/motionarteffect-img4.png";
import purchaseImg from "../../assets/motionarteffect-img5.png";
import ReactFluidAnimation from "@usertive/react-fluid-animation";
import applyImg1 from "../../assets/motionarteffect-img11.png";
import applyImg2 from "../../assets/motionarteffect-img10.png";
import browserImg from "../../assets/motionarteffect-img8.png";
import featureImg1 from "../../assets/motionarteffect-img9.png";
import featureImg2 from "../../assets/motionarteffect-img6.png";
import featureImg3 from "../../assets/motionarteffect-img7.png";
import "./home.css";
import navImg from "../../assets/evantoMarketLogo.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  const animationConfig = {
    textureDownsample: 1,
    densityDissipation: 0.98,
    velocityDissipation: 0.98,
    pressureDissipation: 0.8,
    pressureIterations: 20,
    curl: 30,
    splatRadius: 0.25,
  };
  return (
    <div>
       <ReactFluidAnimation {...animationConfig} className="fluid-animation"   style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1 // Ensure it’s behind other content
    }} />
      <div className="min-h-screen home-content relative">
       
        <div className="navbar bg-[#262626] h-10 l fixed z-30">
          <div className="flex-1 px-2">
            <a className=" text-xl">
              <img className="w-40 h-6" src={navImg} alt="" />
            </a>
          </div>
          <div className="flex-none py-14 px-2">
            <button className=" bg-[#82B440] lg:w-24 h-10 text-sm text-white font-Sora rounded-md shadow-2xl">
              Buy Now
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-20  pt-20">
          <ReactFluidAnimation
            {...animationConfig}
            className="fluid-animation"
          />
          {/* section 1 */}
          <section className="flex justify-between items-center py-6">
          <ReactFluidAnimation
            {...animationConfig}
            className="fluid-animation"
          />
            <div>
              <img src={motionArtLogo} alt="" />
            </div>
            <div>
              <button className="bg-white hidden justify-center lg:flex hover:bg-transparent hover:text-white border-white border-2 p-4 rounded-lg w-48 transition duration-300 ease-in-out">
                Purchase now
              </button>
            </div>
          </section>
          {/* section 2 */}
          <section className="mt-12 lg:flex justify-center text-center lg:text-start">
          <ReactFluidAnimation {...animationConfig} className="fluid-animation" />
            <div className="lg:w-[20%] text-lg text-white">
              <h1 className="mb-4">
                <span className="mb-2 bg-gradient-to-r from-[#F87516] via-violet-800 to-[#5E11FF] bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#F87516] via-violet-800 to-[#5E11FF] bg-clip-text text-transparent">
                  Your Website
                </span>
              </h1>
              <h1>
                With Motion
                <br />
                Art Effect
              </h1>
            </div>
            <div className="w-[80%] ml-10 lg:pr-48 text-white">
              <h1 className="lg:text-6xl">
                <span className="mb-10">Attract Your Visitors</span> <br />
                <span className="pt-6">Attention With Colorful</span> <br />
                <span className="bg-gradient-to-r from-[#F87516] via-violet-800 to-[#5E11FF] bg-clip-text text-transparent">
                  Motion Art Effect
                </span>
              </h1>
              <p className="mt-8">
                Unleash the power of creativity with Motion Art for Elementor -
                your ultimate solution <br /> for seamlessly integrating
                captivating animations into your website.
              </p>
            </div>
          </section>
          {/* section 3 */}
          <section className="mt-32">
            <h2 className="text-center text-xl text-white font-bold">
              Trusted by thousands of users around the world
            </h2>
            <div className="lg:flex justify-between items-center mt-16 px-6">
              <div>
                <div className="flex justify-center items-center gap-4">
                  <img src={reviewImg2} alt="" />
                  <div>
                    <img src={reviewStarsImg} alt="" />
                    <p className="mt-4">4.5 Score, 9 Reviews</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center gap-4">
                  <img src={reviewImg1} alt="" />
                  <div>
                    <img src={reviewStarsImg} alt="" />
                    <p className="mt-4">4.5 Score, 9 Reviews</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center gap-4">
                  <img src={reviewImg3} alt="" />
                  <div>
                    <img src={reviewStarsImg} alt="" />
                    <p className="mt-4">4.5 Score, 9 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section 4 */}
          <section className="mt-32">
            <div className="lg:flex justify-between items-center">
              <div className="w-[60%]">
                <h1 className="text-4xl text-white">
                  Turn Your Cursor Into A Colorful Magic Wand & Charm Your
                  Visitors
                </h1>
                <p className="my-8 text-slate-500">
                  Motion Art for Elementor is a groundbreaking plugin that
                  empowers you to effortlessly infuse your website with visually
                  stunning motion art elements.
                </p>
                <Link to="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
                  <button className="w-80 bg-gradient-to-l from-[#F87516] via-violet-800 to-[#5E11FF] text-white h-16 rounded-2xl text-xl">
                    <div className="flex justify-center gap-4  items-center">
                      <h1>Purchase From Evanto</h1>{" "}
                      <IoIosArrowRoundForward size={30} />
                    </div>
                  </button>
                </Link>
              </div>
              <div>
                <img src={purchaseImg} alt="" />
              </div>
            </div>
          </section>
          {/* Section 5 */}
          <section className="mt-32">
            <h2 className="text-center text-4xl text-white font-bold">
              Apply On Any Section Or Enable For <br /> Whole Page
            </h2>
            <div className="lg:flex items-center justify-center gap-10  text-white ">
              <div className="bg-gradient-to-b from-[#0E0720] to-[#241D34] border-2 border-b-0 border-[#332C42] p-10 items-center rounded-2xl shadow-2xl border-1 w-[50%]">
                <h1 className="text-2xl mb-6">Apply On Section</h1>
                <p className="mb-8 text-slate-400">
                  Apply on section is a game-changer, offering an unparalleled
                  way to manage applications directly from your website.{" "}
                </p>
                <img className="w-full" src={applyImg1} alt="" />
              </div>
              <div className="bg-gradient-to-b from-[#0E0720] to-[#241D34] border-2 border-b-0 border-[#332C42] p-10 items-center rounded-2xl shadow-2xl border-1 w-[50%] mt-32">
                <h1 className="text-2xl mb-6">Apply On Page</h1>
                <p className="mb-8 text-slate-400">
                  Take your website to new heights with Motion Art for
                  Elementor. Embrace the power of motion and animation.
                </p>
                <img className="w-full" src={applyImg2} alt="" />
              </div>
            </div>
          </section>
          {/* section 6 */}

          <section className="flex items-center p-10 justify-center bg-gradient-to-b from-[#0E0720] to-[#241D34] rounded-2xl my-32 border-2 border-b-0 border-[#332C42]">
            <div className="  items-center rounded-2xl  w-[40%]  text-center">
              <h1 className="text-2xl font-bold text-white mb-6">
                Supported by All Popular Browsers
              </h1>
              <p className="mb-8 text-slate-400">
                Rest assured, Motion Art is designed to be compatible with all
                major web browsers.
              </p>
              <img className="w-full" src={browserImg} alt="" />
            </div>
          </section>

          {/* section 7 */}

          <section>
            <div className="text-center w-[60%] mx-auto">
              <h1 className="text-4xl font-bold text-white mb-6">
                An All-Round Plugin With Powerful Features
              </h1>
              <p className=" text-slate-400">
                Whether you're a seasoned web designer or just starting out,
                Motion Art for Elementor seamlessly integrates with the
                Elementor platform, providing you with a seamless and intuitive
                experience.
              </p>
            </div>
            <div className="lg:flex items-center justify-center gap-6">
              <div className="lg:w-full p-10 h-96 bg-gradient-to-b from-[#0E0720] to-[#241D34] rounded-2xl my-32 border-2 border-b-0 border-[#332C42]">
                <img
                  className="w-[60%] h-40 left-0 flex justify-start mb-6"
                  src={featureImg1}
                  alt=""
                />
                <h1 className="text-2xl font-bold text-white mb-6">
                  Light Weight
                </h1>
                <p className="mb-8 text-slate-400 ">
                  Motion Art for Elementor is designed to be lightweight.
                </p>
              </div>
              <div className=" p-10 h-96 w-full  bg-gradient-to-b from-[#0E0720] to-[#241D34] rounded-2xl my-32 border-2 border-b-0 border-[#332C42]">
                <img
                  className="w-[60%] h-40  flex justify-start mb-6"
                  src={featureImg2}
                  alt=""
                />
                <h1 className="text-2xl font-bold text-white mb-6">
                  100% Responsive
                </h1>
                <p className="mb-8 text-slate-400">
                  Create a consistent visual experience across all devices.
                </p>
              </div>
              <div className="w-full p-10 h-96 bg-gradient-to-b from-[#0E0720] to-[#241D34] rounded-2xl my-32 border-2 border-b-0 border-[#332C42]">
                <img
                  className="w-[60%] h-40 flex justify-start mb-6"
                  src={featureImg3}
                  alt=""
                />
                <h1 className="text-2xl font-bold text-white mb-6">
                  User Friendly Interface
                </h1>
                <p className="mb-8 text-slate-400">
                  Ensure a smooth experience for both applicants and
                  administrators.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full bg-gradient-to-r from-orange-500 via-fuchsia-500 to-purple-700">
            <div className="">
              <footer className="footer  items-center p-4 bg-neutral text-neutral-content px-6 text-xs pt-8 bg-gradient-to-r from-orange-500 via-fuchsia-500 to-purple-700">
                <aside className="items-center grid-flow-col">
                  <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
                  <a href="">Documentation</a>
                  <a href="">Support</a>
                </nav>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
