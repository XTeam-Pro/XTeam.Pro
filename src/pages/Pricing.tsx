import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check, ArrowRight, Zap, TrendingUp, Shield,
  Clock, Users, ChevronDown, ChevronUp, Info,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { buildContactPath } from '@/utils/contactQuery';

/* ── helpers ── */

const ROI_ICON_MAP: Record<string, React.ReactNode> = {
  clock:        <Clock className="w-6 h-6" />,
  shield:       <Shield className="w-6 h-6" />,
  'trending-up': <TrendingUp className="w-6 h-6" />,
  users:        <Users className="w-6 h-6" />,
};

type ColorKey = 'blue' | 'indigo' | 'purple';

const TIER_COLORS: Record<ColorKey, { icon: string; ring: string; cta: string; ctaHover: string }> = {
  blue:   { icon: 'bg-blue-100 text-blue-600',   ring: '',                        cta: 'bg-gray-100 text-gray-900', ctaHover: 'hover:bg-gray-200' },
  indigo: { icon: 'bg-indigo-100 text-indigo-600', ring: 'ring-2 ring-blue-500',  cta: 'bg-blue-600 text-white',   ctaHover: 'hover:bg-blue-700' },
  purple: { icon: 'bg-purple-100 text-purple-600', ring: '',                       cta: 'bg-gray-100 text-gray-900', ctaHover: 'hover:bg-gray-200' },
};

const TIER_DEFS: Array<{ id: string; tierKey: string; color: ColorKey; popular: boolean; icon: React.ReactNode }> = [
  { id: 'tm',           tierKey: 'starter',      color: 'blue',   popular: false, icon: <Zap className="w-6 h-6" /> },
  { id: 'fixed',        tierKey: 'professional', color: 'indigo', popular: true,  icon: <TrendingUp className="w-6 h-6" /> },
  { id: 'subscription', tierKey: 'enterprise',   color: 'purple', popular: false, icon: <Shield className="w-6 h-6" /> },
];

/* ── component ── */

