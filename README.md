# crodox-landing-page

## Blog via Strapi

The site now includes localized blog routes:

- /en/blog
- /de/blog
- /en/blog/[slug]
- /de/blog/[slug]

Blog data is loaded from Strapi using these environment variables:

- STRAPI_URL
- STRAPI_API_TOKEN (optional, but recommended for private API access)

Example .env.local values:

STRAPI_URL=https://your-strapi-domain.com
STRAPI_API_TOKEN=your_api_token

Expected Strapi collection type: articles

Recommended article fields:

- title (text)
- slug (uid)
- excerpt (text) or description (text)
- content (rich text or long text)
- publishedAt (datetime)
- locale (i18n locale)
- cover or coverImage or image (media, optional)
