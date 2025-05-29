import { useState } from 'react';
import PropTypes from 'prop-types';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isInitiallyOpen = false }) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center cursor-pointer w-full text-left font-medium text-lg focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-gray-800 hover:text-zinc-500 transition">{question}</span>
                <span className="text-gray-500">
                    {isOpen ? <Minus className='cursor-pointer' /> : <Plus className='cursor-pointer' />}
                </span>
            </button>
            {isOpen && (
                <div className="mt-2 text-gray-600 font-light">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    isInitiallyOpen: PropTypes.bool,
};

const FAQ = ({ title, items }) => {
    return (
        <section className="">
            <div className="lg:w-[60vw] w-[90vw] mx-auto py-12 px-4 sm:px-6">
                <h2 className="text-3xl font-ligth text-center mb-8">{title}</h2>
                <div className="space-y-2">
                    {items.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isInitiallyOpen={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

FAQ.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Exemple d'utilisation
export default function FAQExample() {
    const faqItems = [
        {
            question: "Chamber reached do he nothing be?",
            answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
        },
        {
            question: "Stuff sight equal of my woody?",
            answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
        },
        {
            question: "At by pleasure of children be?",
            answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
        },
        {
            question: "Amounted repeated as believed in confined?",
            answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
        },
        {
            question: "In am do giving to afford parish settle easily garret?",
            answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
        }
    ];

    return <FAQ title="FAQ's" items={faqItems} />;
}