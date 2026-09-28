import { useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import SEO from '../components/SEO'
import PageHero, { ArrowButton } from '../components/PageHero'
import { Reveal } from '../components/Motion'

export default function Legal() {
  const { slug } = useParams()
  const { t } = useLang()
  const legal = t('legal')
  const doc = slug === 'datenschutz' ? legal.datenschutz : legal.impressum
  const page = slug === 'datenschutz' ? 'datenschutz' : 'impressum'

  return (
    <>
      <SEO page="legal" />
      <PageHero tag={legal.hero.tag} title={doc.title} sub={legal.hero.sub} />
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="font-display sz-rule pt-6 text-3xl font-bold uppercase tracking-tight">{doc.title}</h2>
            <p className="mt-8 whitespace-pre-line leading-relaxed text-ink-700">{doc.body}</p>
            <div className="mt-12 flex gap-4">
              <ArrowButton to="/contact" variant="primary">
                {t('nav.contact')}
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
