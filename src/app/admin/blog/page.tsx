import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  Tag,
  MoreVertical,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminBlog() {
  // Mock data - in a real app, this would come from your data source
  const posts = [
    {
      id: 1,
      title: "10 UX Principles for Better Design",
      excerpt: "Discover the fundamental principles that guide great user experience design and how to apply them in your projects.",
      status: "Published",
      category: "UX Design",
      date: "2024-01-12",
      readTime: "5 min read",
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "The Future of Mobile Design",
      excerpt: "Exploring emerging trends and technologies that will shape the future of mobile user interface design.",
      status: "Draft",
      category: "Mobile Design",
      date: "2024-01-10",
      readTime: "7 min read",
      views: 0,
      featured: false
    },
    {
      id: 3,
      title: "Accessibility in Web Design",
      excerpt: "A comprehensive guide to creating inclusive web experiences that work for everyone.",
      status: "Published",
      category: "Accessibility",
      date: "2024-01-08",
      readTime: "6 min read",
      views: 890,
      featured: false
    },
    {
      id: 4,
      title: "Design Systems: Building Consistency",
      excerpt: "How to create and maintain design systems that ensure consistency across your products.",
      status: "In Review",
      category: "Design Systems",
      date: "2024-01-05",
      readTime: "8 min read",
      views: 0,
      featured: true
    },
    {
      id: 5,
      title: "Color Psychology in UI Design",
      excerpt: "Understanding how colors affect user emotions and behavior in digital interfaces.",
      status: "Published",
      category: "UI Design",
      date: "2024-01-02",
      readTime: "4 min read",
      views: 2100,
      featured: false
    },
    {
      id: 6,
      title: "Prototyping Best Practices",
      excerpt: "Learn how to create effective prototypes that communicate your design ideas clearly.",
      status: "Draft",
      category: "Prototyping",
      date: "2023-12-28",
      readTime: "5 min read",
      views: 0,
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
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
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600">Manage your blog content and share your insights with the world.</p>
        </div>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">
          <Plus className="h-4 w-4 mr-2" />
          New Post
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
                placeholder="Search blog posts..."
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

      {/* Blog Posts List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">All Posts</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {posts.map((post) => (
            <div key={post.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    {post.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-full font-medium">
                        Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                    {post.views > 0 && (
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {post.views} views
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
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

