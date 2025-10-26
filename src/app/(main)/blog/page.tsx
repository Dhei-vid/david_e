import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/navigation/Header";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";

export default function BlogPage() {
  // Mock data - in a real app, this would come from your data source
  const featuredPost = {
    id: 1,
    title: "10 UX Principles for Better Design",
    excerpt:
      "Discover the fundamental principles that guide great user experience design and how to apply them in your projects to create more intuitive and effective digital products.",
    author: "David",
    date: "2024-01-12",
    readTime: "5 min read",
    category: "UX Design",
    image: "/api/placeholder/800/400",
    featured: true,
  };

  const posts = [
    {
      id: 2,
      title: "The Future of Mobile Design",
      excerpt:
        "Exploring emerging trends and technologies that will shape the future of mobile user interface design.",
      author: "David",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Mobile Design",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 3,
      title: "Accessibility in Web Design",
      excerpt:
        "A comprehensive guide to creating inclusive web experiences that work for everyone.",
      author: "David",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Accessibility",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 4,
      title: "Design Systems: Building Consistency",
      excerpt:
        "How to create and maintain design systems that ensure consistency across your products.",
      author: "David",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "Design Systems",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 5,
      title: "Color Psychology in UI Design",
      excerpt:
        "Understanding how colors affect user emotions and behavior in digital interfaces.",
      author: "David",
      date: "2024-01-02",
      readTime: "4 min read",
      category: "UI Design",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 6,
      title: "Prototyping Best Practices",
      excerpt:
        "Learn how to create effective prototypes that communicate your design ideas clearly.",
      author: "David",
      date: "2023-12-28",
      readTime: "5 min read",
      category: "Prototyping",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 7,
      title: "User Research Methods",
      excerpt:
        "Essential user research techniques every designer should know to create better products.",
      author: "David",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "UX Research",
      image: "/api/placeholder/400/250",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "UX Design",
    "UI Design",
    "Mobile Design",
    "Accessibility",
    "Design Systems",
    "Prototyping",
    "UX Research",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header currentPage="/blog" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Design Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and thoughts on UX/UI design, user research, and
              creating digital experiences that users love.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">
                    Featured Post Image
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 text-sm rounded-full font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {featuredPost.author}
                      </p>
                      <p className="text-sm text-gray-500">UX Designer</p>
                    </div>
                  </div>
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gray-900 text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Post Image</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {post.author}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest design insights and tips delivered to your inbox. No
            spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">UX Lab</h3>
              <p className="text-gray-600">
                Crafting user experiences that feel effortless.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>UI/UX Design</li>
                <li>Wireframing</li>
                <li>UX Research</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>hello@uxlab.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 UX Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