export default function Pricing() {
  const { t } = useTranslation();

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openDrivers, setOpenDrivers] = useState(false);

  /* data */
  const heroMarkers = t('pricing.hero.markers', { returnObjects: true }) as string[];

  const processSteps = [
    t('pricing.process.steps.discovery',    { returnObjects: true }),
    t('pricing.process.steps.architecture', { returnObjects: true }),
    t('pricing.process.steps.mvp',          { returnObjects: true }),
    t('pricing.process.steps.pilot',        { returnObjects: true }),
    t('pricing.process.steps.scale',        { returnObjects: true }),
  ] as Array<{ step: string; title: string; duration: string; description: string }>;

  const roiItems = t('pricing.roiSimple.items', { returnObjects: true }) as Array<{
    icon: string; label: string; description: string;
  }>;

  const maturityStages = t('pricing.addOns.maturityStages', { returnObjects: true }) as Array<{
    title: string; when: string; effect: string;
  }>;

  const faqItems = t('pricing.faq.items', { returnObjects: true }) as Array<{
    question: string; answer: string;
  }>;

  const navSections = [
    { id: 'models',  label: t('pricing.nav.models') },
    { id: 'process', label: t('pricing.nav.process') },
    { id: 'roi',     label: t('pricing.nav.roi') },
    { id: 'addons',  label: t('pricing.nav.addons') },
    { id: 'faq',     label: t('pricing.nav.faq') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* ══ Hero ══ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('pricing.hero.title')}
              <span className="text-blue-600"> {t('pricing.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('pricing.hero.subtitle')}
            </p>

            {/* Trust markers */}
            <div className="flex flex-wrap justify-center gap-3">
              {heroMarkers.map((marker, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100"
                >
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{marker}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ Sticky Anchor Nav ══ */}
      <div className="sticky top-[var(--site-header-height)] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-2">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ══ Collaboration Models ══ */}
      <section id="models" className="py-16 bg-white scroll-mt-[var(--sticky-offset)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricing.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {TIER_DEFS.map((tier, index) => {
              const tk = tier.tierKey;
              const colors = TIER_COLORS[tier.color];
              const features      = t(`pricing.tiers.${tk}.features`,      { returnObjects: true }) as string[];
              const deliverables  = t(`pricing.tiers.${tk}.deliverables`,  { returnObjects: true }) as string[];
              const clientNeeds   = t(`pricing.tiers.${tk}.clientNeeds`);
              const pricingDrivers = tk === 'professional'
                ? (t(`pricing.tiers.${tk}.pricingDrivers`, { returnObjects: true }) as string[])
                : [];

              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative bg-white rounded-2xl shadow-lg flex flex-col h-full ${colors.ring}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                        {t('pricing.tiers.mostPopular')}
                      </span>
                    </div>
                  )}

                  <div className="p-8 pb-0 flex-1">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${colors.icon}`}>
                        {tier.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {t(`pricing.tiers.${tk}.name`)}
                      </h3>
                      <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                        {t(`pricing.tiers.${tk}.description`)}
                      </p>
                      <div>
                        <span className="text-3xl font-bold text-gray-900">
                          {t(`pricing.tiers.${tk}.price`)}
                        </span>
                        <span className="text-gray-400 ml-2 text-sm">
                          {t(`pricing.tiers.${tk}.period`)}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        {t('pricing.tiers.whatsIncluded')}
                      </h4>
                      <div className="space-y-2">
                        {features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="border-t border-gray-100 pt-5 mb-5">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        {t('pricing.tiers.whatsDelivered')}
                      </h4>
                      <div className="space-y-2">
                        {deliverables.map((d, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Needs */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4 flex items-start gap-2">
                      <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold text-gray-400 block mb-0.5">
                          {t('pricing.tiers.clientNeedsLabel')}
                        </span>
                        <p className="text-xs text-gray-600 leading-relaxed">{clientNeeds}</p>
                      </div>
                    </div>

                    {/* Pricing Drivers — professional only */}
                    {pricingDrivers.length > 0 && (
                      <div className="mb-6">
                        <button
                          onClick={() => setOpenDrivers(!openDrivers)}
                          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                          aria-expanded={openDrivers}
                        >
                          {openDrivers
                            ? <ChevronUp className="w-3.5 h-3.5" />
                            : <ChevronDown className="w-3.5 h-3.5" />}
                          {t('pricing.tiers.pricingDriversLabel')}
                        </button>
                        {openDrivers && (
                          <div className="mt-2 space-y-1.5 pl-5">
                            {pricingDrivers.map((d, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                                <div className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                                {d}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="px-8 pb-8 pt-4 mt-auto">
                    <Link
                      to={buildContactPath({ source: 'pricing_model', model: tier.id })}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center cursor-pointer ${colors.cta} ${colors.ctaHover}`}
                    >
                      {t(`pricing.tiers.${tk}.cta`)}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ Implementation Process ══ */}
      <section id="process" className="py-16 scroll-mt-[var(--sticky-offset)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricing.process.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('pricing.process.subtitle')}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex gap-6"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10 relative">
                        {step.step}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 flex-1">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ROI Simple Block ══ */}
      <section id="roi" className="py-16 bg-white scroll-mt-[var(--sticky-offset)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricing.roiSimple.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('pricing.roiSimple.subtitle')}</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {roiItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {ROI_ICON_MAP[item.icon] ?? <TrendingUp className="w-6 h-6" />}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* KPI note + CTA bar */}
            <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
              <p className="text-white text-sm leading-relaxed max-w-xl opacity-90 text-center sm:text-left">
                {t('pricing.roiSimple.kpiNote')}
              </p>
              <Link
                to={buildContactPath({ source: 'pricing_roi' })}
                className="flex-shrink-0 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                {t('pricing.roiSimple.ctaLabel')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Add-ons / Maturity Stages ══ */}
      <section id="addons" className="py-16 scroll-mt-[var(--sticky-offset)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricing.addOns.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('pricing.addOns.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            {maturityStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200 h-full flex flex-col"
              >
                <div className="w-9 h-9 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-4 min-h-[4rem]">{stage.title}</h3>
                <div className="flex flex-col flex-1 gap-4">
                  <div className="lg:min-h-[8rem]">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {t('pricing.addOns.whenLabel')}
                    </span>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{stage.when}</p>
                  </div>
                  <div className="lg:min-h-[7rem]">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                      {t('pricing.addOns.effectLabel')}
                    </span>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{stage.effect}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" className="py-16 bg-white scroll-mt-[var(--sticky-offset)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricing.faq.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('pricing.faq.subtitle')}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * index }}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm">{item.question}</span>
                  {openFaq === index
                    ? <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Final CTA ══ */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">{t('pricing.finalCta.title')}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              {t('pricing.finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={buildContactPath({ source: 'pricing_final_cta' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center cursor-pointer"
              >
                {t('pricing.finalCta.scheduleConsultation')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to={buildContactPath({ source: 'pricing_brief' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center cursor-pointer"
              >
                {t('pricing.finalCta.startFreeTrial')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
