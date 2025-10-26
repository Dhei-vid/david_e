import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/navigation/Header";
import {
  Grid3X3,
  Lightbulb,
  Search,
  Palette,
  Smartphone,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Grid3X3,
      title: "Wireframing & Prototyping",
      description:
        "I create detailed wireframes and interactive prototypes that lay the foundation for intuitive user experiences.",
      features: [
        "Low & High-fidelity wireframes",
        "Interactive prototypes",
        "User flow mapping",
        "Information architecture",
      ],
      price: "Starting at $500",
      duration: "1-2 weeks",
    },
    {
      icon: Lightbulb,
      title: "UI/UX Design",
      description:
        "Complete interface design focusing on usability, aesthetics, and conversion optimization for your digital products.",
      features: [
        "User interface design",
        "User experience optimization",
        "Design system creation",
        "Responsive design",
      ],
      price: "Starting at $1,200",
      duration: "2-4 weeks",
    },
    {
      icon: Search,
      title: "UX Research",
      description:
        "Data-driven insights through user research, testing, and analysis to inform better design decisions.",
      features: [
        "User interviews & surveys",
        "Usability testing",
        "Competitor analysis",
        "User persona development",
      ],
      price: "Starting at $800",
      duration: "1-3 weeks",
    },
    {
      icon: Palette,
      title: "Brand Identity Design",
      description:
        "Complete brand identity including logo design, color palettes, typography, and brand guidelines.",
      features: [
        "Logo design",
        "Brand guidelines",
        "Color palette creation",
        "Typography selection",
      ],
      price: "Starting at $900",
      duration: "2-3 weeks",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description:
        "Native and cross-platform mobile app design for iOS and Android with focus on platform guidelines.",
      features: [
        "iOS & Android design",
        "Mobile-first approach",
        "App store assets",
        "Cross-platform consistency",
      ],
      price: "Starting at $1,500",
      duration: "3-5 weeks",
    },
    {
      icon: Globe,
      title: "Web Design",
      description:
        "Modern, responsive web design that works seamlessly across all devices and browsers.",
      features: [
        "Responsive web design",
        "Modern aesthetics",
        "Performance optimization",
        "Cross-browser compatibility",
      ],
      price: "Starting at $1,000",
      duration: "2-4 weeks",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "Understanding your goals, target audience, and project requirements through detailed consultation.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Creating a comprehensive strategy and project plan with clear milestones and deliverables.",
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description:
        "Developing wireframes, prototypes, and visual designs based on research and strategy.",
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description:
        "Testing designs with users and iterating based on feedback to ensure optimal user experience.",
    },
    {
      step: "05",
      title: "Delivery & Support",
      description:
        "Handing off final designs with comprehensive documentation and ongoing support as needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header currentPage="/services" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Design Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive UX/UI design services to help you create digital
              products that users love and businesses thrive on.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {service.price}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                </div>

                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures successful project outcomes
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose Me?
              </h2>
              <p className="text-xl text-gray-600">
                With over 5 years of experience and a track record of successful
                projects, I bring expertise, creativity, and dedication to every
                project.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      User-Centered Approach
                    </h3>
                    <p className="text-gray-600">
                      Every design decision is backed by user research and
                      testing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Modern Design Tools
                    </h3>
                    <p className="text-gray-600">
                      Proficient in the latest design tools and methodologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Timely Delivery
                    </h3>
                    <p className="text-gray-600">
                      Consistent delivery of high-quality work on schedule.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      Continued support and collaboration throughout the
                      project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">
                  Process Visualization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create something amazing together.
            I'm here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              View Portfolio
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
