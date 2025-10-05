import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Home, TrendingUp, Users, Phone } from 'lucide-react';
import { useState } from 'react';

const serviceAreas = [
  {
    id: 'benoni-central',
    name: 'Benoni Central',
    position: { top: '45%', left: '35%' },
    color: 'bg-blue-500',
    stats: { avgPrice: 'R1.1M', properties: '45+', growth: '+8.5%' },
    description: 'Heart of Benoni with excellent transport links'
  },
  {
    id: 'benoni-north', 
    name: 'Benoni North',
    position: { top: '25%', left: '40%' },
    color: 'bg-green-500',
    stats: { avgPrice: 'R1.8M', properties: '32+', growth: '+12.3%' },
    description: 'Premium family area with large properties'
  },
  {
    id: 'benoni-south',
    name: 'Benoni South',
    position: { top: '65%', left: '38%' },
    color: 'bg-purple-500', 
    stats: { avgPrice: 'R950k', properties: '28+', growth: '+7.2%' },
    description: 'Established residential area'
  },
  {
    id: 'boksburg-central',
    name: 'Boksburg Central',
    position: { top: '48%', left: '55%' },
    color: 'bg-orange-500',
    stats: { avgPrice: 'R900k', properties: '38+', growth: '+10.1%' },
    description: 'Growing area with good amenities'
  },
  {
    id: 'boksburg-east',
    name: 'Boksburg East', 
    position: { top: '35%', left: '65%' },
    color: 'bg-red-500',
    stats: { avgPrice: 'R1.4M', properties: '25+', growth: '+9.8%' },
    description: 'Top schools and family suburbs'
  },
  {
    id: 'boksburg-west',
    name: 'Boksburg West',
    position: { top: '55%', left: '50%' },
    color: 'bg-indigo-500',
    stats: { avgPrice: 'R780k', properties: '22+', growth: '+6.8%' },
    description: 'Affordable family area'
  },
  {
    id: 'actonville',
    name: 'Actonville',
    position: { top: '70%', left: '45%' },
    color: 'bg-yellow-500',
    stats: { avgPrice: 'R620k', properties: '35+', growth: '+15.2%' },
    description: 'High growth potential area'
  },
  {
    id: 'cason',
    name: 'Cason',
    position: { top: '30%', left: '25%' },
    color: 'bg-teal-500',
    stats: { avgPrice: 'R1.2M', properties: '18+', growth: '+7.8%' },
    description: 'Quiet residential family area'
  },
  {
    id: 'northmead',
    name: 'Northmead',
    position: { top: '20%', left: '30%' },
    color: 'bg-pink-500',
    stats: { avgPrice: 'R1.5M', properties: '15+', growth: '+9.1%' },
    description: 'Established suburb near Benoni North'
  },
  {
    id: 'lakefield',
    name: 'Lakefield',
    position: { top: '40%', left: '70%' },
    color: 'bg-cyan-500',
    stats: { avgPrice: 'R1.1M', properties: '20+', growth: '+8.3%' },
    description: 'Family-friendly with good schools'
  }
];

export function ServiceAreaMap() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  
  const activeArea = selectedArea || hoveredArea;
  const areaData = activeArea ? serviceAreas.find(area => area.id === activeArea) : null;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            My Service Areas: Benoni & Boksburg
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I specialize in the East Rand area, providing expert local knowledge across Benoni, Boksburg, 
            and surrounding suburbs. Click on any area to see current market data and available properties.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="h-[500px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Interactive Service Area Map
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Hover or click on any area to see detailed information
                </p>
              </CardHeader>
              <CardContent className="h-full">
                <div className="relative w-full h-full bg-muted/20 rounded-lg overflow-hidden">
                  {/* Map Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
                    {/* Road Lines */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-gray-300"></div>
                    <div className="absolute bottom-1/4 left-1/4 right-1/4 h-0.5 bg-gray-300"></div>
                  </div>

                  {/* Area Markers */}
                  {serviceAreas.map((area) => (
                    <div
                      key={area.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ top: area.position.top, left: area.position.left }}
                      onMouseEnter={() => setHoveredArea(area.id)}
                      onMouseLeave={() => setHoveredArea(null)}
                      onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                    >
                      <div 
                        className={`
                          w-4 h-4 rounded-full ${area.color} shadow-lg transition-all duration-200
                          ${activeArea === area.id ? 'scale-150 ring-4 ring-white' : 'hover:scale-125'}
                        `}
                      />
                      {(activeArea === area.id || selectedArea === area.id) && (
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10">
                          <div className="bg-white rounded-lg shadow-lg p-2 border min-w-[120px] text-center">
                            <div className="text-xs font-medium">{area.name}</div>
                            <div className="text-xs text-muted-foreground">{area.stats.avgPrice}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 shadow-lg">
                    <div className="text-xs font-medium mb-2">Service Areas</div>
                    <div className="text-xs text-muted-foreground">
                      Click markers for details
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Area Information Panel */}
          <div className="space-y-4">
            {areaData ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${areaData.color}`} />
                    {areaData.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{areaData.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="text-sm">Average Price</span>
                      <span className="font-medium">{areaData.stats.avgPrice}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="text-sm">Properties Available</span>
                      <span className="font-medium">{areaData.stats.properties}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="text-sm">Annual Growth</span>
                      <Badge variant="secondary">{areaData.stats.growth}</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button size="sm" className="w-full">
                      <Home className="w-4 h-4 mr-2" />
                      View Properties
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Market Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <h4 className="font-medium mb-2">Select an Area</h4>
                  <p className="text-sm text-muted-foreground">
                    Click on any area marker to see detailed market information and available properties.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Contact Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Ready to Explore?</h4>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Get personalized property recommendations for any of these areas.
                  </p>
                  <div className="space-y-2">
                    <Button variant="secondary" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Me: 082 314 6558
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Schedule Area Tour
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Service Areas</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">280+</div>
              <div className="text-sm text-muted-foreground">Active Properties</div>
            </CardContent>
          </Card>
          <Card className="text-center">  
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">R450k - R2.5M</div>
              <div className="text-sm text-muted-foreground">Price Range</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">Local Expert</div>
              <div className="text-sm text-muted-foreground">East Rand Specialist</div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Specializing in residential properties across the East Rand with deep local market knowledge
          </p>
          <Button variant="outline">
            Download Area Guide PDF
          </Button>
        </div>
      </div>
    </section>
  );
}