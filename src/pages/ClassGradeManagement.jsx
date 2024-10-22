

const classData = [
    {
        grade: 'Grade 1',
        sections: [
            { section: 'A', totalStudents: 25, totalPayments: 2000, pendingStudents: 5 },
            { section: 'B', totalStudents: 20, totalPayments: 1500, pendingStudents: 3 },
        ],
    },
    {
        grade: 'Grade 2',
        sections: [
            { section: 'A', totalStudents: 22, totalPayments: 1800, pendingStudents: 2 },
            { section: 'B', totalStudents: 18, totalPayments: 1600, pendingStudents: 4 },
        ],
    },
    {
        grade: 'Grade 3',
        sections: [
            { section: 'A', totalStudents: 30, totalPayments: 3000, pendingStudents: 1 },
            { section: 'B', totalStudents: 28, totalPayments: 2800, pendingStudents: 2 },
        ],
    },
    // Add more grades and sections as needed
];

const ClassGradeManagement = () => {
    return (
        <div className="min-h-screen  p-6">
            <h1 className="text-2xl font-bold mb-6">Class & Grade Management</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {classData.map((gradeInfo, index) => (
                    <div key={index} className="bg-white dark:bg-black rounded-lg shadow-md shadow-gray-400 p-4 border border-gray-300">
                        <h2 className="text-xl font-semibold mb-2 text-black">{gradeInfo.grade}</h2>
                        <ul className="space-y-2">
                            {gradeInfo.sections.map((section, idx) => (
                                <li key={idx} className="border-b border-gray-300 dark:border-gray-600 pb-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg">{`Section ${section.section}`}</span>
                                        <span className="font-bold">{section.totalStudents} Students</span>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span>Total Payments:</span>
                                        <span className="font-bold">{`QAR ${section.totalPayments}`}</span>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span>Pending Students:</span>
                                        <span className="font-bold">{section.pendingStudents}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassGradeManagement;
