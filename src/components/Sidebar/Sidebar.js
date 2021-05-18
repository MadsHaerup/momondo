import React from 'react';
import { BiMenuAltLeft, BiBed } from 'react-icons/bi';
import { RiBookletLine } from 'react-icons/ri';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { IoPersonCircle, IoAirplane,IoCarSport,IoGolf,IoGlobe } from 'react-icons/io5';


export default function Sidebar() {
  return (
    <nav className="bg-sideBar border-r-2 border-purple-700 h-screen">
      <ul className="text-white">
       <li className="border-b-2 py-2 px-2 border-purple-700"><a href="/"><BiMenuAltLeft/></a></li>
       <li className="py-2 border-b-2 mx-2 border-purple-700 flex items-center"><IoPersonCircle/><a className="ml-4" href="/">Log ind</a></li>
       <li className="py-2 flex items-center mx-2"><IoAirplane/><a className="ml-4" href="/">Fly</a></li>
       <li className="py-2 flex items-center mx-2"><BiBed/> <a className="ml-4" href="/">Ophold</a></li>
       <li className="py-2 flex items-center mx-2"><IoCarSport/> <a className="ml-4" href="/">Bil</a></li>
       <li className="py-2 flex items-center mx-2"><IoGolf/><a className="ml-4" href="/">Oplevelser</a></li>
       <li className="py-2 flex items-center border-b-2 mx-2 border-purple-700"><FaUmbrellaBeach/><a className="ml-4" href="/">Pakkerejser</a></li>
       <li className="py-2 flex items-center border-b-2 mx-2 border-purple-700"><IoGlobe/><a className="ml-4" href="/">Explore</a></li>
       <li className="py-2 flex items-center mx-2"> <RiBookletLine/><a className="ml-4" href="/">Trips</a></li>
      </ul>
    </nav>
  )
}
