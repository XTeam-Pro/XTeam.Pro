import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Target, Award, Globe, ArrowRight, MapPin, MessageSquare, Calendar,
  Layers, CheckCircle, ChevronRight, Info, ExternalLink, ArrowUpRight, TrendingUp,
  Cpu, GitBranch, Settings, Link2, Briefcase
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { buildContactPath } from '@/utils/contactQuery';

interface StatItem {
  number: string;
  label: string;
  description: string;
  link: string;
  source: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  clientValue: string;
}

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  linkText: string;
  linkHref: string;
  source: string;
}

interface EvidenceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  source: string;
}

interface MethodologyItem {
  id: string;
  metric: string;
  method: string;
  caveat: string;
  linkText: string;
  linkHref: string;
  source: string;
}

interface ExternalProofItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

interface ProcessArtifactItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  source: string;
}

interface DeliveryRole {
  step: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface LeadershipMember {
  key: string;
  initials: string;
  name: string;
  role: string;
  bio: string;
  areas: string[];
}

export default function About() {
  const { t } = useTranslation();
  const withSource = (path: string, source: string): string => {
    const [base, hash] = path.split('#');
    const separator = base.includes('?') ? '&' : '?';
    return `${base}${separator}source=${source}${hash ? `#${hash}` : ''}`;
  };

  const stats: StatItem[] = [
    {
      number: t('about.stats.clientsServed.number'),
      label: t('about.stats.clientsServed.label'),
      description: t('about.stats.clientsServed.description'),
      link: t('about.stats.clientsServed.link'),
      source: 'about_stat_products'
    },
    {
      number: t('about.stats.costSavings.number'),
      label: t('about.stats.costSavings.label'),
      description: t('about.stats.costSavings.description'),
      link: t('about.stats.costSavings.link'),
      source: 'about_stat_efficiency'
    },
    {
      number: t('about.stats.uptime.number'),
      label: t('about.stats.uptime.label'),
      description: t('about.stats.uptime.description'),
      link: t('about.stats.uptime.link'),
      source: 'about_stat_productivity'
    },
    {
      number: t('about.stats.support.number'),
      label: t('about.stats.support.label'),
      description: t('about.stats.support.description'),
      link: t('about.stats.support.link'),
      source: 'about_stat_offices'
    }
  ];

  const milestones: Milestone[] = [
    {
      year: t('about.milestones.founded.year'),
      title: t('about.milestones.founded.title'),
      description: t('about.milestones.founded.description'),
      clientValue: t('about.milestones.founded.clientValue')
    },
    {
      year: t('about.milestones.firstClient.year'),
      title: t('about.milestones.firstClient.title'),
      description: t('about.milestones.firstClient.description'),
      clientValue: t('about.milestones.firstClient.clientValue')
    },
    {
      year: t('about.milestones.seriesA.year'),
      title: t('about.milestones.seriesA.title'),
      description: t('about.milestones.seriesA.description'),
      clientValue: t('about.milestones.seriesA.clientValue')
    },
    {
      year: t('about.milestones.hundredClients.year'),
      title: t('about.milestones.hundredClients.title'),
      description: t('about.milestones.hundredClients.description'),
      clientValue: t('about.milestones.hundredClients.clientValue')
    },
    {
      year: t('about.milestones.aiAward.year'),
      title: t('about.milestones.aiAward.title'),
      description: t('about.milestones.aiAward.description'),
      clientValue: t('about.milestones.aiAward.clientValue')
    },
    {
      year: t('about.milestones.globalExpansion.year'),
      title: t('about.milestones.globalExpansion.title'),
      description: t('about.milestones.globalExpansion.description'),
      clientValue: t('about.milestones.globalExpansion.clientValue')
    }
  ];

  const values: ValueItem[] = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: t('about.values.resultsDriven.title'),
      description: t('about.values.resultsDriven.description'),
      example: t('about.values.resultsDriven.example'),
      linkText: t('about.values.resultsDriven.linkText'),
      linkHref: t('about.values.resultsDriven.linkHref'),
      source: 'about_value_modularity'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('about.values.humanCenteredAI.title'),
      description: t('about.values.humanCenteredAI.description'),
      example: t('about.values.humanCenteredAI.example'),
      linkText: t('about.values.humanCenteredAI.linkText'),
      linkHref: t('about.values.humanCenteredAI.linkHref'),
      source: 'about_value_applied_science'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      example: t('about.values.excellence.example'),
      linkText: t('about.values.excellence.linkText'),
      linkHref: t('about.values.excellence.linkHref'),
      source: 'about_value_speed'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
      example: t('about.values.transparency.example'),
      linkText: t('about.values.transparency.linkText'),
      linkHref: t('about.values.transparency.linkHref'),
      source: 'about_value_transparency'
    }
  ];

  const deliveryRoles: DeliveryRole[] = [
    {
      step: '01',
      icon: <Cpu className="w-7 h-7" />,
      title: t('about.team.roles.rdTitle'),
      desc: t('about.team.roles.rdDesc')
    },
    {
      step: '02',
      icon: <GitBranch className="w-7 h-7" />,
      title: t('about.team.roles.delivTitle'),
      desc: t('about.team.roles.delivDesc')
    },
    {
      step: '03',
      icon: <Settings className="w-7 h-7" />,
      title: t('about.team.roles.autoTitle'),
      desc: t('about.team.roles.autoDesc')
    },
    {
      step: '04',
      icon: <Link2 className="w-7 h-7" />,
      title: t('about.team.roles.integTitle'),
      desc: t('about.team.roles.integDesc')
    },
    {
      step: '05',
      icon: <Briefcase className="w-7 h-7" />,
      title: t('about.team.roles.pmTitle'),
      desc: t('about.team.roles.pmDesc')
    }
  ];

  const factSheetRows = [
    { label: t('about.factSheet.geoLabel'), value: t('about.factSheet.geoValue') },
    { label: t('about.factSheet.typesLabel'), value: t('about.factSheet.typesValue') },
    { label: t('about.factSheet.deliverableLabel'), value: t('about.factSheet.deliverableValue') },
    { label: t('about.factSheet.institutionalLabel'), value: t('about.factSheet.institutionalValue') }
  ];

  const proofBullets = [
    t('about.hero.proof1'),
    t('about.hero.proof2'),
    t('about.hero.proof3')
  ];

  const storyHeadings = [
    { heading: t('about.story.heading1'), paragraph: t('about.story.paragraph1') },
    { heading: t('about.story.heading2'), paragraph: t('about.story.paragraph2') },
    { heading: t('about.story.heading3'), paragraph: t('about.story.paragraph3') },
    { heading: t('about.story.heading4'), paragraph: t('about.story.paragraph4') }
  ];

  const evidenceItems: EvidenceItem[] = [
    {
      id: 'institutional',
      icon: <Award className="w-6 h-6" />,
      title: t('about.evidence.cards.institutional.title'),
      description: t('about.evidence.cards.institutional.description'),
      linkText: t('about.evidence.cards.institutional.linkText'),
      linkHref: t('about.evidence.cards.institutional.linkHref'),
      source: 'about_evidence_institutional'
    },
    {
      id: 'recognition',
      icon: <Globe className="w-6 h-6" />,
      title: t('about.evidence.cards.recognition.title'),
      description: t('about.evidence.cards.recognition.description'),
      linkText: t('about.evidence.cards.recognition.linkText'),
      linkHref: t('about.evidence.cards.recognition.linkHref'),
      source: 'about_evidence_recognition'
    },
    {
      id: 'methodology',
      icon: <Link2 className="w-6 h-6" />,
      title: t('about.evidence.cards.methodology.title'),
      description: t('about.evidence.cards.methodology.description'),
      linkText: t('about.evidence.cards.methodology.linkText'),
      linkHref: t('about.evidence.cards.methodology.linkHref'),
      source: 'about_evidence_methodology'
    }
  ];

  const methodologyItems: MethodologyItem[] = [
    {
      id: 'aviation',
      metric: t('about.evidence.kpis.aviation.metric'),
      method: t('about.evidence.kpis.aviation.method'),
      caveat: t('about.evidence.kpis.aviation.caveat'),
      linkText: t('about.evidence.kpis.aviation.linkText'),
      linkHref: t('about.evidence.kpis.aviation.linkHref'),
      source: 'about_kpi_aviation'
    },
    {
      id: 'hr',
      metric: t('about.evidence.kpis.hr.metric'),
      method: t('about.evidence.kpis.hr.method'),
      caveat: t('about.evidence.kpis.hr.caveat'),
      linkText: t('about.evidence.kpis.hr.linkText'),
      linkHref: t('about.evidence.kpis.hr.linkHref'),
      source: 'about_kpi_hr'
    },
    {
      id: 'pilot',
      metric: t('about.evidence.kpis.pilot.metric'),
      method: t('about.evidence.kpis.pilot.method'),
      caveat: t('about.evidence.kpis.pilot.caveat'),
      linkText: t('about.evidence.kpis.pilot.linkText'),
      linkHref: t('about.evidence.kpis.pilot.linkHref'),
      source: 'about_kpi_pilot'
    }
  ];

  const externalProofItems: ExternalProofItem[] = [
    {
      id: 'fsi',
      title: t('about.evidence.thirdParty.items.fsi.title'),
      description: t('about.evidence.thirdParty.items.fsi.description'),
      linkText: t('about.evidence.thirdParty.items.fsi.linkText'),
      linkHref: t('about.evidence.thirdParty.items.fsi.linkHref')
    },
    {
      id: 'skolkovo',
      title: t('about.evidence.thirdParty.items.skolkovo.title'),
      description: t('about.evidence.thirdParty.items.skolkovo.description'),
      linkText: t('about.evidence.thirdParty.items.skolkovo.linkText'),
      linkHref: t('about.evidence.thirdParty.items.skolkovo.linkHref')
    },
    {
      id: 'iso',
      title: t('about.evidence.thirdParty.items.iso.title'),
      description: t('about.evidence.thirdParty.items.iso.description'),
      linkText: t('about.evidence.thirdParty.items.iso.linkText'),
      linkHref: t('about.evidence.thirdParty.items.iso.linkHref')
    }
  ];

  const processArtifacts: ProcessArtifactItem[] = [
    {
      id: 'discovery',
      title: t('about.team.processArtifacts.discovery.title'),
      description: t('about.team.processArtifacts.discovery.description'),
      linkText: t('about.team.processArtifacts.discovery.linkText'),
      linkHref: t('about.team.processArtifacts.discovery.linkHref'),
      source: 'about_process_discovery'
    },
    {
      id: 'scope',
      title: t('about.team.processArtifacts.scope.title'),
      description: t('about.team.processArtifacts.scope.description'),
      linkText: t('about.team.processArtifacts.scope.linkText'),
      linkHref: t('about.team.processArtifacts.scope.linkHref'),
      source: 'about_process_scope'
    },
    {
      id: 'acceptance',
      title: t('about.team.processArtifacts.acceptance.title'),
      description: t('about.team.processArtifacts.acceptance.description'),
      linkText: t('about.team.processArtifacts.acceptance.linkText'),
      linkHref: t('about.team.processArtifacts.acceptance.linkHref'),
      source: 'about_process_acceptance'
    }
  ];

  const decisionKitItems = [
    t('about.team.decisionKit.items.context'),
    t('about.team.decisionKit.items.risks'),
    t('about.team.decisionKit.items.kpi')
  ];

  const leadership: LeadershipMember[] = [
    {
      key: 'tikhonov',
      initials: t('about.team.tikhonov.initials'),
      name: t('about.team.tikhonov.name'),
      role: t('about.team.tikhonov.role'),
      bio: t('about.team.tikhonov.bio'),
      areas: [
        t('about.team.tikhonov.area1'),
        t('about.team.tikhonov.area2'),
        t('about.team.tikhonov.area3'),
        t('about.team.tikhonov.area4'),
        t('about.team.tikhonov.area5'),
      ]
    },
    {
      key: 'byrdin',
      initials: t('about.team.byrdin.initials'),
      name: t('about.team.byrdin.name'),
      role: t('about.team.byrdin.role'),
      bio: t('about.team.byrdin.bio'),
      areas: [
        t('about.team.byrdin.area1'),
        t('about.team.byrdin.area2'),
        t('about.team.byrdin.area3'),
        t('about.team.byrdin.area4'),
        t('about.team.byrdin.area5'),
      ]
    }
  ];

  return (
    <div className="min-h-screen">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* 3-line summary */}
            <p className="text-lg font-semibold text-blue-600 mb-2">
              {t('about.hero.line1')}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              {t('about.hero.line2')}
            </h1>
            <p className="text-2xl text-gray-700 mb-10">
              {t('about.hero.line3')}
            </p>

            {/* Proof bullets */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {proofBullets.map((proof, i) => (
                <span key={i} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {proof}
                </span>
              ))}
            </div>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                to={buildContactPath({ source: 'about_hero' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                {t('about.hero.ctaPrimary')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies?source=about_hero_cases"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
              >
                {t('about.hero.ctaSecondary')}
              </Link>
            </div>

            {/* Clickable stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <Link
                  key={index}
                  to={withSource(stat.link, stat.source)}
                  className="text-center group bg-white/60 backdrop-blur-sm rounded-xl p-5 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium mb-2">{stat.label}</div>
                  <div className="flex items-center justify-center gap-1 text-xs text-blue-500">
                    <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
                    <span className="leading-snug">{stat.description}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. FACT SHEET ───────────────────────────────────────── */}
      <section className="py-16 bg-white" id="fact-sheet">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('about.factSheet.title')}
            </h2>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-8">
              {factSheetRows.map((row) => (
                <div key={row.label} className="flex gap-4">
                  <dt className="w-44 shrink-0 font-semibold text-gray-400 text-xs uppercase tracking-wide pt-1">
                    {row.label}
                  </dt>
                  <dd className="text-gray-800 leading-relaxed text-sm">{row.value}</dd>
                </div>
              ))}
            </dl>

            {/* Honesty signal */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5 flex gap-3">
              <Info className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">
                  {t('about.factSheet.notLabel')}:{' '}
                </span>
                <span className="text-gray-700 text-sm">{t('about.factSheet.notValue')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. OUR STORY ────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t('about.story.title')}
              </h2>
              <div className="space-y-7">
                {storyHeadings.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">
                      {item.heading}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.paragraph}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24"
            >
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white space-y-6">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 opacity-80" />
                  <span className="text-lg font-semibold">{t('about.story.offices')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 opacity-80" />
                  <span className="text-lg font-semibold">{t('about.story.recognition')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 opacity-80" />
                  <span className="text-lg font-semibold">{t('about.story.mission')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 opacity-80" />
                  <span className="text-lg font-semibold">{t('about.story.team')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. TIMELINE ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.journey.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.journey.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline spine */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:justify-start justify-center' : 'md:justify-end justify-center'
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}>
                    <div className="bg-gray-50 border border-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>
                      {/* Client value row */}
                      <div className={`flex items-start gap-2 pt-3 border-t border-blue-100 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-700 font-medium">{milestone.clientValue}</p>
                      </div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. EVIDENCE ─────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50" id="evidence">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {t('about.evidence.title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('about.evidence.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 items-stretch">
              {evidenceItems.map((item) => (
                <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-600 text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">{item.description}</p>
                  <Link
                    to={withSource(item.linkHref, item.source)}
                    className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
                  >
                    {item.linkText}
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-white border border-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.evidence.kpiTitle')}</h3>
              <p className="text-sm text-gray-600 mb-6">{t('about.evidence.kpiSubtitle')}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {methodologyItems.map((item) => (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col">
                    <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-2">
                      {item.metric}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3 flex-1">{item.method}</p>
                    <p className="text-xs text-gray-500 mb-3">{item.caveat}</p>
                    <Link
                      to={withSource(item.linkHref, item.source)}
                      className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
                    >
                      {item.linkText}
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('about.evidence.thirdParty.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{t('about.evidence.thirdParty.subtitle')}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {externalProofItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.linkHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-white hover:border-blue-200 transition-colors flex flex-col"
                  >
                    <p className="text-sm font-semibold text-gray-900 mb-2">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 flex-1">{item.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium group-hover:underline">
                      {item.linkText}
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-4 text-xs text-gray-500">{t('about.evidence.thirdParty.note')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. VALUES ───────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{value.description}</p>
                <hr className="border-blue-100 mb-3" />
                <p className="text-sm text-gray-500 italic mb-3">{value.example}</p>
                <Link
                  to={withSource(value.linkHref, value.source)}
                  className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
                >
                  {value.linkText}
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. TEAM ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.team.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </motion.div>

          {/* Sub-section A: Leadership */}
          <div className="mb-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              {t('about.team.leadership.title')}
            </h3>
            <p className="text-gray-500 text-center mb-10">
              {t('about.team.leadership.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadership.map((member) => (
                <div key={member.key} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                      <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.areas.map((area) => (
                      <span key={area} className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-section B: Delivery flow */}
          <div className="mb-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              {t('about.team.deliveryTitle')}
            </h3>
            <p className="text-gray-500 text-center mb-10">
              {t('about.team.deliverySubtitle')}
            </p>

            <div className="flex flex-col md:flex-row">
              {deliveryRoles.map((role, i) => (
                <div key={role.step} className="flex-1 relative">
                  {/* Connector line */}
                  {i < deliveryRoles.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-0.5 bg-blue-200 z-0" />
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center px-3 py-4">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md">
                      {role.icon}
                    </div>
                    <span className="text-xs font-bold text-blue-400 mb-1 tracking-widest">
                      {role.step}
                    </span>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{role.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('about.team.processArtifactsTitle')}
              </h3>
              <p className="text-gray-500 mb-6">{t('about.team.processArtifactsSubtitle')}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {processArtifacts.map((artifact) => (
                  <Link
                    key={artifact.id}
                    to={withSource(artifact.linkHref, artifact.source)}
                    className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 transition-colors flex flex-col"
                  >
                    <p className="text-sm font-semibold text-gray-900 mb-2">{artifact.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 flex-1">{artifact.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium group-hover:underline">
                      {artifact.linkText}
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.team.decisionKit.title')}</h3>
              <p className="text-sm text-gray-600 mb-5">{t('about.team.decisionKit.subtitle')}</p>

              <ul className="space-y-2 mb-6">
                {decisionKitItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={buildContactPath({ source: 'about_decision_kit' })}
                className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {t('about.team.decisionKit.button')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. CONTACT INFO ─────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.contact.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                title: t('about.contact.headquarters.title'),
                content: t('about.contact.headquarters.address'),
                delay: 0.1
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: t('about.contact.contactInfo.title'),
                content: t('about.contact.contactInfo.details'),
                delay: 0.2
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: t('about.contact.schedule.title'),
                content: t('about.contact.schedule.details'),
                delay: 0.3
              }
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay }}
                className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 whitespace-pre-line text-sm">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">{t('about.cta.title')}</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              {t('about.cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary — discovery call */}
              <Link
                to={buildContactPath({ source: 'about_cta' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                {t('about.cta.scheduleButton')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              {/* Secondary — trust proxy */}
              <Link
                to="/case-studies?source=about_cta_cases"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                {t('about.cta.casesButton')}
              </Link>

              {/* Tertiary — navigation */}
              <Link
                to="/solutions?source=about_cta_solutions"
                className="text-white/75 px-6 py-4 text-base font-medium hover:text-white transition-colors inline-flex items-center justify-center"
              >
                {t('about.cta.solutionsButton')}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
