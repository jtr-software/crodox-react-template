import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],

  defaultLocale: 'en',

  pathnames: {
    '/': '/',
    '/api': '/api',
    '/privacy': '/privacy',
    '/terms': '/terms',

    '/contact': '/contact',

    '/how-it-works': '/how-it-works',
    '/solutions': '/solutions',
    '/solutions/use-case': '/solutions/use-case',
    '/solutions/team': '/solutions/team',
    '/solutions/industry': '/solutions/industry',
    '/why-crodox': '/why-crodox',
    '/resources': '/resources',
    '/resources/blog': '/resources/blog',
    '/resources/blog/[slug]': '/resources/blog/[slug]',
    '/resources/downloads': '/resources/downloads',
    '/resources/downloads/[slug]': '/resources/downloads/[slug]',
    '/enterprise': '/enterprise',
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
