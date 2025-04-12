
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, TrendingUp, Shield, RefreshCw, ExternalLink, AlertCircle, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const TokenExchange = () => {
  const [amount, setAmount] = useState("");
  const [exchangeType, setExchangeType] = useState<'buy' | 'sell'>('buy');
  const [trustScore, setTrustScore] = useState(92);
  
  // Simulate trust score change when amount changes
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    
    // Simulate trust score fluctuation based on amount
    if (value.trim() === '') {
      setTrustScore(92);
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        const newTrust = 92 + (Math.sin(numValue / 100) * 4);
        setTrustScore(Math.round(newTrust * 10) / 10);
      }
    }
  };
  
  const getEstimatedTokens = () => {
    const numValue = parseFloat(amount);
    if (isNaN(numValue) || numValue <= 0) return "0";
    return exchangeType === 'buy' 
      ? ((numValue / 0.015) * 0.98).toFixed(2) 
      : ((numValue * 0.015) * 0.98).toFixed(5);
  };
  
  const getExchangeDescription = () => {
    return exchangeType === 'buy' 
      ? "ETH → CIT Cocoa Impact Tokens" 
      : "CIT Cocoa Impact Tokens → ETH";
  };
  
  return (
    <section id="token" className="py-16 md:py-24 bg-cocoa-50 relative">
      <div className="absolute inset-0 bg-cocoa-texture opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900 mb-3">
            Token Exchange with AI Sentiment
          </h2>
          <p className="text-cocoa-600 text-lg max-w-2xl mx-auto">
            Trade Cocoa Impact Tokens (CIT) with confidence using our neural sentiment engine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Exchange card */}
          <Card className="cocoa-card mx-auto w-full max-w-md overflow-hidden border-gold-200">
            <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100 border-b border-gold-200">
              <div className="flex justify-between items-center">
                <CardTitle className="text-gold-800">Cocoa Impact Token Exchange</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-white/50 border-gold-300 text-gold-700">
                    <RefreshCw className="mr-1 h-3 w-3" /> 1 CIT = 0.015 ETH
                  </Badge>
                </div>
              </div>
              <CardDescription className="text-gold-600">
                {getExchangeDescription()}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="flex space-x-2 mb-6">
                <Button 
                  variant={exchangeType === 'buy' ? "default" : "outline"}
                  className={exchangeType === 'buy' 
                    ? "bg-gold-500 hover:bg-gold-600 text-white w-full" 
                    : "border-gold-200 text-gold-700 hover:bg-gold-50 w-full"}
                  onClick={() => setExchangeType('buy')}
                >
                  Buy CIT
                </Button>
                <Button 
                  variant={exchangeType === 'sell' ? "default" : "outline"}
                  className={exchangeType === 'sell' 
                    ? "bg-gold-500 hover:bg-gold-600 text-white w-full" 
                    : "border-gold-200 text-gold-700 hover:bg-gold-50 w-full"}
                  onClick={() => setExchangeType('sell')}
                >
                  Sell CIT
                </Button>
              </div>
              
              <div className="space-y-4">
                {/* Input box */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm font-medium text-cocoa-700">
                      {exchangeType === 'buy' ? 'ETH Amount' : 'CIT Amount'}
                    </label>
                    <span className="text-sm text-cocoa-500">
                      Balance: {exchangeType === 'buy' ? '1.458 ETH' : '3,245 CIT'}
                    </span>
                  </div>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="pr-16 border-gold-200 focus-visible:ring-gold-400 text-cocoa-800"
                      value={amount}
                      onChange={handleAmountChange}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gold-600 font-medium">
                      {exchangeType === 'buy' ? 'ETH' : 'CIT'}
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center py-1">
                  <div className="w-10 h-10 rounded-full border border-gold-200 bg-gold-50 flex items-center justify-center">
                    <ArrowUpDown className="h-5 w-5 text-gold-600" />
                  </div>
                </div>
                
                {/* Output box */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm font-medium text-cocoa-700">
                      {exchangeType === 'buy' ? 'CIT (estimated)' : 'ETH (estimated)'}
                    </label>
                    <span className="text-xs text-cocoa-500">
                      Includes 2% transaction fee
                    </span>
                  </div>
                  <div className="bg-cocoa-50 border border-gold-200 rounded-md px-4 py-3 text-lg font-medium text-cocoa-800">
                    {getEstimatedTokens()} {exchangeType === 'buy' ? 'CIT' : 'ETH'}
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col">
              <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white neural-glow">
                {exchangeType === 'buy' ? 'Buy CIT Tokens' : 'Sell CIT Tokens'}
              </Button>
              
              <div className="mt-4 pt-4 border-t border-gold-100 w-full">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-cocoa-600 flex items-center">
                    <Shield className="mr-1 h-4 w-4 text-neural-600" />
                    Region Trust Score
                  </span>
                  <div className="flex items-center">
                    <span 
                      className={`text-sm font-medium ${
                        trustScore >= 90 ? 'text-forest-600' : 
                        trustScore >= 80 ? 'text-gold-600' : 'text-cocoa-600'
                      }`}
                    >
                      {trustScore}%
                    </span>
                    {trustScore >= 90 && (
                      <Check className="ml-1 h-4 w-4 text-forest-600" />
                    )}
                  </div>
                </div>
                <div className="w-full bg-cocoa-100 rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full ${
                      trustScore >= 90 ? 'bg-forest-500' : 
                      trustScore >= 80 ? 'bg-gold-500' : 'bg-cocoa-500'
                    }`}
                    style={{ width: `${trustScore}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-xs text-cocoa-500">
                  <AlertCircle className="inline mr-1 h-3 w-3" />
                  This region's trust score is {trustScore}%, based on verified child-safe records.
                </p>
              </div>
            </CardFooter>
          </Card>
          
          {/* Info & features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-cocoa-800 mb-4">Smart Impact Investing</h3>
              <p className="text-cocoa-600 mb-6">
                Every CIT token purchase directly funds ethical cocoa production and educational initiatives for farming families. Our neural sentiment engine provides real-time trust metrics before every transaction.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="cocoa-card p-4 flex">
                  <div className="mr-4 w-10 h-10 rounded-full bg-neural-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-neural-600" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-cocoa-800 mb-1">Neural Trust Engine</h4>
                    <p className="text-sm text-cocoa-600">
                      AI-powered verification of ethical sourcing and production standards.
                    </p>
                  </div>
                </div>
                
                <div className="cocoa-card p-4 flex">
                  <div className="mr-4 w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-cocoa-800 mb-1">Growth Metrics</h4>
                    <p className="text-sm text-cocoa-600">
                      Track real-time educational and community development impact.
                    </p>
                  </div>
                </div>
                
                <div className="cocoa-card p-4 flex">
                  <div className="mr-4 w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-gold-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11.5L15 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11.5L12 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-cocoa-800 mb-1">Blockchain Verified</h4>
                    <p className="text-sm text-cocoa-600">
                      Immutable records of all impact transactions on the blockchain.
                    </p>
                  </div>
                </div>
                
                <div className="cocoa-card p-4 flex">
                  <div className="mr-4 w-10 h-10 rounded-full bg-cocoa-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-cocoa-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-cocoa-800 mb-1">Community Ownership</h4>
                    <p className="text-sm text-cocoa-600">
                      Token holders participate in DAO governance decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gold-50 border border-gold-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gold-800 mb-2">Why Invest in CIT?</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <Check className="h-5 w-5 text-gold-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-cocoa-700">Direct funding to ethical cocoa farms and education</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-gold-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-cocoa-700">Transparent impact reporting with neural verification</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-gold-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-cocoa-700">Participate in DAO governance decisions</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-gold-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-cocoa-700">Growing marketplace for ethical products</span>
                </li>
              </ul>
              
              <Button variant="link" className="mt-4 text-gold-700 p-0">
                <ExternalLink className="h-4 w-4 mr-1" />
                Learn more about token economics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenExchange;
