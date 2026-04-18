import './globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/**
 * Global metadata configuration for SEO + browser behavior
 * This is used by Next.js App Router automatically
 */
export const metadata = {
  // Page title (shown in browser tab + SEO)
  title: 'Security Guard Services in India | Prabha Indira Special Security Agency Private Limited Agency',

  // Meta description (important for Google search results)
  description:
    'Prabha Indira Special Security Agency Private Limited Agency offers trusted security guard services, residential security, industrial security solutions & manpower services across India. PSARA licensed. 24/7 support.',

  /**
   * Favicon / Browser tab icons
   * These icons appear in:
   * - Browser tab
   * - Bookmarks
   * - Mobile home screen (Apple)
   */
  icons: {
    // Default icon (recommended: favicon.ico for maximum compatibility)
    icon: [
      { url: '/logos/pisa_logo.png' },

      // PNG versions for modern browsers (better clarity)
      { url: '/logos/pisa_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/pisa_logo.png', sizes: '64x64', type: 'image/png' },
    ],

    // Shortcut icon (legacy browsers support)
    shortcut: '/favicon.ico',

    // Apple devices (iPhone home screen icon)
    apple: '/logo-64.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Font (Inter) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Responsive viewport setup */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes"
        />
      </head>

      <body className="font-sans antialiased bg-slate-950">
        {/* Global Header (Navigation, Logo, etc.) */}
        <Header />

        {/* Main content area */}
        <main className="min-h-screen">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Toast notifications (Sonner) */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#f1f5f9',
              border: '1px solid #f59e0b',
            },
          }}
        />
      </body>
    </html>
  )
}