import { Helmet } from 'react-helmet-async'
import { useLang } from '../i18n/LanguageContext'

const SITE_URL = 'https://salzgitter-ag.vercel.app'

export default function SEO({ page = 'home', jsonLd = null }) {
  const { lang, t, lp } = useLang()
  const meta = t(`meta.${page}`) || {}
  const title = meta.title || 'Salzgitter AG'
  const desc = meta.desc || ''
  const canonical = `${SITE_URL}${lp(`/${page === 'home' ? '' : page}`)}`
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="de" href={`${SITE_URL}/de${page === 'home' ? '' : `/${page}`}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en${page === 'home' ? '' : `/${page}`}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/de${page === 'home' ? '' : `/${page}`}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Salzgitter AG" />
      <meta property="og:locale" content={lang === 'de' ? 'de_DE' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Salzgitter AG',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Eisenhüttenstraße 99',
    postalCode: '38239',
    addressLocality: 'Salzgitter',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49 5341 21-01',
    email: 'impressum@salzgitter-ag.de',
    contactType: 'corporate',
  },
  sameAs: ['https://www.salzgitter-ag.com', 'https://www.linkedin.com/company/salzgitter-ag'],
}
