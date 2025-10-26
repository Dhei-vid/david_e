import Link from "next/link";
import { 
  LayoutDashboard, 
  FolderOpen, 
  Users, 
  Settings, 
  FileText, 
  BarChart3,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/admin" className="text-xl font-bold text-gray-900">
                UX Lab Admin
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <Link
              href="/admin"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/projects"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FolderOpen className="h-5 w-5" />
              <span>Projects</span>
            </Link>
            <Link
              href="/admin/blog"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FileText className="h-5 w-5" />
              <span>Blog Posts</span>
            </Link>
            <Link
              href="/admin/analytics"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

