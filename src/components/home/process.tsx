import CardX from "@/components/x-ui/cardx";

const Process = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Process, Explained
          </h2>
          <h3 className="text-base 2xl:text-lg font-semibold text-gray-700 dark:text-gray-300">
            Here&apos;s how it works
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div key={step.number} className="even:pt-12">
              <CardX
                className={
                  "flex flex-col items-stretch bg-glass-500 p-6 rounded-4xl h-[28rem]"
                }
              >
                <div className="dark:text-gray-900 text-6xl font-semibold mb-6">
                  {step.number}
                </div>

                <div className="space-y-2 mt-auto">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardX>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
