import React from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Settings2, Sun, Moon, Monitor, Type, Volume2, VolumeX } from 'lucide-react';

const AccessibilityMenu: React.FC = () => {
  const { fontSize, setFontSize, theme, setTheme, speechEnabled, setSpeechEnabled } = useAccessibility();
  const { t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Settings2 className="h-5 w-5" />
          <span className="sr-only">Accessibility Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Settings2 className="h-4 w-4" />
          Accessibility
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Theme Selection */}
        <DropdownMenuLabel className="text-xs text-muted-foreground pt-2">Theme</DropdownMenuLabel>
        <div className="flex gap-1 px-2 pb-2">
          <Button
            variant={theme === 'light' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
            onClick={() => setTheme('light')}
          >
            <Sun className="h-4 w-4" />
          </Button>
          <Button
            variant={theme === 'dark' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
            onClick={() => setTheme('dark')}
          >
            <Moon className="h-4 w-4" />
          </Button>
          <Button
            variant={theme === 'system' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
            onClick={() => setTheme('system')}
          >
            <Monitor className="h-4 w-4" />
          </Button>
        </div>
        
        <DropdownMenuSeparator />
        
        {/* Font Size */}
        <DropdownMenuLabel className="text-xs text-muted-foreground">Font Size</DropdownMenuLabel>
        <div className="flex gap-1 px-2 pb-2">
          <Button
            variant={fontSize === 'normal' ? 'default' : 'outline'}
            size="sm"
            className="flex-1 text-xs"
            onClick={() => setFontSize('normal')}
          >
            <Type className="h-3 w-3" />
            <span className="ml-1">A</span>
          </Button>
          <Button
            variant={fontSize === 'large' ? 'default' : 'outline'}
            size="sm"
            className="flex-1 text-sm"
            onClick={() => setFontSize('large')}
          >
            <Type className="h-4 w-4" />
            <span className="ml-1">A</span>
          </Button>
          <Button
            variant={fontSize === 'xlarge' ? 'default' : 'outline'}
            size="sm"
            className="flex-1 text-base"
            onClick={() => setFontSize('xlarge')}
          >
            <Type className="h-5 w-5" />
            <span className="ml-1">A</span>
          </Button>
        </div>
        
        <DropdownMenuSeparator />
        
        {/* Text-to-Speech */}
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            {speechEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            <span className="text-sm">Read Aloud</span>
          </div>
          <Switch
            checked={speechEnabled}
            onCheckedChange={setSpeechEnabled}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccessibilityMenu;
