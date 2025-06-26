'use client'
import { useColorMode } from '@/components/theme/color-mode-context';
import { Button } from '@mui/material';

export default function UserProfile() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <div className="p-4 bg-amber-300 rounded mb-2 min-h-[48px] flex items-center">
      <Button onClick={toggleColorMode} variant="contained">
        {mode === "dark" ? "Light theme" : "Dark theme"}
      </Button>
    </div>
  )
}
