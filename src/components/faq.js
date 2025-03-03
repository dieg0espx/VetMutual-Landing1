import { useState } from "react";

const faqData = [
  {
    question: "How does mortgage protection even work?",
    answer:
      "Many who've served understand the importance of preparedness. Mortgage protection embodies this principle by covering payments during illness, disability, or after death—keeping your family in their home without the burden of mortgage debt.",
  },
  {
    question: "Who is eligible for coverage?",
    answer: "We serve veterans of all ages, even those over 85, and family members of veterans. Many pre-existing conditions are accepted, no exam required.",
  },
  {
    question: "How much does it cost?",
    answer: "Rates vary by age, mortgage amount, and desired coverage length. We compare hundreds of carriers instantly to find your best rate.",
  },
  {
    question: "Will my policy ever expire?",
    answer: "Some plans match your mortgage term, while others offer coverage for life. Our specialists help design the best plan for you.",
  },
  {
    question: "How does this differ from VA or VGLI coverage?",
    answer: "VetMutual isn’t affiliated with the VA. Unlike certain VA policies with rising premiums, our plans lock in a stable rate. We also offer living benefits, which many government-issued policies don’t include.",
  },
];

export default function faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-left lg:text-center">Frequently asked questions</h2>
      <p className="text-gray-500 text-left lg:text-center mt-2">
        What you need to know about protecting your family's future
      </p>

      <div className="mt-6 space-y-4 text-left">
        {faqData.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg py-3"
            >
              {item.question}
              <span className="text-gray-500">{openIndex === index ? <i className="bi bi-chevron-up"></i>: <i className="bi bi-chevron-down"></i>}</span>
            </button>
            {openIndex === index && <p className="text-gray-600 mt-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
