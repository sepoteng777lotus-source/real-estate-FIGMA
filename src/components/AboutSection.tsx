import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Personalized Service",
      description: "Every client gets my full attention and a customized home buying strategy."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Local Market Expertise",
      description: "Exclusive focus on Benoni and East Rand - I know every street, school, and neighbourhood intimately."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "End-to-End Support",
      description: "From initial search to closing day, I handle everything for a smooth process."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Proven Results",
      description: "Track record of successful transactions and satisfied clients."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1652878530627-cc6f063e3947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnR8ZW58MXx8fHwxNzU4ODc4NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional real estate agent"
              className="w-full h-96 lg:h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl lg:text-4xl">
              Professional Real Estate Services in Benoni
            </h2>
            <p className="mb-8 text-muted-foreground text-lg">
              Specializing in Benoni and East Rand properties, I offer comprehensive real estate services including houses for sale, property valuations, and market analysis. Whether you're searching Property 24, Private Property, or other platforms, I provide direct access to exclusive listings and expert guidance through your home buying journey in Gauteng, South Africa.
            </p>
            
            {/* SEO-focused service keywords */}
            <div className="mb-6 text-sm text-muted-foreground">
              <p><strong>Service Areas:</strong> Benoni Central, Benoni North, Benoni South, Daveyton, Etwatwa, Boksburg, Kempton Park, Springs, Brakpan</p>
              <p><strong>Property Types:</strong> Houses for sale, Townhouses, Sectional title properties, Investment properties, First-time buyer homes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}