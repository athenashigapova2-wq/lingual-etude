import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const makeEntity = (table) => ({
  async list() {
    const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },
  async create(fields) {
    const { data, error } = await supabase.from(table).insert(fields).select().single();
    if (error) throw error;
    return data;
  },
  async update(id, fields) {
    const { data, error } = await supabase.from(table).update(fields).eq('id', id).select().single();
    if (error) throw error;
    return data;
  },
  async delete(id) {
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) throw error;
    return true;
  },
});

const entities = {
  Lesson: makeEntity('lessons'),
  Homework: makeEntity('homeworks'),
  Lead: makeEntity('leads'),
  // User — особый случай: читаем profiles (доступно только админу по RLS)
  User: {
    async list() {
      const { data, error } = await supabase.from('profiles').select('*');
      if (error) throw error;
      return data;
    },
  },
};

const auth = {
  async me() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) throw new Error('Not authenticated');
    const { data: profile } = await supabase
      .from('profiles')
      .select('role, full_name')
      .eq('id', user.id)
      .single();
    return {
      id: user.id,
      email: user.email,
      role: profile?.role || 'user',
      full_name: profile?.full_name || user.user_metadata?.full_name || null,
    };
  },

  async loginViaEmailPassword(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  },

  async register({ email, password }) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/email-verified` },
    });
    if (error) throw error;
  },

  async verifyOtp({ email, otpCode }) {
    const { data, error } = await supabase.auth.verifyOtp({ email, token: otpCode, type: 'signup' });
    if (error) throw error;
    return { access_token: data?.session?.access_token };
  },

  async resendOtp(email) {
    const { error } = await supabase.auth.resend({ type: 'signup', email });
    if (error) throw error;
  },

  async resetPasswordRequest(email) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw error;
  },

  async resetPassword({ resetToken, newPassword }) {
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(resetToken);
    if (exchangeError) throw exchangeError;
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw error;
  },

  loginWithProvider(provider, redirectPath = '/') {
    supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}${redirectPath}` },
    });
  },

  async logout(redirectUrl) {
    await supabase.auth.signOut();
    if (redirectUrl) window.location.href = redirectUrl;
  },

  redirectToLogin() {
    window.location.href = '/login';
  },
};

const integrations = {
  Core: {
    async UploadFile({ file }) {
      const path = `${Date.now()}_${file.name}`.replace(/\s+/g, '_');
      const { error } = await supabase.storage.from('uploads').upload(path, file);
      if (error) throw error;
      const { data } = supabase.storage.from('uploads').getPublicUrl(path);
      return { file_url: data.publicUrl };
    },
  },
};

export const appApi = { auth, entities, integrations };
