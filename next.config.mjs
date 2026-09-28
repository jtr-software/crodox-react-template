import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    serverExternalPackages: ['@mailchimp/mailchimp_marketing'],
  },
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
    RESEND_API: process.env.RESEND_API,
  },
};

export default withNextIntl(nextConfig);
