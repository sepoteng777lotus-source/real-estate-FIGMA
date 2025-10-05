import { Card, CardContent } from './ui/card';
import { Search, MessageSquare, Home, Key } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      step: "01",
      title: "Initial Consultation",
      description: "We'll discuss your needs, budget, timeline, and preferences to create your personalized home buying strategy."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      step: "02", 
      title: "Property Search",
      description: "I'll use my extensive Benoni network and local market knowledge to find properties that match your criteria, including exclusive off-market opportunities."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      step: "03",
      title: "Tours & Evaluation",
      description: "We'll tour properties together, and I'll provide expert analysis on value, potential issues, and negotiation strategies."
    },
    {
      icon: <Key className="w-8 h-8 text-primary" />,
      step: "04",
      title: "Closing Support",
      description: "From offer to closing, I'll handle negotiations, coordinate inspections, and ensure a smooth transaction."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven process that takes the stress out of home buying and gets you the keys to your dream home faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      {step.step}
                    </div>
                  </div>
                </div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}