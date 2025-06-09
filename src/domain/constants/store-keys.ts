import { createKey } from 'strict-store';

export const storeKeys = {
  theme: createKey<'light' | 'dark'>(
    'app',
    'theme',
    'light'
  ),
}
