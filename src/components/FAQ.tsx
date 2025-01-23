'use client'
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How can D&R Consultancy assist with hiring in Belgium?',
      answer: `At D&R Consultancy, we help businesses in Belgium find the right talent for their needs. Our recruitment services include sourcing qualified candidates, handling interviews, and supporting the hiring process to ensure your company recruits the best candidates in the market.`
    },
    {
      question: 'What kind of visa support does D&R Consultancy provide?',
      answer: `We offer comprehensive visa support services for businesses and individuals looking to work in Belgium. Our team assists with visa applications, ensuring compliance with Belgian immigration laws and providing guidance throughout the process.`
    },
    {
      question: 'What IT services are available through D&R Consultancy?',
      answer: `D&R Consultancy provides a wide range of IT services, including network solutions, IT consulting, software development, and system integrations. Our goal is to streamline your business's operations and ensure your IT infrastructure is secure and efficient.`
    },
    {
      question: 'How can D&R Consultancy assist with bid management?',
      answer: `We help businesses manage their bids for public and private contracts. Our services include analyzing bid requirements, preparing documentation, managing deadlines, and offering strategic advice to increase your chances of success in competitive bidding processes.`
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-16 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2">
            <img
              src="https://pagedone.io/asset/uploads/1696230182.png"
              alt="FAQ section"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h6 className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left">FAQs</h6>
            <h2 className="text-4xl text-center font-bold text-gray-900 mb-8 lg:text-left">
              Looking for answers?
            </h2>
            <div>
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-4">
                  <button
                    className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-700 hover:text-indigo-600"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <span>{activeIndex === index ? '-' : '+'}</span>
                  </button>
                  {activeIndex === index && (
                    <p className="mt-2 text-gray-600 text-base">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
