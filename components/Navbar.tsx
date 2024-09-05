import React from 'react';
import { Moon, Sun, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 bg-background text-foreground">
      <h1 className="text-xl font-bold">Streamify Analytics</h1>
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};


