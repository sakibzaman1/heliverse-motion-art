// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './Pages/Home/Home';
// import Navbar from './Shared/Navbar/Navbar';
// import motionArtLogo from '../src/assets/MotionArtEffect-logo.png'

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const canvas = document.getElementById('renderSurface');
//     let myFluid = new Fluid(canvas);
//     myFluid.activate();

//     const handleMouseMove = (event) => {
//       if (myFluid && typeof myFluid.handleMouseMove === 'function') {
//         myFluid.handleMouseMove(event);
//       } else {
//         console.error("handleMouseMove method not found on Fluid instance.");
//       }
//     };

//     canvas.addEventListener('mousemove', handleMouseMove);

//     // Clean up the event listener on component unmount
//     return () => {
//       canvas.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

  

//   return (
//     <>
//     <Navbar></Navbar>
//     <div className='pt-32 max-w-7xl mx-auto flex justify-between items-center '>
//           <img src={motionArtLogo} alt="" />
//           <button className="bg-white hover:bg-transparent hover:text-white border-white border-2 p-4 rounded-lg w-48">
//             Purchase now
//           </button>
//         </div>

//         <div>
//              <div className="w-[20%] text-lg text-white">
//           <h1 className="mb-4">
//             <span className="mb-2 bg-gradient-to-r from-[#F87516] via-violet-800 to-[#5E11FF] bg-clip-text text-transparent">
//               Transform
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-[#F87516] via-violet-800 to-[#5E11FF] bg-clip-text text-transparent">
//               Your Website
//             </span>
//           </h1>
//           <h1>
//             With Motion
//             <br />
//             Art Effect
//           </h1>
//         </div>
//         </div>
     
//     </>
//   )
// }

// export default App
