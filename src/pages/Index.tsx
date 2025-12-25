import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Search, Shield, Globe, MapPin, MessageSquare, FileCheck, 
  ArrowRight, CheckCircle, Users, IndianRupee, Sparkles
} from 'lucide-react';

const Index: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const features = [
    {
      icon: Search,
      title: t('personalizedRecommendations'),
      description: 'Get scheme suggestions based on your profile and eligibility criteria.',
    },
    {
      icon: MessageSquare,
      title: t('aiAssistance'),
      description: 'AI-powered chatbot to answer your questions and guide you through applications.',
    },
    {
      icon: Globe,
      title: t('multiLanguage'),
      description: 'Access the platform in English, Hindi, and Telugu for better understanding.',
    },
    {
      icon: MapPin,
      title: t('locationBased'),
      description: 'Discover state-specific schemes available in your region.',
    },
  ];

  const stats = [
    { icon: FileCheck, value: '500+', label: 'Government Schemes' },
    { icon: Users, value: '10L+', label: 'Beneficiaries' },
    { icon: IndianRupee, value: '₹1000Cr+', label: 'Benefits Disbursed' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-primary-foreground/90 text-sm font-medium">Powered by AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={user ? '/profile' : '/register'}>
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  {t('getStarted')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/schemes">
                <Button variant="glass" size="xl" className="w-full sm:w-auto text-primary-foreground border-primary-foreground/30">
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-card/10 backdrop-blur-md border border-primary-foreground/10 rounded-2xl p-6 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('features')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to discover and apply for government schemes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to discover schemes you're eligible for
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              { step: 1, title: 'Create Account', desc: 'Sign up with your email and create your profile' },
              { step: 2, title: 'Fill Your Details', desc: 'Enter your age, income, occupation, and location' },
              { step: 3, title: 'Get Recommendations', desc: 'Receive personalized scheme suggestions instantly' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 mb-8 last:mb-0 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 bg-card rounded-xl p-6 border border-border/50 shadow-soft">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-card rounded-3xl p-10 md:p-16 border border-border/50 shadow-elevated">
            <Shield className="w-16 h-16 mx-auto text-accent mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Discover Your Benefits?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of citizens who have already found and applied for government schemes through our platform.
            </p>
            <Link to={user ? '/profile' : '/register'}>
              <Button variant="hero" size="xl">
                {t('getStarted')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">SS</span>
              </div>
              <span className="font-semibold text-primary-foreground">Smart Scheme Portal</span>
            </div>
            <p className="text-primary-foreground/70 text-sm text-center">
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
