import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqs = [
  {
    question: "How do I know what I can afford to spend on a house?",
    answer: "Banks typically approve loans where your monthly repayment doesn't exceed 30% of your gross monthly income. Use our affordability calculator above to get an estimate, but I can also connect you with bond originators for pre-approval, which gives you a clear budget and strengthens your offers."
  },
  {
    question: "What's the difference between Benoni and Boksburg for families?",
    answer: "Both areas offer excellent value for families. Benoni tends to have larger properties and established neighborhoods, while Boksburg offers good schools and shopping centers. Benoni North and Boksburg East are popular for families. I can provide detailed area comparisons based on your specific needs."
  },
  {
    question: "How long does the property buying process take in South Africa?",
    answer: "Typically 6-12 weeks from offer acceptance to transfer. This includes bond approval (2-4 weeks), attorney processes, and final transfer. I guide you through each step and keep the process moving smoothly."
  },
  {
    question: "Do I need a deposit to buy a house?",
    answer: "While 100% bonds are possible, most banks require at least 10% deposit. A 20% deposit often gets you better interest rates. Beyond the deposit, budget for transfer costs, bond registration, and moving expenses - typically 8-12% of the purchase price total."
  },
  {
    question: "Should I use Property 24 or Private Property instead of an agent?",
    answer: "Online platforms are great for browsing, but they show the same properties everyone sees. As your agent, I have access to off-market properties, can negotiate better prices, handle complex paperwork, and provide crucial local market insights you won't find online."
  },
  {
    question: "What areas in Benoni/Boksburg are good for investment?",
    answer: "Areas near good schools, shopping centers, and transport routes typically perform well. Benoni North, Actonville, and Boksburg East show consistent growth. I can provide detailed investment analysis including rental yields and growth potential for specific areas."
  },
  {
    question: "How do I know if a house is priced correctly?",
    answer: "I provide comprehensive market analysis comparing recent sales of similar properties in the area. This includes price per square meter, recent market trends, and estimated time on market. You'll know exactly where a property stands in the current market."
  },
  {
    question: "What if I'm relocating to Benoni/Boksburg and don't know the areas?",
    answer: "I provide detailed area guides covering schools, shopping, safety, transport, and community amenities. I can also arrange virtual or in-person area tours to help you understand each neighborhood's character and suitability for your lifestyle."
  },
  {
    question: "Do you help with bond applications?",
    answer: "Yes, I work with reputable bond originators who can submit your application to multiple banks simultaneously, increasing your chances of approval and potentially getting better rates. This service is typically free as they're paid by the bank."
  },
  {
    question: "What happens after I make an offer on a house?",
    answer: "I handle all negotiations and paperwork. Once accepted, we arrange inspections, finalize bond applications, and coordinate with attorneys. I keep you informed at every step and ensure all deadlines are met for a smooth transaction."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to common questions about buying property in Benoni and Boksburg
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Have a different question? <span className="text-primary font-medium cursor-pointer">Contact me directly</span> for personalized answers about your property search.
          </p>
        </div>
      </div>
    </section>
  );
}