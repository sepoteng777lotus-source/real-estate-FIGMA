import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { School, ShoppingCart, Car, Shield, TrendingUp, Home, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

const areaData = {
  "benoni-central": {
    name: "Benoni Central",
    avgPrice: "R1,100,000",
    priceRange: "R800k - R1.5M",
    growth: "8.5%",
    safetyScore: 7,
    schoolRating: 7,
    amenities: 8,
    transport: 9,
    investment: 7,
    demographics: "Mixed professionals and families",
    keyFeatures: ["Central location", "Good transport", "Established area"],
    schools: ["Benoni Primary", "Benoni High School", "St Dunstan's College"],
    shopping: ["Benoni City Shopping Centre", "Lakeside Mall (nearby)"],
    transport: ["R21 highway access", "Gautrain bus routes", "Central taxi rank"],
    safety: "Moderate security, improving with community initiatives",
    bestFor: ["First-time buyers", "Investment properties", "Young professionals"],
    cons: ["Higher traffic", "Limited parking", "Older infrastructure"]
  },
  "benoni-north": {
    name: "Benoni North",
    avgPrice: "R1,800,000", 
    priceRange: "R1.2M - R2.5M",
    growth: "12.3%",
    safetyScore: 8,
    schoolRating: 9,
    amenities: 8,
    transport: 8,
    investment: 9,
    demographics: "Established families, professionals",
    keyFeatures: ["Large properties", "Family-friendly", "Top schools"],
    schools: ["Northmead Primary", "Benoni Northerns High", "Private schools"],
    shopping: ["Northmead Square", "Benoni Country Club", "Easy mall access"],
    transport: ["R21 highway close", "OR Tambo Airport access"],
    safety: "Excellent security with active community patrols",
    bestFor: ["Growing families", "Long-term investment", "Professionals"],
    cons: ["Higher prices", "Limited stock", "Commute to city"]
  },
  "boksburg-central": {
    name: "Boksburg Central",
    avgPrice: "R900,000",
    priceRange: "R600k - R1.2M", 
    growth: "10.1%",
    safetyScore: 6,
    schoolRating: 7,
    amenities: 8,
    transport: 8,
    investment: 8,
    demographics: "Young families, first-time buyers",
    keyFeatures: ["Affordable entry", "Growing area", "Good schools"],
    schools: ["Boksburg Primary", "Hoërskool Boksburg", "Private options"],
    shopping: ["East Rand Mall", "Boksburg City Shopping Centre"],
    transport: ["N12 highway access", "Good taxi networks"],
    safety: "Improving with community watch programs active",
    bestFor: ["First-time buyers", "Young families", "Budget investors"],
    cons: ["Some areas need development", "Traffic congestion", "Limited nightlife"]
  },
  "boksburg-east": {
    name: "Boksburg East",
    avgPrice: "R1,400,000",
    priceRange: "R1M - R2M",
    growth: "9.8%",
    safetyScore: 8,
    schoolRating: 9,
    amenities: 9,
    transport: 8,
    investment: 8,
    demographics: "Established families, educated professionals",
    keyFeatures: ["Top schools", "Family suburbs", "Established community"],
    schools: ["Boksburg High School", "St Benedict's College", "Maryvale College"],
    shopping: ["East Rand Mall", "Local shopping centers", "Easy access"],
    transport: ["N12 highway access", "Good public transport"],  
    safety: "Excellent security with established neighborhood watch",
    bestFor: ["Families with children", "Education-focused buyers", "Stable investment"],
    cons: ["Premium pricing", "High demand", "Limited availability"]
  },
  "actonville": {
    name: "Actonville", 
    avgPrice: "R620,000",
    priceRange: "R450k - R800k",
    growth: "15.2%",
    safetyScore: 6,
    schoolRating: 6,
    amenities: 6,
    transport: 7,
    investment: 9,
    demographics: "Young professionals, first-time buyers",
    keyFeatures: ["Very affordable", "High growth", "Investment potential"],
    schools: ["Actonville Primary", "Nearby high schools", "Transport to better schools"],
    shopping: ["Local shops", "Close to major malls", "Growing retail"],
    transport: ["Good taxi routes", "Affordable transport", "Highway access"],
    safety: "Moderate with active community improvement programs",
    bestFor: ["First-time buyers", "Property investors", "Budget-conscious families"],
    cons: ["Developing area", "Limited amenities", "Distance from premium schools"]
  },
  "cason": {
    name: "Cason",
    avgPrice: "R1,200,000",
    priceRange: "R800k - R1.8M", 
    growth: "7.8%",
    safetyScore: 8,
    schoolRating: 7,
    amenities: 7,
    transport: 7,
    investment: 7,
    demographics: "Quiet families, retirees",
    keyFeatures: ["Quiet residential", "Family-oriented", "Good value"],
    schools: ["Local primary schools", "Good high school access", "Transport available"],
    shopping: ["Nearby shopping centers", "Easy mall access", "Local amenities"],
    transport: ["Quiet roads", "Good highway access", "Limited public transport"],
    safety: "Very good with low crime rates and community involvement",
    bestFor: ["Families seeking quiet", "Retirement living", "Long-term investment"],
    cons: ["Limited nightlife", "Fewer amenities", "Public transport limited"]
  }
};

export function ComparisonTool() {
  const [area1, setArea1] = useState<string>("");
  const [area2, setArea2] = useState<string>(""); 
  
  const areas = Object.keys(areaData);
  const area1Data = area1 ? areaData[area1 as keyof typeof areaData] : null;
  const area2Data = area2 ? areaData[area2 as keyof typeof areaData] : null;

  const ScoreBar = ({ score, max = 10, color = "bg-primary" }: { score: number; max?: number; color?: string }) => (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-muted rounded-full h-2">
        <div 
          className={`h-full rounded-full ${color}`}
          style={{ width: `${(score / max) * 100}%` }}
        />
      </div>
      <span className="text-sm font-medium w-8">{score}/{max}</span>
    </div>
  );

  const formatAreaName = (key: string) => {
    return areaData[key as keyof typeof areaData]?.name || key;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            Area Comparison Tool
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Compare different areas in Benoni and Boksburg side-by-side. Understand the differences in pricing, 
            amenities, schools, and investment potential to make the right choice for your needs.
          </p>
        </div>

        {/* Area Selection */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <div className="min-w-[200px]">
            <Select value={area1} onValueChange={setArea1}>
              <SelectTrigger>
                <SelectValue placeholder="Select first area" />
              </SelectTrigger>
              <SelectContent>
                {areas.map(key => (
                  <SelectItem key={key} value={key} disabled={key === area2}>
                    {formatAreaName(key)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-center px-4">
            <span className="text-muted-foreground">VS</span>
          </div>
          
          <div className="min-w-[200px]">
            <Select value={area2} onValueChange={setArea2}>
              <SelectTrigger>
                <SelectValue placeholder="Select second area" />
              </SelectTrigger>
              <SelectContent>
                {areas.map(key => (
                  <SelectItem key={key} value={key} disabled={key === area1}>
                    {formatAreaName(key)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Comparison Results */}
        {area1Data && area2Data && (
          <div className="space-y-8">
            {/* Quick Stats Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {area1Data.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{area1Data.avgPrice}</div>
                      <div className="text-sm text-muted-foreground">Average Price</div>
                      <Badge variant="secondary" className="mt-1">
                        {area1Data.growth} annual growth
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <div className="font-medium">{area1Data.safetyScore}/10</div>
                        <div className="text-muted-foreground">Safety</div>
                      </div>
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <div className="font-medium">{area1Data.schoolRating}/10</div>
                        <div className="text-muted-foreground">Schools</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {area2Data.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{area2Data.avgPrice}</div>
                      <div className="text-sm text-muted-foreground">Average Price</div>
                      <Badge variant="secondary" className="mt-1">
                        {area2Data.growth} annual growth
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <div className="font-medium">{area2Data.safetyScore}/10</div>
                        <div className="text-muted-foreground">Safety</div>
                      </div>
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <div className="font-medium">{area2Data.schoolRating}/10</div>
                        <div className="text-muted-foreground">Schools</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Scores Comparison */}
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Key Metrics Comparison
                    </h4>
                    <div className="grid gap-4">
                      <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="font-medium">Safety Rating</div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{area1Data.name}</div>
                          <ScoreBar score={area1Data.safetyScore} color="bg-green-500" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{area2Data.name}</div>
                          <ScoreBar score={area2Data.safetyScore} color="bg-blue-500" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="font-medium">School Quality</div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{area1Data.name}</div>
                          <ScoreBar score={area1Data.schoolRating} color="bg-green-500" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{area2Data.name}</div>
                          <ScoreBar score={area2Data.schoolRating} color="bg-blue-500" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="font-medium">Investment Potential</div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{area1Data.name}</div>
                          <ScoreBar score={area1Data.investment} color="bg-green-500" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{area2Data.name}</div>
                          <ScoreBar score={area2Data.investment} color="bg-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Comparison */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <School className="w-4 h-4" />
                        Schools & Education
                      </h4>
                      <div className="grid gap-4">
                        <div>
                          <div className="text-sm font-medium text-green-700 mb-1">{area1Data.name}</div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {area1Data.schools.map((school, idx) => (
                              <li key={idx}>• {school}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-700 mb-1">{area2Data.name}</div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {area2Data.schools.map((school, idx) => (
                              <li key={idx}>• {school}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Shopping & Amenities
                      </h4>
                      <div className="grid gap-4">
                        <div>
                          <div className="text-sm font-medium text-green-700 mb-1">{area1Data.name}</div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {area1Data.shopping.map((shop, idx) => (
                              <li key={idx}>• {shop}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-700 mb-1">{area2Data.name}</div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {area2Data.shopping.map((shop, idx) => (
                              <li key={idx}>• {shop}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best For Comparison */}
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Best Suited For
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm font-medium text-green-700 mb-2">{area1Data.name}</div>
                        <div className="flex flex-wrap gap-1">
                          {area1Data.bestFor.map((item, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-700 mb-2">{area2Data.name}</div>
                        <div className="flex flex-wrap gap-1">
                          {area2Data.bestFor.map((item, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <div className="max-w-2xl mx-auto mb-6">
                <h3 className="font-medium mb-2">Need Help Deciding?</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized advice based on your specific needs, budget, and lifestyle preferences.
                </p>
              </div>
              <Button>
                Schedule Area Consultation
              </Button>
            </div>
          </div>
        )}

        {/* No Selection State */}
        {(!area1Data || !area2Data) && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-medium mb-2">Select Two Areas to Compare</h3>
            <p className="text-muted-foreground">
              Choose any two areas from Benoni and Boksburg to see a detailed side-by-side comparison
            </p>
          </div>
        )}
      </div>
    </section>
  );
}