import   { useState } from 'react';
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io';
import { FaDollarSign, FaMoneyBillWave } from 'react-icons/fa'; // For payment-related icons
import { RiBankLine } from 'react-icons/ri'; // For fees structure

// Sample data structure for fee management
const initialFeeData = [
    {
        name: 'For Grade 1 & 2',
        types: ['Tuition Fee', 'Activity Fee', 'Library Fee'],
        amounts: [1500, 200, 100],
        allottedClasses: [
            { grade: 'Grade 1', section: 'A' },
            { grade: 'Grade 1', section: 'B' }
        ],
    },
    {
        name: 'For Grade 3 & 4',
        types: ['Tuition Fee', 'Activity Fee', 'Library Fee'],
        amounts: [1600, 250, 120],
        allottedClasses: [
            { grade: 'Grade 2', section: 'A' },
            { grade: 'Grade 2', section: 'B' }
        ],
    },
];

const FeeManagement = () => {
    const [feeData, setFeeData] = useState(initialFeeData);
    const [searchGrade, setSearchGrade] = useState('');
    const [searchSection, setSearchSection] = useState('');

    const handleCreatePaymentStructure = () => {
        alert('Create new payment structure functionality');
    };

    const handlePayment = (grade, section) => {
        alert(`Process payment for ${grade} - Section ${section}`);
    };

    // Filter the fee data based on search criteria
    const filteredFeeData = feeData.filter((structure) =>
        structure.allottedClasses.some(
            (classInfo) =>
                classInfo.grade.toLowerCase().includes(searchGrade.toLowerCase()) &&
                classInfo.section.toLowerCase().includes(searchSection.toLowerCase())
        )
    );

    return (
        <div className="p-6">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-[#0a21c0] dark:text-[#9da6e6]">Fee Management</h1>

            {/* Search and Create Inputs */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Search by Grade"
                        value={searchGrade}
                        onChange={(e) => setSearchGrade(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg dark:bg-[#2c2e3a] dark:text-white"
                    />
                    <input
                        type="text"
                        placeholder="Search by Section"
                        value={searchSection}
                        onChange={(e) => setSearchSection(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg dark:bg-[#2c2e3a] dark:text-white"
                    />
                    <button
                        onClick={() => setFeeData(filteredFeeData)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
                    >
                        Search
                        <IoIosSearch />
                    </button>
                </div>
                <button
                    onClick={handleCreatePaymentStructure}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
                >
                    Add Fees Payment 
                    <IoIosAddCircleOutline size={27} />
                </button>
            </div>

            {/* Fee Management Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredFeeData.map((structure, index) => {
                    // Calculate total amount for the current payment structure
                    const totalAmount = structure.amounts.reduce((total, amount) => total + amount, 0);

                    return (
                        <div key={index} className="bg-white dark:bg-[#2c2e3a] rounded-lg shadow-lg p-6 transition-transform h-full transform hover:scale-105 hover:shadow-xl">
                            <h2 className="text-2xl font-bold text-[#051160] dark:text-[#9da6e6] mb-4 flex items-center gap-2">
                                <RiBankLine />
                                {structure.name}
                            </h2>
                            <div className="mt-4">
                                <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <FaDollarSign />
                                    Payment Structure:
                                </h3>
                                <ul className="list-disc list-inside mt-3 space-y-2">
                                    {structure.types.map((type, idx) => (
                                        <li key={idx} className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-600">
                                            <span className="text-gray-800 dark:text-gray-200">{type}</span>
                                            <span className="text-gray-900 dark:text-gray-100 font-semibold">{`QAR ${structure.amounts[idx]}`}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Render allotted classes */}
                                <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mt-6">
                                    Allotted Classes:
                                </h3>
                                <ul className="list-disc list-inside mt-3 space-y-2">
                                    {structure.allottedClasses.map((classInfo, idx) => (
                                        <li key={idx} className="text-gray-800 dark:text-gray-200">
                                            {`${classInfo.grade} - Section ${classInfo.section}`}
                                        </li>
                                    ))}
                                </ul>

                                {/* Total Amount */}
                                <div className="mt-6 flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                        <FaMoneyBillWave />
                                        Total Amount:
                                    </span>
                                    <span className="text-2xl font-semibold text-[#051160] dark:text-[#9da6e6]">{`QAR ${totalAmount}`}</span>
                                </div>

                                {/* Pay Fees Button */}
                                <button
                                    onClick={() => handlePayment(structure.allottedClasses[0].grade, structure.allottedClasses[0].section)} // Just an example
                                    className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
                                >
                                    Pay Fees
                                    <FaDollarSign />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeeManagement;
