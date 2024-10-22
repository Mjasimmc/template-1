import { useState } from 'react';
import { BsPersonPlusFill, BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import StaffCard from '../components/staff/StaffCard';
import DesignedCard from "../components/staff/DesignedCard"
// Sample data for teachers
const teachersData = [
    {
        id: 1,
        name: 'Alice Johnson',
        subjects: ['Math', 'Physics'],
        classesInCharge: [
            { grade: 'Grade 5', section: 'A' },
            { grade: 'Grade 5', section: 'B' },
        ],
        email: 'alice.johnson@example.com',
        phone: '+974 1234 5678',
        attendance: '98%',
    },
    {
        id: 2,
        name: 'Bob Smith',
        subjects: ['Chemistry', 'Biology'],
        classesInCharge: [
            { grade: 'Grade 6', section: 'A' },
            { grade: 'Grade 6', section: 'B' },
        ],
        email: 'bob.smith@example.com',
        phone: '+974 2345 6789',
        attendance: '95%',
    },
    {
        id: 3,
        name: 'Charlie Brown',
        subjects: ['English', 'History'],
        classesInCharge: [
            { grade: 'Grade 7', section: 'C' },
            { grade: 'Grade 7', section: 'D' },
        ],
        email: 'charlie.brown@example.com',
        phone: '+974 3456 7890',
        attendance: '97%',
    },
];

const StaffManagement = () => {
    const [teachers, setTeachers] = useState(teachersData);
    const [searchTerm, setSearchTerm] = useState('');
    const [cardDesign , setCardDesign] = useState(true)

    const handleAddTeacher = () => {
        toast.info('Add new teacher form will appear here.');
    };

    const handleEditTeacher = (id) => {
        toast.info(`Edit teacher with ID ${id}.`);
    };

    const handleDeleteTeacher = (id) => {
        setTeachers(teachers.filter((teacher) => teacher.id !== id));
        toast.success(`Teacher with ID ${id} deleted.`);
    };

    const filteredTeachers = teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 md:p-8 min-h-full flex-1">
            <h1 className="text-3xl font-bold text-[#282934] dark:text-white mb-8">
                Staff Management
            </h1>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-6">
                <button
                    className="bg-[#050a44] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#051160] flex items-center space-x-2 transition duration-300"
                    onClick={handleAddTeacher}
                >
                    <BsPersonPlusFill className="text-xl" />
                    <span className="font-semibold">Add New Teacher</span>
                </button>

                <div className="flex items-center border border-[#696c8f] dark:border-[#9da6e6] rounded-lg px-4 py-2">
                    <BsSearch className="text-[#696c8f] dark:text-[#9da6e6]" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search teacher"
                        className="outline-none bg-transparent pl-2 text-[#282934] dark:text-white placeholder-[#696c8f] dark:placeholder-[#9da6e6]"
                    />
                </div>
            </div>
            <div className="my-4">
                <button className='px-4 py-1 bg-[#050a44] text-white' onClick={()=>setCardDesign((prev)=>!prev)}>Change Design</button>
            </div>

            {/* Teacher List - Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTeachers.map((teacher) => (
                    cardDesign ? <StaffCard
                        key={teacher.id}
                        teacher={teacher}
                        onEdit={handleEditTeacher}
                        onDelete={handleDeleteTeacher}
                    /> :<DesignedCard
                    key={teacher.id}
                    teacher={teacher}
                    onEdit={handleEditTeacher}
                    onDelete={handleDeleteTeacher}
                />
                ))}
            </div>
        </div>
    );
};

export default StaffManagement;
