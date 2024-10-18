import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function SongsList() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('All'); // Initial active state set to 'All'

  function toggleDropdown() {
    setOpen(!open);
  }

  function handleActive(item) {
    setActive(item); // Set the active item
    setOpen(false); // Close dropdown
  }

  return (
    <div className="w-full flex justify-center items-center mt-5">
      <ul className="flex text-bold gap-8 cursor-pointer">
        <li
          onClick={() => handleActive('All')}
          className={`hover:text-red-400 transition duration-200 ${active === 'All' ? 'text-red-400 font-bold' : ''}`}
        >
          <FontAwesomeIcon icon={faMusic} className="mr-2" />
          All
        </li>
        <li
          onClick={() => handleActive('Trending Now')}
          className={`hover:text-red-400 transition duration-200 ${active === 'Trending Now' ? 'text-red-400 font-bold' : ''}`}
        >
          Trending Now
        </li>
        <li
          onClick={() => handleActive('Old Songs')}
          className={`hover:text-red-400 transition duration-200 ${active === 'Old Songs' ? 'text-red-400 font-bold' : ''}`}
        >
          Old Songs
        </li>
        <li
          onClick={() => handleActive('New Songs')}
          className={`hover:text-red-400 transition duration-200 ${active === 'New Songs' ? 'text-red-400 font-bold' : ''}`}
        >
          New Songs
        </li>
        
        <li
          onClick={toggleDropdown}
          className="relative flex items-center hover:text-red-400 transition duration-200 cursor-pointer"
        >
          Mood & Genre
          <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
          {open && (
            <ul className="absolute bg-gray-800 text-white mt-[290px] rounded-md shadow-lg w-48 z-10">
              <li onClick={() => handleActive('Party Songs')} className="px-4 py-2 hover:bg-red-600 transition duration-200">Party Songs</li>
              <li onClick={() => handleActive('Dance Songs')} className="px-4 py-2 hover:bg-red-600 transition duration-200">Dance Songs</li>
              <li onClick={() => handleActive('Romantic Songs')} className="px-4 py-2 hover:bg-red-600 transition duration-200">Romantic Songs</li>
              <li onClick={() => handleActive('Bollywood Songs')} className="px-4 py-2 hover:bg-red-600 transition duration-200">Bollywood Songs</li>
              <li onClick={() => handleActive("90's Hits")} className="px-4 py-2 hover:bg-red-600 transition duration-200">90's Hits</li>
              <li onClick={() => handleActive('Bhakti Songs')} className="px-4 py-2 hover:bg-red-600 transition duration-200">Bhakti Songs</li>
            </ul>
          )}
        </li>
        <li
          onClick={() => handleActive('Top Albums')}
          className={`hover:text-red-400 transition duration-200 ${active === 'Top Albums' ? 'text-red-400 font-bold' : ''}`}
        >
          Top Albums
        </li>
        <li
          onClick={() => handleActive('Top Artists')}
          className={`hover:text-red-400 transition duration-200 ${active === 'Top Artists' ? 'text-red-400 font-bold' : ''}`}
        >
          Top Artists
        </li>
        <li
          onClick={() => handleActive('Top Playlist')}
          className={`hover:text-red-400 transition duration-200 ${active === 'Top Playlist' ? 'text-red-400 font-bold' : ''}`}
        >
          Top Playlist
        </li>
      </ul>
    </div>
  );
}

export default SongsList;
