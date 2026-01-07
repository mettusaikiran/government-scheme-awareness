import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { schemes, categories } from '@/data/schemes';
import { incomeRanges } from '@/data/locations';
import { Scheme } from '@/types/scheme';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight, Sparkles, TrendingUp, Clock, Search, 
  User, FileCheck, IndianRupee, Users, Flame, Star,
  ChevronRight
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { t, language } = useLanguage();

  // Calculate recommended schemes with match percentage
  const recommendedSchemes = useMemo(() => {
    if (!user?.profile) return [];

    const userIncome = incomeRanges.find(r => r.value === user.profile!.income)?.max || 0;
    const userAge = user.profile!.age;
    const userOccupation = user.profile!.occupation;
    const userState = user.profile!.state;

    return schemes.map(scheme => {
      let matchScore = 0;
      let matchFactors = 0;

      if (userAge >= scheme.ageMin && userAge <= scheme.ageMax) matchScore += 25;
      matchFactors += 25;

      if (userIncome <= scheme.incomeMax) matchScore += 25;
      matchFactors += 25;

      if (scheme.occupations.includes('all') || scheme.occupations.includes(userOccupation)) matchScore += 25;
      matchFactors += 25;

      if (scheme.states.includes('all') || scheme.states.includes(userState)) matchScore += 25;
      matchFactors += 25;

      const matchPercentage = Math.round((matchScore / matchFactors) * 100);
      return { ...scheme, matchPercentage };
    })
    .filter(s => s.matchPercentage >= 75)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 6);
  }, [user]);

  // Trending schemes (most popular categories)
  const trendingSchemes = useMemo(() => {
    return schemes
      .filter(s => ['agriculture', 'education', 'health'].includes(s.category))
      .slice(0, 4);
  }, []);

  // Schemes with deadlines (cast to Scheme for optional fields)
  const upcomingDeadlines = useMemo(() => {
    return (schemes as Scheme[])
      .filter(s => s.deadline)
      .slice(0, 3);
  }, []);

  // Stats
  const stats = [
    { icon: FileCheck, value: schemes.length.toString(), label: 'Total Schemes' },
    { icon: Users, value: recommendedSchemes.length.toString(), label: 'Matched for You' },
    { icon: IndianRupee, value: '₹10L+', label: 'Benefits Available' },
  ];

  // Quick filters
  const quickFilters = [
    { label: 'Farmers', category: 'agriculture', icon: '🌾' },
    { label: 'Students', category: 'education', icon: '📚' },
    { label: 'Women', category: 'social', icon: '👩' },
    { label: 'Health', category: 'health', icon: '🏥' },
    { label: 'Housing', category: 'housing', icon: '🏠' },
    { label: 'Business', category: 'business', icon: '💼' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {user ? `Welcome back, ${user.name}!` : 'Welcome to Smart Scheme Portal'}
          </h1>
          <p className="text-muted-foreground">
            Discover government schemes you're eligible for
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Filters */}
        <Card className="mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Search className="w-5 h-5" />
              Quick Search by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {quickFilters.map((filter) => (
                <Link key={filter.category} to={`/schemes?category=${filter.category}`}>
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary"
                  >
                    <span className="text-2xl">{filter.icon}</span>
                    <span className="text-sm">{filter.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Profile CTA if not completed */}
        {(!user || !user.profileCompleted) && (
          <Card className="mb-8 gradient-hero text-primary-foreground border-0 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Complete Your Profile</h3>
                    <p className="text-primary-foreground/80">
                      Get personalized scheme recommendations based on your eligibility
                    </p>
                  </div>
                </div>
                <Link to={user ? '/profile' : '/register'}>
                  <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    {user ? 'Complete Profile' : 'Get Started'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recommended Schemes */}
        {user?.profileCompleted && recommendedSchemes.length > 0 && (
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                Recommended for You
              </h2>
              <Link to="/schemes?tab=recommended" className="text-primary text-sm hover:underline flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedSchemes.slice(0, 3).map((scheme, index) => (
                <Link key={scheme.id} to={`/scheme/${scheme.id}`}>
                  <Card className="h-full hover:shadow-elevated transition-shadow cursor-pointer">
                    <div className="h-1 bg-muted">
                      <div 
                        className="h-full gradient-hero"
                        style={{ width: `${scheme.matchPercentage}%` }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {scheme.category}
                        </Badge>
                        <span className="text-lg font-bold text-accent">{scheme.matchPercentage}%</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {scheme.name[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {scheme.description[language]}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Trending Schemes */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: '250ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Trending Schemes
            </h2>
            <Link to="/schemes" className="text-primary text-sm hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingSchemes.map((scheme, index) => (
              <Link key={scheme.id} to={`/scheme/${scheme.id}`}>
                <Card className="h-full hover:shadow-elevated transition-shadow cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Flame className="w-4 h-4 text-destructive" />
                      <Badge variant="outline" className="text-xs">
                        {scheme.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {scheme.name[language]}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {scheme.benefits[language]}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        {upcomingDeadlines.length > 0 && (
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-destructive" />
              Upcoming Deadlines
            </h2>
            <div className="space-y-3">
              {upcomingDeadlines.map((scheme) => (
                <Link key={scheme.id} to={`/scheme/${scheme.id}`}>
                  <Card className="hover:shadow-soft transition-shadow cursor-pointer">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-destructive" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{scheme.name[language]}</h3>
                          <p className="text-sm text-muted-foreground">{(scheme as Scheme).deadline}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Category Stats */}
        <Card className="animate-fade-up" style={{ animationDelay: '350ms' }}>
          <CardHeader>
            <CardTitle className="text-lg">Schemes by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categories.filter(c => c !== 'all').map(category => {
                const count = schemes.filter(s => s.category === category).length;
                const percentage = Math.round((count / schemes.length) * 100);
                return (
                  <Link key={category} to={`/schemes?category=${category}`}>
                    <div className="group cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground capitalize group-hover:text-primary transition-colors">
                          {category}
                        </span>
                        <span className="text-sm text-muted-foreground">{count} schemes</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
