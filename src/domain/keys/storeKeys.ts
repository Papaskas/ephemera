import { createKey } from 'strict-store';
import { ThemeMode } from '@/types/themeMode';

export const storeKeys = {
  theme: createKey<ThemeMode>(
    'app', 'theme'
  ),
} as const
