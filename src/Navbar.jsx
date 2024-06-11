import React from 'react'
export default function Navbar() {
    return (
        <div className='flex items-center justify-between p-4 bg-teal-50 bg-gradient-to-br from-pink-400 to-purple-600 '>
            <div className=" text-xl font-bold bg-gradient-to-r from-[#b8b8aa] via-green-500 to-indigo-400 bg-clip-text text-transparent">Navabr</div>
            <div className="flex gap-4">
               <div className="">Home</div>
               <div className="">About</div>
               <div className="">React</div>
            </div>
        </div>
    )
}
