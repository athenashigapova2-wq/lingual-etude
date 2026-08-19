import { useEffect, useState } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlayCircle, NotebookPen, CalendarDays, LogOut, Globe, ShieldCheck } from 'lucide-react';
import { appApi } from '@/api/appApi';
import FilmGrain from '@/components/landing/FilmGrain';

const NAV = [
  { to: '/dashboard', label: 'Обзор', icon: LayoutDashboard, end: true },
  { to: '/dashboard/lessons', label: 'Видео-уроки', icon: PlayCircle },
  { to: '/dashboard/homework', label: 'Домашние задания', icon: NotebookPen },
  { to: '/dashboard/schedule', label: 'Расписание', icon: CalendarDays },
  { to: '/', label: 'Главная', icon: Globe, end: true },
];

export default function DashboardLayout() {
  const location = useLocation();
  const [me, setMe] = useState(null);

  useEffect(() => {
    appApi.auth.me().then(setMe).catch(() => {});
  }, []);

  const nav = me?.role === 'admin' ? [...NAV, { to: '/dashboard/admin', label: 'Управление', icon: ShieldCheck }] : NAV;

  const logout = async () => {
    await appApi.auth.logout('/');
  };

  return (
    <div className="min-h-screen bg-alabaster">
      <FilmGrain />
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-md md:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <Link to="/dashboard" className="font-heading text-2xl italic text-ink">ami</Link>
          <button onClick={logout} aria-label="Выйти" className="text-foreground/60 hover:text-ink">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-2">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive ? 'bg-ink text-background' : 'text-foreground/60 hover:text-ink'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <div className="mx-auto flex max-w-[1500px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-foreground/10 px-6 py-10 md:flex">
          <Link to="/" className="font-heading text-3xl italic text-ink">ami</Link>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-foreground/40">Личный кабинет</p>

          <nav className="mt-12 flex flex-col gap-1">
            {nav.map((n) => {
              const Icon = n.icon;
              return (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? 'bg-ink text-background'
                        : 'text-foreground/65 hover:bg-linen hover:text-ink'
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {n.label}
                </NavLink>
              );
            })}
          </nav>

          <button
            onClick={logout}
            className="mt-auto flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-foreground/60 transition-colors hover:text-ink"
          >
            <LogOut className="h-4 w-4" /> Выйти
          </button>
        </aside>

        <main key={location.pathname} className="min-h-screen flex-1 px-6 py-10 md:px-12 md:py-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
