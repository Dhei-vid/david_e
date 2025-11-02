import { Badge } from "@/components/ui/badge";

const ProjectsPreview = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-[80rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            My Projects
          </h2>
          <h3 className="text-base 2xl:text-lg text-gray-700 dark:text-gray-300">
            Recent Case Studies
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-15">
          {[
            {
              title: "E-commerce Platform",
              category: ["Web Design"],
              image: "Project 1",
            },
            {
              title: "Mobile Banking App",
              category: ["Mobile Design"],
              image: "Project 2",
            },
            {
              title: "SaaS Dashboard",
              category: ["UI/UX"],
              image: "Project 3",
            },
            {
              title: "Brand Identity",
              category: ["Branding", "Branding"],
              image: "Project 4",
            },
          ].map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-4xl h-[30rem] flex items-center justify-center mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                <span className="text-gray-500 dark:text-gray-400">
                  {project.image}
                </span>
              </div>

              <div className="flex flex-row items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {project.title}
                </h3>
                <div className="space-x-2">
                  {project.category.map((category, index) => (
                    <Badge
                      key={index}
                      className="text-xs text-gray-600 dark:text-gray-400 bg-glass-300 hover:bg-glass-300/50"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
