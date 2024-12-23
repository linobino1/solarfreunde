import '@unocss/reset/tailwind.css'
import './global.css'
import { Footer } from '@/components/Footer'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="font-sans text-black bg-white text-base">
        {children}
        <Footer />
      </body>
    </html>
  )
}
