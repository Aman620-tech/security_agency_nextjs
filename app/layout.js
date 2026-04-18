import './globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Security Guard Services in India | Prabha Indira Special Security Agency Private Limited Agency',
  description: 'Prabha Indira Special Security Agency Private Limited Agency offers trusted security guard services, residential security, industrial security solutions & manpower services across India. PSARA licensed. 24/7 support.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes" />
      </head>
      <body className="font-sans antialiased bg-slate-950">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
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