import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>Software by SwipeNex Technologies. Copyright ⓒ {year}</footer>
    </div>
  );
}

export default Footer;
