
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, FileText, AlertTriangle, Download, Search, Calendar, User } from 'lucide-react';

const DocumentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const documents = [
    {
      id: 1,
      name: 'Employment Contract - John Smith',
      type: 'Contract',
      employee: 'John Smith',
      uploadDate: '2024-01-15',
      expiryDate: '2025-01-15',
      status: 'Active',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Driver License - Sarah Johnson',
      type: 'ID Document',
      employee: 'Sarah Johnson',
      uploadDate: '2024-02-10',
      expiryDate: '2024-04-15',
      status: 'Expiring Soon',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'PMP Certification - Mike Chen',
      type: 'Certification',
      employee: 'Mike Chen',
      uploadDate: '2024-01-20',
      expiryDate: '2024-03-20',
      status: 'Expired',
      size: '3.1 MB'
    },
    {
      id: 4,
      name: 'Background Check - John Smith',
      type: 'Background Check',
      employee: 'John Smith',
      uploadDate: '2024-01-10',
      expiryDate: null,
      status: 'Active',
      size: '1.2 MB'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expiring Soon': return 'bg-yellow-100 text-yellow-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.employee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Document Management</h2>
          <p className="text-gray-600">Upload, store, and manage employee documents</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Upload Document</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload New Document</DialogTitle>
              <DialogDescription>Add a new document to the system</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="employee">Employee</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select employee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="mike">Mike Chen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="docType">Document Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contract">Employment Contract</SelectItem>
                    <SelectItem value="id">ID Document</SelectItem>
                    <SelectItem value="certification">Certification</SelectItem>
                    <SelectItem value="background">Background Check</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                <Input id="file" type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date (if applicable)</Label>
                <Input id="expiry" type="date" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Upload Document</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Alert Section */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center text-yellow-800">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Document Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-yellow-700">• 1 document expiring within 30 days</p>
            <p className="text-sm text-yellow-700">• 1 document has expired and needs renewal</p>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
            <SelectItem value="ID Document">ID Document</SelectItem>
            <SelectItem value="Certification">Certification</SelectItem>
            <SelectItem value="Background Check">Background Check</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{doc.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {doc.employee}
                      </span>
                      <span>{doc.size}</span>
                      <span>Uploaded: {doc.uploadDate}</span>
                      {doc.expiryDate && (
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          Expires: {doc.expiryDate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(doc.status)}>
                    {doc.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentManagement;
