import React from 'react'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline";

function Header() {
    return (
        <div className="p-5 mx-5 h-20 shadow-sm bg-white flex justify-between items-center sticky top-0 z-50 mb-5">
            <h3 className="font-extrabold text-3xl">Bileonaire Fx</h3>
            <div className="flex items-center justify-end space-x-4 cursor-pointer">
                <div className="relative navBtn">
                    <PaperAirplaneIcon className="navBtn rotate-45"/>
                    <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex itemss-center justify-center animate-pulse text-white">3</div>
                </div>
                <img
                    src="https://github.com/Bileonaire.png"
                    alt="avatar"
                    className='cursor-pointer h-12 w-12 rounded-full object-cover'
                />
            </div>
        </div>

    )
}

export default Header