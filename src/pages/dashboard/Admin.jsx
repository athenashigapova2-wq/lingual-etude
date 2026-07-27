import { useEffect, useState } from 'react';
import { Loader2, Film, Image as ImageIcon, X } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useCurrentUser } from '@/lib/useCurrentUser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const uploadCls =
  'mt-1.5 flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-foreground/25 px-4 py-3 text-sm text-foreground/60 transition-colors hover:border-gold hover:text-ink';

const STATUS = {
  not_started: { label: 'Не начато', cls: 'bg-linen text-foreground/60' },
  in_review: { label: 'На проверке', cls: 'bg-gold/15 text-gold' },
  reviewed: { label: 'Проверено', cls: 'bg-[#e6ead9] text-[#5a6347]' },
};

const selectCls = 'mt-1.5 h-11 w-full rounded-md border border-input bg-background px-3 text-sm';

function Field({ label, children }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-[0.2em] text-foreground/40">{label}</Label>
      {children}
    </div>
  );
}

export default function Admin() {
  const user = useCurrentUser();
  const [students, setStudents] = useState([]);
  const [homework, setHomework] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [hw, setHw] = useState({ title: '', lesson_title: '', description: '', due_date: '', student_email: '' });
  const [ls, setLs] = useState({ title: '', module: '', duration: '', description: '', poster_url: '', video_url: '', student_email: '' });
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(null);

  const uploadFile = async (file, key) => {
    if (!file) return;
    setUploading(key);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setLs((p) => ({ ...p, [key]: file_url }));
    } finally {
      setUploading(null);
    }
  };

  const refresh = async () => {
    const [u, h, l] = await Promise.all([
      base44.entities.User.list().catch(() => []),
      base44.entities.Homework.list().catch(() => []),
      base44.entities.Lesson.list().catch(() => []),
    ]);
    setStudents(u);
    setHomework(h);
    setLessons(l);
  };

  useEffect(() => {
    if (user?.role === 'admin') refresh();
  }, [user]);

  if (user === undefined) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-800" />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return <div className="py-24 text-center text-foreground/50">Доступ только для администратора.</div>;
  }

  const studentEmails = students.filter((s) => s.role !== 'admin').map((s) => s.email);

  const createHw = async () => {
    if (!hw.title || !hw.student_email) return;
    setBusy(true);
    try {
      await base44.entities.Homework.create({ ...hw, status: 'not_started' });
      setHw({ title: '', lesson_title: '', description: '', due_date: '', student_email: '' });
      await refresh();
    } finally {
      setBusy(false);
    }
  };

  const createLs = async () => {
    if (!ls.title || !ls.student_email) return;
    setBusy(true);
    try {
      await base44.entities.Lesson.create(ls);
      setLs({ title: '', module: '', duration: '', description: '', poster_url: '', video_url: '', student_email: '' });
      await refresh();
    } finally {
      setBusy(false);
    }
  };

  const review = async (h, feedback) => {
    await base44.entities.Homework.update(h.id, { feedback, status: 'reviewed' });
    await refresh();
  };

  return (
    <div className="space-y-12">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">Администрирование</p>
        <h1 className="mt-3 font-heading text-4xl font-light text-ink md:text-5xl">Управление контентом</h1>
      </header>

      {/* Students */}
      <section className="rounded-2xl border border-foreground/10 bg-white p-8">
        <h2 className="font-heading text-2xl text-ink">Ученики</h2>
        <div className="mt-5 divide-y divide-foreground/10">
          {students.filter((s) => s.role !== 'admin').map((s) => (
            <div key={s.id} className="flex items-center justify-between py-3">
              <div>
                <div className="font-heading text-lg text-ink">{s.full_name || s.email}</div>
                <div className="text-xs text-foreground/45">{s.email}</div>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">ученик</span>
            </div>
          ))}
          {students.filter((s) => s.role !== 'admin').length === 0 && (
            <p className="py-6 text-foreground/50">Нет учеников. Пригласите их через раздел Users.</p>
          )}
        </div>
      </section>

      {/* Homework */}
      <section className="rounded-2xl border border-foreground/10 bg-white p-8">
        <h2 className="font-heading text-2xl text-ink">Назначить домашнее задание</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Field label="Ученик">
            <select value={hw.student_email} onChange={(e) => setHw({ ...hw, student_email: e.target.value })} className={selectCls}>
              <option value="">Выберите ученика…</option>
              {studentEmails.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </Field>
          <Field label="Тема занятия">
            <Input value={hw.lesson_title} onChange={(e) => setHw({ ...hw, lesson_title: e.target.value })} className="mt-1.5" />
          </Field>
          <Field label="Название задания">
            <Input value={hw.title} onChange={(e) => setHw({ ...hw, title: e.target.value })} className="mt-1.5" />
          </Field>
          <Field label="Срок (дата)">
            <Input type="date" value={hw.due_date} onChange={(e) => setHw({ ...hw, due_date: e.target.value })} className="mt-1.5" />
          </Field>
          <div className="md:col-span-2">
            <Field label="Описание">
              <Textarea rows={3} value={hw.description} onChange={(e) => setHw({ ...hw, description: e.target.value })} className="mt-1.5 resize-none" />
            </Field>
          </div>
        </div>
        <Button onClick={createHw} disabled={busy || !hw.title || !hw.student_email} className="mt-5 bg-ink text-background hover:bg-ink/85">
          {busy ? 'Сохраняю…' : 'Назначить'}
        </Button>

        <div className="mt-8 divide-y divide-foreground/10 border-t border-foreground/10">
          {homework.map((h) => (
            <HwRow key={h.id} h={h} onReview={review} />
          ))}
          {homework.length === 0 && <p className="py-6 text-foreground/50">Заданий пока нет.</p>}
        </div>
      </section>

      {/* Lessons */}
      <section className="rounded-2xl border border-foreground/10 bg-white p-8">
        <h2 className="font-heading text-2xl text-ink">Назначить видео-урок</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Field label="Ученик">
            <select value={ls.student_email} onChange={(e) => setLs({ ...ls, student_email: e.target.value })} className={selectCls}>
              <option value="">Выберите ученика…</option>
              {studentEmails.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </Field>
          <Field label="Модуль">
            <Input value={ls.module} onChange={(e) => setLs({ ...ls, module: e.target.value })} className="mt-1.5" />
          </Field>
          <Field label="Название урока">
            <Input value={ls.title} onChange={(e) => setLs({ ...ls, title: e.target.value })} className="mt-1.5" />
          </Field>
          <Field label="Длительность">
            <Input value={ls.duration} onChange={(e) => setLs({ ...ls, duration: e.target.value })} placeholder="24 мин" className="mt-1.5" />
          </Field>
          <Field label="Обложка (постер)">
            <label className={uploadCls}>
              {uploading === 'poster_url' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4" />}
              <span>{ls.poster_url ? 'Заменить изображение' : 'Загрузить изображение'}</span>
              <input type="file" accept="image/*" className="hidden" onChange={(e) => uploadFile(e.target.files?.[0], 'poster_url')} />
            </label>
            {ls.poster_url && (
              <div className="mt-2 flex items-center gap-3">
                <img src={ls.poster_url} alt="poster" className="h-20 w-32 rounded-md object-cover" />
                <button
                  type="button"
                  onClick={() => setLs({ ...ls, poster_url: '' })}
                  className="text-foreground/40 hover:text-ink"
                  aria-label="Удалить обложку"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </Field>
          <div className="md:col-span-2">
            <Field label="Видео-урок">
              <label className={uploadCls}>
                {uploading === 'video_url' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Film className="h-4 w-4" />}
                <span>{ls.video_url ? 'Заменить видео' : 'Загрузить видео'}</span>
                <input type="file" accept="video/*" className="hidden" onChange={(e) => uploadFile(e.target.files?.[0], 'video_url')} />
              </label>
              {ls.video_url && (
                <div className="mt-2 flex items-center gap-3">
                  <video src={ls.video_url} className="h-20 w-32 rounded-md bg-black object-cover" />
                  <button
                    type="button"
                    onClick={() => setLs({ ...ls, video_url: '' })}
                    className="text-foreground/40 hover:text-ink"
                    aria-label="Удалить видео"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Описание">
              <Textarea rows={2} value={ls.description} onChange={(e) => setLs({ ...ls, description: e.target.value })} className="mt-1.5 resize-none" />
            </Field>
          </div>
        </div>
        <Button onClick={createLs} disabled={busy || !ls.title || !ls.student_email} className="mt-5 bg-ink text-background hover:bg-ink/85">
          {busy ? 'Сохраняю…' : 'Назначить урок'}
        </Button>

        <div className="mt-8 divide-y divide-foreground/10 border-t border-foreground/10">
          {lessons.map((l) => (
            <div key={l.id} className="flex items-center gap-4 py-4">
              {l.poster_url ? (
                <img src={l.poster_url} alt="" className="h-16 w-24 shrink-0 rounded-md object-cover" />
              ) : (
                <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-md bg-linen">
                  <ImageIcon className="h-5 w-5 text-foreground/30" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">{l.student_email} · {l.module}</p>
                <p className="mt-1 font-heading text-lg text-ink">{l.title}</p>
                {l.description && <p className="mt-1 line-clamp-1 text-sm text-foreground/55">{l.description}</p>}
              </div>
              <span className="shrink-0 text-xs text-foreground/45">{l.duration}</span>
            </div>
          ))}
          {lessons.length === 0 && <p className="py-6 text-foreground/50">Уроков пока нет.</p>}
        </div>
      </section>
    </div>
  );
}

function HwRow({ h, onReview }) {
  const [fb, setFb] = useState(h.feedback || '');
  const st = STATUS[h.status] || STATUS.not_started;
  return (
    <div className="py-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">{h.student_email} · {h.lesson_title}</p>
          <h3 className="mt-1 font-heading text-xl text-ink">{h.title}</h3>
          {h.answer_text && <p className="mt-2 text-sm text-foreground/60">Ответ ученика: {h.answer_text}</p>}
          {h.feedback && <p className="mt-1 text-sm text-gold">Фидбэк: {h.feedback}</p>}
        </div>
        <span className={`shrink-0 rounded-full px-3 py-1 text-xs ${st.cls}`}>{st.label}</span>
      </div>
      <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center">
        <Input value={fb} onChange={(e) => setFb(e.target.value)} placeholder="Фидбэк ученику…" className="md:flex-1" />
        <Button onClick={() => onReview(h, fb)} className="bg-ink text-background hover:bg-ink/85">
          Отметить проверенным
        </Button>
      </div>
    </div>
  );
}