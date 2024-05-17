import React from 'react';
import MouseMoveParallax from '../../Components/MouseMoveParallax/MouseMoveParallax';
import motionArtLogo from '../../assets/MotionArtEffect-logo.png'

const Home = () => {
    return (
    //   <MouseMoveParallax>
    //     <div className='pt-20 bg-black text-black min-h-screen' style={{ position: 'relative', zIndex: 1 }}>
    //       {/* Your landing page content here */}
    //       <h1>Welcome to Our Website</h1>
    //       <p>Explore our amazing content.</p>
    //       {/* Add more content as needed */}
    //     </div>
    //   </MouseMoveParallax>

    <div className='min-h-screen pt-20 bg-[#0E0F1A]'>
        {/* section 1 */}
        <section className='flex justify-between items-center px-14 py-6'>
            <div>
                <img src={motionArtLogo} alt="" />
            </div>
            <div>
                <button className='bg-white hover:bg-transparent hover:text-white border-white border-2 p-4 rounded-lg w-48'>Purchase now</button>
            </div>
        </section>
        {/* section 2 */}
        <section className='px-14 mt-12 flex justify-center'>
        <div className='w-[20%] text-lg text-white'>
        <h1 className='mb-4'><span className='mb-2 bg-gradient-to-r from-amber-600 to-violet-900 bg-clip-text text-transparent'>Transform</span><br /><span className='bg-gradient-to-r from-amber-600 to-violet-900 bg-clip-text text-transparent'>Your Website</span></h1>
        <h1>With Motion<br />Art Effect</h1>
        </div>
        <div className='w-[80%] ml-10 pr-48 text-white'>
            <h1 className='text-6xl'><span className='mb-10'>Attract Your Visitors</span> <br /> <span className='pt-6'>Attention With Colorful</span> <br />Motion Art Effect</h1>
            <p className='mt-8'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution <br /> for seamlessly integrating captivating animations into your website. </p>
        </div>
        </section>

    </div>

    );
  };

export default Home;