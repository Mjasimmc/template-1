import React from 'react';
import {
    AiFillPieChart,
    AiOutlineUsergroupAdd,
    AiOutlineFileDone,
    AiOutlineClockCircle,
    AiOutlineCalendar,
    AiOutlineDollarCircle,
    AiOutlineMail,
} from 'react-icons/ai';

const summaryCards = [
   {
        title: "Total Students",
        value: "500",
        icon: <AiOutlineUsergroupAdd className="text-xl lg:text-4xl  text-black dark:text-white" />,
    },
    {
        title: "Total Teachers",
        value: "75",
        icon: <AiOutlineFileDone className="text-xl lg:text-4xl  text-black dark:text-white" />,
    },
    {
        title: "Attendance Rate",
        value: "92%",
        icon: <AiOutlineClockCircle className="text-xl lg:text-4xl  text-black dark:text-white" />,
    },
    {
        title: "Total Fees Collected",
        value: "QAR 200,000",
        icon: <AiOutlineDollarCircle className="text-xl lg:text-4xl  text-black dark:text-white" />,
    },
    {
        title: "Upcoming Events",
        value: "3",
        icon: <AiOutlineCalendar className="text-xl lg:text-4xl  text-black dark:text-white" />,
    },
    {
        title: "Pending Fees",
        value: "QAR 150,000",
        icon: <AiOutlineDollarCircle className="text-xl lg:text-4xl  text-black dark:text-white" />,
    },
    {
        title: "New Admissions",
        value: "25",
        icon: <AiOutlineUsergroupAdd className="text-xl lg:text-4xl  text-black dark:text-white" />,
    },
    {
        title: "Emails Sent",
        value: "150",
        icon: <AiOutlineMail className="text-xl lg:text-4xl  text-black dark:text-white" />,
    },
];

const Dashboard = () => {
    return (
        <div className="p-4 md:p-6  min-h-full flex-1">
            <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-6">
                School ERP Dashboard
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {summaryCards.map((card, index) => (
                    <div key={index} className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-300 dark:border-gray-600 flex items-center">
                        {card.icon}
                        <div className="ml-4">
                            <h2 className="text-md min-w-max md:text-lg  font-semibold text-black dark:text-white">{card.title}</h2>
                            <p className="text-xl md:text-lg font-semibold text-black dark:text-white">{card.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full Width Card: Recent Activity */}
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-300 dark:border-gray-600 mt-6">
                <h2 className="text-lg font-semibold text-black dark:text-white">Recent Activity</h2>
                <ul className="list-disc pl-5 text-black dark:text-gray-300">
                    <li>Student John Doe was admitted</li>
                    <li>Teacher Jane Smith marked attendance for Grade 5</li>
                    <li>Fee payment received from student #452</li>
                    <li>Parent-teacher meeting scheduled for next week</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
