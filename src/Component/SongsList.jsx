import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function SongsList() {
  const [open, setOpen] = useState(false);


  function Toggle() {
    setOpen(!open);
  }

  return (
    <div className="w-full flex justify-center items-center mt-5">
      <ul className="flex text-bold gap-8 cursor-pointer">
        <li className="hover:text-red-400 transition duration-200">
          <FontAwesomeIcon icon={faMusic} className="mr-2" />
          All
        </li>
        <li className="hover:text-red-400 transition duration-200">Trending Now</li>
        <li className="hover:text-red-400 transition duration-200">Old songs</li>
        <li className="hover:text-red-400 transition duration-200">New songs</li>
        
        <li onClick={Toggle} className="relative flex items-center hover:text-red-400 transition duration-200 cursor-pointer">
          Mood & Genre
          <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
          {open && (
            <ul className="absolute bg-gray-800 text-white mt-[300px] rounded-md shadow-lg w-48 z-10">
              <li className="px-4 py-2 hover:bg-red-600 transition duration-200">Party Songs</li>
              <li className="px-4 py-2 hover:bg-red-600 transition duration-200">Dance Songs</li>
              <li className="px-4 py-2 hover:bg-red-600 transition duration-200">Romantic Songs</li>
              <li className="px-4 py-2 hover:bg-red-600 transition duration-200">Bollywood Songs</li>
              <li className="px-4 py-2 hover:bg-red-600 transition duration-200">90's Hits</li>
              <li className="px-4 py-2 hover:bg-red-600 transition duration-200">Bhakti Songs</li>
            </ul>
          )}
        </li>
        <li className="hover:text-red-400 transition duration-200" >Top Albums

       
        </li>
        <li className="hover:text-red-400 transition duration-200">Top Artists</li>
        <li className="hover:text-red-400 transition duration-200">Top Playlist</li>
      </ul>
    </div>
  );
}

export default SongsList;
