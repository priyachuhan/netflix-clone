import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white fixed w-full z-10">
      <div className="text-2xl font-bold">Netflix</div>
      <div className="space-x-4">
        <button>Home</button>
        <button>TV Shows</button>
        <button>Movies</button>
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile"
          className="w-8 h-8 rounded"
        />
      </div>
    </nav>
  );
};

export default Navbar;
