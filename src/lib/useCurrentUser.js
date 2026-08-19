import { useEffect, useState } from 'react';
import { appApi } from '@/api/appApi';

// undefined = loading, null = not authenticated, object = user
export function useCurrentUser() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    appApi.auth.me().then(setUser).catch(() => setUser(null));
  }, []);
  return user;
}
