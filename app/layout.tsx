import "styles/tailwind.css"
import { ClientLayout } from "./ClientLayout"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
