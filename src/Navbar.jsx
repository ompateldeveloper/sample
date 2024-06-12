import { AudioLines, Citrus } from 'lucide-react'
import React from 'react'
import { v4 } from 'uuid'
export default function Navbar({greet}) {
    return (
        <div className='flex items-center justify-between p-4 bg-teal-50 bg-gradient-to-br from-pink-400 to-purple-600 '>
            <div className=" text-xl font-bold text-green-300"><Citrus/> {v4()}</div>
            <div className="flex gap-4">
               <div className="">Home</div>
               <div className="" onClick={greet}>About</div>
               <div className=""><AudioLines />React</div>
            </div>
        </div>
    )
}
