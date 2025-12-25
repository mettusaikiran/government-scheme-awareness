import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { schemes } from '@/data/schemes';
import { incomeRanges } from '@/data/locations';
import SchemeCard from '@/components/SchemeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, ArrowRight, User } from 'lucide-react';

const categories = ['all', 'agriculture', 'health', 'education', 'housing', 'social'];

const Schemes: React.FC = () => {
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Calculate eligibility and match percentage
  const recommendedSchemes = useMemo(() => {
    if (!user?.profile) return schemes.map(s => ({ ...s, matchPercentage: undefined }));

    const userIncome = incomeRanges.find(r => r.value === user.profile!.income)?.max || 0;
    const userAge = user.profile!.age;
    const userOccupation = user.profile!.occupation;
    const userState = user.profile!.state;

    return schemes.map(scheme => {
      let matchScore = 0;
      let matchFactors = 0;

      // Age check
      if (userAge >= scheme.ageMin && userAge <= scheme.ageMax) {
        matchScore += 25;
      }
      matchFactors += 25;

      // Income check
      if (userIncome <= scheme.incomeMax) {
        matchScore += 25;
      }
      matchFactors += 25;

      // Occupation check
      if (scheme.occupations.includes('all') || scheme.occupations.includes(userOccupation)) {
        matchScore += 25;
      }
      matchFactors += 25;

      // State check
      if (scheme.states.includes('all') || scheme.states.includes(userState)) {
        matchScore += 25;
      }
      matchFactors += 25;

      const matchPercentage = Math.round((matchScore / matchFactors) * 100);

      return { ...scheme, matchPercentage };
    }).sort((a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0));
  }, [user]);

  // Filter schemes
  const filteredSchemes = useMemo(() => {
    return recommendedSchemes.filter(scheme => {
      const matchesSearch = searchQuery === '' || 
        scheme.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.description[language].toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [recommendedSchemes, searchQuery, selectedCategory, language]);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t('schemes')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {user?.profileCompleted 
              ? 'Schemes are sorted by eligibility match. Higher match means better fit for your profile.'
              : 'Browse available government schemes. Login and complete your profile for personalized recommendations.'}
          </p>
        </div>

        {/* Profile CTA if not logged in */}
        {!user?.profileCompleted && (
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-6 mb-10 border border-border/50 animate-fade-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Get Personalized Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Complete your profile to see schemes matched to your eligibility</p>
                </div>
              </div>
              <Link to={user ? '/profile' : '/register'}>
                <Button variant="hero">
                  {user ? 'Complete Profile' : 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'gradient-hero text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredSchemes.length}</span> schemes
          </p>
          {user?.profile && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Filtered for {user.profile.state}</span>
            </div>
          )}
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme, index) => (
            <SchemeCard key={scheme.id} scheme={scheme} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredSchemes.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No schemes found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schemes;
