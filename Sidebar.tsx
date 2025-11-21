import { 
  LayoutDashboard, 
  Boxes, 
  Database, 
  Shield, 
  FileCheck, 
  Users, 
  FileText, 
  Activity, 
  Network,
  Target,
  ChevronRight,
  Layers,
  BarChart3,
  Bot,
  List,
  MessageSquare,
  ClipboardList,
  Lock,
  BookOpen,
  AlertTriangle,
  Sparkles,
  LogOut
} from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard for SystemDemo1", badge: null },
  { icon: Boxes, label: "System Onboarding", badge: "New" },
  { icon: Database, label: "Asset Discovery", badge: null },
  { icon: FileText, label: "Data Elements", badge: null },
  { icon: Shield, label: "Risk Management", badge: "12" },
  { icon: FileCheck, label: "Control Design", badge: null },
  { icon: Users, label: "Third-Party Risk", badge: "5" },
  { icon: FileText, label: "Legal & Data Mgmt", badge: null },
  { icon: Activity, label: "Business Continuity", badge: null },
  { icon: Network, label: "API Management", badge: null },
  { icon: Target, label: "Risk Appetite", badge: null },
];

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed lg:relative lg:translate-x-0 z-40 w-80 bg-white transition-transform duration-300 ease-in-out h-full flex-shrink-0`}
      style={{ borderRight: '1px solid #9FCFD3' }}
    >
      <ScrollArea className="h-full py-6">
        <nav className="px-2 space-y-1">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <Button
                  variant={index === 0 ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 px-3 py-1.5 text-sm ${index > 0 ? 'ml-3' : ''}`}
                >
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge 
                      variant={item.badge === "AI" ? "default" : "secondary"}
                      className="ml-auto text-xs"
                      style={item.badge === "AI" ? { backgroundColor: '#CFE928', color: '#151719' } : {}}
                    >
                      {item.badge}
                    </Badge>
                  )}
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                </Button>
                
                {/* Nested items under Risk Management */}
                {index === 4 && (
                  <>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-3 py-1 ml-6 text-xs"
                    >
                      <ClipboardList className="h-3 w-3 flex-shrink-0" />
                      <span className="flex-1 text-left">BIA</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-3 py-1 ml-6 text-xs"
                    >
                      <FileText className="h-3 w-3 flex-shrink-0" />
                      <span className="flex-1 text-left">Self-Assessment Questionnaire</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-3 py-1 ml-6 text-xs"
                    >
                      <Lock className="h-3 w-3 flex-shrink-0" />
                      <span className="flex-1 text-left">Privacy</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-3 py-1 ml-6 text-xs"
                    >
                      <BookOpen className="h-3 w-3 flex-shrink-0" />
                      <span className="flex-1 text-left">NIST 800-53</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-3 py-1 ml-6 text-xs"
                    >
                      <AlertTriangle className="h-3 w-3 flex-shrink-0" />
                      <span className="flex-1 text-left">Business Risks</span>
                    </Button>
                  </>
                )}
                
                {/* Nested items under Risk Appetite */}
                {index === 10 && (
                  <>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-3 py-1 ml-3 text-xs"
                    >
                      <Shield className="h-3 w-3 flex-shrink-0" />
                      <span className="flex-1 text-left">Vulnerability Management</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-3 py-1 ml-3 text-xs"
                    >
                      <AlertTriangle className="h-3 w-3 flex-shrink-0" />
                      <span className="flex-1 text-left">Issue Management</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 px-3 py-1 ml-3 text-xs"
                    >
                      <LogOut className="h-3 w-3 flex-shrink-0" />
                      <span className="flex-1 text-left">Start System Offboarding</span>
                    </Button>
                  </>
                )}
              </div>
            );
          })}
          
          <Separator className="my-4" style={{ backgroundColor: '#9FCFD3' }} />
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-1.5 text-sm"
          >
            <Layers className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="flex-1 text-left">View all My Systems</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-1.5 text-sm"
          >
            <BarChart3 className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="flex-1 text-left">View All Risk Appetite</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-1.5 text-sm"
          >
            <Sparkles className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="flex-1 text-left">My Super GRC AI Assistant</span>
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-1 ml-3 text-xs"
          >
            <List className="h-3 w-3 flex-shrink-0" />
            <span className="flex-1 text-left">Create a list of all outstanding items</span>
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-1 ml-3 text-xs"
          >
            <MessageSquare className="h-3 w-3 flex-shrink-0" />
            <span className="flex-1 text-left">Reply to Security Questionnaire</span>
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-1.5 text-sm"
          >
            <BarChart3 className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="flex-1 text-left">Reporting</span>
          </Button>
        </nav>
      </ScrollArea>
    </aside>
  );
}