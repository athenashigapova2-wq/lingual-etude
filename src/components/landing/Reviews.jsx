import { useLang } from '@/lib/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import ReviewCard from '@/components/landing/ReviewCard';

const NEW_RU = [
  {
    text: 'До занятий с Аминой английский был для меня самым непонятным предметом. Я постоянно путалась во временах и боялась говорить, потому что думала, что обязательно ошибусь. Уже через несколько занятий стало намного легче: Амина объясняет сложные темы очень простым языком и всегда приводит понятные примеры. На уроках нет ощущения «школы» — наоборот, заниматься интересно и комфортно. Благодаря ей английский перестал казаться чем-то страшным. Очень рекомендую тем, кто хочет не просто выучить правила, а действительно понять язык) ❤️',
    name: 'Ильгиза',
  },
  {
    text: 'Готовилась с Аминой к ЕГЭ и ни разу не пожалела о своем выборе. Очень понравилось, что у нее самой 100 баллов на экзамене, поэтому она отлично знает все нюансы и типичные ошибки. На каждом занятии мы разбирали не только задания, но и стратегии их выполнения. Атмосфера всегда была спокойной, без давления. Если что-то было непонятно, Амина объясняла столько раз, сколько нужно. Благодаря занятиям я стала намного увереннее в своих знаниях и перестала бояться экзамена (итого, 91 балл) ✔️',
    name: 'Екатерина',
  },
  {
    text: 'Самое ценное для меня — это отношение к ученику. Амина всегда поддерживает, замечает прогресс и искренне радуется успехам. Никогда не чувствуешь себя «глупым», если чего-то не знаешь. Уроки проходят очень динамично: разговорная практика, интересные тексты, современные темы, грамматика и новые слова. Время пролетает незаметно, а после каждого занятия остается ощущение, что действительно чему-то научилась))))',
    name: 'Виктория',
  },
  {
    text: 'Мне всегда казалось, что английский — это бесконечная зубрежка слов и правил. На занятиях с Аминой я понял, что можно учиться совсем по-другому. Мы много разговариваем, обсуждаем фильмы, новости, жизненные ситуации, поэтому новые слова запоминаются сами собой. Если возникают ошибки, их спокойно разбираем без критики. Очень нравится, что уроки адаптируются под мои цели и темп обучения 😅',
    name: 'Леонид',
  },
  {
    text: 'Искала преподавателя, который сможет заинтересовать английским, а не просто идти по учебнику. Амина именно такой человек. Она очень доброжелательная, ответственная и всегда тщательно готовится к урокам. Особенно понравилось, что каждое занятие логично выстроено: сначала повторение, потом новая тема, практика и домашнее задание с полезной обратной связью. После нескольких месяцев занятий мой уровень заметно вырос, а самое главное — появилась уверенность в себе и желание продолжать изучать язык 👀',
    name: 'Елена',
  },
];

const ROLE = { ru: 'Индивидуальные занятия', en: 'Personal lessons' };

const byName = (n) => NEW_RU.find((r) => r.name === n);

const HUMAN = {
  ru: [
    {
      text: 'Записалась в Ami Studio почти случайно — думала, просто подтянуть разговорный. А вышло, что начала слышать себя на английском: не «правильно ли я говорю», а что именно хочу сказать. Ами умеет незаметно сместить фокус с ошибок на смысл, и от этого язык вдруг оживает. Теперь паузы для меня — не неловкость, а часть речи.',
      name: 'Мария К.',
      role: 'Ami Studio',
    },
    {
      text: 'Приходила на индивидуальные после долгого перерыва в английском — боялась открыть рот. На первом же занятии Ами не стала меня «проверять», просто начала разговаривать со мной так, будто мы давно знакомы. К третьему уроку я заметила, что думаю фразами, а не перевожу в голове. Это лучшее, что дали мне занятия — ощущение, что язык мой, а не чужой.',
      name: 'Дарья В.',
      role: 'Персональные занятия',
    },
    {
      text: 'Я взрослый человек с работой и кучей дел, мне нужен был не учебник, а живой английский. У Ами на занятиях нет ощущения «школьного урока»: мы говорим, спорим, смеёмся, разбираем то, что действительно нужно. Никакого давления, но при этом ты видишь, как медленно и верно растёшь. Раньше я бы не поверила, что английский может быть местом, где отдыхаешь.',
      name: 'Ольга С.',
      role: 'Ami Studio',
    },
  ],
  en: [
    {
      text: 'I joined Ami Studio almost by chance — just to brush up my speaking. What happened was I started hearing myself in English: not "am I saying it right" but "what do I actually want to say". Ami quietly shifts the focus from mistakes to meaning, and the language suddenly comes alive. Now pauses feel like part of speech, not awkwardness.',
      name: 'Maria K.',
      role: 'Ami Studio',
    },
    {
      text: 'I came to personal lessons after a long break from English — afraid to open my mouth. From the very first session Ami didn’t "test" me; she just started talking to me as if we’d known each other for ages. By the third lesson I noticed I was thinking in phrases, not translating in my head. That’s the best thing the lessons gave me — the feeling that the language is mine, not foreign.',
      name: 'Daria V.',
      role: 'Personal lessons',
    },
    {
      text: 'I’m an adult with a job and a thousand things to do; I didn’t need a textbook, I needed living English. With Ami a lesson never feels like "school": we talk, argue, laugh, work through what I actually need. No pressure, yet you watch yourself grow slowly and steadily. I’d never have believed English could be a place where I rest.',
      name: 'Olga S.',
      role: 'Ami Studio',
    },
  ],
};

const T = {
  ru: {
    label: 'Отзывы',
    items: [
      { ...byName('Елена'), role: ROLE.ru },
      { ...byName('Ильгиза'), role: ROLE.ru },
      { ...byName('Леонид'), role: ROLE.ru },
      { ...byName('Екатерина'), role: ROLE.ru },
      ...HUMAN.ru,
      { ...byName('Виктория'), role: ROLE.ru },
    ],
  },
  en: {
    label: 'Reviews',
    items: [
      { ...byName('Елена'), role: ROLE.en },
      { ...byName('Ильгиза'), role: ROLE.en },
      { ...byName('Леонид'), role: ROLE.en },
      { ...byName('Екатерина'), role: ROLE.en },
      ...HUMAN.en,
      { ...byName('Виктория'), role: ROLE.en },
    ],
  },
};

export default function Reviews() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section id="reviews" className="bg-linen px-[8vw] py-[14vh]">
      <p className="mb-16 text-xs uppercase tracking-[0.4em] text-foreground/40">{t.label}</p>
      <div className="px-2 md:px-12">
        <Carousel opts={{ align: 'center', loop: true }} className="w-full">
          <CarouselContent>
            {t.items.map((r) => (
              <CarouselItem key={r.name} className="basis-full">
                <ReviewCard review={r} lang={lang} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}