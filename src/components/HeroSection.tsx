import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3NTg5ODIzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern house exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="mb-6 text-4xl md:text-6xl">
          <span className="block">Benoni Property Agent</span>
          <span className="block text-3xl md:text-4xl mt-2 text-white/90">Houses for Sale | Real Estate Agent</span>
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          Professional real estate services in Benoni and East Rand. Find houses for sale, get market insights, and expert guidance through your property journey. Your trusted partner for buying homes in Gauteng, South Africa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-3"
            onClick={onGetStarted}
          >
            Find My Benoni Home
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
            onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>


      </div>
    </section>
  );
}