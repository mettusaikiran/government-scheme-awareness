import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const { t } = useLanguage();
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      await login(email, password);
      toast.success('Login successful!');
      navigate('/profile');
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl border border-border/50 shadow-elevated p-8 animate-fade-up">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-foreground">SS</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">{t('login')}</h1>
            <p className="text-muted-foreground text-sm">
              Access your personalized scheme recommendations
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">{t('email')}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t('password')}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11"
                />
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  {t('login')}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-muted-foreground">
            {t('noAccount')}{' '}
            <Link to="/register" className="text-primary font-medium hover:underline">
              {t('register')}
            </Link>
          </p>
        </div>

        {/* Demo Notice */}
        <div className="mt-6 p-4 bg-muted rounded-xl text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Demo Mode:</strong> Use any email and password to login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
