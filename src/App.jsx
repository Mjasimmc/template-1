"use client"; // Ensure this is at the top of your file

// app/layout.js (or app/layout.tsx)
import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Import your page components here
import Dashboard from './pages/Dashboard';
import StudentManagement from './pages/StudentManagement.jsx';
import StaffManagement from './pages/StaffManagement.jsx';
import AttendanceManagement from './pages/AttendanceManagement.jsx';
import ClassGradeManagement from './pages/ClassGradeManagement.jsx';
import FeeManagement from './pages/FeeManagement.jsx';
import ExamMarksManagement from './pages/ExamMarksManagement.jsx';
import DynamicForms from './pages/DynamicForms.jsx';
import Reports from './pages/Reports.jsx';
import Settings from './pages/Settings.jsx';
import SingleStudent from './pages/SingleStudent.jsx'; // For single page view of a student

/**
 * Main Layout component for the application
 * @returns {JSX.Element} The layout component
 */
const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    /**
     * Toggles the sidebar open state
     */
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <div className="flex min-h-screen bg-white dark:bg-black min-w-[350px]">
                        <Sidebar isOpen={isSidebarOpen} />
                        <div className="flex-1 flex flex-col h-screen overflow-hidden">
                            <Header toggleSidebar={toggleSidebar} username="User" />
                            <main className="flex-1 overflow-auto ">
                                <div className='min-h-full  bg-gradient-to-b from-[#f1f2fb] via-[#f1f9fb]  to-[#f1f2fb] dark:bg-gradient-to-b dark:from-[#030629] dark:via-[#141619] dark:to-[#282934] text-black dark:text-gray-100 min-w-full overflow-hidden flex flex-col'>
                                    <Outlet />
                                </div>
                            </main>
                        </div>
                    </div>
                }>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/students" element={<StudentManagement />} />
                    <Route path="/students/:id" element={<SingleStudent />} /> {/* For individual student details */}
                    <Route path="/staff" element={<StaffManagement />} />
                    <Route path="/attendance" element={<AttendanceManagement />} />
                    <Route path="/classes-grades" element={<ClassGradeManagement />} />
                    <Route path="/fees" element={<FeeManagement />} />
                    <Route path="/exams-marks" element={<ExamMarksManagement />} />
                    <Route path="/dynamic-forms" element={<DynamicForms />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/*" element={"Page Not Found"} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Layout;
