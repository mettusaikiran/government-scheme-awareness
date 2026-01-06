import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import ProfileForm from '@/components/ProfileForm';
import { Button } from '@/components/ui/button';
import { User, FileText, CheckCircle, Edit, ArrowRight } from 'lucide-react';
import { educationLevels, incomeRanges, occupations, states, districts } from '@/data/locations';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const getDisplayValue = (key: string, value: string | number) => {
    switch (key) {
      case 'education':
        return educationLevels.find(e => e.value === value)?.label[language] || value;
      case 'income':
        return incomeRanges.find(r => r.value === value)?.label[language] || value;
      case 'occupation':
        return occupations.find(o => o.value === value)?.label[language] || value;
      case 'state':
        return states.find(s => s.value === value)?.label[language] || value;
      case 'district':
        const stateDistricts = districts[user.profile?.state || ''] || [];
        return stateDistricts.find(d => d.value === value)?.label[language] || value;
      case 'gender':
        return t(value as string);
      default:
        return String(value);
    }
  };

  const profileLabels: Record<string, string> = {
    age: t('age'),
    gender: t('gender'),
    education: t('education'),
    income: 'Annual Income',
    occupation: t('occupation'),
    state: t('state'),
    district: t('district'),
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elevated">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome, {user.name}!
          </h1>
          <p className="text-muted-foreground">
            {user.profileCompleted 
              ? 'Your profile is complete. View your scheme recommendations.'
              : 'Complete your profile to get personalized scheme recommendations.'}
          </p>
        </div>

        {/* Profile Status */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-soft p-6 mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              user.profileCompleted ? 'bg-accent/20' : 'bg-secondary/20'
            }`}>
              {user.profileCompleted ? (
                <CheckCircle className="w-6 h-6 text-accent" />
              ) : (
                <FileText className="w-6 h-6 text-secondary" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">
                {user.profileCompleted ? 'Profile Complete' : 'Profile Incomplete'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {user.profileCompleted 
                  ? 'You can now view personalized scheme recommendations'
                  : 'Fill in your details below to find eligible schemes'}
              </p>
            </div>
            {user.profileCompleted && !isEditing && (
              <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        {/* Profile Form (for new or editing) */}
        {(!user.profileCompleted || isEditing) && (
          <div className="bg-card rounded-2xl border border-border/50 shadow-elevated p-6 md:p-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              {isEditing ? 'Edit Profile' : `${t('profile')} Details`}
            </h2>
            <ProfileForm isEditing={isEditing} onCancel={() => setIsEditing(false)} />
          </div>
        )}

        {/* Profile Summary (when complete and not editing) */}
        {user.profileCompleted && user.profile && !isEditing && (
          <div className="bg-card rounded-2xl border border-border/50 shadow-elevated p-6 md:p-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xl font-semibold text-foreground mb-6">Your Profile</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(user.profile).map(([key, value]) => (
                <div key={key} className="bg-muted/50 rounded-lg p-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {profileLabels[key] || key}
                  </span>
                  <p className="font-medium text-foreground capitalize">
                    {getDisplayValue(key, value)}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/schemes">
              <Button variant="hero" className="w-full">
                View Recommended Schemes
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
