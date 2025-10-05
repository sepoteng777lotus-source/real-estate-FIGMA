import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Home } from 'lucide-react';

export function PropertySellingServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Home className="mr-2 h-4 w-4" />
            Selling Your Property
          </Badge>
          <h2 className="mb-6 text-3xl lg:text-4xl">
            Ready to Sell Your Current Home?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Whether you're upgrading, downsizing, or relocating, I'll help you sell your property 
            for the best possible price. Get access to exclusive off-market buyers and comprehensive 
            selling support throughout Benoni and Boksburg.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card>
            <CardHeader>
              <CardTitle>Property Selling Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="mb-2">Property Evaluation</h4>
                    <p className="text-muted-foreground text-sm">
                      I'll conduct a comprehensive market analysis to determine your property's optimal selling price.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="mb-2">Mandate Agreement</h4>
                    <p className="text-muted-foreground text-sm">
                      We'll sign a mandate agreement outlining terms, commission, and marketing strategy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="mb-2">Marketing & Off-Market Listing</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional marketing and exclusive off-market listing on this website for qualified buyers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="mb-2">Sale Completion</h4>
                    <p className="text-muted-foreground text-sm">
                      Handle negotiations, paperwork, and guide you through to successful transfer.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ready to Sell?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I provide comprehensive selling services throughout Benoni and Boksburg, including:
                </p>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Free property valuation and market analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Professional photography and marketing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Access to qualified buyer database
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Off-market listing opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Full transaction management
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm">
                    <strong>Contact me directly:</strong><br />
                    📞 082 314 6558<br />
                    📧 mosakatshimolologo@gmail.com<br />
                    💬 WhatsApp available
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}