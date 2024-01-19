import '../styles/globals.css';
import { Inter as FontSans } from "next/font/google"
import Header from '~/components/header';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
  abcd,
  demo
}: {
  children: React.ReactNode;
  ablc: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen font-sans antialiased ${fontSans.variable}`}
      >
          <div className='flex w-screen min-h-screen flex-col'>
            <Header/>
            {children}
            {abcd}
            {/* {demo} */}
          </div>
      </body>
    </html>
  );
}