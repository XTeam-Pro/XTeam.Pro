import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  BarChart3,
  Users,
  TrendingUp,
  FileText,
  DollarSign,
  Server,
  Code2,
  Shield,
  Target,
  Clock,
  BarChart2,
  Lock,
} from 'lucide-react';
import { buildContactPath, ContactSource } from '@/utils/contactQuery';

interface Solution {
  id: string;
  pain: string;
  icon: React.ReactNode;
  title: string;
  forWhom: string;
  description: string;
  benefits: string[];
  metric: string;
  metricLabel: string;
  caseRef: string;
  cta: string;
  ctaSource: ContactSource;
}

interface Track {
  id: string;
  solutionIds: string[];
}

const TRACKS: Track[] = [
  { id: 'client_ops', solutionIds: ['automation', 'sales'] },
  { id: 'docs', solutionIds: ['idp', 'finance'] },
  { id: 'data', solutionIds: ['analytics', 'xlogos'] },
  { id: 'people', solutionIds: ['hrxteam'] },
  { id: 'it_risk', solutionIds: ['aiops', 'devai', 'aigovernance'] },
];

const FILTER_TABS = ['all', 'client_ops', 'docs', 'data', 'people', 'it_risk'];

const TRUST_ICONS = [
  <Target className="h-6 w-6 text-primary" />,
  <Clock className="h-6 w-6 text-primary" />,
  <BarChart2 className="h-6 w-6 text-primary" />,
  <Lock className="h-6 w-6 text-primary" />,
];

