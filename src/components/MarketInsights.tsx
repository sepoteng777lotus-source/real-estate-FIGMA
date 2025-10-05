import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, TrendingUp, AlertCircle, DollarSign, Users, MapPin, Calculator } from 'lucide-react';

const insights = [
  {
    title: "East Rand Property Market Update - October 2024",
    date: "October 3, 2024",
    category: "Market Analysis",
    readTime: "3 min read",
    summary: "Interest rate stability is bringing renewed confidence to the Benoni and Boksburg property markets.",
    content: "The Reserve Bank's decision to hold interest rates steady has created positive momentum in the East Rand property market. Both Benoni and Boksburg are showing increased buyer activity, particularly in the R800k-R1.5M range. First-time buyers are taking advantage of competitive bond rates, while investors are eyeing growth areas like Actonville and Benoni North.",
    highlights: [
      "Property viewings up 23% compared to last quarter",
      "Average time on market decreased to 45 days",
      "First-time buyer inquiries increased 35%"
    ],
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    title: "Best Schools in Boksburg for Growing Families",
    date: "September 28, 2024", 
    category: "Area Guide",
    readTime: "4 min read",
    summary: "A comprehensive guide to top-rated schools and their surrounding neighborhoods for family home buyers.",
    content: "Choosing the right school district often determines where families buy their homes. Boksburg offers excellent educational options from St Benedict's College to Maryvale College. Properties within 2km of these schools typically hold their value better and attract quality tenants for investors.",
    highlights: [
      "Top 5 primary schools in Boksburg East",
      "School fee ranges and enrollment requirements", 
      "Property price premiums near good schools"
    ],
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Investment Opportunities: Actonville's Growth Story",
    date: "September 20, 2024",
    category: "Investment",
    readTime: "5 min read", 
    summary: "Why savvy investors are looking at Actonville for high-growth potential and strong rental yields.",
    content: "Actonville is experiencing a transformation with improved infrastructure and community development. Properties under R600k are attracting young professionals and families, creating strong rental demand. The area's proximity to major transport routes and affordable pricing make it ideal for first-time investors.",
    highlights: [
      "Average rental yields of 8-10% annually",
      "Property values increased 15% year-on-year",
      "New developments improving area appeal"
    ],
    icon: DollarSign,
    color: "text-purple-600"
  },
  {
    title: "First-Time Buyer Guide: What You Need to Know",
    date: "September 15, 2024",
    category: "Buyer Tips",
    readTime: "6 min read",
    summary: "Essential information for first-time home buyers navigating the South African property market.",
    content: "Buying your first home can feel overwhelming, but understanding the process makes it manageable. From getting pre-approved for a bond to understanding transfer costs, I guide first-time buyers through every step. The current market offers good opportunities for those who are prepared.",
    highlights: [
      "Bond pre-approval process explained",
      "Hidden costs to budget for",
      "Best areas for first-time buyers"
    ],
    icon: AlertCircle,
    color: "text-orange-600"
  },
  {
    title: "Benoni North vs Boksburg East: Area Comparison",
    date: "September 8, 2024",
    category: "Area Comparison",
    readTime: "4 min read",
    summary: "Detailed comparison of two popular family areas to help you choose the right location.",
    content: "Both Benoni North and Boksburg East are excellent family areas, but they serve different needs. Benoni North offers larger properties and a more suburban feel, while Boksburg East provides established amenities and shorter commutes. Understanding these differences helps families make the right choice.",
    highlights: [
      "Average property sizes and prices",
      "School quality and accessibility",
      "Investment potential comparison"
    ],
    icon: MapPin,
    color: "text-indigo-600"
  },
  {
    title: "Transfer Costs Explained: What Buyers Should Budget",
    date: "August 30, 2024",
    category: "Buyer Education",
    readTime: "3 min read",
    summary: "Understanding all the costs involved in property transfer to avoid surprises at settlement.",
    content: "Many buyers focus only on the deposit and forget about transfer costs. These typically add 8-12% to your purchase price and include attorney fees, deeds office fees, bond registration, and other charges. Proper budgeting prevents delays and stress during the buying process.",
    highlights: [
      "Detailed breakdown of all transfer costs",
      "How to budget effectively",
      "Ways to reduce some transfer expenses"
    ],
    icon: Calculator,
    color: "text-red-600"
  }
];



export function MarketInsights() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            Market Insights & Local Knowledge
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Stay informed with the latest property market trends, area guides, and expert insights 
            for Benoni and Boksburg. Knowledge that helps you make better property decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    Featured Article
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {insights[0].date}
                  </div>
                </div>
                <CardTitle className="text-xl">{insights[0].title}</CardTitle>
                <p className="text-muted-foreground">{insights[0].summary}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{insights[0].category}</Badge>
                  <span className="text-xs text-muted-foreground">{insights[0].readTime}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {insights[0].content}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-medium">Key Highlights:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {insights[0].highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" size="sm">
                  Read Full Article
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Articles Sidebar */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Recent Articles</h3>
            {insights.slice(1, 4).map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-muted/50 ${insight.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="outline" className="text-xs">
                            {insight.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {insight.readTime}
                          </span>
                        </div>
                        <h4 className="font-medium text-sm leading-tight mb-2">
                          {insight.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {insight.summary}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground mt-2">
                          <Calendar className="w-3 h-3 mr-1" />
                          {insight.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* All Articles Grid */}
        <div className="mt-12">
          <h3 className="font-medium text-lg mb-6">All Market Insights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.slice(1).map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg bg-muted/50 ${insight.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {insight.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-base leading-tight">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {insight.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {insight.date}
                      </div>
                      <span>{insight.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-medium mb-2">Get Market Updates Direct to Your Inbox</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay ahead with weekly market insights, new property alerts, and investment opportunities in Benoni and Boksburg.
            </p>
            <Button>
              Subscribe to Market Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}