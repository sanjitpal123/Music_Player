import React from "react";

function Navbar() {
  return (
    <div className="w-full h-16 border-b-2 bg-black flex justify-between items-center px-5 shadow-lg">
      <div className="text-yellow-300 text-3xl font-bold hover:scale-105 transition-transform duration-300 cursor-pointer"> 
        SMusic
      </div>
      <div className="flex items-center h-[60%] justify-end w-full md:w-[70%] gap-4">
        {/* Search Bar */}
        <div className="flex w-full md:w-[40%] h-full bg-gray-800 rounded-full shadow-md overflow-hidden"> {/* Reduced to 40% */}
          <input
            type="text"
            className="w-[85%] outline-none text-xl p-2 text-white bg-transparent placeholder-gray-500"
            placeholder="Search for songs, artists..."
          />
          <div className="bg-yellow-300 w-[15%] flex justify-center items-center text-2xl cursor-pointer hover:bg-red-500 transition-colors duration-200">
            <i className="fa-sharp fa-solid fa-magnifying-glass text-black"></i>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/" className="text-yellow-300 hover:underline transition duration-300">Home</a>
          <a href="/artists" className="text-yellow-300 hover:underline transition duration-300">Artists</a>
          <a href="/albums" className="text-yellow-300 hover:underline transition duration-300">Albums</a>
          <a href="/contact" className="text-yellow-300 hover:underline transition duration-300">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
