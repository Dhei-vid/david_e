// import Image from "next/image";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/navigation/Header";
import { CheckCircle } from "lucide-react";
import Footer from "@/components/navigation/footer";
import FAQ from "@/components/x-ui/faq";
import ButtonX from "@/components/x-ui/button";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Header currentPage="/" />

      {/* Hero Section - Denqid Style */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Available to work
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                <span className="block">Crafting</span>
                <span className="block bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                  User Experiences
                </span>
                <span className="block">That Feel Effortless</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              We don't just make interfaces pretty — we craft smart design that
              fuels real business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 px-8 py-4 text-lg font-medium"
              >
                Book a Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-medium"
              >
                See Recent Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Hello!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We help brands grow with standout design, clear branding, and
              content that drives results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Strategy",
              "UX Design",
              "Branding",
              "Animation",
              "Research",
              "Design Systems",
            ].map((service) => (
              <div key={service} className="text-center">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Process, Explained
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Here's how it works
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Discover",
                description:
                  "We uncover what drives your brand through purpose clarity, audience insight and business focus.",
              },
              {
                number: "2",
                title: "Research",
                description:
                  "We analyze your market, understand your competitors and identify where you can stand out.",
              },
              {
                number: "3",
                title: "Create",
                description:
                  "We design a distinct identity using voice, visuals and story to build emotional connection.",
              },
              {
                number: "4",
                title: "Activate",
                description:
                  "We launch your brand across all channels creating a consistent experience that grows with you.",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              What Clients Say
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                quote:
                  "Working with David was unbelievable. He instantly understood our vision and translated it into a sleek, intuitive website. The process felt effortless, and the results exceeded our expectations.",
                author: "Sarah Johnson",
                company: "TechStart Inc.",
              },
              {
                quote:
                  "David brings clarity to chaos. His design work is not only beautiful but deeply strategic. He helped us rebrand from the ground up, and our audience response has been perfect.",
                author: "Michael Chen",
                company: "DesignCo",
              },
            ].map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="text-6xl sm:text-7xl text-gray-200 dark:text-gray-700 font-serif leading-none mb-8">
                    "
                  </div>
                  <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                    {testimonial.quote}
                  </blockquote>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Projects
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Recent Case Studies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "E-commerce Platform",
                category: "Web Design",
                image: "Project 1",
              },
              {
                title: "Mobile Banking App",
                category: "Mobile Design",
                image: "Project 2",
              },
              {
                title: "SaaS Dashboard",
                category: "UI/UX",
                image: "Project 3",
              },
              {
                title: "Brand Identity",
                category: "Branding",
                image: "Project 4",
              },
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-64 flex items-center justify-center mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                  <span className="text-gray-500 dark:text-gray-400">
                    {project.image}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Skills />

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Fixed Price, Zero Limits
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Design & Branding
              </h3>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                $75
              </div>
              <div className="text-gray-600 dark:text-gray-400">per Hour</div>
              <div className="inline-flex items-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Available to work
                </span>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 px-8 py-4 text-lg font-medium"
              >
                Book a Meeting
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  What's included
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Online communication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited design iterations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast turnaround
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fixed hour rate
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Additional benefits
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible scope
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Stop anytime
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Developer-friendly
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Clear process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Your Questions, Answered
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have more questions? Book a free discovery call
            </p>
          </div>

          {/* FAQ */}
          <FAQ />

          <div className="text-center mt-12">
            <ButtonX>Book a Meeting</ButtonX>

            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Or, email me at djetuk@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
