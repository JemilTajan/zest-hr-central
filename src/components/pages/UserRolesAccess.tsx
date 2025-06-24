
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Shield, Users, Key, Settings, Plus, Edit, Trash2 } from 'lucide-react';

const UserRolesAccess = () => {
  const roles = [
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access with all administrative privileges',
      users: 2,
      permissions: ['All Modules', 'User Management', 'System Settings', 'Reports'],
      color: 'bg-red-100 text-red-800'
    },
    {
      id: 2,
      name: 'HR Manager',
      description: 'Human Resources management with employee data access',
      users: 3,
      permissions: ['Employee Profiles', 'Documents', 'Performance', 'Training', 'Compliance'],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 3,
      name: 'Department Manager',
      description: 'Limited management access for department oversight',
      users: 5,
      permissions: ['Team Performance', 'Attendance', 'Leave Approval', 'Training'],
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 4,
      name: 'Employee',
      description: 'Basic employee self-service access',
      users: 237,
      permissions: ['Own Profile', 'Leave Requests', 'Training', 'Documents'],
      color: 'bg-gray-100 text-gray-800'
    }
  ];

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@company.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-03-15 09:30',
      department: 'IT'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      role: 'HR Manager',
      status: 'Active',
      lastLogin: '2024-03-15 08:45',
      department: 'Human Resources'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      role: 'Department Manager',
      status: 'Active',
      lastLogin: '2024-03-14 17:20',
      department: 'Marketing'
    },
    {
      id: 4,
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      role: 'Employee',
      status: 'Inactive',
      lastLogin: '2024-03-10 14:15',
      department: 'Engineering'
    }
  ];

  const permissions = [
    { module: 'Employee Profiles', admin: true, hr: true, manager: false, employee: false },
    { module: 'Document Management', admin: true, hr: true, manager: false, employee: true },
    { module: 'Attendance & Leave', admin: true, hr: true, manager: true, employee: true },
    { module: 'Performance Management', admin: true, hr: true, manager: true, employee: true },
    { module: 'Training & Development', admin: true, hr: true, manager: true, employee: true },
    { module: 'User Roles & Access', admin: true, hr: false, manager: false, employee: false },
    { module: 'Compliance', admin: true, hr: true, manager: true, employee: false },
    { module: 'Reports & Analytics', admin: true, hr: true, manager: true, employee: false },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">User Roles & Access Control</h2>
          <p className="text-gray-600">Manage user roles, permissions, and access levels</p>
        </div>
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Create Role</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Role</DialogTitle>
                <DialogDescription>Define a new user role with specific permissions</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="roleName">Role Name</Label>
                  <Input id="roleName" placeholder="Enter role name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="roleDescription">Description</Label>
                  <Input id="roleDescription" placeholder="Describe the role" />
                </div>
                <div className="space-y-2">
                  <Label>Permissions</Label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {permissions.map((perm, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{perm.module}</span>
                        <Switch />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create Role</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add User</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>Create a new user account</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="userName">Full Name</Label>
                  <Input id="userName" placeholder="Enter full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userEmail">Email Address</Label>
                  <Input id="userEmail" type="email" placeholder="user@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userRole">Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="hr">HR Manager</SelectItem>
                      <SelectItem value="manager">Department Manager</SelectItem>
                      <SelectItem value="employee">Employee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userDepartment">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create User</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="roles" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="permissions">Permissions Matrix</TabsTrigger>
        </TabsList>

        <TabsContent value="roles" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <Card key={role.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-5 w-5" />
                        <span>{role.name}</span>
                      </CardTitle>
                      <CardDescription>{role.description}</CardDescription>
                    </div>
                    <Badge className={role.color}>
                      {role.users} users
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Permissions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.map((permission, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <div className="space-y-4">
            {users.map((user) => (
              <Card key={user.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          <span>Department: {user.department}</span>
                          <span>Last login: {user.lastLogin}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{user.role}</Badge>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Key className="mr-2 h-4 w-4" />
                          Reset Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Permissions Matrix</CardTitle>
              <CardDescription>View and manage permissions for each role</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Module</th>
                      <th className="text-center p-3">Admin</th>
                      <th className="text-center p-3">HR Manager</th>
                      <th className="text-center p-3">Manager</th>
                      <th className="text-center p-3">Employee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {permissions.map((perm, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{perm.module}</td>
                        <td className="p-3 text-center">
                          <Switch checked={perm.admin} />
                        </td>
                        <td className="p-3 text-center">
                          <Switch checked={perm.hr} />
                        </td>
                        <td className="p-3 text-center">
                          <Switch checked={perm.manager} />
                        </td>
                        <td className="p-3 text-center">
                          <Switch checked={perm.employee} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserRolesAccess;
