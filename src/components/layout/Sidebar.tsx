
import React from 'react';
import { 
  Users, 
  FileText, 
  Clock, 
  TrendingUp, 
  GraduationCap, 
  Shield, 
  CheckSquare, 
  BarChart3,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  userRole: string;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, roles: ['admin', 'hr', 'manager', 'employee'] },
  { id: 'employees', label: 'Employee Profiles', icon: Users, roles: ['admin', 'hr', 'manager'] },
  { id: 'documents', label: 'Document Management', icon: FileText, roles: ['admin', 'hr', 'manager', 'employee'] },
  { id: 'attendance', label: 'Attendance & Leave', icon: Clock, roles: ['admin', 'hr', 'manager', 'employee'] },
  { id: 'performance', label: 'Performance Management', icon: TrendingUp, roles: ['admin', 'hr', 'manager', 'employee'] },
  { id: 'training', label: 'Training & Development', icon: GraduationCap, roles: ['admin', 'hr', 'manager', 'employee'] },
  { id: 'access', label: 'User Roles & Access', icon: Shield, roles: ['admin', 'hr'] },
  { id: 'compliance', label: 'Compliance', icon: CheckSquare, roles: ['admin', 'hr', 'manager'] },
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3, roles: ['admin', 'hr', 'manager'] },
];

const Sidebar = ({ currentPage, onPageChange, userRole }: SidebarProps) => {
  const filteredItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <aside className="w-64 bg-gray-900 text-white h-full">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">ERMS Navigation</h2>
        <nav className="space-y-2">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left",
                  currentPage === item.id 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )}
                onClick={() => onPageChange(item.id)}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
