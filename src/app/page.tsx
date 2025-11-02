import { Header } from "@/components/navigation/Header";
import Navbar from "@/components/navigation/navbar";

import Footer from "@/components/navigation/footer";
import FAQ from "@/components/x-ui/faq";
import ButtonX from "@/components/x-ui/button";
import Skills from "@/components/home/skills";

import TestimonialPreview from "@/components/home/testimonial";
import ProjectsPreview from "@/components/projects/project-preview";
import Process from "@/components/home/process";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-transparent">
      <Header currentPage="/" />
      {/* <Navbar /> */}

      {/* Hero Section - Denqid Style */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2 mb-8 bg-glass-200 p-2 px-5 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Available to work
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                <span className="block">Crafting</span>
                <span className="block bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-glass-100">
                  User Experiences
                </span>
                <span className="block">That Feel Effortless</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              I don&apos;t just make interfaces pretty — I craft smart design
              that fuels real business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonX className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 px-8 py-4 font-medium">
                Book a Meeting
              </ButtonX>
              <ButtonX
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 font-medium"
              >
                See Recent Work
              </ButtonX>
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
      <Process />

      {/* Testimonials Section */}
      <TestimonialPreview />

      {/* Projects Section */}
      <ProjectsPreview />

      {/* Skills */}
      <Skills />

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
