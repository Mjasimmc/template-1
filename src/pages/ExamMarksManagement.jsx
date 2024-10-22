import { useState } from 'react';
import { BsFillEyeFill } from 'react-icons/bs'; // Eye icon for viewing results
import { FaAngleDoubleRight } from 'react-icons/fa'; // Arrow icon for section display

// Sample data for exams
const examsData = [
    {
        examName: 'Midterm Exam',
        status: 'Completed',
        classes: [
            { grade: 'Grade 1', sections: ['A', 'B'] },
            { grade: 'Grade 2', sections: ['A', 'B'] },
            { grade: 'Grade 3', sections: ['A'] },
        ],
    },
    {
        examName: 'Quarterly Assessment',
        status: 'Completed',
        classes: [
            { grade: 'Grade 1', sections: ['A', 'B'] },
            { grade: 'Grade 2', sections: ['A', 'B'] },
            { grade: 'Grade 3', sections: ['A'] },
        ],
    },
    {
        examName: 'Final Exam',
        status: 'Pending',
        classes: [
            { grade: 'Grade 1', sections: ['A', 'B'] },
            { grade: 'Grade 2', sections: ['A', 'B'] },
            { grade: 'Grade 3', sections: ['A'] },
        ],
    },
];

const ExamMarksManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter exams based on search term
    const filteredExams = examsData.filter((exam) =>
        exam.examName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
                Exam Marks Management
            </h1>

            {/* Search Box and Create Exam Button */}
            <div className="flex justify-between items-center mb-6">
                <input
                    type="text"
                    placeholder="Search Exams"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
                />
                <button className="ml-4 px-4 py-2 bg-[#282934] text-white rounded-lg hover:bg-[#141619]">
                    Create Exam
                </button>
            </div>

            {/* Exam List */}
            <div className="space-y-6">
                {filteredExams.length > 0 ? (
                    filteredExams.map((exam, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#2c2e3a] rounded-lg shadow-md p-6 transition duration-200 border border-gray-200 dark:border-gray-600 hover:shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                {exam.examName}
                            </h2>
                            <p
                                className={`font-bold text-lg ${
                                    exam.status === 'Completed'
                                        ? 'text-emerald-500'
                                        : 'text-red-500'
                                }`}
                            >
                                Status: {exam.status}
                            </p>

                            {/* Show classes based on exam status */}
                            <div className="mt-6">
                                {exam.status === 'Pending' ? (
                                    <div>
                                        <p className="font-semibold text-lg dark:text-gray-200">
                                            Pending Classes:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                            {exam.classes.map((classInfo, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-gray-50 dark:bg-[#282934] p-4 rounded-md shadow-md"
                                                >
                                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                                                        {classInfo.grade}
                                                    </h3>
                                                    <ul className="list-disc list-inside space-y-2">
                                                        {classInfo.sections.map(
                                                            (section, secIdx) => (
                                                                <li
                                                                    key={secIdx}
                                                                    className="flex items-center space-x-2"
                                                                >
                                                                    <FaAngleDoubleRight className="text-emerald-500" />
                                                                    <span className="text-gray-600 dark:text-gray-300">
                                                                        Section {section}
                                                                    </span>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="font-semibold text-lg dark:text-gray-200">
                                            Conducted Classes:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                            {exam.classes.map((classInfo, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-gray-50 dark:bg-[#282934] p-4 rounded-md shadow-md"
                                                >
                                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                                                        {classInfo.grade}
                                                    </h3>
                                                    <ul className="list-disc list-inside space-y-2">
                                                        {classInfo.sections.map(
                                                            (section, secIdx) => (
                                                                <li
                                                                    key={secIdx}
                                                                    className="flex items-center justify-between"
                                                                >
                                                                    <div className="flex items-center space-x-2">
                                                                        <FaAngleDoubleRight className="text-emerald-500" />
                                                                        <span className="text-gray-600 dark:text-gray-300">
                                                                            Section {section}
                                                                        </span>
                                                                    </div>
                                                                    {exam.status === 'Completed' ? (
                                                                        <button className="text-blue-500 hover:underline flex items-center transition-colors duration-200">
                                                                            <BsFillEyeFill className="mr-1" />
                                                                            Update Results
                                                                        </button>
                                                                    ) : (
                                                                        <button className="text-blue-500 hover:underline flex items-center transition-colors duration-200">
                                                                            <BsFillEyeFill className="mr-1" />
                                                                            View Results
                                                                        </button>
                                                                    )}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No exams found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default ExamMarksManagement;
