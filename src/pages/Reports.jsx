import { BsFillBarChartFill, BsFillPersonLinesFill, BsFillFileTextFill, BsFillCheckCircleFill } from 'react-icons/bs';

const reportsData = [
    {
        title: 'Student Performance Reports',
        description: 'Overview of student grades and attendance.',
        icon: <BsFillBarChartFill />,
    },
    {
        title: 'Fee Management Reports',
        description: 'Details of fee collection and payment history.',
        icon: <BsFillFileTextFill />,
    },
    {
        title: 'Class and Section Reports',
        description: 'Enrollment and teacher assignment details.',
        icon: <BsFillPersonLinesFill />,
    },
    {
        title: 'Attendance Reports',
        description: 'Summary and logs of student attendance.',
        icon: <BsFillCheckCircleFill />,
    },
    {
        title: 'Behavior and Discipline Reports',
        description: 'Tracking of disciplinary actions and behavior trends.',
        icon: <BsFillBarChartFill />,
    },
    {
        title: 'Curriculum and Academic Performance',
        description: 'Effectiveness of the curriculum based on performance.',
        icon: <BsFillFileTextFill />,
    },
    {
        title: 'Staff Management Reports',
        description: 'Attendance and professional development for staff.',
        icon: <BsFillPersonLinesFill />,
    },
    {
        title: 'General Operational Reports',
        description: 'Trends in student enrollment and resource utilization.',
        icon: <BsFillCheckCircleFill />,
    },
    {
        title: 'Feedback and Surveys',
        description: 'Analysis of parent and student feedback.',
        icon: <BsFillBarChartFill />,
    },
    {
        title: 'Financial Reports',
        description: 'Overview of budget and fundraising activities.',
        icon: <BsFillFileTextFill />,
    },
];

const Reports = () => {
    return (
        <div className="min-h-screen text-primary-dark-charcoal p-6">
            <h1 className="text-2xl font-bold mb-6">Reports</h1>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reportsData.map((report, index) => (
                    <div key={index} className="bg-primary-light-gray dark:bg-[#282934] rounded-lg shadow-md p-4 flex flex-col items-center">
                        <div className="text-4xl text-blue-500 mb-4">{report.icon}</div>
                        <h2 className="text-xl font-semibold">{report.title}</h2>
                        <p className="text-center mt-2">{report.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
