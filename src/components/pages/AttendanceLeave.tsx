
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Plus, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const AttendanceLeave = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('all');

  const attendanceData = [
    { date: '2024-03-15', employee: 'John Smith', checkIn: '09:00', checkOut: '17:30', hours: '8.5', status: 'Present' },
    { date: '2024-03-15', employee: 'Sarah Johnson', checkIn: '08:45', checkOut: '17:15', hours: '8.5', status: 'Present' },
    { date: '2024-03-15', employee: 'Mike Chen', checkIn: '-', checkOut: '-', hours: '0', status: 'On Leave' },
  ];

  const leaveRequests = [
    {
      id: 1,
      employee: 'John Smith',
      type: 'Vacation',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      days: 3,
      reason: 'Family vacation',
      status: 'Pending',
      appliedDate: '2024-03-10'
    },
    {
      id: 2,
      employee: 'Sarah Johnson',
      type: 'Sick Leave',
      startDate: '2024-03-18',
      endDate: '2024-03-18',
      days: 1,
      reason: 'Medical appointment',
      status: 'Approved',
      appliedDate: '2024-03-15'
    },
    {
      id: 3,
      employee: 'Mike Chen',
      type: 'Personal',
      startDate: '2024-03-25',
      endDate: '2024-03-26',
      days: 2,
      reason: 'Personal matters',
      status: 'Rejected',
      appliedDate: '2024-03-12'
    }
  ];

  const leaveBalances = [
    { employee: 'John Smith', vacation: 15, sick: 10, personal: 5 },
    { employee: 'Sarah Johnson', vacation: 20, sick: 12, personal: 3 },
    { employee: 'Mike Chen', vacation: 18, sick: 8, personal: 7 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Rejected': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Pending': return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Present': return 'bg-green-100 text-green-800';
      case 'On Leave': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Attendance & Leave Management</h2>
          <p className="text-gray-600">Track daily attendance and manage leave requests</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Request Leave</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Request Leave</DialogTitle>
              <DialogDescription>Submit a new leave request</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="leaveType">Leave Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vacation">Vacation</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="personal">Personal Leave</SelectItem>
                    <SelectItem value="emergency">Emergency Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason</Label>
                <Textarea id="reason" placeholder="Please provide a reason for your leave request" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Submit Request</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="attendance" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="attendance">Daily Attendance</TabsTrigger>
          <TabsTrigger value="requests">Leave Requests</TabsTrigger>
          <TabsTrigger value="balances">Leave Balances</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Today's Attendance - March 15, 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Employee</th>
                      <th className="text-left p-3">Check In</th>
                      <th className="text-left p-3">Check Out</th>
                      <th className="text-left p-3">Hours</th>
                      <th className="text-left p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((record, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{record.employee}</td>
                        <td className="p-3">{record.checkIn}</td>
                        <td className="p-3">{record.checkOut}</td>
                        <td className="p-3">{record.hours}</td>
                        <td className="p-3">
                          <Badge className={getStatusColor(record.status)}>
                            {record.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <div className="space-y-4">
            {leaveRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{request.employee}</h3>
                        <Badge variant="outline">{request.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {request.startDate} to {request.endDate} ({request.days} days)
                      </p>
                      <p className="text-sm text-gray-500">{request.reason}</p>
                      <p className="text-xs text-gray-400">Applied: {request.appliedDate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(request.status)}
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                      {request.status === 'Pending' && (
                        <div className="space-x-2">
                          <Button variant="outline" size="sm" className="text-green-600 border-green-600">
                            Approve
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="balances" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaveBalances.map((balance, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{balance.employee}</CardTitle>
                  <CardDescription>Available leave days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Vacation Days</span>
                    <Badge variant="outline">{balance.vacation} days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sick Leave</span>
                    <Badge variant="outline">{balance.sick} days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Personal Leave</span>
                    <Badge variant="outline">{balance.personal} days</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceLeave;
