import  { useState } from 'react';
import { BsFillFileEarmarkFill } from 'react-icons/bs';

// Sample data for dynamic forms
const dynamicFormsData = [
    {
        formName: 'Student Registration',
        responseCount: 120,
        createdAt: '2024-01-15',
        createdBy: 'Admin',
        status: 'Active',
    },
    {
        formName: 'Feedback Form',
        responseCount: 75,
        createdAt: '2024-03-10',
        createdBy: 'Admin',
        status: 'Active',
    },
    {
        formName: 'Event Registration',
        responseCount: 200,
        createdAt: '2024-05-22',
        createdBy: 'Admin',
        status: 'Inactive',
    },
    {
        formName: 'Parental Consent',
        responseCount: 60,
        createdAt: '2024-07-30',
        createdBy: 'Admin',
        status: 'Active',
    },
];

const DynamicForms = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Search term state

    // Filter forms based on the search term
    const filteredForms = dynamicFormsData.filter(form =>
        form.formName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen p-8 ">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center tracking-wide">
                Dynamic Forms Management
            </h1>

            {/* Search and Create New Form Section */}
            <div className="flex justify-between items-center mb-10">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by form name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-lg p-2 rounded-md text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />

                {/* Create New Form Button */}
                <button className="ml-4 py-2 px-4 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 rounded-md transition duration-200 shadow-sm hover:shadow-md">
                    Create New Form
                </button>
            </div>

            {/* Dynamic Forms Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredForms.length > 0 ? (
                    filteredForms.map((form, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#2c2e3a] flex flex-col rounded-lg shadow-md p-6 transition duration-200 border border-gray-200 dark:border-gray-600 hover:shadow-lg"
                        >
                            <div className="flex flex-col flex-1">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    {form.formName}
                                </h2>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    <span className="font-semibold">Total Responses: </span>
                                    {form.responseCount}
                                </p>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    <span className="font-semibold">Created At: </span>
                                    {form.createdAt}
                                </p>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    <span className="font-semibold">Created By: </span>
                                    {form.createdBy}
                                </p>
                                <p className="mt-1">
                                    <span className="font-semibold">Status: </span>
                                    <span className={form.status === 'Active' ? 'text-emerald-500' : 'text-red-500'}>
                                        {form.status}
                                    </span>
                                </p>
                            </div>
                            {/* View Responses Button */}
                            <div className="mt-4">
                                <button className="py-2 px-3 text-md font-medium text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-md flex items-center space-x-2 transition duration-200 shadow-sm hover:shadow-md">
                                    <BsFillFileEarmarkFill className="text-lg" />
                                    <span>View Responses</span>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg text-gray-600 dark:text-gray-400">
                        No forms found matching {searchTerm}
                    </p>
                )}
            </div>
        </div>
    );
};

export default DynamicForms;
