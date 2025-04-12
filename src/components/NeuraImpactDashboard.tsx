
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Users, Coins, BarChart3, MapPin, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";

// Sample data for the chart
const sentimentData = [
  { month: 'Jan', score: 82, participants: 1200 },
  { month: 'Feb', score: 84, participants: 1800 },
  { month: 'Mar', score: 86, participants: 2500 },
  { month: 'Apr', score: 83, participants: 3000 },
  { month: 'May', score: 85, participants: 3200 },
  { month: 'Jun', score: 88, participants: 3800 },
  { month: 'Jul', score: 90, participants: 4200 },
  { month: 'Aug', score: 92, participants: 4800 },
  { month: 'Sep', score: 91, participants: 5100 },
  { month: 'Oct', score: 93, participants: 5600 },
  { month: 'Nov', score: 92, participants: 6000 },
  { month: 'Dec', score: 94, participants: 6500 },
];

const regionData = [
  { name: 'Ghana', students: 2800, tokens: 620000 },
  { name: 'Côte d\'Ivoire', students: 2100, tokens: 480000 },
  { name: 'Nigeria', students: 900, tokens: 140000 },
  { name: 'Ecuador', students: 700, tokens: 90000 },
];

const NeuraImpactDashboard = () => {
  const [viewType, setViewType] = useState<'sentiment' | 'region'>('sentiment');
  const [timeRange, setTimeRange] = useState<'6M' | '1Y' | 'ALL'>('1Y');
  
  return (
    <section id="impact" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900 mb-3 flex items-center">
              <Brain className="mr-3 h-8 w-8 text-neural-600" />
              NeuraImpact Dashboard
            </h2>
            <p className="text-cocoa-600 text-lg max-w-2xl">
              AI-powered metrics providing real-time insights into our ethical impact across the global cocoa supply chain.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-3">
            <Button 
              variant={viewType === 'sentiment' ? 'default' : 'outline'}
              className={viewType === 'sentiment' 
                ? 'bg-neural-600 hover:bg-neural-700 text-white' 
                : 'border-neural-200 text-neural-700 hover:bg-neural-50'}
              onClick={() => setViewType('sentiment')}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Sentiment Trends
            </Button>
            <Button 
              variant={viewType === 'region' ? 'default' : 'outline'}
              className={viewType === 'region' 
                ? 'bg-neural-600 hover:bg-neural-700 text-white' 
                : 'border-neural-200 text-neural-700 hover:bg-neural-50'}
              onClick={() => setViewType('region')}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Regional Data
            </Button>
          </div>
        </div>
        
        {/* Main dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Key metrics */}
          <div className="md:col-span-1 grid grid-cols-1 gap-6">
            <Card className="cocoa-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center text-cocoa-800">
                  <Users className="mr-2 h-5 w-5 text-forest-600" />
                  Children in Education
                </CardTitle>
                <CardDescription className="text-cocoa-500">
                  Verified school enrollments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-forest-700 mb-3">6,500</div>
                <div className="flex items-center text-sm text-forest-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  <span>+12% from last quarter</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cocoa-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center text-cocoa-800">
                  <Coins className="mr-2 h-5 w-5 text-gold-600" />
                  CIT Tokens in Circulation
                </CardTitle>
                <CardDescription className="text-cocoa-500">
                  Active Cocoa Impact Tokens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gold-600 mb-3">1.23M</div>
                <div className="flex items-center text-sm text-gold-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  <span>+8.5% monthly growth</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cocoa-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center text-cocoa-800">
                  <BarChart3 className="mr-2 h-5 w-5 text-neural-600" />
                  AI Trust Sentiment
                </CardTitle>
                <CardDescription className="text-cocoa-500">
                  Based on 25K+ consumer reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-neural-600 mb-3">94%</div>
                <div className="flex items-center text-sm text-neural-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  <span>+2.1% this month</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main chart */}
          <div className="md:col-span-2">
            <Card className="cocoa-card h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-cocoa-800">
                    {viewType === 'sentiment' ? 'AI Sentiment Analysis' : 'Regional Impact Distribution'}
                  </CardTitle>
                  <CardDescription className="text-cocoa-500">
                    {viewType === 'sentiment' 
                      ? 'Consumer trust and market confidence metrics' 
                      : 'Educational enrollment and token distribution by region'}
                  </CardDescription>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`text-xs ${timeRange === '6M' ? 'bg-muted' : ''}`}
                    onClick={() => setTimeRange('6M')}
                  >
                    6M
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`text-xs ${timeRange === '1Y' ? 'bg-muted' : ''}`}
                    onClick={() => setTimeRange('1Y')}
                  >
                    1Y
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`text-xs ${timeRange === 'ALL' ? 'bg-muted' : ''}`}
                    onClick={() => setTimeRange('ALL')}
                  >
                    ALL
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[350px]">
                  {viewType === 'sentiment' ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={sentimentData}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6586e0" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#6586e0" stopOpacity={0.1} />
                          </linearGradient>
                          <linearGradient id="colorParticipants" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#26a770" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#26a770" stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0e6dc" />
                        <XAxis dataKey="month" stroke="#8d6544" />
                        <YAxis stroke="#8d6544" />
                        <Tooltip />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="score"
                          name="Trust Score %"
                          stroke="#6586e0"
                          fillOpacity={1}
                          fill="url(#colorScore)"
                        />
                        <Area
                          type="monotone"
                          dataKey="participants"
                          name="Program Participants"
                          stroke="#26a770"
                          fillOpacity={1}
                          fill="url(#colorParticipants)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={regionData}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0e6dc" />
                        <XAxis dataKey="name" stroke="#8d6544" />
                        <YAxis stroke="#8d6544" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="students" name="Students Enrolled" fill="#6586e0" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="tokens" name="CIT Tokens" fill="#e19c1a" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* AI analysis callout */}
        <div className="mt-8 bg-neural-50 border border-neural-200 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-neural-100 flex-shrink-0 flex items-center justify-center">
            <Brain className="h-6 w-6 text-neural-700" />
          </div>
          <div className="flex-grow">
            <h4 className="text-lg font-semibold text-neural-800 mb-1">AI Analysis Insight</h4>
            <p className="text-neural-600">Our NeuraEnhance™ model detects a strong correlation between increased school attendance and improved cocoa quality metrics. Communities with 75%+ child education rates show 23% higher cocoa bean quality scores.</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-neural-700 hover:bg-neural-800 text-white self-start md:self-center">
            <Calendar className="mr-2 h-4 w-4" />
            View Full Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NeuraImpactDashboard;
