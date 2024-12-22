import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  )
}

