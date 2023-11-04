export const metadata = {
  title: 'CloneAI',
  description: 'Chat with a clone of whoever you desire!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
