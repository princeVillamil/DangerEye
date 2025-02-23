import { useState } from "react";
import { doSignOut } from "./firebase/auth";
import { useNavigate } from 'react-router-dom'

const UserDropdownComponent = ({currentUser}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(currentUser)
    
    return(
        <div className="relative inline-block text-left">
            <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50" id="menu-button" aria-expanded={isOpen} aria-haspopup="true" onClick={() => setIsOpen(!isOpen)}>
            Options
            <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </button>
    
            {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Account settings</a>
                {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Support</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">License</a> */}
                <button onClick={() => { doSignOut().then(() => { useNavigate('/login') }) }} type="button" className="cursor-pointer block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem">Sign out</button>
                </div>
            </div>
            )}
        </div>

    )
}

export default UserDropdownComponent