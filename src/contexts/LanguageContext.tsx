import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'te';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    te: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', hi: 'होम', te: 'హోమ్' },
  schemes: { en: 'Schemes', hi: 'योजनाएं', te: 'పథకాలు' },
  profile: { en: 'Profile', hi: 'प्रोफ़ाइल', te: 'ప్రొఫైల్' },
  login: { en: 'Login', hi: 'लॉगिन', te: 'లాగిన్' },
  register: { en: 'Register', hi: 'पंजीकरण', te: 'నమోదు' },
  logout: { en: 'Logout', hi: 'लॉगआउट', te: 'లాగౌట్' },
  
  // Hero Section
  heroTitle: { en: 'Smart Government Scheme Awareness', hi: 'स्मार्ट सरकारी योजना जागरूकता', te: 'స్మార్ట్ ప్రభుత్వ పథకం అవగాహన' },
  heroSubtitle: { en: 'Discover government schemes you are eligible for', hi: 'उन सरकारी योजनाओं की खोज करें जिनके लिए आप पात्र हैं', te: 'మీకు అర్హత ఉన్న ప్రభుత్వ పథకాలను కనుగొనండి' },
  getStarted: { en: 'Get Started', hi: 'शुरू करें', te: 'ప్రారంభించండి' },
  learnMore: { en: 'Learn More', hi: 'और जानें', te: 'మరింత తెలుసుకోండి' },
  
  // Form Labels
  age: { en: 'Age', hi: 'आयु', te: 'వయస్సు' },
  gender: { en: 'Gender', hi: 'लिंग', te: 'లింగం' },
  male: { en: 'Male', hi: 'पुरुष', te: 'పురుషుడు' },
  female: { en: 'Female', hi: 'महिला', te: 'స్త్రీ' },
  other: { en: 'Other', hi: 'अन्य', te: 'ఇతర' },
  education: { en: 'Education', hi: 'शिक्षा', te: 'విద్య' },
  income: { en: 'Annual Income', hi: 'वार्षिक आय', te: 'వార్షిక ఆదాయం' },
  occupation: { en: 'Occupation', hi: 'व्यवसाय', te: 'వృత్తి' },
  state: { en: 'State', hi: 'राज्य', te: 'రాష్ట్రం' },
  district: { en: 'District', hi: 'जिला', te: 'జిల్లా' },
  submit: { en: 'Find Schemes', hi: 'योजनाएं खोजें', te: 'పథకాలు కనుగొనండి' },
  
  // Scheme Card
  eligibility: { en: 'Eligibility', hi: 'पात्रता', te: 'అర్హత' },
  benefits: { en: 'Benefits', hi: 'लाभ', te: 'ప్రయోజనాలు' },
  applyNow: { en: 'Apply Now', hi: 'अभी आवेदन करें', te: 'ఇప్పుడే దరఖాస్తు చేయండి' },
  
  // Chatbot
  chatbotTitle: { en: 'Ask Me Anything', hi: 'मुझसे कुछ भी पूछें', te: 'నన్ను ఏదైనా అడగండి' },
  chatPlaceholder: { en: 'Type your question...', hi: 'अपना प्रश्न लिखें...', te: 'మీ ప్రశ్న టైప్ చేయండి...' },
  
  // Footer
  copyright: { en: '© 2024 Smart Scheme Portal. All rights reserved.', hi: '© 2024 स्मार्ट स्कीम पोर्टल। सर्वाधिकार सुरक्षित।', te: '© 2024 స్మార్ట్ స్కీమ్ పోర్టల్. సర్వ హక్కులు రక్షింపబడినవి.' },
  
  // Auth
  email: { en: 'Email', hi: 'ईमेल', te: 'ఇమెయిల్' },
  password: { en: 'Password', hi: 'पासवर्ड', te: 'పాస్‌వర్డ్' },
  confirmPassword: { en: 'Confirm Password', hi: 'पासवर्ड की पुष्टि करें', te: 'పాస్‌వర్డ్ నిర్ధారించండి' },
  fullName: { en: 'Full Name', hi: 'पूरा नाम', te: 'పూర్తి పేరు' },
  noAccount: { en: "Don't have an account?", hi: 'खाता नहीं है?', te: 'ఖాతా లేదా?' },
  hasAccount: { en: 'Already have an account?', hi: 'पहले से खाता है?', te: 'ఇప్పటికే ఖాతా ఉందా?' },
  
  // Features
  features: { en: 'Features', hi: 'विशेषताएं', te: 'ఫీచర్లు' },
  personalizedRecommendations: { en: 'Personalized Recommendations', hi: 'व्यक्तिगत सिफारिशें', te: 'వ్యక్తిగత సిఫార్సులు' },
  aiAssistance: { en: 'AI Assistance', hi: 'AI सहायता', te: 'AI సహాయం' },
  multiLanguage: { en: 'Multi-Language Support', hi: 'बहु-भाषा समर्थन', te: 'బహుళ భాషా మద్దతు' },
  locationBased: { en: 'Location-Based Services', hi: 'स्थान-आधारित सेवाएं', te: 'స్థాన-ఆధారిత సేవలు' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
