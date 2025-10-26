"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of design do you handle?",
    answer:
      "Web design, branding, product UI, landing pages, e-commerce shops, brand assets, presentations, social media visuals, anything digital that needs to look and feel sharp.",
  },
  {
    question: "How fast is the turnaround?",
    answer:
      "Most requests are delivered within 1-2 business days. Larger tasks may take longer, but you'll always be kept in the loop.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Figma for design, Next.js for development, Notion for task management, and email for async communication.",
  },
  {
    question: "Do you offer development too?",
    answer:
      "Yes! I focus on both design and development, ensuring all deliverables are production-ready.",
  },
];

const FAQ = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 hover:text-gray-900/70">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
