'use client';

import { createContext, useContext } from "react";

export type ColorModeContextType = {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
};

export const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const useColorMode = () => {
  const ctx = useContext(ColorModeContext);
  if (!ctx) throw new Error("useColorMode must be used within ThemeRegistry");

  return ctx;
}
