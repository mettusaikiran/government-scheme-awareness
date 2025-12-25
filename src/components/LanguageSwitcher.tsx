import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
] as const;

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-3 py-1.5 border border-border/50 shadow-soft">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
              language === lang.code
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            {lang.flag} {lang.code.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
