'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarfieldBackground from '@/components/ui/StarfieldBackground';
import HeroBackground from '@/components/ui/HeroBackground';

const STEPS = [
  {
    num: '01',
    title: '상담 신청 및 접수',
    desc: '홈페이지 내 신청 폼을 통해 성함과 연락처를 남겨주시면 전문 상담원이 신속하게 연락드립니다.',
    detail: ['24시간 접수 가능', '실시간 상담 지원'],
  },
  {
    num: '02',
    title: '맞춤형 전략 컨설팅',
    desc: '고객님의 투자 성향과 자산 규모에 최적화된 트레이딩 전략 및 프로그램 운용 방식을 제안합니다.',
    detail: ['투자 성향 분석', '포트폴리오 구성'],
  },
  {
    num: '03',
    title: '프로그램 설치 및 세팅',
    desc: '전문 기술팀이 원격 지원을 통해 시스템 설치부터 API 연동까지 모든 과정을 완벽하게 세팅해 드립니다.',
    detail: ['원격 기술 지원', '보안 연동 확인'],
  },
  {
    num: '04',
    title: '무료체험 및 운용 시작',
    desc: '실전과 동일한 환경에서 프로그램을 직접 경험하며 인공지능 트레이딩의 놀라운 성과를 확인하세요.',
    detail: ['7일 무료 체험', '실시간 모니터링'],
  },
];

export default function TrialPage() {
  const [mounted, setMounted] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✨ 핵심 해결책: HTML 렌더링이 완료된 후(mounted === true)에만 옵저버가 실행되도록 수정
  useEffect(() => {
    if (!mounted) return; // 화면이 아직 안 그려졌으면 기다림

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    // 이제 화면에 .animate-trigger 요소들이 존재하므로 확실하게 찾아냅니다.
    const elements = document.querySelectorAll('.animate-trigger');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [mounted]); // ✨ 의존성 배열에 mounted 추가!

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 overflow-hidden HeroSection">
        <HeroBackground src="/images/trial-hero.webp" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 border border-white/20 bg-white/5 backdrop-blur-md rounded-full animate-fade-in">
            <span className="text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase">
              Service Process
            </span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-10 tracking-tighter leading-tight md:leading-none break-keep">
            이용절차 및 <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-300">
              무료체험
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-2xl max-w-3xl mx-auto break-keep leading-relaxed font-light">
            복잡한 과정은 저희에게 맡기세요. <br className="hidden md:block" />
            가장 스마트한 트레이딩의 시작, SMPLE11가 함께합니다.
          </p>
        </div>
      </section>

      {/* 2. Process Steps */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden border-y border-white/5 bg-zinc-950 FeaturesSection">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/process-bg.webp"
            alt="Process Background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
              Step-by-Step
            </h3>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white break-keep">
              간편한 <br className="md:hidden" /> 서비스 시작
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STEPS.map((step, i) => {
              const isVisible = visibleItems.has(i);

              return (
                <div
                  key={i}
                  data-index={i}
                  className={`animate-trigger relative p-8 md:p-10 border border-white/10 bg-black/60 backdrop-blur-md hover:border-blue-500/50 hover:bg-black/80 transition-all duration-1000 ease-out group shadow-2xl rounded-none flex flex-col h-full
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="text-6xl md:text-7xl font-black text-white/5 absolute top-6 right-6 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                    {step.num}
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="w-10 h-10 border border-blue-600 flex items-center justify-center mb-6 md:mb-8 bg-blue-600/10">
                      <span className="text-blue-500 font-bold font-mono">
                        {i + 1}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors break-keep">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 break-keep flex-1">
                      {step.desc}
                    </p>

                    <ul className="space-y-3 mt-auto border-t border-white/10 pt-6">
                      {step.detail.map((d, di) => (
                        <li
                          key={di}
                          className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-500 group-hover:text-gray-400 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rotate-45" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="relative py-24 md:py-48 px-6 text-center border-t border-white/10 overflow-hidden CTASection">
        <StarfieldBackground />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-[80px] font-black mb-8 md:mb-12 tracking-[calc(-0.04em)] leading-[1.3] md:leading-[1.1] break-keep">
            지금 바로 무료체험을 신청하고
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              수익의 새로운 경로를 직접 확인하세요.
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-2xl mb-10 md:mb-16 font-light break-keep">
            전문 상담원이 신청 확인 후 순차적으로 연락을 드립니다.
          </p>

          <div className="flex w-full justify-center">
            <button className="px-8 py-4 md:px-16 md:py-6 bg-blue-600 text-white font-black text-lg md:text-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 rounded-none shadow-[0_0_30px_rgba(37,99,235,0.4)] whitespace-nowrap w-full sm:w-auto">
              무료체험 신청하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
