'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarfieldBackground from '@/components/ui/StarfieldBackground';
import HeroBackground from '@/components/ui/HeroBackground';

const PROGRAM_FEATURES = [
  {
    title: 'AI 스마트 트레이딩 엔진',
    desc: '과거 10년치 데이터를 학습한 딥러닝 모델이 실시간으로 시장의 변곡점을 감지하여 최적의 진입 포인트를 산출합니다.',
    tag: 'Intelligence',
  },
  {
    title: '초정밀 리스크 컨트롤',
    desc: '손절가 자동 추적(Trailing Stop) 및 분할 매수/매도 로직을 통해 변동성이 큰 시장에서도 자산을 안정적으로 방어합니다.',
    tag: 'Safety',
  },
  {
    title: '멀티 스트래티지 운용',
    desc: '추세 추종, 역추세, 스캘핑 등 시장 상황에 맞는 다양한 전략을 동시에 구동하여 수익 기회를 극대화합니다.',
    tag: 'Strategy',
  },
  {
    title: '클라우드 24/7 시스템',
    desc: 'PC를 켜둘 필요 없이 클라우드 서버에서 24시간 내내 전략이 구동되어, 단 하나의 기회도 놓치지 않습니다.',
    tag: 'Infrastructure',
  },
];

export default function ProgramPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* 1. Hero Section: 모바일 여백(pt-32 pb-20) 및 폰트 사이즈 조정 */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 overflow-hidden HeroSection">
        <HeroBackground src="/images/program-hero.webp" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 border border-white/20 bg-white/5 backdrop-blur-md rounded-full">
            <span className="text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase">
              SMPLE11 Algorithm v4.0
            </span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-10 tracking-tighter leading-tight md:leading-none break-keep">
            스마트
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200">
              트레이딩 엔진
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-2xl max-w-3xl mx-auto break-keep leading-relaxed font-light">
            감정을 배제하고 오직 데이터로만 승부합니다.
            <br className="hidden md:block" />
            SMPLE11만의 독자적인 인공지능 알고리즘이 당신의 투자를 혁신합니다.
          </p>
        </div>
      </section>

      {/* 2. Technical Core: 모바일 여백(py-16) 축소 */}
      <section className="py-8 md:py-32 px-6 border-y border-white/5 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 border border-blue-600 text-blue-500 text-xs font-bold uppercase mb-6">
                Technical Core
              </div>
              <h3 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight break-keep leading-tight">
                0.001초의 정밀함, 수익을 위한 단 하나의 길
              </h3>
              <div className="space-y-6 text-gray-400 text-base md:text-lg break-keep">
                <p>
                  시장의 노이즈와 실제 시그널을 구분하는 것은 매우 어렵습니다.
                  SMPLE11는 수백 가지 기술 지표와 거래량 패턴을 실시간으로
                  분석하여 고확률 타점을 포착합니다.
                </p>
                <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>실시간 호가창 잔량 및 체결 강도 분석</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>이평선 및 볼린저밴드 다중 프레임 분석</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>변동성 돌파 및 추세 전환 로직 탑재</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-square border border-white/10 group overflow-hidden">
              <Image
                src="/images/program-core.webp"
                alt="Analyzing Market"
                fill
                className="object-cover object-top opacity-80 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Program Features: 모바일 여백(py-20) 축소 */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden border-y border-white/5 bg-zinc-950 FeaturesSection">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/features-bg.webp"
            alt="Features Background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-24">
            <h3 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
              Core Principles
            </h3>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white break-keep">
              SMPLE11이 지키는 <br className="md:hidden" /> 기술 원칙
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PROGRAM_FEATURES.map((f, i) => (
              <div
                key={i}
                className="p-8 md:p-10 border border-white/10 bg-black/60 backdrop-blur-md hover:border-blue-500/50 hover:bg-black/80 transition-all duration-500 group shadow-2xl rounded-none flex flex-col h-full"
              >
                <div className="text-blue-600 font-mono text-xs font-bold mb-4">
                  / {f.tag}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors break-keep">
                  {f.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed break-keep group-hover:text-gray-300 transition-colors">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA: 모바일 여백(py-24) 축소 및 가로 스크롤 방지 */}
      <section className="relative py-8 md:py-32 px-6 text-center border-t border-white/10 overflow-hidden CTASection">
        <StarfieldBackground />

        <div className="relative z-10 CTAContent max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-12 tracking-[calc(-0.04em)] leading-[1.3] md:leading-[1.1] break-keep">
            이미 수많은 트레이더가
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100">
              SMPLE11의 기술력을 경험하고 있습니다.
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-2xl mb-10 md:mb-16 font-light break-keep">
            지금 SMPLE11의 정밀한 알고리즘을 <br className="md:hidden" />
            직접 경험해 보세요.
          </p>

          {/* 가로 스크롤 방지를 위해 모바일에서는 패딩을 줄이고 최대 너비 제한(max-w-full) */}
          <button className="px-8 py-4 md:px-16 md:py-6 bg-blue-600 text-white font-black text-lg md:text-2xl hover:bg-blue-700 transition-all transform hover:scale-105 rounded-none shadow-[0_0_30px_rgba(37,99,235,0.4)] whitespace-nowrap max-w-full">
            프로그램 무료체험 신청
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
