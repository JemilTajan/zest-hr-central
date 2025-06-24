
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileCheck, Clock, TrendingUp, AlertCircle, Calendar } from 'lucide-react';

interface DashboardProps {
  userRole: string;
}

const Dashboard = ({ userRole }: DashboardProps) => {
  const stats = [
    { title: 'Total Employees', value: '247', icon: Users, color: 'text-blue-600' },
    { title: 'Pending Documents', value: '12', icon: FileCheck, color: 'text-orange-600' },
    { title: 'Leave Requests', value: '8', icon: Clock, color: 'text-green-600' },
    { title: 'Performance Reviews Due', value: '15', icon: TrendingUp, color: 'text-purple-600' },
  ];

  const alerts = [
    { message: '5 employee IDs expiring this month', type: 'warning' },
    { message: '3 certifications need renewal', type: 'error' },
    { message: 'Monthly performance reviews starting next week', type: 'info' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600">Overview of your employee records management system</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-yellow-600" />
              Important Alerts
            </CardTitle>
            <CardDescription>Items requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                  alert.type === 'error' ? 'border-red-500 bg-red-50' :
                  'border-blue-500 bg-blue-50'
                }`}>
                  <p className="text-sm">{alert.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-blue-600" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 border-b">
                <span className="text-sm">Q1 Performance Reviews</span>
                <span className="text-xs text-gray-500">March 15</span>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <span className="text-sm">Annual Training Compliance</span>
                <span className="text-xs text-gray-500">March 30</span>
              </div>
              <div className="flex justify-between items-center p-2">
                <span className="text-sm">Benefits Enrollment Period</span>
                <span className="text-xs text-gray-500">April 1</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
