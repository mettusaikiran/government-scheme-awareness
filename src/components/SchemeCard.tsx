import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, CheckCircle, IndianRupee, Users, Calendar, ArrowRight } from 'lucide-react';

interface Scheme {
  id: string;
  name: { en: string; hi: string; te: string };
  description: { en: string; hi: string; te: string };
  benefits: { en: string; hi: string; te: string };
  eligibility: { en: string; hi: string; te: string };
  category: string;
  link: string;
  matchPercentage?: number;
}

interface SchemeCardProps {
  scheme: Scheme;
  index: number;
}

const categoryColors: Record<string, string> = {
  agriculture: 'bg-accent/20 text-accent',
  health: 'bg-destructive/20 text-destructive',
  education: 'bg-primary/20 text-primary',
  social: 'bg-secondary text-secondary-foreground',
  housing: 'bg-muted text-muted-foreground',
};

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, index }) => {
  const { language, t } = useLanguage();

  return (
    <div 
      className="bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Match Percentage Bar */}
      {scheme.matchPercentage && (
        <div className="h-1 bg-muted">
          <div 
            className="h-full gradient-hero transition-all duration-500"
            style={{ width: `${scheme.matchPercentage}%` }}
          />
        </div>
      )}
      
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <Badge className={`${categoryColors[scheme.category] || categoryColors.social} text-xs font-medium mb-2`}>
              {scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}
            </Badge>
            <h3 className="text-lg font-semibold text-foreground leading-tight">
              {scheme.name[language]}
            </h3>
          </div>
          {scheme.matchPercentage && (
            <div className="text-right">
              <span className="text-2xl font-bold text-accent">{scheme.matchPercentage}%</span>
              <p className="text-xs text-muted-foreground">Match</p>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {scheme.description[language]}
        </p>

        {/* Benefits */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <IndianRupee className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">{t('benefits')}</span>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            {scheme.benefits[language]}
          </p>
        </div>

        {/* Eligibility */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{t('eligibility')}</span>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            {scheme.eligibility[language]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link to={`/scheme/${scheme.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="hero" className="w-full">
              {t('applyNow')}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;
