
import type { Metadata } from 'next';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Notes App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          {children} {}
        </TanStackProvider>
      </body>
    </html>
  );
}

