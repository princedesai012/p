import { GaugeCircle } from 'lucide-react';

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          {children}
          <a href="/" className="ml-2 mr-6 flex items-center space-x-2 md:ml-0">
            <GaugeCircle className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Bharat RateWatch
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
