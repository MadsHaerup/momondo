import React from 'react'
import {FaGlobe} from 'react-icons/fa';
import {GoPerson} from 'react-icons/go';
import {BiCalendarHeart} from 'react-icons/bi';

export default function TopNav() {
  return (
    <div className="flex justify-between items-center text-white py-2 border-b-2 border-purple-700 text-l ">
      <FaGlobe/>
      <div className="flex text-white">
        <GoPerson/>
        <BiCalendarHeart/>
      </div>
    </div>
  )
}
