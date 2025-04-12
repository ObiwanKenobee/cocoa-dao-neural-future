import { Button } from "@/components/ui/button";
import { Brain, BookOpen, TrendingUp, Search, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Neural background pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10 -z-10"></div>
      
      {/* Neural animation dots */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-neural-500 opacity-40 animate-neural-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-neural-600 opacity-30 animate-neural-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full bg-neural-400 opacity-20 animate-neural-pulse delay-300"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cocoa-100 text-cocoa-800 mb-6 text-sm font-medium">
              <Brain className="mr-2 h-4 w-4 text-neural-600" />
              Powered by NeuraEnhance™ Technology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cocoa-900 mb-6 leading-tight">
              From Beans to <span className="text-cocoa-600">Brilliance</span>: Cocoa DAO
            </h1>
            
            <p className="text-lg md:text-xl text-cocoa-700 mb-8 leading-relaxed">
              Where child labor ends, and ethical futures begin. Join our AI-enhanced cocoa ecosystem transforming education and ethical farming into economic power.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-cocoa-700 hover:bg-cocoa-800 text-white neural-glow">
                <TrendingUp className="mr-2 h-5 w-5" /> 
                Start Earning Ethical Tokens
              </Button>
              <Button size="lg" variant="outline" className="border-cocoa-300 text-cocoa-700 hover:bg-cocoa-50">
                <Search className="mr-2 h-5 w-5" />
                Trace Your Bar
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* SVG neural flow animation connecting cocoa beans to school */}
            <div className="relative h-[400px] w-full">
              {/* Neural flow SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M100,300 C150,250 200,300 250,200 S350,100 400,150" 
                  className="neural-line"
                  strokeLinecap="round"
                />
                <path 
                  d="M120,320 C170,260 220,320 270,220 S370,120 420,170" 
                  className="neural-line"
                  strokeLinecap="round"
                  style={{ animationDelay: '0.5s' }}
                />
                <path 
                  d="M80,280 C130,230 180,280 230,180 S330,80 380,130" 
                  className="neural-line"
                  strokeLinecap="round"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
              
              {/* Cocoa beans */}
              <div className="absolute bottom-[20%] left-[15%] w-28 h-28 rounded-full bg-cocoa-100 border border-cocoa-300 flex items-center justify-center animate-float">
                <div className="w-20 h-20 rounded-full bg-cocoa-600 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
                    <path d="M12 2a 6 6 0 0 0 -6 6v10a 6 6 0 0 0 12 0v-10a 6 6 0 0 0 -6 -6z" strokeWidth="1.5"/>
                    <path d="M12 8v8" strokeWidth="1.5"/>
                    <path d="M9 11l6 0" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              
              {/* Education/school */}
              <div className="absolute top-[15%] right-[15%] w-28 h-28 rounded-full bg-neural-100 border border-neural-300 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-20 h-20 rounded-full bg-neural-600 flex items-center justify-center text-white">
                  <GraduationCap className="w-10 h-10" />
                </div>
              </div>
              
              {/* DAO/blockchain node */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center animate-float" style={{ animationDelay: '0.7s' }}>
                <div className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Metric badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 lg:mt-16">
          <div className="cocoa-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-forest-600" />
            </div>
            <h3 className="text-xl font-semibold text-cocoa-800 mb-1">6,500+</h3>
            <p className="text-cocoa-600">Children in Education</p>
          </div>
          
          <div className="cocoa-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6.5V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-cocoa-800 mb-1">1.2M</h3>
            <p className="text-cocoa-600">CIT Tokens Circulating</p>
          </div>
          
          <div className="cocoa-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-neural-100 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-neural-600" />
            </div>
            <h3 className="text-xl font-semibold text-cocoa-800 mb-1">92%</h3>
            <p className="text-cocoa-600">Trust Score</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
