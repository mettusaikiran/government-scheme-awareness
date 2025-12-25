import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const botResponses = {
  en: {
    greeting: "Hello! I'm your Smart Scheme Assistant. How can I help you today?",
    eligibility: "To check your eligibility, please complete your profile with your age, income, occupation, and location details.",
    schemes: "We have various schemes including PM Kisan, Ayushman Bharat, education scholarships, and more. Would you like me to explain any specific scheme?",
    apply: "You can apply for schemes directly through the official government portals. I can guide you to the right application link.",
    default: "I'm here to help you find government schemes. Ask me about eligibility, benefits, or how to apply!"
  },
  hi: {
    greeting: "नमस्ते! मैं आपका स्मार्ट स्कीम सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
    eligibility: "अपनी पात्रता जांचने के लिए, कृपया अपनी प्रोफ़ाइल में आयु, आय, व्यवसाय और स्थान का विवरण भरें।",
    schemes: "हमारे पास पीएम किसान, आयुष्मान भारत, शिक्षा छात्रवृत्ति सहित विभिन्न योजनाएं हैं। क्या आप किसी विशेष योजना के बारे में जानना चाहेंगे?",
    apply: "आप सरकारी पोर्टल के माध्यम से योजनाओं के लिए आवेदन कर सकते हैं। मैं आपको सही आवेदन लिंक तक पहुंचा सकता हूं।",
    default: "मैं आपको सरकारी योजनाएं खोजने में मदद करने के लिए यहां हूं। पात्रता, लाभ या आवेदन के बारे में पूछें!"
  },
  te: {
    greeting: "హలో! నేను మీ స్మార్ట్ స్కీమ్ అసిస్టెంట్. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
    eligibility: "మీ అర్హతను తనిఖీ చేయడానికి, దయచేసి మీ వయస్సు, ఆదాయం, వృత్తి మరియు స్థాన వివరాలతో మీ ప్రొఫైల్‌ను పూర్తి చేయండి.",
    schemes: "PM కిసాన్, ఆయుష్మాన్ భారత్, విద్యా స్కాలర్‌షిప్‌లు మరియు మరిన్నింటితో సహా మా వద్ద వివిధ పథకాలు ఉన్నాయి. ఏదైనా నిర్దిష్ట పథకం గురించి వివరించమంటారా?",
    apply: "మీరు అధికారిక ప్రభుత్వ పోర్టల్‌ల ద్వారా పథకాల కోసం దరఖాస్తు చేసుకోవచ్చు. నేను మీకు సరైన దరఖాస్తు లింక్‌కు మార్గనిర్దేశం చేయగలను.",
    default: "ప్రభుత్వ పథకాలను కనుగొనడంలో మీకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను. అర్హత, ప్రయోజనాలు లేదా దరఖాస్తు చేసే విధానం గురించి అడగండి!"
  }
};

const Chatbot: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: '1',
        text: botResponses[language].greeting,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, [isOpen, language, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();
    const responses = botResponses[language];
    
    if (lower.includes('eligib') || lower.includes('पात्र') || lower.includes('అర్హత')) {
      return responses.eligibility;
    }
    if (lower.includes('scheme') || lower.includes('योजना') || lower.includes('పథకం')) {
      return responses.schemes;
    }
    if (lower.includes('apply') || lower.includes('आवेदन') || lower.includes('దరఖాస్తు')) {
      return responses.apply;
    }
    return responses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-hero shadow-elevated flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[380px] h-[500px] bg-card rounded-2xl shadow-elevated border border-border/50 flex flex-col overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="gradient-hero px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-card/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-primary-foreground font-semibold text-sm">{t('chatbotTitle')}</h3>
                <span className="text-primary-foreground/70 text-xs">Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-card/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.sender === 'user' ? 'bg-secondary' : 'bg-primary/10'
                }`}>
                  {msg.sender === 'user' ? (
                    <User className="w-4 h-4 text-secondary-foreground" />
                  ) : (
                    <Bot className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-muted text-foreground rounded-bl-md'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chatPlaceholder')}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" variant="hero">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
