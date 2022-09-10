import React from "react";

export const Footer = () => {
  /**let footerStyle = {
    position: "relative",
    top: "70 vh",
    width: "100%",
  };**/
  return (
    <footer
      className='fixed-bottom bg-dark text-light py-3' /**style={footerStyle}**/
    >
  <p className='text-center'>Copyright &copy; Rabiroshan Shubhankar</p>
    </footer>
  );
};
