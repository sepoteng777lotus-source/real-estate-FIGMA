import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Star, Clock, ExternalLink } from 'lucide-react';

interface GoogleBusinessProfileProps {
  onGetStarted: () => void;
}

export function GoogleBusinessProfile({ onGetStarted }: GoogleBusinessProfileProps) {
  return (
    <section className="py-16 bg-muted/30" id="google-business">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            Find Us on Google Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with Benoni Property Agent on Google Business Profile for reviews, 
            directions, business hours, and instant contact options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Business Information Card */}
          <Card className="h-fit">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Benoni Property Agent</h3>
                  <p className="text-muted-foreground">Real Estate Agent</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">5.0 (Local Reviews)</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">0823146558</p>
                    <p className="text-sm text-muted-foreground">WhatsApp Available</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">mosakatshimolologo@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Quick Response Guaranteed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Benoni, Gauteng</p>
                    <p className="text-sm text-muted-foreground">Serving All East Rand Areas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Mon-Fri: 8AM-6PM</p>
                    <p className="text-sm text-muted-foreground">Weekend viewings available</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  onClick={onGetStarted}
                  className="w-full"
                >
                  Get Started - Find My Home
                </Button>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('tel:0823146558')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/27823146558?text=Hi, I found you through your website and I\'m interested in finding properties in Benoni')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Business Features */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Local Expertise:</strong> Specialized knowledge of Benoni and East Rand property market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Immediate Response:</strong> SMS and email alerts ensure quick follow-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Authentic Service:</strong> Building expertise with genuine commitment to clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>WhatsApp Support:</strong> Convenient communication via your preferred platform</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-medium mb-2">Benoni Areas:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Benoni Central</li>
                      <li>• Benoni North</li>
                      <li>• Benoni South</li>
                      <li>• Actonville</li>
                      <li>• Northmead</li>
                      <li>• Lakefield</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Boksburg & East Rand:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Boksburg Central</li>
                      <li>• Boksburg East</li>
                      <li>• Cason</li>
                      <li>• Comet</li>
                      <li>• Springs</li>
                      <li>• Kempton Park</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Business CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-3">Find Us on Google Business</h3>
                <p className="text-sm mb-4 text-primary-foreground/90">
                  Search "Benoni Property Agent" or "Real Estate Agent Benoni" to find our Google Business Profile
                </p>

              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Benefits Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Our Google Business Profile helps you find us when searching for "houses for sale Benoni", 
            "Property 24 alternatives", "Private Property agents", or "real estate Benoni" on Google Maps and Search.
          </p>
        </div>
      </div>
    </section>
  );
}