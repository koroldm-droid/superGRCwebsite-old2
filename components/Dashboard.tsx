import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Shield,
  FileCheck,
  Users,
  Activity,
  ArrowRight,
  Sparkles,
  X
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const stats = [
  { label: "Assets Managed", value: "1,284", change: "+12%", trend: "up", icon: Activity },
  { label: "Active Risks", value: "47", change: "-8%", trend: "down", icon: AlertTriangle },
  { label: "Compliance Score", value: "94%", change: "+3%", trend: "up", icon: Shield },
  { label: "Third Parties", value: "156", change: "+5", trend: "up", icon: Users },
];

const recentActivities = [
  { title: "SOC 2 Assessment Completed", type: "success", time: "2 hours ago" },
  { title: "New Asset Discovery: AWS EC2 Cluster", type: "info", time: "5 hours ago" },
  { title: "Risk Assessment Due: Payment System", type: "warning", time: "1 day ago" },
  { title: "Third-Party Review: Vendor XYZ", type: "info", time: "2 days ago" },
];

const riskCategories = [
  { name: "Application Layer", score: 92, issues: 3 },
  { name: "Middleware/Database", score: 88, issues: 5 },
  { name: "Network Layer", score: 95, issues: 2 },
  { name: "Operating System", score: 90, issues: 4 },
];

export function Dashboard() {
  const [showWarning, setShowWarning] = useState(true);

  return (
    <div className="p-6 pb-0 space-y-6 min-h-full">
      {/* Warning Message */}
      {showWarning && (
        <div className="fixed top-20 right-6 z-50 max-w-md animate-in slide-in-from-top-4 fade-in duration-500">
          <div className="bg-white border border-red-200 rounded-xl shadow-2xl p-5 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1 pt-0.5">
                <h4 className="text-red-600 mb-2 tracking-tight">Privacy Assessment Past Due</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Your privacy assessments are past due. We have notified your management regarding this outstanding activity, which is affecting the overall risk posture of your system.
                </p>
              </div>
              <button
                onClick={() => setShowWarning(false)}
                className="flex-shrink-0 w-8 h-8 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 flex items-center justify-center"
                aria-label="Dismiss warning"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
              <Button 
                size="sm" 
                className="text-white text-xs px-4 py-1 h-8"
                style={{ backgroundColor: '#151719' }}
              >
                Review Now
              </Button>
              <button 
                onClick={() => setShowWarning(false)}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden p-8 text-white" style={{ background: 'linear-gradient(135deg, #151719 0%, #9FCFD3 100%)' }}>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5" />
            <Badge variant="secondary" className="border-white/30" style={{ backgroundColor: '#CFE928', color: '#151719' }}>
              AI-Powered
            </Badge>
          </div>
          <h2 className="mb-2">Welcome to Your Risk & Compliance Hub</h2>
          <p className="mb-6 max-w-2xl" style={{ color: '#E6E6E6' }}>
            Streamline your enterprise risk management, compliance tracking, and third-party assessments 
            with AI-assisted insights and automated workflows.
          </p>
          <div className="flex gap-3">
            <Button className="text-white hover:opacity-90" style={{ backgroundColor: '#CFE928', color: '#151719' }}>
              Start System Onboarding
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/20" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              View Quick Tour
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZGFzaGJvYXJkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4MDE1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                    <div className="flex items-baseline gap-2">
                      <h3>{stat.value}</h3>
                      <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-lg ${
                    index === 1 ? 'bg-orange-100' : ''
                  }`} style={{ backgroundColor: index === 1 ? '#CFE928' : '#9FCFD3' }}>
                    <Icon className="h-5 w-5" style={{ color: '#151719' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Risk Appetite Analysis */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Risk Appetite Analysis</CardTitle>
            <CardDescription>Quantitative analysis across resource layers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {riskCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>{category.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">{category.issues} issues</span>
                    <span className="text-green-600">{category.score}%</span>
                  </div>
                </div>
                <Progress value={category.score} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest system updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                {activity.type === "success" ? (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#CFE928' }} />
                ) : activity.type === "warning" ? (
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#CFE928' }} />
                ) : (
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#9FCFD3' }} />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* To Do List */}
        <Card>
          <CardHeader>
            <CardTitle>To Do</CardTitle>
            <CardDescription>Pending tasks and actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="text-sm">Complete Privacy Assessments</p>
                <p className="text-xs text-red-600">Past due 14 days ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="text-sm">Review Third-Party Vendor Risk</p>
                <p className="text-xs text-gray-500">Due in 2 days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="text-sm">Update SOC 2 Documentation</p>
                <p className="text-xs text-gray-500">Due in 5 days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="text-sm">Complete Asset Discovery Scan</p>
                <p className="text-xs text-gray-500">Due next week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Governance and Compliance */}
      <Card>
        <CardHeader>
          <CardTitle>Governance and Compliance</CardTitle>
          <CardDescription>Organizational governance metrics and compliance status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" style={{ color: '#CFE928' }} />
                <span>Policy Compliance</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3>96%</h3>
                <span className="text-sm text-green-600">+2%</span>
              </div>
              <Progress value={96} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" style={{ color: '#9FCFD3' }} />
                <span>Assets & Data Elements Activities</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3>50%</h3>
                <span className="text-sm text-orange-600">In Progress</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5" style={{ color: '#CFE928' }} />
                <span>API Management</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3>76%</h3>
                <span className="text-sm text-green-600">On Track</span>
              </div>
              <Progress value={76} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" style={{ color: '#CFE928' }} />
                <span>Privacy Assessments and Testing</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3>Not Started</h3>
                <Badge variant="destructive" className="text-xs">Past Due</Badge>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance & Features Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Management</CardTitle>
          <CardDescription>Manage attestations, frameworks, and regulatory requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="frameworks">
            <TabsList>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
              <TabsTrigger value="controls">Controls</TabsTrigger>
            </TabsList>
            <TabsContent value="frameworks" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm">SOC 2 Type II</h4>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <Progress value={94} className="h-2" />
                  <p className="text-xs text-gray-500">94% Complete</p>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm">ISO 27001</h4>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <Progress value={87} className="h-2" />
                  <p className="text-xs text-gray-500">87% Complete</p>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm">HIPAA/HITRUST</h4>
                    <Badge variant="outline">Planned</Badge>
                  </div>
                  <Progress value={23} className="h-2" />
                  <p className="text-xs text-gray-500">23% Complete</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="assessments" className="mt-4">
              <div className="flex items-center justify-center py-8 text-gray-500">
                <FileCheck className="h-12 w-12 mb-2" />
              </div>
              <p className="text-center text-gray-500">No pending assessments</p>
            </TabsContent>
            <TabsContent value="controls" className="mt-4">
              <div className="flex items-center justify-center py-8 text-gray-500">
                <Shield className="h-12 w-12 mb-2" />
              </div>
              <p className="text-center text-gray-500">View control matrix</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 !mt-0">
        <Button variant="outline" className="h-auto py-4 flex-col gap-2">
          <Sparkles className="h-5 w-5" style={{ color: '#CFE928' }} />
          <span>AI Risk Insights</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex-col gap-2">
          <FileCheck className="h-5 w-5" style={{ color: '#9FCFD3' }} />
          <span>Upload Assessment</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex-col gap-2">
          <Users className="h-5 w-5" style={{ color: '#CFE928' }} />
          <span>Add Third Party</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex-col gap-2">
          <TrendingUp className="h-5 w-5" style={{ color: '#9FCFD3' }} />
          <span>Run BIA Analysis</span>
        </Button>
      </div>
    </div>
  );
}