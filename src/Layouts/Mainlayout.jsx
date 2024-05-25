import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import ReactFluidAnimation from '@usertive/react-fluid-animation';

const Mainlayout = () => {
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
        <div className='font-Sora'>
            <ReactFluidAnimation {...animationConfig} className="fluid-animation" />
            {/* <section>
                <Navbar></Navbar>
            </section> */}
            <section>
                <Outlet></Outlet>
            </section>
            {/* <section>
                <Footer></Footer>
            </section> */}
        </div>
    );
};

export default Mainlayout;