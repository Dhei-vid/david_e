import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  Tag,
  MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminProjects() {
  // Mock data - in a real app, this would come from your data source
  const projects = [
    {
      id: 1,
      title: "E-commerce Redesign",
      description: "Complete redesign of an online store with focus on user experience",
      status: "In Progress",
      category: "Web Design",
      date: "2024-01-15",
      image: "/api/placeholder/300/200",
      featured: true
    },
    {
      id: 2,
      title: "Mobile App UI",
      description: "iOS and Android app interface design for a fintech startup",
      status: "Completed",
      category: "Mobile Design",
      date: "2024-01-10",
      image: "/api/placeholder/300/200",
      featured: false
    },
    {
      id: 3,
      title: "Landing Page Template",
      description: "Convertible landing page template for SaaS products",
      status: "Draft",
      category: "Template",
      date: "2024-01-08",
      image: "/api/placeholder/300/200",
      featured: true
    },
    {
      id: 4,
      title: "Dashboard Design",
      description: "Admin dashboard interface for analytics platform",
      status: "In Review",
      category: "Web Design",
      date: "2024-01-05",
      image: "/api/placeholder/300/200",
      featured: false
    },
    {
      id: 5,
      title: "Brand Identity",
      description: "Complete brand identity design for a tech startup",
      status: "Completed",
      category: "Branding",
      date: "2024-01-02",
      image: "/api/placeholder/300/200",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website for a creative professional",
      status: "Completed",
      category: "Web Design",
      date: "2023-12-28",
      image: "/api/placeholder/300/200",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Review':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600">Manage your portfolio projects and showcase your work.</p>
        </div>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              Category
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>
              {project.featured && (
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-white px-2 py-1 text-xs rounded-full font-medium">
                    Featured
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{project.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  {project.category}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.date}
                </span>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button size="sm" className="bg-gray-900 text-white">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}

