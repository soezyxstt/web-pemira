import { ReactNode } from 'react'
import { TangoSans } from '~/styles/fonts'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={`${TangoSans.className} flex flex-col items-center justify-center min-h-screen py-2`}>
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      {children}
    </main>
  </div>
)

export default Layout
