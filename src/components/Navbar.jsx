import { AudioLines, Citrus } from 'lucide-react'
import React from 'react'
import { v4 } from 'uuid'
export default function Navbar() {
    return (
        <div className='flex items-center justify-between p-4 bg-teal-50 bg-gradient-to-br from-pink-400 to-purple-600 '>
            <div className=" text-xl font-bold text-green-100 flex gap-2"><Citrus/> Task Hunter</div>
            <div className="flex gap-4 text-white">
               <div className="">Home</div>
               <div className="" >About</div>
               <div className="">React</div>
            </div>
        </div>
    )
}
