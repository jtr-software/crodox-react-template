import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../../globals.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const baseUrl = 'https://www.crodox.com';
  const siteTitle = 'Crodox - Your Codebase, without the noise';
  const siteDescription =
    'Extract any component from your codebase into an isolated environment - and work on it without the distraction of everything else.';
  const socialImageUrl = `${baseUrl}/crodox-logo-bg-black.png`;
  const locale = (await params).locale;
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: siteTitle,
    description: siteDescription,
    icons: {
      icon: '/crodox-logo-round-bg.png',
      apple: '/crodox-logo-round-br.png',
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      type: 'website',
      url: baseUrl,
      siteName: 'Crodox',
      images: [
        {
          url: socialImageUrl,
          width: 1172,
          height: 449,
          alt: 'Crodox logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [socialImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        de: `${baseUrl}/de`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/de`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans antialiased transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
