import './globals.css';
import { Roboto } from 'next/font/google';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { StoreProvider } from 'redux/StoreProvider';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <StoreProvider>
          <Header />
          <div className="mainContainer">{children}</div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
