import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';

// undefined = loading, null = not authenticated, object = user
export function useCurrentUser() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => setUser(null));
  }, []);
  return user;
}