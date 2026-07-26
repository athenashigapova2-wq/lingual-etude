import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Upload, Loader2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const DEFAULT_TASKS = [
  {
    title: 'C1 Reading & Use of English: open cloze + word formation',
    description: `Откройте PDF «CAE Practice Pack 4» (стр. 12–13).
Выполните Part 2 (open cloze) и Part 3 (word formation).
Для каждого пропуска запишите: (1) ответ, (2) часть речи, (3) почему остальные кандидаты невозможны — с опорой на контекст и коллокации.
Особое внимание зависимым предлогам и суффиксам (-ity, -ness, -able, -ive).
Сдайте заполненный ответ и разбор одним файлом.`,
    lesson_title: 'Advanced Accuracy — Unit 4',
    status: 'not_started',
    due_date: '2026-07-24',
  },
  {
    title: 'IELTS Writing Task 2 — argumentative essay (250+ слов)',
    description:
      `Тема: «Governments should invest more in public transport than in road infrastructure» 
      To what extent do you agree? Напишите эссе 270–300 слов: введение с чёткой позицией, два развивающих абзаца (один — контраргумент с опровержением), заключение. Используйте минимум 6 связующих средств (however, nevertheless, on the contrary, in light of…). 
      Подчеркните topic sentences и thesis statement. Цель — не мнение, а структура и точность лексики.`,
    lesson_title: 'Academic Writing — Cohesion & Position',
    status: 'in_review',
    answer_text: 'Черновик прикреплён — 284 слова, контраргумент в §3.',
    due_date: '2026-07-21',
  },
  {
    title: 'Academic paraphrasing & summary (CEFR C1)',
    description:
      `Прочитайте отрывок из J. Diamond «Collapse» (passage_03.pdf, ~480 слов). 
      (1) Summary на 120 слов своими словами, без оценки и без копирования фраз длиннее 6 слов. 
      (2) Параграф 4 перескажите тремя способами: смена актив/пассив, синонимизация, реструктуризация (clause → phrase). 
      (3) Выделите 5 академических коллокаций и составьте с ними предложения.`,
    lesson_title: 'Source Handling — Paraphrase Workshop',
    status: 'reviewed',
    feedback: 'Summary точный, 118 слов. В перефразе №3 потеряна причинно-следственная связь — пересмотрите связку «owing to».',
    due_date: '2026-07-18',
  },
  {
    title: 'Business English: negotiation email + role-play script',
    description:
      `Кейс: Вы ведёте переговоры о цене SaaS-подписки (входящие $18/мес, Ваша цель $12). 
      (1) Follow-up email после первого звонка: подтвердите договорённости, обозначьте условия, предложите trade-off (volume discount / annual billing). Формальный регистр, 150–180 слов. 
      (2) Скрипт для follow-up звонка: 3 ключевых аргумента + 2 возражения и ваши ответы, в рамке BATNAединым документом.`,
    lesson_title: 'Professional Communication — Module 2',
    status: 'not_started',
    due_date: '2026-07-27',
  },
  {
    title: 'Conditionals & mixed tenses — grammar audit',
    description:
      `В тексте grammar_audit.pdf (~900 слов) найдите и исправьте все ошибки в условных наклонениях и согласовании времён (всего 12). 
      Для каждой правки: исходная форма → исправленная форма → правило (например, «Type 3: past unreal, past perfect + would have V3»). 
      Дополнительно составьте 5 своих предложений: Zero, First, Second, Third и mixed conditional — на тему Вашей специальности. 
      Цель — осознанное владение, а не механика.`,
    lesson_title: 'Grammar Lab — Hypotheticals & Time',
    status: 'not_started',
    due_date: '2026-07-30',
  },
  {
    title: 'Pronunciation: minimal pairs + IPA transcription',
    description:
      `Запишите себя, читающего 20 пар минимальных контрастов (ship/sheep, full/fool, cot/caught, bad/bed… — список в pairs_04.pdf). 
      (1) Аудио-файл. 
      (2) Транскрипция всех 40 слов в IPA. 
      (3) Самоанализ: отметьте пары, где Вы не различаете гласные, и опишите артикуляцию (язык, губы, челюсть) для каждого проблемного звука. 
      Цель — услышать себя со стороны.`,
    lesson_title: 'Phonetics Lab — Vowel Inventory',
    status: 'reviewed',
    feedback: 'Чёткое различие /ɪ/–/iː/. /ɒ/–/ɔː/ слипаются — поработайте над раскрытием челюсти на /ɔː/.',
    due_date: '2026-07-20',
  },
];

