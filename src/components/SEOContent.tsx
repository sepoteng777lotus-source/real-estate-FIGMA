// SEO-optimized content component for better search rankings

export function SEOContent() {
  return (
    <section className="py-12 bg-background" aria-label="Property search and real estate services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Property Search Section */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6">Find Houses for Sale in Benoni and Boksburg</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <h3 className="font-medium text-foreground mb-3">Benoni & Boksburg Areas</h3>
              <ul className="space-y-1">
                <li>• Benoni Central properties</li>
                <li>• Benoni North houses for sale</li>
                <li>• Boksburg Central real estate</li>
                <li>• Boksburg East properties</li>
                <li>• Actonville houses</li>
                <li>• Cason properties</li>
                <li>• Northmead houses for sale</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground mb-3">Property Types Available</h3>
              <ul className="space-y-1">
                <li>• Family houses for sale</li>
                <li>• Townhouses in Benoni/Boksburg</li>
                <li>• Sectional title properties</li>
                <li>• Investment properties</li>
                <li>• First-time buyer homes</li>
                <li>• Luxury homes East Rand</li>
                <li>• Affordable housing options</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground mb-3">Price Ranges</h3>
              <ul className="space-y-1">
                <li>• R500k - R800k starter homes</li>
                <li>• R800k - R1.2M family properties</li>
                <li>• R1.2M - R2M executive homes</li>
                <li>• R2M+ luxury properties</li>
                <li>• Investment properties under R1M</li>
                <li>• Rental properties available</li>
                <li>• Commercial real estate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Local Knowledge Section */}
        <div className="mb-12 bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Why Choose a Local Benoni/Boksburg Real Estate Agent?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="mb-4">
                Unlike browsing Property 24 or Private Property alone, working with a dedicated Benoni and Boksburg 
                real estate agent gives you access to exclusive listings, market insights, and professional 
                guidance through the complex property buying process.
              </p>
              <p>
                I specialize exclusively in the East Rand market, with deep knowledge of Benoni and Boksburg schools, 
                amenities, transportation, and neighborhood characteristics that online platforms can't provide.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3">Local Advantages</h3>
              <ul className="space-y-1">
                <li>• Access to off-market properties</li>
                <li>• Negotiation expertise for Benoni market</li>
                <li>• Knowledge of local schools and amenities</li>
                <li>• Understanding of area growth potential</li>
                <li>• Established relationships with local agents</li>
                <li>• Immediate market updates and trends</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">How do I find houses for sale in Benoni or Boksburg?</h3>
                <p className="text-sm text-muted-foreground">
                  While Property 24 and Private Property list available homes, working with a local 
                  Benoni/Boksburg real estate agent provides access to exclusive listings and expert market guidance.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">What areas of Benoni and Boksburg do you service?</h3>
                <p className="text-sm text-muted-foreground">
                  I cover all Benoni and Boksburg suburbs including Benoni Central/North/South, Boksburg Central/East, 
                  Actonville, Cason, Northmead, plus surrounding East Rand areas like Daveyton, Etwatwa, and Springs.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">What's the average house price in Benoni and Boksburg?</h3>
                <p className="text-sm text-muted-foreground">
                  Benoni and Boksburg property prices range from R500,000 for starter homes to R2M+ for luxury properties, 
                  with most family homes falling between R800k-R1.5M depending on area and features.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">How long does it take to buy a house in Benoni or Boksburg?</h3>
                <p className="text-sm text-muted-foreground">
                  The typical property buying process in Benoni or Boksburg takes 6-12 weeks from offer to transfer, 
                  depending on bond approval and legal processes.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Do you help with first-time home buyers?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, I specialize in helping first-time buyers navigate the process, from pre-approval 
                  to closing, ensuring you understand every step of purchasing property in Benoni or Boksburg.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">What makes Benoni and Boksburg good places to buy property?</h3>
                <p className="text-sm text-muted-foreground">
                  Benoni and Boksburg offer excellent value for money, good schools, established infrastructure, 
                  and easy access to Johannesburg while maintaining a suburban lifestyle in the East Rand.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location-specific content */}
        <div className="text-center">
          <h2 className="text-2xl mb-4">Benoni & Boksburg Real Estate Market Update</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm">
            The Benoni and Boksburg property markets continue to show steady growth, with increasing demand for 
            quality family homes in established neighborhoods. Current market conditions favor buyers 
            in certain price ranges, making it an excellent time to invest in East Rand real estate. 
            Contact me for the latest market analysis and available properties in your preferred area.
          </p>
        </div>
      </div>
    </section>
  );
}