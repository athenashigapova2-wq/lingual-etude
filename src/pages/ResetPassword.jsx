import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { appApi } from "@/api/appApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Loader2, AlertTriangle } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { useLang } from "@/lib/LanguageContext";

const T = {
  ru: {
    invalidTitle: "Ссылка недействительна",
    invalidSubtitle: "Ссылка для сброса пароля отсутствует или повреждена",
    requestNew: "Запросить новую ссылку",
    invalidBody: "Похоже, ссылка неполная. Запросите новое письмо для сброса пароля.",
    title: "Новый пароль",
    subtitle: "Введите новый пароль ниже",
    password: "Новый пароль",
    confirm: "Повторите пароль",
    submit: "Сохранить пароль",
    submitting: "Сохраняем...",
    mismatch: "Пароли не совпадают",
    failed: "Не удалось сбросить пароль",
  },
  en: {
    invalidTitle: "Invalid reset link",
    invalidSubtitle: "This password reset link is missing or invalid",
    requestNew: "Request a new link",
    invalidBody: "The link you used appears to be incomplete. Please request a new password reset email.",
    title: "New password",
    subtitle: "Enter your new password below",
    password: "New Password",
    confirm: "Confirm Password",
    submit: "Reset password",
    submitting: "Resetting...",
    mismatch: "Passwords do not match",
    failed: "Failed to reset password",
  },
};

export default function ResetPassword() {
  const { lang } = useLang();
  const t = T[lang];

  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("code");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmPassword) {
      setError(t.mismatch);
      return;
    }
    setLoading(true);
    try {
      await appApi.auth.resetPassword({ resetToken, newPassword });
      window.location.href = "/login";
    } catch (err) {
      setError(err.message || t.failed);
    } finally {
      setLoading(false);
    }
  };

  if (!resetToken) {
    return (
      <AuthLayout
        icon={AlertTriangle}
        title={t.invalidTitle}
        subtitle={t.invalidSubtitle}
        footer={
          <Link to="/forgot-password" className="text-primary font-medium hover:underline">
            {t.requestNew}
          </Link>
        }
      >
        <p className="text-sm text-foreground text-center">{t.invalidBody}</p>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout icon={Lock} title={t.title} subtitle={t.subtitle}>
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">{t.password}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              autoFocus
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
