import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import './MouseMoveParallax.css'

const MouseMoveParallax = () => {

    useEffect(() => {
      const handleMouseMove = (event) => {
        let i = document.createElement('i');
        i.style.position = 'absolute'; // Ensure the element is positioned absolutely
        i.style.left = `${event.pageX}px`;
        i.style.top = `${event.pageY}px`;
        i.style.width = '20px'; // Example size, adjust as needed
        i.style.height = '20px';
        i.style.background = 'black'; // Example color, adjust as needed
        i.style.borderRadius = '20%'; // Example shape, adjust as needed
  
        document.body.appendChild(i);
  
        setTimeout(() => {
          document.body.removeChild(i);
        }, 500);
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return null; // This component does not render anything itself
  };

export default MouseMoveParallax;