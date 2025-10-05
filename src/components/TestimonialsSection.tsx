import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    location: "Benoni North",
    rating: 5,
    text: "Mosaka helped me understand the buying process as a first-time buyer. His knowledge of the Benoni market and patient guidance made all the difference. Highly recommend!",
    type: "First-time Buyer"
  },
  {
    name: "David K.", 
    location: "Boksburg East",
    rating: 5,
    text: "Professional, responsive, and really knows the East Rand area well. Mosaka provided excellent market insights that helped us make the right decision for our family.",
    type: "Family Home Purchase"
  },
  {
    name: "Jennifer L.",
    location: "Actonville",
    rating: 5,
    text: "What impressed me most was Mosaka's honest approach. He didn't try to oversell but focused on finding properties that truly matched what we were looking for.",
    type: "Property Investment"
  },
  {
    name: "Michael T.",
    location: "Cason",
    rating: 5,
    text: "Excellent communication throughout the process. Always available to answer questions and provided valuable advice about the neighborhood and property value.",
    type: "Relocation Purchase"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            What My Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from families I've helped find their perfect homes in Benoni and Boksburg
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  "{testimonial.text}"
                </p>
                
                <div className="space-y-2">
                  <StarRating rating={testimonial.rating} />
                  
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary">{testimonial.type}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Building trust through honest service and local expertise in the East Rand property market
          </p>
        </div>
      </div>
    </section>
  );
}