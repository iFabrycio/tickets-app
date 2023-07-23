import NarrowConstrainedContainer from '@/components/containers/NarrowConstrainedContainer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eventos - Atlética',
  description: 'Próximos eventos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NarrowConstrainedContainer>
        {children}
        </NarrowConstrainedContainer>
        </body>
    </html>
  )
}
