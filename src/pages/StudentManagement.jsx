import { useState } from 'react';
import {
    BsPersonPlusFill,
    BsFileEarmarkExcelFill,
    BsPencilSquare,
    BsPeopleFill,
    BsClockFill,
    BsCurrencyDollar,
    BsTrashFill,
} from 'react-icons/bs';
import { toast } from 'react-toastify';

const StudentManagement = () => {
    const students = [
        { id: 1, name: 'John Doe', class: 'Grade 5', section: 'A', attendance: '95%', feesPaid: 1500 },
        { id: 2, name: 'Jane Smith', class: 'Grade 6', section: 'B', attendance: '90%', feesPaid: 500 },
    ]

    const [searchFilters, setSearchFilters] = useState({
        name: '',
        class: '',
        section: '',
        attendance: '',
        feesPaid: ''
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(5);

    const handleAddStudent = () => {
        toast.info('Add new student form will appear here.');
    };

    const handleEditStudent = (id) => {
        toast.info(`Edit student with ID ${id}.`);
    };

    const handleDeleteStudent = (id) => {
        toast.info(`Delete student with ID ${id}.`);
    };

    const handleExportStudents = () => {
        toast.info('Exporting student data as Excel.');
    };

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchFilters({
            ...searchFilters,
            [name]: value,
        });
    };

    const filteredStudents = students.filter((student) => {
        return (
            (searchFilters.name === '' || student.name.toLowerCase().includes(searchFilters.name.toLowerCase())) &&
            (searchFilters.class === '' || student.class.toLowerCase().includes(searchFilters.class.toLowerCase())) &&
            (searchFilters.section === '' || student.section.toLowerCase().includes(searchFilters.section.toLowerCase())) &&
            (searchFilters.attendance === '' || student.attendance.includes(searchFilters.attendance)) &&
            (searchFilters.feesPaid === '' || student.feesPaid >= Number(searchFilters.feesPaid))
        );
    });

    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-4 md:p-6 min-h-full flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#051160] dark:text-[#9da6e6] mb-8 text-center">Student Management</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-[#2c2e3a] p-6 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-600 dark:text-gray-300">Total Students</h2>
                        <p className="text-4xl font-semibold text-blue-500">{students.length}</p>
                    </div>
                    <BsPeopleFill className="text-4xl text-blue-500" />
                </div>
                <div className="bg-white dark:bg-[#2c2e3a] p-6 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-600 dark:text-gray-300">Fees Paid</h2>
                        <p className="text-4xl font-semibold text-green-500">{students.filter(student => student.feesPaid > 0).length}</p>
                    </div>
                    <BsCurrencyDollar className="text-4xl text-green-500" />
                </div>
                <div className="bg-white dark:bg-[#2c2e3a] p-6 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-600 dark:text-gray-300">Avg Attendance</h2>
                        <p className="text-4xl font-semibold text-blue-500">92%</p>
                    </div>
                    <BsClockFill className="text-4xl text-blue-500" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-6">
                <button
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 flex items-center gap-2"
                    onClick={handleAddStudent}
                >
                    <BsPersonPlusFill size={24} />
                    Add New Student
                </button>
                <button
                    className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 flex items-center gap-2"
                    onClick={handleExportStudents}
                >
                    <BsFileEarmarkExcelFill size={24} />
                    Export as Excel
                </button>
            </div>

            {/* Search Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input
                    type="text"
                    name="name"
                    value={searchFilters.name}
                    onChange={handleSearchChange}
                    placeholder="Search by Name"
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent outline-none"
                />
                <input
                    type="text"
                    name="class"
                    value={searchFilters.class}
                    onChange={handleSearchChange}
                    placeholder="Search by Class"
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent outline-none"
                />
                <input
                    type="text"
                    name="section"
                    value={searchFilters.section}
                    onChange={handleSearchChange}
                    placeholder="Search by Section"
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent outline-none"
                />
                <input
                    type="text"
                    name="attendance"
                    value={searchFilters.attendance}
                    onChange={handleSearchChange}
                    placeholder="Search by Attendance"
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent outline-none"
                />
                <input
                    type="number"
                    name="feesPaid"
                    value={searchFilters.feesPaid}
                    onChange={handleSearchChange}
                    placeholder="Min Fees Paid"
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent outline-none"
                />
            </div>

            {/* Student Table */}
            <div className="overflow-auto shadow-lg rounded-lg mb-6">
                <table className="min-w-full bg-white dark:bg-[#2c2e3a]">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-[#282934] text-left text-black dark:text-white font-semibold">
                            <th className="p-4">Name</th>
                            <th className="p-4">Class</th>
                            <th className="p-4">Section</th>
                            <th className="p-4">Attendance</th>
                            <th className="p-4">Fees Paid (QAR)</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentStudents.map((student) => (
                            <tr key={student.id} className="border-b border-gray-300 dark:border-gray-600">
                                <td className="p-4">{student.name}</td>
                                <td className="p-4">{student.class}</td>
                                <td className="p-4">{student.section}</td>
                                <td className="p-4">{student.attendance}</td>
                                <td className="p-4">{student.feesPaid}</td>
                                <td className="p-4 flex space-x-4">
                                    <button
                                        className="text-blue-500 dark:text-blue-400 hover:underline"
                                        onClick={() => handleEditStudent(student.id)}
                                    >
                                        <BsPencilSquare />
                                    </button>
                                    <button
                                        className="text-red-500 dark:text-red-400 hover:underline"
                                        onClick={() => handleDeleteStudent(student.id)}
                                    >
                                        <BsTrashFill />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
                <button
                    className={`py-2 px-4 rounded-lg text-white ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <p className="text-gray-600 dark:text-gray-300">Page {currentPage} of {totalPages}</p>
                <button
                    className={`py-2 px-4 rounded-lg text-white ${currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default StudentManagement;
