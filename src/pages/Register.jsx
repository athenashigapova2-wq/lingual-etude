import React, { useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, Mail, Lock, Loader2, MailCheck } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import GoogleIcon from "@/components/GoogleIcon";
import { useLang } from "@/lib/LanguageContext";

const T = {
  ru: {
    title: "Создать аккаунт",
    subtitle: "Зарегистрируйтесь, чтобы начать",
    google: "Продолжить с Google",
    or: "или",
    email: "Email",
    password: "Пароль",
    confirm: "Повторите пароль",
    submit: "Создать аккаунт",
    submitting: "Создаём аккаунт...",
    haveAccount: "Уже есть аккаунт?",
    login: "Войти",
    mismatch: "Пароли не совпадают",
    failed: "Не удалось зарегистрироваться",
    sentTitle: "Проверьте почту",
    sentSubtitle: `Мы отправили письмо на ${""}`,
    sentBody: "Перейдите по ссылке в письме, чтобы подтвердить почту и войти в личный кабинет.",
    backToLogin: "Назад ко входу",
  },
  en: {
    title: "Create your account",
    subtitle: "Sign up to get started",
    google: "Continue with Google",
    or: "or",
    email: "Email",
    password: "Password",
    confirm: "Confirm Password",
    submit: "Create account",
    submitting: "Creating account...",
    haveAccount: "Already have an account?",
    login: "Log in",
    mismatch: "Passwords do not match",
    failed: "Registration failed",
    sentTitle: "Check your email",
    sentSubtitle: `We sent a link to ${""}`,
    sentBody: "Follow the link in the email to confirm your address and sign in to your dashboard.",
    backToLogin: "Back to log in",
  },
};

export default function Register() {
  const { lang } = useLang();
  const t = T[lang];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError(t.mismatch);
      return;
    }
    setLoading(true);
    try {
      await base44.auth.register({ email, password });
      setSent(true);
    } catch (err) {
      setError(err.message || t.failed);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    base44.auth.loginWithProvider("google", "/dashboard");
  };

  if (sent) {
    return (
      <AuthLayout
        icon={MailCheck}
        title={t.sentTitle}
        subtitle={lang === "ru" ? `Мы отправили письмо на ${email}` : `We sent a link to ${email}`}
        footer={
          <Link to="/login" className="text-primary font-medium hover:underline">
            {t.backToLogin}
          </Link>
        }
      >
        <p className="text-sm text-foreground text-center">{t.sentBody}</p>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      icon={UserPlus}
      title={t.title}
      subtitle={t.subtitle}
      footer={
        <>
          {t.haveAccount}{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            {t.login}
          </Link>
        </>
      }
    >
      <Button
        variant="outline"
        className="w-full h-12 text-sm font-medium mb-6"
        onClick={handleGoogle}
      >
        <GoogleIcon className="w-5 h-5 mr-2" />
        {t.google}
      </Button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-3 text-muted-foreground">{t.or}</span>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t.email}</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id="email"
              type="email"
              autoComplete="email"
              autoFocus
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t.password}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 h-12"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">{t.confirm}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id="confirm"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-10 h-12"
              required
            />
          </div>
        </div>
        <Button type="submit" className="w-full h-12 font-medium" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t.submitting}
            </>
          ) : (
            t.submit
          )}
        </Button>
      </form>
    </AuthLayout>
  );
}
