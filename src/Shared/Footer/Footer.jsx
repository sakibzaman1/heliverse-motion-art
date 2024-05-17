import React from 'react';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content px-6 text-xs pt-8 bg-gradient-to-r from-orange-500 via-fuchsia-500 to-purple-700">
        <aside className="items-center grid-flow-col">
           
          <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </aside> 
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
          <a href="">Documentation</a>
          <a href="">Support</a>
          
        </nav>
      </footer>
    );
};

export default Footer;