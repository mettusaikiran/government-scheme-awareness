import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'normal' | 'large' | 'xlarge';
type Theme = 'light' | 'dark' | 'system';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  speechEnabled: boolean;
  setSpeechEnabled: (enabled: boolean) => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const STORAGE_KEY = 'accessibility-settings';

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSizeState] = useState<FontSize>('normal');
  const [theme, setThemeState] = useState<Theme>('system');
  const [speechEnabled, setSpeechEnabledState] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        if (settings.fontSize) setFontSizeState(settings.fontSize);
        if (settings.theme) setThemeState(settings.theme);
        if (settings.speechEnabled !== undefined) setSpeechEnabledState(settings.speechEnabled);
      } catch (e) {
        console.error('Failed to parse accessibility settings');
      }
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = (newSettings: Partial<{ fontSize: FontSize; theme: Theme; speechEnabled: boolean }>) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const current = saved ? JSON.parse(saved) : {};
    const updated = { ...current, ...newSettings };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    saveSettings({ fontSize: size });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    saveSettings({ theme: newTheme });
  };

  const setSpeechEnabled = (enabled: boolean) => {
    setSpeechEnabledState(enabled);
    saveSettings({ speechEnabled: enabled });
  };

  // Apply theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Apply font size
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('text-normal', 'text-large', 'text-xlarge');
    root.classList.add(`text-${fontSize}`);
    
    // Also set CSS variable for scaling
    const scales: Record<FontSize, string> = {
      normal: '1',
      large: '1.15',
      xlarge: '1.3'
    };
    root.style.setProperty('--font-scale', scales[fontSize]);
  }, [fontSize]);

  // Text-to-speech functions
  const speak = (text: string) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      setFontSize,
      theme,
      setTheme,
      speechEnabled,
      setSpeechEnabled,
      speak,
      stopSpeaking,
      isSpeaking
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
