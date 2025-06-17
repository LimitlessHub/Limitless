import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FAQ } from "@/types"; // Import the FAQ type

interface ServiceFAQProps {
  faqs?: FAQ[]; // Accept an array of FAQs directly as a prop
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
    const { language } = useLanguage();
    
    // Check if the faqs prop is provided and has items
    if (!faqs || faqs.length === 0) {
        return <p className={`text-blue-200 ${language === 'ar' ? 'text-right' : 'text-left'}`}>لا توجد أسئلة شائعة لهذه الخدمة حاليًا.</p>;
    }

    return (
        <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                        <AccordionTrigger className={`hover:no-underline text-white text-base ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                           {faq.question}
                        </AccordionTrigger>
                        {/* FIX: Using a clearer, higher-contrast text color */}
                        <AccordionContent className="text-gray-300 pt-2 text-start">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
