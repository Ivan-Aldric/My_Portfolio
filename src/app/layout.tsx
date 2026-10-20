import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/navigation'
import VoiceflowChat from '@/components/voiceflow-chat'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ivan Aldric | MIS Specialist & Developer',
    template: '%s | Ivan Aldric',
  },
  description:
    'Ivan Aldric is a MIS Specialist, developer, and IT consultant building smart business solutions and data-driven digital experiences.',
  keywords: [
    'Ivan Aldric',
    'Aldric',
    'MIS Specialist',
    'IT Consultant',
    'Portfolio',
    'Developer',
    'Business Solutions',
  ],
  authors: [{ name: 'Ivan Aldric' }],
  applicationName: 'Ivan Aldric Portfolio',
  openGraph: {
    title: 'Ivan Aldric | MIS Specialist & Developer',
    description:
      'Portfolio of Ivan Aldric, MIS Specialist, developer, and IT consultant focused on smart business solutions.',
    url: siteUrl,
    siteName: 'Ivan Aldric Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Aldric | MIS Specialist & Developer',
    description:
      'Portfolio of Ivan Aldric, MIS Specialist, developer, and IT consultant focused on smart business solutions.',
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'qL0ClTS2ivWoCeViYjHrzCIkhlMKztUw1TI33SEkdyI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>

        {/* Voiceflow Chatbot */}
        <VoiceflowChat />
      </body>
    </html>
  )
}