export default function Solutions() {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeTrack, setActiveTrack] = useState<string>('all');
  const trackRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const solutions: Solution[] = [
    {
      id: 'automation',
      pain: t('solutions.blocks.automation.pain'),
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t('solutions.blocks.automation.title'),
      forWhom: 'COO / Head of Support / CCO',
      description: t('solutions.blocks.automation.description'),
      benefits: [
        t('solutions.blocks.automation.benefits.0'),
        t('solutions.blocks.automation.benefits.1'),
        t('solutions.blocks.automation.benefits.2'),
        t('solutions.blocks.automation.benefits.3'),
      ],
      metric: t('solutions.blocks.automation.metric'),
      metricLabel: t('solutions.blocks.automation.metricLabel'),
      caseRef: t('solutions.blocks.automation.caseRef'),
      cta: t('solutions.blocks.automation.cta'),
      ctaSource: 'solutions_automation',
    },
    {
      id: 'sales',
      pain: t('solutions.blocks.sales.pain'),
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('solutions.blocks.sales.title'),
      forWhom: t('solutions.blocks.sales.forWhom'),
      description: t('solutions.blocks.sales.description'),
      benefits: [
        t('solutions.blocks.sales.benefits.0'),
        t('solutions.blocks.sales.benefits.1'),
        t('solutions.blocks.sales.benefits.2'),
        t('solutions.blocks.sales.benefits.3'),
      ],
      metric: t('solutions.blocks.sales.metric'),
      metricLabel: t('solutions.blocks.sales.metricLabel'),
      caseRef: t('solutions.blocks.sales.caseRef'),
      cta: t('solutions.blocks.sales.cta'),
      ctaSource: 'solutions_sales',
    },
    {
      id: 'idp',
      pain: t('solutions.blocks.idp.pain'),
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: t('solutions.blocks.idp.title'),
      forWhom: t('solutions.blocks.idp.forWhom'),
      description: t('solutions.blocks.idp.description'),
      benefits: [
        t('solutions.blocks.idp.benefits.0'),
        t('solutions.blocks.idp.benefits.1'),
        t('solutions.blocks.idp.benefits.2'),
        t('solutions.blocks.idp.benefits.3'),
      ],
      metric: t('solutions.blocks.idp.metric'),
      metricLabel: t('solutions.blocks.idp.metricLabel'),
      caseRef: t('solutions.blocks.idp.caseRef'),
      cta: t('solutions.blocks.idp.cta'),
      ctaSource: 'solutions_idp',
    },
    {
      id: 'finance',
      pain: t('solutions.blocks.finance.pain'),
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: t('solutions.blocks.finance.title'),
      forWhom: t('solutions.blocks.finance.forWhom'),
      description: t('solutions.blocks.finance.description'),
      benefits: [
        t('solutions.blocks.finance.benefits.0'),
        t('solutions.blocks.finance.benefits.1'),
        t('solutions.blocks.finance.benefits.2'),
        t('solutions.blocks.finance.benefits.3'),
      ],
      metric: t('solutions.blocks.finance.metric'),
      metricLabel: t('solutions.blocks.finance.metricLabel'),
      caseRef: t('solutions.blocks.finance.caseRef'),
      cta: t('solutions.blocks.finance.cta'),
      ctaSource: 'solutions_finance',
    },
    {
      id: 'analytics',
      pain: t('solutions.blocks.analytics.pain'),
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('solutions.blocks.analytics.title'),
      forWhom: 'CEO / CFO / CTO / CIO',
      description: t('solutions.blocks.analytics.description'),
      benefits: [
        t('solutions.blocks.analytics.benefits.0'),
        t('solutions.blocks.analytics.benefits.1'),
        t('solutions.blocks.analytics.benefits.2'),
        t('solutions.blocks.analytics.benefits.3'),
      ],
      metric: t('solutions.blocks.analytics.metric'),
      metricLabel: t('solutions.blocks.analytics.metricLabel'),
      caseRef: t('solutions.blocks.analytics.caseRef'),
      cta: t('solutions.blocks.analytics.cta'),
      ctaSource: 'solutions_analytics',
    },
    {
      id: 'xlogos',
      pain: t('solutions.blocks.xlogos.pain'),
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: t('solutions.xlogos.title'),
      forWhom: 'COO / HRD / Head of Enablement',
      description: t('solutions.xlogos.description'),
      benefits: [
        t('solutions.xlogos.benefits.0'),
        t('solutions.xlogos.benefits.1'),
        t('solutions.xlogos.benefits.2'),
        t('solutions.xlogos.benefits.3'),
      ],
      metric: t('solutions.blocks.xlogos.metric'),
      metricLabel: t('solutions.blocks.xlogos.metricLabel'),
      caseRef: t('solutions.blocks.xlogos.caseRef'),
      cta: t('solutions.blocks.xlogos.cta'),
      ctaSource: 'solutions_xlogos',
    },
    {
      id: 'hrxteam',
      pain: t('solutions.blocks.hrxteam.pain'),
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('solutions.hrxteam.title'),
      forWhom: 'HRD / CEO / COO',
      description: t('solutions.hrxteam.description'),
      benefits: [
        t('solutions.hrxteam.solutions.0'),
        t('solutions.hrxteam.solutions.1'),
        t('solutions.hrxteam.solutions.2'),
        t('solutions.hrxteam.solutions.3'),
      ],
      metric: t('solutions.blocks.hrxteam.metric'),
      metricLabel: t('solutions.blocks.hrxteam.metricLabel'),
      caseRef: t('solutions.blocks.hrxteam.caseRef'),
      cta: t('solutions.blocks.hrxteam.cta'),
      ctaSource: 'solutions_hrxteam',
    },
    {
      id: 'aiops',
      pain: t('solutions.blocks.aiops.pain'),
      icon: <Server className="h-8 w-8 text-primary" />,
      title: t('solutions.blocks.aiops.title'),
      forWhom: t('solutions.blocks.aiops.forWhom'),
      description: t('solutions.blocks.aiops.description'),
      benefits: [
        t('solutions.blocks.aiops.benefits.0'),
        t('solutions.blocks.aiops.benefits.1'),
        t('solutions.blocks.aiops.benefits.2'),
        t('solutions.blocks.aiops.benefits.3'),
      ],
      metric: t('solutions.blocks.aiops.metric'),
      metricLabel: t('solutions.blocks.aiops.metricLabel'),
      caseRef: t('solutions.blocks.aiops.caseRef'),
      cta: t('solutions.blocks.aiops.cta'),
      ctaSource: 'solutions_aiops',
    },
    {
      id: 'devai',
      pain: t('solutions.blocks.devai.pain'),
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: t('solutions.blocks.devai.title'),
      forWhom: t('solutions.blocks.devai.forWhom'),
      description: t('solutions.blocks.devai.description'),
      benefits: [
        t('solutions.blocks.devai.benefits.0'),
        t('solutions.blocks.devai.benefits.1'),
        t('solutions.blocks.devai.benefits.2'),
        t('solutions.blocks.devai.benefits.3'),
      ],
      metric: t('solutions.blocks.devai.metric'),
      metricLabel: t('solutions.blocks.devai.metricLabel'),
      caseRef: t('solutions.blocks.devai.caseRef'),
      cta: t('solutions.blocks.devai.cta'),
      ctaSource: 'solutions_devai',
    },
    {
      id: 'aigovernance',
      pain: t('solutions.blocks.aigovernance.pain'),
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t('solutions.blocks.aigovernance.title'),
      forWhom: t('solutions.blocks.aigovernance.forWhom'),
      description: t('solutions.blocks.aigovernance.description'),
      benefits: [
        t('solutions.blocks.aigovernance.benefits.0'),
        t('solutions.blocks.aigovernance.benefits.1'),
        t('solutions.blocks.aigovernance.benefits.2'),
        t('solutions.blocks.aigovernance.benefits.3'),
      ],
      metric: t('solutions.blocks.aigovernance.metric'),
      metricLabel: t('solutions.blocks.aigovernance.metricLabel'),
      caseRef: t('solutions.blocks.aigovernance.caseRef'),
      cta: t('solutions.blocks.aigovernance.cta'),
      ctaSource: 'solutions_aigovernance',
    },
  ];

  const solutionMap = Object.fromEntries(solutions.map((s) => [s.id, s]));

  const trustItems: { title: string; text: string }[] = t('solutions.trust.items', {
    returnObjects: true,
  }) as { title: string; text: string }[];

  const getStickyOffset = () => {
    const headerHeight =
      document.querySelector<HTMLElement>('[data-site-header]')?.getBoundingClientRect().height ?? 64;
    const tabsHeight =
      document.querySelector<HTMLElement>('[data-solutions-tabs]')?.getBoundingClientRect().height ?? 56;

    return headerHeight + tabsHeight + 8;
  };

  // IntersectionObserver — highlight active tab on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    TRACKS.forEach((track) => {
      const el = trackRefs.current[track.id];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTrack(track.id);
          }
        },
        { rootMargin: '-20% 0px -70% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) return;

    const scrollFromHash = () => {
      const target = document.getElementById(decodeURIComponent(hash));
      if (!target) return;

      const offset = getStickyOffset();
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      const trackId = hash.startsWith('track-')
        ? hash.replace('track-', '')
        : TRACKS.find((track) => track.solutionIds.includes(hash))?.id;

      if (trackId) setActiveTrack(trackId);
    };

    const frame = requestAnimationFrame(scrollFromHash);
    return () => cancelAnimationFrame(frame);
  }, [location.hash]);

  const scrollToTrack = (trackId: string) => {
    if (trackId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveTrack('all');
      return;
    }
    const el = trackRefs.current[trackId];
    if (el) {
      const offset = getStickyOffset();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('solutions.hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('solutions.hero.subtitle')}
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to={buildContactPath({ source: 'solutions_hero' })}>
              {t('solutions.hero.ctaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Sticky filter tabs */}
      <div
        data-solutions-tabs
        className="sticky top-[var(--site-header-height)] z-20 bg-white border-b shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToTrack(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeTrack === tab
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t(`solutions.filter.${tab}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tracks */}
      {TRACKS.map((track) => {
        const trackSolutions = track.solutionIds
          .map((id) => solutionMap[id])
          .filter(Boolean);

        return (
          <div
            key={track.id}
            id={`track-${track.id}`}
            ref={(el) => {
              trackRefs.current[track.id] = el;
            }}
          >
            {/* Track header */}
            <div className="bg-indigo-50 py-8 border-b border-indigo-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t(`solutions.tracks.${track.id}.title`)}
                </h2>
                <p className="text-gray-500 mt-1">
                  {t(`solutions.tracks.${track.id}.subtitle`)}
                </p>
              </div>
            </div>

            {/* Solutions within track — alternating layout */}
            {trackSolutions.map((solution, index) => (
              <section
                key={solution.id}
                id={solution.id}
                className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                      <span className="inline-block text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                        {solution.pain}
                      </span>
                      <div className="flex items-center gap-3 mb-1">
                        {solution.icon}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {solution.title}
                        </h2>
                      </div>
                      <p className="text-sm text-gray-400 mb-4 ml-11">{solution.forWhom}</p>
                      <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                      <ul className="space-y-3 mb-8">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild size="lg">
                        <Link to={buildContactPath({ source: solution.ctaSource })}>
                          {solution.cta}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>

                    <div
                      className={`bg-gradient-to-br from-blue-50 to-indigo-100 p-10 rounded-2xl text-center ${
                        index % 2 !== 0 ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                        {solution.metric}
                      </div>
                      <p className="text-gray-600 mb-8 text-lg">{solution.metricLabel}</p>
                      <Link
                        to="/case-studies"
                        className="inline-flex items-center text-primary font-semibold hover:underline"
                      >
                        {solution.caseRef}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        );
      })}

      {/* Trust module */}
      <section className="py-16 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t('solutions.trust.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('solutions.trust.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {Array.isArray(trustItems) &&
              trustItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full flex flex-col"
                >
                  <div className="mb-3">{TRUST_ICONS[i]}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 flex-1">{item.text}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('solutions.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">{t('solutions.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to={buildContactPath({ source: 'solutions_final_cta' })}>
                {t('solutions.cta.auditButton')}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/case-studies">{t('solutions.cta.casesButton')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
