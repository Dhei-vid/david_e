import { Quote } from "lucide-react";
import { PersonAvatar } from "../ui/avatar-profile";

const TestimonialPreview = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 divide-x divide-glass-700">
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
            <div key={index} className="p-12 space-y-5 last:pt-[12rem]">
              <div className="relative">
                <div className="grid grid-cols-4 gap-4">
                  <p className="col-span-3 font-light">{testimonial.quote}</p>
                  <Quote size={18} className="text-gray-500 ml-auto" />
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <PersonAvatar
                  name="David E"
                  imageUrl="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialPreview;
