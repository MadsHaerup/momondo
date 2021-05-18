import React from 'react';
// import {FaPlaneDeparture, FaPlaneArrival} from 'react-icons/fa'

export default function Form() {
  return (
    <form className="flex flex-col  mx-auto gap-2">
      <select className="w-32 bg-momondo border-2 border-purple-500 text-white px-4 py-2 rounded-lg">
        <option value="Returrejse">Returrejse</option>
        <option value="Enkelt">Enkelt</option>
      </select>
      <input className="w-30 h-9 flex justify-center bg-white-100 rounded-lg" placeholder="Fra"/>
      <input className="w-30 h-9 flex justify-center bg-white-100 rounded-lg" placeholder="Til"/>
      <input type="date"
        value={Date.now()}
       min={Date.now()} max={Date.now() * 360} className="w-30 h-9 flex justify-center bg-white-100 rounded-lg"/>
      <input type="number" min="1" placeholder="Antal Passengere" className="w-30 h-9 flex justify-center bg-white-100 rounded-lg"/>
      <button type="submit" className="bg-pink-600 text-white rounded-lg px-4 py-2">Søg</button>
    </form>
  )
}
