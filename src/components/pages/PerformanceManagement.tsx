
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
import { TrendingUp, Target, Star, Plus, Calendar } from 'lucide-react';

const PerformanceManagement = () => {
  const performanceReviews = [
    {
      id: 1,
      employee: 'John Smith',
      period: 'Q1 2024',
      reviewer: 'Sarah Johnson',
      status: 'Completed',
      score: 4.2,
      date: '2024-03-15',
      nextReview: '2024-06-15'
    },
    {
      id: 2,
      employee: 'Mike Chen',
      period: 'Q1 2024',
      reviewer: 'Sarah Johnson',
      status: 'In Progress',
      score: null,
      date: null,
      nextReview: '2024-03-20'
    },
    {
      id: 3,
      employee: 'Sarah Johnson',
      period: 'Q1 2024',
      reviewer: 'John Smith',
      status: 'Pending',
      score: null,
      date: null,
      nextReview: '2024-03-25'
    }
  ];

  const goals = [
    {
      id: 1,
      employee: 'John Smith',
      title: 'Complete React Training Program',
      description: 'Finish advanced React course and implement learnings in current project',
      progress: 75,
      dueDate: '2024-04-30',
      status: 'In Progress'
    },
    {
      id: 2,
      employee: 'John Smith',
      title: 'Lead Team Project Alpha',
      description: 'Successfully deliver the Alpha project on time and within budget',
      progress: 60,
      dueDate: '2024-05-15',
      status: 'In Progress'
    },
    {
      id: 3,
      employee: 'Mike Chen',
      title: 'Improve Customer Satisfaction Score',
      description: 'Increase customer satisfaction rating from 4.2 to 4.5',
      progress: 90,
      dueDate: '2024-03-31',
      status: 'Almost Complete'
    }
  ];

  const feedback = [
    {
      id: 1,
      from: 'Sarah Johnson',
      to: 'John Smith',
      type: 'Positive',
      message: 'Excellent work on the recent project delivery. Your leadership skills are really showing.',
      date: '2024-03-14'
    },
    {
      id: 2,
      from: 'John Smith',
      to: 'Mike Chen',
      type: 'Constructive',
      message: 'Great progress on customer relations. Consider focusing more on follow-up communications.',
      date: '2024-03-12'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Almost Complete': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFeedbackColor = (type: string) => {
    return type === 'Positive' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Performance Management</h2>
          <p className="text-gray-600">Track performance reviews, goals, and feedback</p>
        </div>
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span>Add Goal</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Goal</DialogTitle>
                <DialogDescription>Set a new performance goal</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="goalEmployee">Employee</Label>
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
                  <Label htmlFor="goalTitle">Goal Title</Label>
                  <Input id="goalTitle" placeholder="Enter goal title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goalDescription">Description</Label>
                  <Textarea id="goalDescription" placeholder="Describe the goal and success criteria" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goalDueDate">Due Date</Label>
                  <Input id="goalDueDate" type="date" />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create Goal</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>New Review</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule Performance Review</DialogTitle>
                <DialogDescription>Create a new performance review</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="reviewEmployee">Employee</Label>
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
                  <Label htmlFor="reviewer">Reviewer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reviewer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="john">John Smith</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reviewPeriod">Review Period</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="q1-2024">Q1 2024</SelectItem>
                      <SelectItem value="q2-2024">Q2 2024</SelectItem>
                      <SelectItem value="annual-2024">Annual 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reviewDate">Review Date</Label>
                  <Input id="reviewDate" type="date" />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Schedule Review</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reviews">Performance Reviews</TabsTrigger>
          <TabsTrigger value="goals">Goals & Objectives</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews" className="space-y-4">
          <div className="space-y-4">
            {performanceReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold">{review.employee}</h3>
                        <Badge variant="outline">{review.period}</Badge>
                        <Badge className={getStatusColor(review.status)}>
                          {review.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">Reviewer: {review.reviewer}</p>
                      {review.score && (
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">{review.score}/5.0</span>
                        </div>
                      )}
                      {review.nextReview && (
                        <p className="text-xs text-gray-500 flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          Next review: {review.nextReview}
                        </p>
                      )}
                    </div>
                    <div className="space-x-2">
                      {review.status === 'Completed' && (
                        <Button variant="outline" size="sm">View Report</Button>
                      )}
                      {review.status === 'In Progress' && (
                        <Button size="sm">Continue Review</Button>
                      )}
                      {review.status === 'Pending' && (
                        <Button size="sm">Start Review</Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <div className="space-y-4">
            {goals.map((goal) => (
              <Card key={goal.id}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{goal.title}</h3>
                          <Badge className={getStatusColor(goal.status)}>
                            {goal.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{goal.employee}</p>
                        <p className="text-sm text-gray-500">{goal.description}</p>
                        <p className="text-xs text-gray-400 flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          Due: {goal.dueDate}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">Update Progress</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <div className="space-y-4">
            {feedback.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold">{item.from} → {item.to}</h3>
                        <Badge className={getFeedbackColor(item.type)}>
                          {item.type}
                        </Badge>
                      </div>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <p className="text-sm text-gray-700">{item.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-dashed">
            <CardContent className="p-6 text-center">
              <p className="text-gray-500 mb-4">Share feedback with your team members</p>
              <Button>Give Feedback</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceManagement;
