import React from "react";

function Card({username, myBtn}) {

    console.log(username);
    
  return (
    <div className="max-w-xs w-full h-110 p-4 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group  ">
      
    
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src="images/props.png"
          alt="Raza"
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium uppercase bg-white text-black rounded-full mb-3">
          
        </span>

        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300">
          {username}
        </h2>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Im devpic from USA and i am software engineering i am also CEO of google
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg">
          {myBtn}
        </button>

        <span className="text-xs text-gray-500">
          👁 See views
        </span>
      </div>
    </div>
  );
}

export default Card;