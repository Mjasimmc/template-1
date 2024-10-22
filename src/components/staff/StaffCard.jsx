
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs';

const StaffCard = ({ teacher, onEdit, onDelete }) => {
    return (
        <div className="bg-[#eaeaeb] dark:bg-[#2c2e3a] rounded-xl shadow-lg p-6 border border-[#b3b4bd] dark:border-[#696c8f] hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-[#282934] dark:text-white">
                        {teacher.name}
                    </h2>
                    <span className="text-[#696c8f] dark:text-[#9da6e6]">{teacher.email}</span>
                </div>
                <div className="flex space-x-4">
                    <button
                        className="text-[#282934] dark:text-white hover:underline"
                        onClick={() => onEdit(teacher.id)}
                    >
                        <BsPencilSquare className="inline mr-1" /> Edit
                    </button>
                    <button
                        className="text-red-500 hover:underline"
                        onClick={() => onDelete(teacher.id)}
                    >
                        <BsTrashFill className="inline mr-1" /> Delete
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold text-[#282934] dark:text-white mb-4">Subjects:</label>
                <div className="flex flex-wrap gap-2 mb-4 ml-4">
                    {teacher.subjects.map((subject, index) => (
                        <span
                            key={index}
                            className="bg-[#e5f7ff] dark:bg-[#3a3b4a] border border-[#040513] dark:border-[#696c8f] rounded-lg px-4 py-[2px] text-sm"
                        >
                            {subject}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold text-[#282934] dark:text-white">Classes In Charge:</label>
                {teacher.classesInCharge.map((classInfo, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-2 ml-4">
                        <span className="text-[#282934] dark:text-white">
                            {classInfo.grade} - {classInfo.section}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default StaffCard;
