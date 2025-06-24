
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
import { CheckSquare, FileText, Activity, AlertTriangle, Plus, Download, Eye } from 'lucide-react';

const Compliance = () => {
  const auditLogs = [
    {
      id: 1,
      action: 'Employee Profile Updated',
      user: 'Sarah Johnson',
      target: 'John Smith',
      timestamp: '2024-03-15 14:30:25',
      details: 'Updated contact information',
      category: 'Data Modification'
    },
    {
      id: 2,
      action: 'Document Downloaded',
      user: 'Mike Chen',
      target: 'Employment Contract - Lisa Wang',
      timestamp: '2024-03-15 13:45:12',
      details: 'Downloaded employment contract',
      category: 'Document Access'
    },
    {
      id: 3,
      action: 'Performance Review Created',
      user: 'Sarah Johnson',
      target: 'Mike Chen',
      timestamp: '2024-03-15 11:20:30',
      details: 'Q1 2024 performance review initiated',
      category: 'Performance Management'
    },
    {
      id: 4,
      action: 'User Role Modified',
      user: 'John Smith',
      target: 'Lisa Wang',
      timestamp: '2024-03-15 09:15:45',
      details: 'Changed role from Employee to Department Manager',
      category: 'Access Control'
    }
  ];

  const policies = [
    {
      id: 1,
      title: 'Data Privacy Policy',
      version: '2.1',
      lastUpdated: '2024-02-15',
      status: 'Active',
      acknowledgments: 245,
      pending: 2,
      category: 'Privacy'
    },
    {
      id: 2,
      title: 'Code of Conduct',
      version: '1.5',
      lastUpdated: '2024-01-20',
      status: 'Active',
      acknowledgments: 247,
      pending: 0,
      category: 'Ethics'
    },
    {
      id: 3,
      title: 'Remote Work Policy',
      version: '1.2',
      lastUpdated: '2024-03-01',
      status: 'Active',
      acknowledgments: 180,
      pending: 67,
      category: 'Workplace'
    },
    {
      id: 4,
      title: 'Information Security Guidelines',
      version: '3.0',
      lastUpdated: '2024-02-28',
      status: 'Pending Review',
      acknowledgments: 0,
      pending: 247,
      category: 'Security'
    }
  ];

  const complianceChecks = [
    {
      id: 1,
      category: 'Document Compliance',
      description: 'All employees have valid ID documents',
      status: 'Warning',
      compliant: 245,
      total: 247,
      lastCheck: '2024-03-15',
      issues: ['2 employees have expired IDs']
    },
    {
      id: 2,
      category: 'Training Compliance',
      description: 'Annual mandatory training completion',
      status: 'Good',
      compliant: 240,
      total: 247,
      lastCheck: '2024-03-14',
      issues: ['7 employees pending completion']
    },
    {
      id: 3,
      category: 'Policy Acknowledgment',
      description: 'Current policy acknowledgments',
      status: 'Critical',
      compliant: 180,
      total: 247,
      lastCheck: '2024-03-15',
      issues: ['67 employees haven\'t acknowledged Remote Work Policy']
    },
    {
      id: 4,
      category: 'Performance Reviews',
      description: 'Timely performance review completion',
      status: 'Good',
      compliant: 235,
      total: 247,
      lastCheck: '2024-03-12',
      issues: ['12 reviews overdue']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Warning': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Pending Review': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Data Modification': 'bg-blue-100 text-blue-800',
      'Document Access': 'bg-purple-100 text-purple-800',
      'Performance Management': 'bg-green-100 text-green-800',
      'Access Control': 'bg-red-100 text-red-800',
      'Privacy': 'bg-blue-100 text-blue-800',
      'Ethics': 'bg-green-100 text-green-800',
      'Workplace': 'bg-yellow-100 text-yellow-800',
      'Security': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Compliance Management</h2>
          <p className="text-gray-600">Monitor audit trails, policies, and compliance status</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Policy</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Policy</DialogTitle>
              <DialogDescription>Create a new compliance policy</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="policyTitle">Policy Title</Label>
                <Input id="policyTitle" placeholder="Enter policy title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="policyCategory">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="privacy">Privacy</SelectItem>
                    <SelectItem value="ethics">Ethics</SelectItem>
                    <SelectItem value="workplace">Workplace</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="policyVersion">Version</Label>
                <Input id="policyVersion" placeholder="e.g., 1.0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="policyContent">Policy Content</Label>
                <Textarea id="policyContent" placeholder="Enter policy content or upload document" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Create Policy</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Compliance Overview</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          <TabsTrigger value="policies">Policy Management</TabsTrigger>
          <TabsTrigger value="reports">Compliance Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceChecks.map((check) => (
              <Card key={check.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{check.category}</CardTitle>
                      <CardDescription>{check.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(check.status)}>
                      {check.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Compliance Rate</span>
                      <span className="font-medium">
                        {check.compliant}/{check.total} ({Math.round((check.compliant / check.total) * 100)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          check.status === 'Good' ? 'bg-green-500' :
                          check.status === 'Warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${(check.compliant / check.total) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Issues:</p>
                    {check.issues.map((issue, index) => (
                      <p key={index} className="text-xs text-red-600 flex items-center">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        {issue}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Last checked: {check.lastCheck}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                System Audit Trail
              </CardTitle>
              <CardDescription>Complete log of system activities and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {auditLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium">{log.action}</h4>
                        <Badge className={getCategoryColor(log.category)} variant="outline">
                          {log.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">{log.user}</span> → {log.target}
                      </p>
                      <p className="text-xs text-gray-500">{log.details}</p>
                      <p className="text-xs text-gray-400">{log.timestamp}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline">Load More Entries</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-4">
          <div className="space-y-4">
            {policies.map((policy) => (
              <Card key={policy.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold">{policy.title}</h3>
                        <Badge variant="outline">v{policy.version}</Badge>
                        <Badge className={getCategoryColor(policy.category)}>
                          {policy.category}
                        </Badge>
                        <Badge className={getStatusColor(policy.status)}>
                          {policy.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <span>Last updated: {policy.lastUpdated}</span>
                        <span>Acknowledged: {policy.acknowledgments}/{policy.acknowledgments + policy.pending}</span>
                        {policy.pending > 0 && (
                          <span className="text-orange-600 font-medium">
                            {policy.pending} pending acknowledgments
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      {policy.pending > 0 && (
                        <Button size="sm">
                          Send Reminders
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" />
                  Policy Compliance Report
                </CardTitle>
                <CardDescription>Employee policy acknowledgment status</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Generate Report</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Activity className="mr-2 h-5 w-5 text-green-600" />
                  Audit Activity Report
                </CardTitle>
                <CardDescription>System access and modification logs</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Generate Report</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <CheckSquare className="mr-2 h-5 w-5 text-purple-600" />
                  Compliance Summary
                </CardTitle>
                <CardDescription>Overall compliance status across all areas</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Generate Report</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Custom Report Builder</CardTitle>
              <CardDescription>Create custom compliance reports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Report Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="policy">Policy Compliance</SelectItem>
                      <SelectItem value="audit">Audit Trail</SelectItem>
                      <SelectItem value="document">Document Compliance</SelectItem>
                      <SelectItem value="training">Training Compliance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="quarter">This quarter</SelectItem>
                      <SelectItem value="year">This year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button>Generate Custom Report</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Compliance;
