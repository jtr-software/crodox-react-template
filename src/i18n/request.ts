import { getRequestConfig } from 'next-intl/server';
import { Locale, routing } from './routing';

function isLocale(value: string): value is Locale {
  return routing.locales.some((supportedLocale) => supportedLocale === value);
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !isLocale(locale)) locale = routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
