import { 
  FolderOpen, 
  FileText, 
  Eye, 
  Users, 
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  // Mock data - in a real app, this would come from your data source
  const stats = [
    { title: "Total Projects", value: "24", icon: FolderOpen, change: "+12%" },
    { title: "Blog Posts", value: "18", icon: FileText, change: "+8%" },
    { title: "Page Views", value: "12.5K", icon: Eye, change: "+23%" },
    { title: "New Clients", value: "156", icon: Users, change: "+15%" },
  ];

  const recentProjects = [
    { id: 1, title: "E-commerce Redesign", status: "In Progress", date: "2024-01-15" },
    { id: 2, title: "Mobile App UI", status: "Completed", date: "2024-01-10" },
    { id: 3, title: "Landing Page Template", status: "Draft", date: "2024-01-08" },
    { id: 4, title: "Dashboard Design", status: "In Review", date: "2024-01-05" },
  ];

  const recentPosts = [
    { id: 1, title: "10 UX Principles for Better Design", status: "Published", date: "2024-01-12" },
    { id: 2, title: "The Future of Mobile Design", status: "Draft", date: "2024-01-10" },
    { id: 3, title: "Accessibility in Web Design", status: "Published", date: "2024-01-08" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your portfolio.</p>
        </div>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-gray-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-gray-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Recent Blog Posts</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <FolderOpen className="h-6 w-6" />
            <span>Add New Project</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <FileText className="h-6 w-6" />
            <span>Write Blog Post</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2">
            <Settings className="h-6 w-6" />
            <span>Update Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

