import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactSectionProps {
  onGetStarted: () => void;
}

export function ContactSection({ onGetStarted }: ContactSectionProps) {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "082 314 6558",
      action: "tel:+27823146558"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email", 
      value: "mosakatshimolologo@gmail.com",
      action: "mailto:mosakatshimolologo@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Service Area",
      value: "Benoni & Surrounding East Rand Areas",
      action: null
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Available",
      value: "Mon-Sat: 8AM-8PM, Sun: 10AM-6PM",
      action: null
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            Ready to Find Your Benoni Home?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's start your property search in Benoni today. Contact me for a free consultation about the local market.
          </p>
          <Button 
            size="lg"
            onClick={onGetStarted}
            className="px-8 py-3"
          >
            Get Started Now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div>{info.value}</div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Licensed Real Estate Agent | Equal Housing Opportunity
          </p>
        </div>
      </div>
    </section>
  );
}