import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineUser, AiOutlineBell, AiOutlineCaretDown } from 'react-icons/ai';

const Header = ({ isSidebarOpen = false, toggleSidebar, username = "Guest" }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className={`flex items-center justify-between p-4 shadow-md relative h-16 
             bg-white text-black`}>

            {/* Menu Toggle Button for Mobile View */}
            <button onClick={toggleSidebar} className="md:hidden p-2 focus:outline-none">
                <AiOutlineMenu className="text-2xl" />
            </button>

            {/* Dropdown Button for Add Menu */}
            <div className="relative" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="flex items-center p-2 focus:outline-none">
                    <span className="mr-2">Add</span>
                    <AiOutlineCaretDown className="text-xl" />
                </button>
                {isDropdownOpen && (
                    <div className={`absolute border-gray-400 border left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50`}>
                        {['Fees Payment', 'Student', 'Staff', 'event', 'exam'].map((item) => (
                            <button
                                key={item}
                                className={`block px-4 py-2 w-full text-left hover:shadow-sm hover:bg-gray-100`}
                                onClick={() => console.log(`Add ${item}`)}
                            >
                                Add {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Right Side - Icons and User Info */}
            <div className="flex items-center space-x-4">
                {/* Notification Icon */}
                <button className="relative hover:text-gray-500 focus:outline-none">
                    <AiOutlineBell className="text-2xl" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </button>

                {/* User Info */}
                <button className="flex items-center outline-none">
                    <AiOutlineUser className="text-xl" />
                    <span className="ml-2">{username}</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
