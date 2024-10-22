import  { useState } from 'react';
import { toast } from 'react-toastify';

// Sample data structure for students with attendance using Date objects
const attendanceData = [
    {
        name: 'John Doe',
        grade: '1',
        section: 'A',
        attendance: [
            { date: new Date(2024, 9, 1), isPresent: true }, // October is month 9 (0-indexed)
            { date: new Date(), isPresent: false },
        ],
    },
    {
        name: 'Jane Smith',
        grade: '1',
        section: 'A',
        attendance: [
            { date: new Date(2024, 9, 1), isPresent: false },
            { date: new Date(), isPresent: true },
        ],
    },
    {
        name: 'Alice Johnson',
        grade: '1',
        section: 'B',
        attendance: [
            { date: new Date(2024, 9, 1), isPresent: true },
            { date: new Date(), isPresent: true },
        ],
    },
    {
        name: 'Bob Brown',
        grade: '1',
        section: 'B',
        attendance: [
            { date: new Date(2024, 9, 1), isPresent: true },
            { date: new Date(), isPresent: false },
        ],
    },
    {
        name: 'Charlie White',
        grade: '2',
        section: 'A',
        attendance: [
            { date: new Date(2024, 9, 1), isPresent: false },
            { date: new Date(), isPresent: true },
        ],
    },
    {
        name: 'David Black',
        grade: '2',
        section: 'A',
        attendance: [
            { date: new Date(2024, 9, 1), isPresent: true },
            { date: new Date(), isPresent: true },
        ],
    },
    // Add more students as needed
];

const AttendanceManagement = () => {
    const [searchName, setSearchName] = useState('');
    const [searchGrade, setSearchGrade] = useState('');
    const [searchSection, setSearchSection] = useState('');
    const [searchDate, setSearchDate] = useState(new Date().toISOString().split("T")[0]); // Set default date to today
    const [students, setStudents] = useState(attendanceData);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    // Filter the students based on search criteria
    const filteredStudents = students.filter(student => {
        const nameMatch = student.name.toLowerCase().includes(searchName.toLowerCase());
        const gradeMatch = student.grade.toLowerCase().includes(searchGrade.toLowerCase());
        const sectionMatch = student.section.toLowerCase().includes(searchSection.toLowerCase());
        const dateMatch = student.attendance.some(record =>
            record.date.toISOString().split("T")[0] === searchDate
        );

        return nameMatch && gradeMatch && sectionMatch && dateMatch;
    });

    // Handle "Select All" functionality
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedStudents([]);
        } else {
            const allStudentIndices = filteredStudents.map((_, index) => index);
            setSelectedStudents(allStudentIndices);
        }
        setSelectAll(!selectAll);
    };

    // Handle individual checkbox selection
    const handleStudentSelect = (index) => {
        if (selectedStudents.includes(index)) {
            setSelectedStudents(selectedStudents.filter(i => i !== index));
        } else {
            setSelectedStudents([...selectedStudents, index]);
        }
    };

    // Function to toggle attendance status for selected students
    const updateAttendance = (status) => {
        const updatedStudents = [...students];
        selectedStudents.forEach((studentIndex) => {
            const student = updatedStudents[studentIndex];
            student.attendance.forEach(record => {
                if (record.date.toISOString().split("T")[0] === searchDate) {
                    record.isPresent = status; // Mark as present/absent
                    toast.info(`${student.name}'s attendance on ${searchDate} is updated to ${status ? 'Present' : 'Absent'}`);
                }
            });
        });
        setStudents(updatedStudents);
        setSelectedStudents([]); // Clear selection after update
        setSelectAll(false); // Uncheck "Select All" after update
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-6">Attendance Management</h1>

            {/* Search Box */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="p-2 rounded border border-gray-300"
                />
                <input
                    type="text"
                    placeholder="Search by Grade"
                    value={searchGrade}
                    onChange={(e) => setSearchGrade(e.target.value)}
                    className="p-2 rounded border border-gray-300"
                />
                <input
                    type="text"
                    placeholder="Search by Section"
                    value={searchSection}
                    onChange={(e) => setSearchSection(e.target.value)}
                    className="p-2 rounded border border-gray-300"
                />
                <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="p-2 rounded border border-gray-300"
                />
            </div>

            {/* Action Buttons for Bulk Update */}
            {selectedStudents.length > 0 && (
                <div className="w-full flex justify-end gap-4 mt-4">
                    <button
                        className='px-4 py-2 border border-[#282934] text-[#282934] rounded-lg hover:text-white hover:bg-[#282934]'
                        onClick={() => updateAttendance(true)}
                    >
                        Mark Present
                    </button>
                    <button
                        className='px-4 py-2 border border-[#282934] text-[#282934] rounded-lg hover:text-white hover:bg-[#282934]'
                        onClick={() => updateAttendance(false)}
                    >
                        Mark Absent
                    </button>
                </div>
            )}

            {/* Student List with Multi-Select Option */}
            <div className="space-y-4 shadow-md shadow-[#282934] p-2  rounded-lg mt-4">
                {filteredStudents.length > 0 ? (
                    <>
                        {/* Select All Header */}
                        <div className="bg-gray-200 px-4 py-1 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    className="form-checkbox h-3 w-3 text-blue-600"
                                />
                                <h2 className="text-lg font-semibold">Select All</h2>
                            </div>
                        </div>

                        {/* Student Rows */}
                        {filteredStudents.map((student, index) => (
                            <div key={index} className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedStudents.includes(index)}
                                        onChange={() => handleStudentSelect(index)}
                                        className="form-checkbox h-3 w-3 text-blue-600"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold">{student.name}</h2>
                                        <p className='text-sm'>{`Grade: ${student.grade}, Section: ${student.section}`}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {student.attendance.map((record, idx) => (
                                        record.date.toISOString().split("T")[0] === searchDate && (
                                            <span key={idx} className="flex items-center">
                                                {record.isPresent ? (
                                                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full border border-green-200">
                                                        Present
                                                    </span>
                                                ) : (
                                                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full border border-red-200">
                                                        Absent
                                                    </span>
                                                )}
                                            </span>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No students found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default AttendanceManagement;
