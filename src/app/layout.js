import './globals.css';
import { Lexend } from 'next/font/google';

export const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-lexend',
});
export const metadata = {
  title: 'Leandra Bar',
  description: 'Enjoy the view!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.variable}>{children}</body>
    </html>
  );
}
