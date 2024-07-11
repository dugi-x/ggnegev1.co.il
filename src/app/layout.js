import "./globals.css";

import { Open_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["hebrew", "latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'גג הנגב בע"מ | פירוק ופינו אסבסט',
  description: 'גג הנגב בע"מ הינה חברה מובילה וחלוצה בתחום פינוי, סילוק וסקר אסבסט. לפרטים נוספים 050-5256711',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content="https://www.ggnegev1.co.il" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='גג הנגב בע"מ | פירוק ופינו אסבסט' />
        <meta property="og:description" content='גג הנגב בע"מ הינה חברה מובילה וחלוצה בתחום פינוי, סילוק וסקר אסבסט. לפרטים נוספים 050-5256711' />
        <meta property="og:image" content="https://www.ggnegev1.co.il/images/ggnegev-ltd-logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ggnegev1.co.il" />
        <meta property="twitter:url" content="https://www.ggnegev1.co.il" />
        <meta name="twitter:title" content='גג הנגב בע" מ | פירוק ופינו אסבסט' />
        <meta name="twitter:description" content='גג הנגב בע"מ הינה חברה מובילה וחלוצה בתחום פינוי, סילוק וסקר אסבסט. לפרטים נוספים 050-5256711' />
        <meta name="twitter:image" content="https://www.ggnegev1.co.il/images/ggnegev-ltd-logo.png" />

      </head>
      <body dir="rtl" className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
