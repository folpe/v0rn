import "styles/tailwind.css"
import { ClientLayout } from "./ClientLayout"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
