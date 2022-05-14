import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p>© {year} Nivin Anil</p>
    </footer>
  );
};
export default Footer;
