"use client";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    AiOutlineMenuUnfold,
    AiOutlineMenuFold,
} from "react-icons/ai";
import {
    BsFillPersonFill,
    BsFillFileEarmarkTextFill,
    BsFillPeopleFill,
    BsFillCalculatorFill,
    BsFillClipboardDataFill,
    BsFillBarChartFill,
    BsFillClockFill,
    BsFillGearFill,
} from "react-icons/bs";
import { FcPieChart } from "react-icons/fc";
import { TbHistory, TbLayoutDashboardFilled, TbUserFilled, TbWorld } from "react-icons/tb";
import { FaMoneyCheckAlt, FaWpforms } from "react-icons/fa";
import { RiAwardFill, RiBankLine, RiUser2Fill, RiUser3Fill } from "react-icons/ri";

const sidebarOptions = [
    { label: "Dashboard", href: "/", icon: <RiBankLine /> },
    { label: "Student Management", href: "/students", icon: <RiUser2Fill /> },
    { label: "Staff Management", href: "/staff", icon: <RiUser3Fill /> },
    { label: "Class & Grade Management", href: "/classes-grades", icon: <TbWorld /> },
    { label: "Attendance Management", href: "/attendance", icon: <BsFillClockFill /> },
    { label: "Fee Management", href: "/fees", icon: <FaMoneyCheckAlt /> },
    { label: "Exams & Marks", href: "/exams-marks", icon: <RiAwardFill /> },
    { label: "Dynamic Forms", href: "/dynamic-forms", icon: <FaWpforms /> },
    { label: "Reports", href: "/reports", icon: <BsFillBarChartFill /> },
    { label: "Activities", href: "/app-activity", icon: <TbHistory /> },
    { label: "Settings", href: "/settings", icon: <BsFillGearFill /> },
];

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <aside className={`transition-all duration-300 
            bg-white text-black 
            shadow-lg ${isCollapsed ? "w-16" : "w-[17rem]"} 
            h-screen lg:relative lg:transform-none z-50 lg:z-0`}>
            
            <div className={`h-16 flex justify-between items-center px-5 
                ${isCollapsed ? '' : ''} 
                transition-all duration-300 ease-in-out`}>
                <span className={`${isCollapsed ? "hidden" : "text-lg"} font-bold`}>
                    {isCollapsed ? "" : "School ERP"}
                </span>
                <button onClick={toggleSidebar} className={`focus:outline-none`}>
                    {isCollapsed ? <AiOutlineMenuUnfold size={24} /> : <AiOutlineMenuFold size={24} />}
                </button>
            </div>

            <div className={`static transform top-0 left-0 ${isCollapsed ? "w-16 overflow-x-hidden" : "w-[17rem]"} 
                h-[calc(100vh-4rem)] shadow-md px-2 max-h-screen overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-in-out lg:translate-x-0 sidebar pt-4`}>

                <ul className="space-y-1">
                    {sidebarOptions.map((option, index) => (
                        <li key={index} className="group relative">
                            <NavLink
                                to={option.href}
                                className={({ isActive }) =>
                                    `flex items-center transition duration-200 
                                    ${isCollapsed ? "w-10 p-3 py-1 ml-1" : "p-2"}
                                    rounded ${isActive ? "bg-gray-300 text-black" : "text-black hover:bg-gray-100"}`}
                            >
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-transform duration-200`}>
                                    {option.icon}
                                </div>
                                <span className={`${isCollapsed ? "hidden" : "fontSizeSidebar"} min-w-max`}>
                                    {option.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
