import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center mt-20 lg:mt-16 py-16 relative rounded-t-md">
      {/* Subtle shadow line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-900 shadow-sm"></div>

      <p>
        <span className="text-white">ukabhisha</span>
        <span className="text-pink-500">@gmail.com</span>
      </p>
    </footer>
  );
};

export default Footer;
