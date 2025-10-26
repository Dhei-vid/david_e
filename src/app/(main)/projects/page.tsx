import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/navigation/Header";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  // Mock data - in a real app, this would come from your data source
  const projects = [
    {
      id: 1,
      title: "E-commerce Redesign",
      description:
        "Complete redesign of an online store with focus on user experience and conversion optimization.",
      category: "Web Design",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["UI/UX", "E-commerce", "Responsive"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "iOS and Android app interface design for a modern fintech startup.",
      category: "Mobile Design",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Mobile", "Fintech", "iOS", "Android"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description:
        "Admin dashboard interface for analytics platform with data visualization.",
      category: "Web Design",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Dashboard", "Analytics", "Data Viz"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Landing Page Template",
      description:
        "Convertible landing page template for SaaS products with modern design.",
      category: "Template",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Template", "SaaS", "Landing Page"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Brand Identity Design",
      description:
        "Complete brand identity design for a tech startup including logo and guidelines.",
      category: "Branding",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Branding", "Logo", "Identity"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Personal portfolio website for a creative professional with modern aesthetics.",
      category: "Web Design",
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["Portfolio", "Personal", "Creative"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = [
    "All",
    "Web Design",
    "Mobile Design",
    "Template",
    "Branding",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header currentPage="/projects" />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              My Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of my recent work showcasing user-centered design,
              modern aesthetics, and innovative solutions for digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`text-xs sm:text-sm px-3 sm:px-4 py-2 ${
                  category === "All"
                    ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <span className="text-gray-400 text-sm sm:text-base">
                      Project Image
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="bg-yellow-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-1 sm:space-x-2">
                      <Button
                        size="sm"
                        className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 h-8 w-8 sm:h-9 sm:w-9 p-0"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 h-8 w-8 sm:h-9 sm:w-9 p-0"
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button className="flex-1 bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 text-sm sm:text-base">
                      View Project
                    </Button>
                    <Button
                      variant="outline"
                      className="px-3 sm:px-4 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. I'm always excited
            to take on new challenges and help bring your ideas to life.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">UX Lab</h3>
            <p className="text-gray-600 mb-6">
              Crafting user experiences that feel effortless.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-gray-900"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:text-gray-900"
              >
                Services
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-gray-500">
              <p>&copy; 2024 UX Lab. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
