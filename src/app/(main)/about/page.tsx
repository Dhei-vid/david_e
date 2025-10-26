import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/navigation/Header";
import {
  Award,
  Users,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Years Experience", value: "5+" },
    { label: "Awards Won", value: "12" },
  ];

  const skills = [
    "User Experience Design",
    "User Interface Design",
    "Wireframing & Prototyping",
    "User Research",
    "Design Systems",
    "Mobile Design",
    "Web Design",
    "Brand Identity",
    "Figma",
    "Adobe Creative Suite",
    "Sketch",
    "Principle",
  ];

  const values = [
    {
      icon: Target,
      title: "User-Centered",
      description:
        "Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.",
    },
    {
      icon: CheckCircle,
      title: "Quality Focused",
      description:
        "I believe in delivering pixel-perfect designs that exceed expectations and drive results.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "Working closely with clients and teams to understand goals and create solutions together.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Respecting deadlines while maintaining high standards and attention to detail.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header currentPage="/about" />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Hi, I'm David
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  A passionate UX/UI designer with over 5 years of experience
                  creating digital experiences that users love. I specialize in
                  turning complex problems into simple, beautiful, and intuitive
                  designs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="w-full max-w-sm sm:max-w-md lg:w-80 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl mx-auto">
                <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Story</h2>
            <p className="text-xl text-gray-600">
              How I became passionate about creating exceptional user
              experiences
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              My journey into UX design began during my computer science
              studies, where I discovered that the most powerful technology is
              useless if it's not accessible and intuitive for users. This
              realization sparked my passion for human-centered design.
            </p>
            <p className="mb-6">
              Over the years, I've had the privilege of working with startups
              and established companies to create digital products that not only
              look beautiful but also solve real problems. I believe that great
              design happens when form meets function, and users can accomplish
              their goals effortlessly.
            </p>
            <p className="mb-6">
              Today, I continue to learn and grow in this ever-evolving field,
              always staying curious about new technologies, design trends, and
              most importantly, how people interact with digital products in
              their daily lives.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide my work and approach to design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600">
              The tools and techniques I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 px-4 py-3 rounded-lg text-center"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always excited to take on new projects and help bring your ideas
            to life. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              View My Work
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
              <div className="flex space-x-4">
                <Github className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                <Mail className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
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
