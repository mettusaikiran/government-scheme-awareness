import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { schemes } from '@/data/schemes';
import { Scheme } from '@/types/scheme';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, ExternalLink, CheckCircle, IndianRupee, FileText, 
  Phone, Calendar, MapPin, Users, Building, Volume2, VolumeX,
  ClipboardList, AlertCircle, Clock
} from 'lucide-react';

const categoryColors: Record<string, string> = {
  agriculture: 'bg-accent/20 text-accent',
  health: 'bg-destructive/20 text-destructive',
  education: 'bg-primary/20 text-primary',
  social: 'bg-secondary text-secondary-foreground',
  housing: 'bg-muted text-muted-foreground',
  business: 'bg-accent/20 text-accent',
  employment: 'bg-primary/20 text-primary',
};

const SchemeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const { speak, stopSpeaking, isSpeaking, speechEnabled } = useAccessibility();
  
  const scheme = schemes.find(s => s.id === id) as Scheme | undefined;

  if (!scheme) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Scheme Not Found</h1>
          <Link to="/schemes">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Schemes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSpeak = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const textToRead = `
        ${scheme.name[language]}. 
        ${scheme.description[language]}. 
        Benefits: ${scheme.benefits[language]}. 
        Eligibility: ${scheme.eligibility[language]}.
        ${scheme.documents ? `Documents required: ${scheme.documents[language]}` : ''}
        ${scheme.applicationProcess ? `How to apply: ${scheme.applicationProcess[language]}` : ''}
      `;
      speak(textToRead);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link to="/schemes" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Schemes
        </Link>

        {/* Header */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-soft p-6 md:p-8 mb-6 animate-fade-up">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <Badge className={`${categoryColors[scheme.category] || categoryColors.social} text-xs font-medium mb-3`}>
                {scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {scheme.name[language]}
              </h1>
              {scheme.governmentType && (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Building className="w-4 h-4" />
                  <span>{scheme.governmentType === 'central' ? 'Central Government' : 'State Government'}</span>
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              {speechEnabled && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleSpeak}
                  className="shrink-0"
                >
                  {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              )}
              <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                <Button variant="hero">
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            {scheme.description[language]}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Benefits */}
          <Card className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <IndianRupee className="w-5 h-5 text-accent" />
                {t('benefits')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{scheme.benefits[language]}</p>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card className="animate-fade-up" style={{ animationDelay: '150ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
                {t('eligibility')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{scheme.eligibility[language]}</p>
              
              {/* Eligibility Criteria Details */}
              <div className="mt-4 space-y-2 text-sm">
                {scheme.ageMin !== undefined && scheme.ageMax !== undefined && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>Age: {scheme.ageMin} - {scheme.ageMax} years</span>
                  </div>
                )}
                {scheme.incomeMax && (
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-muted-foreground" />
                    <span>Max Income: ₹{(scheme.incomeMax / 100000).toFixed(0)} Lakh/year</span>
                  </div>
                )}
                {scheme.states && !scheme.states.includes('all') && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Available in: {scheme.states.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documents Required */}
        {scheme.documents && (
          <Card className="mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="w-5 h-5 text-secondary" />
                Documents Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">{scheme.documents[language]}</p>
            </CardContent>
          </Card>
        )}

        {/* Application Process */}
        {scheme.applicationProcess && (
          <Card className="mb-6 animate-fade-up" style={{ animationDelay: '250ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ClipboardList className="w-5 h-5 text-primary" />
                How to Apply
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">{scheme.applicationProcess[language]}</p>
            </CardContent>
          </Card>
        )}

        {/* Contact & Deadline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {scheme.helpline && (
            <Card className="animate-fade-up" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="w-5 h-5 text-accent" />
                  Helpline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-semibold text-lg">{scheme.helpline}</p>
                <p className="text-muted-foreground text-sm mt-1">Toll-free helpline for assistance</p>
              </CardContent>
            </Card>
          )}

          {scheme.deadline && (
            <Card className="animate-fade-up" style={{ animationDelay: '350ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-destructive" />
                  Deadline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-semibold text-lg">{scheme.deadline}</p>
                <p className="text-muted-foreground text-sm mt-1">Application deadline</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Important Notes */}
        {scheme.notes && (
          <Card className="mb-6 border-secondary/50 bg-secondary/5 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="w-5 h-5 text-secondary" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{scheme.notes[language]}</p>
            </CardContent>
          </Card>
        )}

        {/* Apply CTA */}
        <div className="text-center py-8 animate-fade-up" style={{ animationDelay: '450ms' }}>
          <a href={scheme.link} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              Apply for this Scheme
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetail;
