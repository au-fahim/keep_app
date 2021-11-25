import React from "react";

function Footer() {
  const date = new Date();
  let Year = date.getFullYear();

  return (
    <footer>
      <div className="mainInner">
        <p>Copyright &copy; {Year}</p>
      </div>
    </footer>
  );
}

export default Footer;
