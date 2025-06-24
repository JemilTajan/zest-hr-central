
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Dashboard from '@/components/pages/Dashboard';
import EmployeeProfiles from '@/components/pages/EmployeeProfiles';
import DocumentManagement from '@/components/pages/DocumentManagement';
import AttendanceLeave from '@/components/pages/AttendanceLeave';
import PerformanceManagement from '@/components/pages/PerformanceManagement';
import TrainingDevelopment from '@/components/pages/TrainingDevelopment';
import UserRolesAccess from '@/components/pages/UserRolesAccess';
import Compliance from '@/components/pages/Compliance';
import ReportsAnalytics from '@/components/pages/ReportsAnalytics';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [userRole] = useState('admin'); // This would come from auth context
  const [userName] = useState('Admin User'); // This would come from auth context

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard userRole={userRole} />;
      case 'employees':
        return <EmployeeProfiles />;
      case 'documents':
        return <DocumentManagement />;
      case 'attendance':
        return <AttendanceLeave />;
      case 'performance':
        return <PerformanceManagement />;
      case 'training':
        return <TrainingDevelopment />;
      case 'access':
        return <UserRolesAccess />;
      case 'compliance':
        return <Compliance />;
      case 'reports':
        return <ReportsAnalytics />;
      default:
        return <Dashboard userRole={userRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="flex h-screen">
        <Sidebar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          userRole={userRole}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header userRole={userRole} userName={userName} />
          <main className="flex-1 overflow-y-auto p-6">
            {renderCurrentPage()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
