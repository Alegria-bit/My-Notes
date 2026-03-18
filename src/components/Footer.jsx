import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} Olga Skripnikova</p>
    </footer>
  );
}

export default Footer;
