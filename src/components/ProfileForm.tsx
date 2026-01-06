import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { states, districts, educationLevels, incomeRanges, occupations } from '@/data/locations';
import { toast } from 'sonner';
import { MapPin, User, Briefcase, GraduationCap, IndianRupee, Loader2 } from 'lucide-react';

interface ProfileFormProps {
  isEditing?: boolean;
  onCancel?: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ isEditing = false, onCancel }) => {
  const { t, language } = useLanguage();
  const { updateProfile, user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    education: '',
    income: '',
    occupation: '',
    state: '',
    district: '',
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (isEditing && user?.profile) {
      setFormData({
        age: user.profile.age.toString(),
        gender: user.profile.gender,
        education: user.profile.education,
        income: user.profile.income,
        occupation: user.profile.occupation,
        state: user.profile.state,
        district: user.profile.district,
      });
    }
  }, [isEditing, user?.profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.age || !formData.gender || !formData.education || 
        !formData.income || !formData.occupation || !formData.state || !formData.district) {
      toast.error('Please fill all fields');
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    updateProfile({
      age: parseInt(formData.age),
      gender: formData.gender,
      education: formData.education,
      income: formData.income,
      occupation: formData.occupation,
      state: formData.state,
      district: formData.district,
    });
    
    toast.success(isEditing ? 'Profile updated successfully!' : 'Profile created successfully!');
    if (onCancel) {
      onCancel();
    } else {
      navigate('/schemes');
    }
    setIsLoading(false);
  };

  const availableDistricts = formData.state ? districts[formData.state] || [] : [];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Info Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-foreground font-medium">
          <User className="w-4 h-4 text-primary" />
          <span>Personal Information</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">{t('age')}</Label>
            <Input
              id="age"
              type="number"
              min="1"
              max="120"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label>{t('gender')}</Label>
            <Select value={formData.gender} onValueChange={(v) => setFormData({ ...formData, gender: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">{t('male')}</SelectItem>
                <SelectItem value="female">{t('female')}</SelectItem>
                <SelectItem value="other">{t('other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Education & Occupation */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-foreground font-medium">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span>Education & Occupation</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('education')}</Label>
            <Select value={formData.education} onValueChange={(v) => setFormData({ ...formData, education: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent>
                {educationLevels.map((edu) => (
                  <SelectItem key={edu.value} value={edu.value}>
                    {edu.label[language]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>{t('occupation')}</Label>
            <Select value={formData.occupation} onValueChange={(v) => setFormData({ ...formData, occupation: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Select occupation" />
              </SelectTrigger>
              <SelectContent>
                {occupations.map((occ) => (
                  <SelectItem key={occ.value} value={occ.value}>
                    {occ.label[language]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Income */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-foreground font-medium">
          <IndianRupee className="w-4 h-4 text-primary" />
          <span>Annual Income</span>
        </div>
        
        <Select value={formData.income} onValueChange={(v) => setFormData({ ...formData, income: v })}>
          <SelectTrigger>
            <SelectValue placeholder="Select income range" />
          </SelectTrigger>
          <SelectContent>
            {incomeRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label[language]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-foreground font-medium">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Location</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('state')}</Label>
            <Select 
              value={formData.state} 
              onValueChange={(v) => setFormData({ ...formData, state: v, district: '' })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label[language]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>{t('district')}</Label>
            <Select 
              value={formData.district} 
              onValueChange={(v) => setFormData({ ...formData, district: v })}
              disabled={!formData.state}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent>
                {availableDistricts.map((dist) => (
                  <SelectItem key={dist.value} value={dist.value}>
                    {dist.label[language]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        {isEditing && onCancel && (
          <Button type="button" variant="outline" size="lg" className="flex-1" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" variant="hero" size="lg" className={isEditing ? 'flex-1' : 'w-full'} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : isEditing ? (
            'Save Changes'
          ) : (
            t('submit')
          )}
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
