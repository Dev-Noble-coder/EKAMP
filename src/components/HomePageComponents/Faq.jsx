import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: "What is EKAMP?",
        answer: "EKAMP is a platform designed to help users manage their tasks efficiently."
    },
    {
        question: "How do I create an account?",
        answer: "Click on the 'Sign Up' button on the top right and fill in your details."
    },
    {
        question: "Is EKAMP free to use?",
        answer: "Yes, EKAMP offers a free plan with basic features."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
     <div className="max-w-3xl mx-auto px-4 py-10 bg-gradient-to-br from-[#fefce8] via-[#f0f9ff] to-[#ecfdf5] md:rounded-md shadow-md my-20">
    <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">
        Frequently Asked Questions
    </h2>
    <ul className="space-y-4">
        {faqData.map((item, idx) => (
            <li
                key={idx}
                className={`rounded-xl shadow transition-all duration-300 ${
                    idx % 2 === 0
                        ? 'bg-white border border-[#e0f2fe]'
                        : 'bg-[#f0f9ff] border border-[#bae6fd]'
                }`}
            >
                <button
                    onClick={() => handleToggle(idx)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left text-sm md:text-md text-[#1e3a8a] font-medium focus:outline-none"
                    aria-expanded={openIndex === idx}
                >
                    <span>{item.question}</span>
                    {openIndex === idx ? (
                        <ChevronUp size={20} className="text-[#f59e0b]" />
                    ) : (
                        <ChevronDown size={20} className="text-[#14b8a6]" />
                    )}
                </button>
                {openIndex === idx && (
                    <div className="px-6 pb-4 text-gray-700 animate-fade-in text-sm">
                        {item.answer}
                    </div>
                )}
            </li>
        ))}
    </ul>
</div>

    );
};

export default Faq;
