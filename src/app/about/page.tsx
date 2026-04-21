'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarfieldBackground from '@/components/ui/StarfieldBackground';
import HeroBackground from '@/components/ui/HeroBackground';

const CORE_VALUES = [
  {
    label: 'Precision',
    title: '정밀한 분석',
    desc: '0.001초의 오차도 허용하지 않는 빅데이터 기반 알고리즘으로 시장의 미세한 흐름을 포착합니다.',
  },
  {
    label: 'Trust',
    title: '신뢰의 기술',
    desc: '모든 체결 데이터는 투명하게 관리되며, 고객의 자산 보호를 최우선 가치로 삼습니다.',
  },
  {
    label: 'Innovation',
    title: '혁신적 경로',
    desc: '전통적인 방식을 넘어 최첨단 AI 기술이 결합된 새로운 투자 패러다임을 제시합니다.',
  },
];

export default function AboutPage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [count, setCount] = useState(0);
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isCounterVisible && count < 10) {
      const timer = setTimeout(() => setCount(count + 1), 200);
      return () => clearTimeout(timer);
    } else if (!isCounterVisible) {
      setCount(0);
    }
  }, [count, isCounterVisible]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');

          if (entry.isIntersecting) {
            if (index === 'counter') setIsCounterVisible(true);
            else if (index !== null) {
              setVisibleItems((prev) => new Set(prev).add(Number(index)));
            }
          } else {
            if (index === 'counter') setIsCounterVisible(false);
            else if (index !== null) {
              setVisibleItems((prev) => {
                const newSet = new Set(prev);
                newSet.delete(Number(index));
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    const elements = document.querySelectorAll('.animate-trigger');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />

      {/* 1. Hero Section: ProgramPage와 동일하게 모바일 여백(pt-32 pb-20) 및 폰트 사이즈 조정 */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 overflow-hidden HeroSection">
        <HeroBackground src="/images/about-hero.jpg" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 border border-white/20 bg-white/5 backdrop-blur-md rounded-full animate-fade-in">
            <span className="text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase">
              Next-Gen Trading Standard
            </span>
          </div>
          {/* ✨ 폰트 사이즈 축소 및 줄바꿈 최적화 */}
          <h1 className="text-4xl md:text-[100px] font-black tracking-[calc(-0.05em)] leading-[1.2] md:leading-[0.95] mb-6 md:mb-10 break-keep">
            혁신을 넘어,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-300">
              트레이딩의 기준을 바꿉니다.
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-2xl max-w-3xl mx-auto font-light leading-relaxed break-keep">
            SMPLE11은 복잡한 금융 시장을 데이터로 해체하고,
            <br className="hidden md:block" />
            누구나 성공적인 투자 경로에 진입할 수 있도록 기술의 문턱을 낮춥니다.
          </p>
        </div>
      </section>

      {/* 2. Philosophy & Numbers: 모바일 상하 여백 대폭 축소 (py-24 -> py-16) */}
      <section className="py-16 md:py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-none blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-white/10">
                <Image
                  src="/images/philosophy.jpg"
                  alt="Philosophy"
                  fill
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="animate-trigger" data-index="counter">
              <h3 className="text-3xl md:text-6xl font-black mb-6 md:mb-10 tracking-tight leading-tight break-keep">
                가장 빠르고 정확한
                <br />
                <span className="text-blue-500">단 하나의 경로</span>
              </h3>
              <div className="space-y-6 md:space-y-8 text-gray-400 text-base md:text-xl leading-relaxed break-keep font-light">
                <p>
                  단순한 자동화 도구를 넘어, 수만 번의 백테스팅과 실시간 시장
                  분석을 통해 검증된 최적의 타점만을 제공합니다.
                </p>
                <p>
                  우리의 알고리즘은 정체되어 있지 않습니다. 시장의 변화를
                  학습하며 지금 이 순간에도 스스로 진화하고 있습니다.
                </p>
              </div>

              {/* ✨ 모바일 여백(mt, pt, gap) 타이트하게 축소 */}
              <div className="mt-8 md:mt-16 grid grid-cols-2 gap-4 md:gap-12 border-t border-white/10 pt-8 md:pt-16">
                <div>
                  <div className="text-3xl md:text-5xl font-black text-white mb-2 font-mono tracking-tighter">
                    2026
                  </div>
                  <div className="text-blue-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] break-keep">
                    설립 연도
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-black mb-2 font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
                    {count}M+
                  </div>
                  <div className="text-blue-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] break-keep">
                    초당 분석 데이터
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values: 모바일 텍스트 깨짐 방지 및 여백(py-20) 축소 */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/values-bg.jpg"
            alt="Values Background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-zinc-950/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-24">
            <h3 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
              Core Philosophy
            </h3>
            {/* ✨ 텍스트 크기 조절 및 줄바꿈 방지 적용 */}
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white break-keep">
              타협하지 않는 원칙
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-10">
            {CORE_VALUES.map((val, idx) => {
              const isVisible = visibleItems.has(idx);
              return (
                <div
                  key={idx}
                  data-index={idx}
                  className={`animate-trigger group p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-xl hover:border-blue-500/50 shadow-2xl transition-all duration-1000 ease-out rounded-none flex flex-col h-full
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}
                  `}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  <div className="text-blue-600 font-mono text-xl md:text-2xl mb-4 md:mb-8 font-bold">
                    / 0{idx + 1}
                  </div>
                  <h4 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-6 group-hover:text-blue-400 transition-colors break-keep">
                    {val.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-lg group-hover:text-gray-200 transition-colors break-keep">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Contact CTA: 모바일 상하 여백 조절 및 가로 스크롤 방지 */}
      {/* ✨ py-48을 py-24 md:py-48로 축소 */}
      <section className="relative py-24 md:py-48 px-6 text-center overflow-hidden border-t border-white/10">
        <StarfieldBackground />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          {/* ✨ 텍스트 크기 조절 및 줄바꿈 방지 적용 */}
          <h2 className="text-3xl md:text-[80px] font-black mb-8 md:mb-12 tracking-[calc(-0.04em)] leading-[1.3] md:leading-[1.1] break-keep">
            압도적인 기술력,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              이제 당신의 수익으로 증명할 차례입니다.
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-2xl mb-10 md:mb-16 font-light break-keep">
            지금 SMPLE11의 정밀한 알고리즘을 <br className="md:hidden" />
            직접 경험해 보세요.
          </p>

          {/* ✨ 가로 스크롤 방지를 위해 모바일에서는 패딩을 줄이고 최대 너비 제한(max-w-full) */}
          <button className="px-8 py-4 md:px-16 md:py-6 bg-blue-600 text-white font-black text-lg md:text-2xl hover:bg-blue-700 transition-all transform hover:scale-105 rounded-none shadow-[0_0_40px_rgba(37,99,235,0.4)] whitespace-nowrap max-w-full">
            무료체험 시작하기
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
