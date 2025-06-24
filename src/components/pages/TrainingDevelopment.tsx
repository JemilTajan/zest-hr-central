
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
import { Progress } from '@/components/ui/progress';
import { GraduationCap, BookOpen, Award, Plus, Calendar, CheckCircle } from 'lucide-react';

const TrainingDevelopment = () => {
  const trainingPrograms = [
    {
      id: 1,
      title: 'React Advanced Concepts',
      description: 'Deep dive into advanced React patterns and performance optimization',
      duration: '40 hours',
      category: 'Technical',
      status: 'Active',
      enrolled: 12,
      capacity: 20,
      instructor: 'John Smith',
      startDate: '2024-04-01'
    },
    {
      id: 2,
      title: 'Leadership Fundamentals',
      description: 'Essential skills for new managers and team leaders',
      duration: '24 hours',
      category: 'Leadership',
      status: 'Upcoming',
      enrolled: 8,
      capacity: 15,
      instructor: 'Sarah Johnson',
      startDate: '2024-04-15'
    },
    {
      id: 3,
      title: 'Data Privacy & Compliance',
      description: 'Understanding GDPR, data protection, and compliance requirements',
      duration: '16 hours',
      category: 'Compliance',
      status: 'Completed',
      enrolled: 25,
      capacity: 25,
      instructor: 'Mike Chen',
      startDate: '2024-02-01'
    }
  ];

  const employeeTraining = [
    {
      employee: 'John Smith',
      program: 'React Advanced Concepts',
      progress: 75,
      status: 'In Progress',
      startDate: '2024-04-01',
      expectedCompletion: '2024-04-30'
    },
    {
      employee: 'Sarah Johnson',
      program: 'Leadership Fundamentals',
      progress: 100,
      status: 'Completed',
      startDate: '2024-03-01',
      completionDate: '2024-03-25'
    },
    {
      employee: 'Mike Chen',
      program: 'Data Privacy & Compliance',
      progress: 45,
      status: 'In Progress',
      startDate: '2024-03-15',
      expectedCompletion: '2024-04-10'
    }
  ];

  const certifications = [
    {
      id: 1,
      employee: 'John Smith',
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      issueDate: '2023-06-15',
      expiryDate: '2026-06-15',
      status: 'Valid'
    },
    {
      id: 2,
      employee: 'Sarah Johnson',
      title: 'PMP Certification',
      issuer: 'Project Management Institute',
      issueDate: '2022-09-20',
      expiryDate: '2025-09-20',
      status: 'Valid'
    },
    {
      id: 3,
      employee: 'Mike Chen',
      title: 'Google Analytics Certified',
      issuer: 'Google',
      issueDate: '2023-01-10',
      expiryDate: '2024-01-10',
      status: 'Expired'
    }
  ];

  const skillsMatrix = [
    {
      employee: 'John Smith',
      skills: [
        { name: 'React', level: 4, target: 5 },
        { name: 'JavaScript', level: 5, target: 5 },
        { name: 'Leadership', level: 3, target: 4 },
        { name: 'Project Management', level: 2, target: 3 }
      ]
    },
    {
      employee: 'Sarah Johnson',
      skills: [
        { name: 'HR Management', level: 5, target: 5 },
        { name: 'Communication', level: 4, target: 5 },
        { name: 'Data Analysis', level: 3, target: 4 },
        { name: 'Leadership', level: 4, target: 5 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Valid': return 'bg-green-100 text-green-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSkillColor = (level: number) => {
    if (level >= 4) return 'bg-green-500';
    if (level >= 3) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Training & Development</h2>
          <p className="text-gray-600">Manage training programs, certifications, and skill development</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Training</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create Training Program</DialogTitle>
              <DialogDescription>Add a new training program</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="trainingTitle">Program Title</Label>
                <Input id="trainingTitle" placeholder="Enter training program title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the training program" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="leadership">Leadership</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                    <SelectItem value="soft-skills">Soft Skills</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" placeholder="e.g., 40 hours" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Create Program</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="programs" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="programs">Training Programs</TabsTrigger>
          <TabsTrigger value="progress">Employee Progress</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="skills">Skills Matrix</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(program.status)}>
                      {program.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Category:</span>
                    <Badge variant="outline">{program.category}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Enrollment:</span>
                    <span className="font-medium">{program.enrolled}/{program.capacity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Instructor:</span>
                    <span className="font-medium">{program.instructor}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Start Date:</span>
                    <span className="font-medium">{program.startDate}</span>
                  </div>
                  <div className="pt-3">
                    <Button className="w-full" size="sm">
                      {program.status === 'Active' ? 'Manage' : 'View Details'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <div className="space-y-4">
            {employeeTraining.map((training, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{training.employee}</h3>
                        <p className="text-sm text-gray-600">{training.program}</p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <Calendar className="mr-1 h-3 w-3" />
                          Started: {training.startDate}
                          {training.status === 'Completed' 
                            ? ` | Completed: ${training.completionDate}` 
                            : ` | Expected: ${training.expectedCompletion}`
                          }
                        </p>
                      </div>
                      <Badge className={getStatusColor(training.status)}>
                        {training.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{training.progress}%</span>
                      </div>
                      <Progress value={training.progress} className="w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <div className="space-y-4">
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Award className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{cert.title}</h3>
                        <p className="text-sm text-gray-600">{cert.employee}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          <span>Issuer: {cert.issuer}</span>
                          <span>Issued: {cert.issueDate}</span>
                          <span>Expires: {cert.expiryDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(cert.status)}>
                        {cert.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <div className="space-y-6">
            {skillsMatrix.map((employee, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{employee.employee}</CardTitle>
                  <CardDescription>Current skills and development targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {employee.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              {skill.level}/5 → {skill.target}/5
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`h-3 w-8 rounded ${
                                level <= skill.level 
                                  ? getSkillColor(skill.level)
                                  : level <= skill.target
                                  ? 'bg-gray-200 border-2 border-dashed border-gray-400'
                                  : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
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

export default TrainingDevelopment;
