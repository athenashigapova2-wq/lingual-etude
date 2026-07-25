import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const FALLBACK_POSTERS = [
  'https://media.base44.com/images/public/6a5ba48a57159dafae9910ca/b3a673b8a_generated_4f72e969.png',
  'https://media.base44.com/images/public/6a5ba48a57159dafae9910ca/76074ee03_generated_a33348e7.png',
  'https://media.base44.com/images/public/6a5ba48a57159dafae9910ca/c24231c2b_generated_a0c29c3a.png',
  'https://media.base44.com/images/public/6a5ba48a57159dafae9910ca/a8cb3a7d7_generated_908007ec.png',
  'https://media.base44.com/images/public/6a5ba48a57159dafae9910ca/85af4a0f9_generated_0e461ae0.png',
  'https://media.base44.com/images/public/6a5ba48a57159dafae9910ca/be36ad800_generated_296d8d9c.png',
];

export default function Lessons() {
  const [lessons, setLessons] = useState(null);
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    (async () => {
      const u = await base44.auth.me().catch(() => null);
      const all = await base44.entities.Lesson.list().catch(() => []);
      const list = u && u.role !== 'admin' ? all.filter((l) => l.student_email === u.email) : all;
      setLessons(list);
    })();
  }, []);

  const poster = (l, i) => l.poster_url || FALLBACK_POSTERS[i % FALLBACK_POSTERS.length];

  return (
    <div className="space-y-12">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">Архив</p>
        <h1 className="mt-3 font-heading text-4xl font-light text-ink md:text-5xl">Видео-уроки</h1>
      </header>

      {!lessons ? (
        <div className="h-64 animate-pulse bg-linen" />
      ) : lessons.length === 0 ? (
        <p className="border-y border-foreground/10 py-16 text-center text-foreground/50">
          Вам пока не назначено видео-уроков.
        </p>
      ) : (
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Player */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink md:aspect-video">
              {active ? (
                <>
                  <img
                    src={poster(active, lessons.indexOf(active))}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
                    {playing ? (
                      <p className="font-heading text-2xl italic text-background/80">
                        Видео-урок загружается…
                      </p>
                    ) : (
                      <>
                        <button
                          onClick={() => setPlaying(true)}
                          className="flex h-20 w-20 items-center justify-center rounded-full border border-background/40 transition-colors hover:bg-background hover:text-ink"
                          aria-label="Воспроизвести"
                        >
                          <Play className="h-7 w-7 fill-current" />
                        </button>
                        <h2 className="font-heading text-2xl italic text-background">{active.title}</h2>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-heading text-xl italic text-background/50">Выберите урок из списка</p>
                </div>
              )}
            </div>
            {active && (
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">{active.module} · {active.duration}</p>
                <h2 className="mt-2 font-heading text-2xl text-ink">{active.title}</h2>
                <p className="mt-3 text-foreground/70">{active.description}</p>
              </div>
            )}
          </div>

          {/* List */}
          <div className="lg:col-span-5">
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              {lessons.map((l, i) => (
                <button
                  key={l.id}
                  onClick={() => { setActive(l); setPlaying(false); }}
                  className={`flex w-full items-center gap-4 px-4 py-5 text-left transition-colors ${
                    active?.id === l.id ? 'bg-linen' : 'hover:bg-linen/50'
                  }`}
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-ink">
                    <img src={poster(l, i)} alt="" className="h-full w-full object-cover opacity-80" />
                    <Play className="absolute inset-0 m-auto h-4 w-4 text-background" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">{l.module}</p>
                    <p className="font-heading text-lg text-ink">{l.title}</p>
                    <p className="text-xs text-foreground/45">{l.duration}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}