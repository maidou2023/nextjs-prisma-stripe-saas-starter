import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { auth } from '@/lib/auth/base';

export const metadata: Metadata = {
  title: 'Next.js SaaS Starter',
  description: 'Get started quickly with Next.js, Postgres(Prisma), and Stripe.',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user =  auth().then((session) => session?.user)
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <UserProvider userPromise={user}>{children}</UserProvider>
      </body>
    </html>
  );
}