const STATUS = {
  not_started: { label: 'Не начато', cls: 'bg-linen text-foreground/60' },
  in_review: { label: 'На проверке', cls: 'bg-gold/15 text-gold' },
  reviewed: { label: 'Проверено', cls: 'bg-[#e6ead9] text-[#5a6347]' },
};

export default function Homework() {
  const [items, setItems] = useState(null);
  const [selected, setSelected] = useState(null);
  const [me, setMe] = useState(null);

  const load = async (u) => {
    const all = await base44.entities.Homework.list();
    const list = u && u.role !== 'admin' ? all.filter((h) => h.student_email === u.email) : all;
    setItems(list);
  };

  useEffect(() => {
    (async () => {
      const u = await base44.auth.me().catch(() => null);
      setMe(u);
      await load(u);
    })();
  }, []);

  const submit = async (id, { answer_text, file_url }) => {
    await base44.entities.Homework.update(id, {
      answer_text,
      file_url,
      status: 'in_review',
    });
    await load(me);
    setSelected(null);
  };

  return (
    <div className="space-y-12">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">Практика</p>
        <h1 className="mt-3 font-heading text-4xl font-light text-ink md:text-5xl">Домашние задания</h1>
      </header>

      {!items ? (
        <div className="space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-32 animate-pulse bg-linen" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <p className="border-y border-foreground/10 py-16 text-center text-foreground/50">
          Вам пока не назначено заданий.
        </p>
      ) : (
        <div className="divide-y divide-foreground/10 border-y border-foreground/10">
          {items.map((h) => {
            const st = STATUS[h.status] || STATUS.not_started;
            return (
              <motion.button
                key={h.id}
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6 }}
                onClick={() => h.status !== 'reviewed' && setSelected(h)}
                className={`flex w-full flex-col gap-3 px-4 py-8 text-left transition-colors md:flex-row md:items-center md:justify-between ${
                  h.status !== 'reviewed' ? 'hover:bg-linen/40' : 'cursor-default'
                }`}
              >
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                    {h.lesson_title}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl text-ink">{h.title}</h3>
                  <p className="mt-2 whitespace-pre-line text-sm text-foreground/60">{h.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`rounded-full px-4 py-1.5 text-xs tracking-wide ${st.cls}`}>
                    {st.label}
                  </span>
                  {h.due_date && (
                    <span className="text-xs text-foreground/40">до {new Date(h.due_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      )}

      <AnimatePresence>
        {selected && (
          <TaskEditor key={selected.id} task={selected} onClose={() => setSelected(null)} onSubmit={submit} />
        )}
      </AnimatePresence>
    </div>
  );
}

function TaskEditor({ task, onClose, onSubmit }) {
  const [answer, setAnswer] = useState(task.answer_text || '');
  const [fileUrl, setFileUrl] = useState(task.file_url || '');
  const [fileName, setFileName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const upload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setFileUrl(file_url);
      setFileName(file.name);
    } finally {
      setUploading(false);
    }
  };

  const save = async () => {
    setSaving(true);
    try {
      await onSubmit(task.id, { answer_text: answer, file_url: fileUrl });
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background/90 p-6 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35 }}
        className="relative w-full max-w-2xl border border-foreground/10 bg-white p-8 md:p-12"
      >
        <button onClick={onClose} className="absolute right-5 top-5 text-foreground/40 hover:text-ink" aria-label="Закрыть">
          <X className="h-5 w-5" />
        </button>

        <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">{task.lesson_title}</p>
        <h3 className="mt-2 font-heading text-3xl text-ink">{task.title}</h3>
        <p className="mt-4 whitespace-pre-line text-foreground/70">{task.description}</p>

        <div className="mt-8 space-y-6">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-foreground/40">Ваш ответ</label>
            <Textarea
              rows={6}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Напишите здесь…"
              className="mt-2 resize-none"
              autoFocus
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-foreground/40">Прикрепить файл</label>
            <label className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-foreground/25 px-5 py-4 text-sm text-foreground/60 transition-colors hover:border-gold hover:text-ink">
              {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
              {fileName || 'Перетащите или выберите файл'}
              <input type="file" className="hidden" onChange={upload} />
            </label>
            {fileUrl && !fileName && <p className="mt-2 text-xs text-gold">Файл прикреплён</p>}
          </div>

          <Button
            onClick={save}
            disabled={saving || uploading || (!answer && !fileUrl)}
            className="h-12 w-full bg-ink text-background hover:bg-ink/85"
          >
            {saving ? 'Отправляю…' : 'Отправить на проверку'}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}