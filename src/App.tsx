import { useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { ContactSection } from './components/ContactSection';
import { SEOContent } from './components/SEOContent';
import { GoogleBusinessProfile } from './components/GoogleBusinessProfile';
import { AffordabilityCalculator } from './components/AffordabilityCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FAQSection } from './components/FAQSection';
import { LocalAreaGuide } from './components/LocalAreaGuide';
import { MarketInsights } from './components/MarketInsights';
import { PropertySellingServices } from './components/PropertySellingServices';
import { ComparisonTool } from './components/ComparisonTool';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { ClientProgressTracker } from './components/ClientProgressTracker';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onGetStarted={scrollToForm} />
      
      <main role="main">
        <HeroSection onGetStarted={scrollToForm} />
        
        <section id="about" aria-label="About our real estate services">
          <AboutSection />
        </section>
        
        <section id="process" aria-label="Our property buying process">
          <ProcessSection />
        </section>
        
        {/* Google Business Profile Section */}
        <GoogleBusinessProfile onGetStarted={scrollToForm} />
        
        {/* Affordability Calculator Section */}
        <AffordabilityCalculator />
        
        {/* Service Area Map Section */}
        <ServiceAreaMap />
        
        {/* Local Area Guide Section */}
        <LocalAreaGuide />
        
        {/* Area Comparison Tool */}
        <ComparisonTool />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Market Insights Section */}
        <MarketInsights />
        
        {/* Property Selling Services Section */}
        <PropertySellingServices />
        
        {/* Client Progress Tracker Section */}
        <ClientProgressTracker />
        
        {/* FAQ Section */}
        <FAQSection />
        
        <section 
          ref={formRef} 
          className="py-20 bg-muted/30" 
          id="get-started"
          aria-label="Start your property search"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl lg:text-4xl">
                Let's Find Your Perfect Home in Benoni or Boksburg
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Take the first step toward homeownership in Benoni or Boksburg. Tell me about your dream home and I'll create a personalized search plan for the East Rand market.
              </p>
              {/* SEO-optimized hidden text for search engines */}
              <div className="sr-only">
                Professional real estate agent specializing in Benoni properties, houses for sale, 
                property 24 listings, private property sales, and comprehensive real estate services 
                in the East Rand area of Gauteng, South Africa.
              </div>
            </div>
            <LeadCaptureForm />
          </div>
        </section>
        
        {/* SEO Content Section */}
        <SEOContent />
        
        <section id="contact" aria-label="Contact information and office details">
          <ContactSection onGetStarted={scrollToForm} />
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 Benoni Property Agent. All rights reserved.</p>
            <p className="text-sm text-primary-foreground/80 mt-2">
              Professional Real Estate Services | Licensed Agent | Specializing in Benoni & East Rand
            </p>
            <div className="mt-4 text-xs text-primary-foreground/70">
              <p>
                <strong>Service Areas:</strong> Benoni Central, Benoni North, Benoni South, Boksburg Central, 
                Boksburg East, Actonville, Cason, Northmead, Lakefield, Daveyton, Etwatwa, East Rand, Gauteng
              </p>
              <p className="mt-1">
                <strong>Specialities:</strong> Houses for Sale, Property Valuations, Market Analysis, 
                First-time Home Buyers, Investment Properties, Residential Real Estate
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
      <WhatsAppButton />
    </div>
  );
}