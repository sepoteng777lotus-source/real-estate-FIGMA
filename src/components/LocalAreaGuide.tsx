import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, School, ShoppingCart, Car, TrendingUp, Shield, Home } from 'lucide-react';
import { useState } from 'react';

const areaData = [
  {
    name: "Benoni Central",
    description: "Heart of Benoni with excellent amenities and established infrastructure",
    priceRange: "R800k - R1.5M",
    averagePrice: "R1.1M",
    growth: "+8.5%",
    safetyRating: 7,
    highlights: ["Close to CBD", "Established area", "Good transport links"],
    schools: ["Benoni Primary", "Benoni High School", "St Dunstan's College"],
    shopping: ["Benoni City Shopping Centre", "Lakeside Mall nearby"],
    transport: ["Close to R21 highway", "Gautrain bus routes", "Taxi rank"],
    crimeStats: "Moderate - improved security",
    investment: "Stable growth area with good rental demand"
  },
  {
    name: "Benoni North",
    description: "Popular family area with larger properties and suburban feel",
    priceRange: "R1.2M - R2.5M",
    averagePrice: "R1.8M",
    growth: "+12.3%",
    safetyRating: 8,
    highlights: ["Family-friendly", "Larger plots", "Good schools nearby"],
    schools: ["Northmead Primary", "Benoni Northerns High", "Private schools"],
    shopping: ["Northmead Square", "Benoni Country Club"],
    transport: ["Easy R21 access", "Close to OR Tambo Airport"],
    crimeStats: "Good - active community security",
    investment: "Strong growth potential, popular with families"
  },
  {
    name: "Boksburg Central",
    description: "Growing area with good amenities and affordable housing options",
    priceRange: "R600k - R1.2M",
    averagePrice: "R900k",
    growth: "+10.1%",
    safetyRating: 6,
    highlights: ["Affordable entry point", "Growing area", "Good schools"],
    schools: ["Boksburg Primary", "Hoërskool Boksburg", "Various private options"],
    shopping: ["East Rand Mall", "Boksburg City Shopping Centre"],
    transport: ["Close to N12 highway", "Good taxi routes"],
    crimeStats: "Improving - community initiatives active",
    investment: "Good entry-level investment area"
  },
  {
    name: "Boksburg East",
    description: "Established suburb with excellent schools and family amenities",
    priceRange: "R1M - R2M",
    averagePrice: "R1.4M",
    growth: "+9.8%",
    safetyRating: 8,
    highlights: ["Top schools", "Family suburbs", "Established community"],
    schools: ["Boksburg High School", "St Benedict's College", "Maryvale College"],
    shopping: ["East Rand Mall", "Local shopping centers"],
    transport: ["N12 highway access", "Good public transport"],
    crimeStats: "Good - well-established security",
    investment: "Stable area with consistent demand"
  },
  {
    name: "Actonville",
    description: "Affordable area with potential for growth and development",
    priceRange: "R450k - R800k",
    averagePrice: "R620k",
    growth: "+15.2%",
    safetyRating: 6,
    highlights: ["Very affordable", "First-time buyer friendly", "Growth potential"],
    schools: ["Actonville Primary", "Nearby high schools", "Transport to better schools"],
    shopping: ["Local shops", "Close to major malls"],
    transport: ["Taxi routes", "Affordable transport options"],
    crimeStats: "Moderate - community watch active",
    investment: "High growth potential for budget investors"
  },
  {
    name: "Cason",
    description: "Quiet residential area perfect for families seeking tranquility",
    priceRange: "R800k - R1.8M",
    averagePrice: "R1.2M",
    growth: "+7.8%",
    safetyRating: 8,
    highlights: ["Quiet residential", "Family-oriented", "Good value"],
    schools: ["Local primary schools", "Good high school access"],
    shopping: ["Nearby shopping centers", "Easy mall access"],
    transport: ["Quiet roads", "Good highway access"],
    crimeStats: "Very good - low crime rates",
    investment: "Stable area for long-term investment"
  }
];

export function LocalAreaGuide() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  
  const selectedAreaData = selectedArea ? areaData.find(area => area.name === selectedArea) : null;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            Complete Area Guide: Benoni & Boksburg
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get detailed insights about each area including property prices, schools, safety, and investment potential. 
            Choose the perfect location for your family's needs.
          </p>
        </div>

        {/* Area Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {areaData.map((area, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedArea === area.name ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedArea(selectedArea === area.name ? null : area.name)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{area.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {area.growth} growth
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Average Price:</span>
                    <span className="font-medium">{area.averagePrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price Range:</span>
                    <span className="text-sm">{area.priceRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Safety Rating:</span>
                    <div className="flex">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full mr-1 ${
                            i < area.safetyRating ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs ml-1">{area.safetyRating}/10</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {area.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Area Information */}
        {selectedAreaData && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Complete Guide: {selectedAreaData.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Schools */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <School className="w-4 h-4 text-primary" />
                    <h4 className="font-medium">Schools & Education</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedAreaData.schools.map((school, idx) => (
                      <li key={idx}>• {school}</li>
                    ))}
                  </ul>
                </div>

                {/* Shopping */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                    <h4 className="font-medium">Shopping & Amenities</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedAreaData.shopping.map((shop, idx) => (
                      <li key={idx}>• {shop}</li>
                    ))}
                  </ul>
                </div>

                {/* Transport */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-primary" />
                    <h4 className="font-medium">Transport & Access</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedAreaData.transport.map((transport, idx) => (
                      <li key={idx}>• {transport}</li>
                    ))}
                  </ul>
                </div>

                {/* Safety */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <h4 className="font-medium">Safety & Security</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedAreaData.crimeStats}
                  </p>
                </div>

                {/* Investment */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <h4 className="font-medium">Investment Outlook</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedAreaData.investment}
                  </p>
                </div>

                {/* Property Types */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-primary" />
                    <h4 className="font-medium">Property Information</h4>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Average Price:</strong> {selectedAreaData.averagePrice}</p>
                    <p><strong>Price Range:</strong> {selectedAreaData.priceRange}</p>
                    <p><strong>Annual Growth:</strong> {selectedAreaData.growth}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div>
                    <h4 className="font-medium mb-2">Ready to explore {selectedAreaData.name}?</h4>
                    <p className="text-sm text-muted-foreground">
                      Get personalized property recommendations and area tours
                    </p>
                  </div>
                  <Button>
                    Get Properties in {selectedAreaData.name}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            All data based on recent market analysis and local knowledge. Property prices and growth rates are estimates.
          </p>
          <Button variant="outline">
            Get Personalized Area Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
}