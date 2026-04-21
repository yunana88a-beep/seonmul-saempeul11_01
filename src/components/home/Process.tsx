'use client';

import React, { useEffect, useRef, useState } from 'react';

// --- 차트(Chart) 테마로 통일감 있게 구성된 아이콘 세트 ---
const Icons = {
  Chart: () => (
    <svg
      className="w-12 h-12 stroke-blue-500 fill-none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
      <line x1="3" y1="21" x2="21" y2="21" />
      <line x1="3" y1="3" x2="3" y2="21" />
    </svg>
  ),
  Candlestick: () => (
    <svg
      className="w-12 h-12 stroke-blue-500 fill-none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <line x1="2" y1="21" x2="22" y2="21" />
      <line x1="6" y1="9" x2="6" y2="17" />
      <rect x="4" y="11" width="4" height="4" />
      <line x1="12" y1="4" x2="12" y2="14" />
      <rect x="10" y="6" width="4" height="6" />
      <line x1="18" y1="10" x2="18" y2="19" />
      <rect x="16" y="12" width="4" height="5" />
    </svg>
  ),
  Shield: () => (
    <svg
      className="w-12 h-12 stroke-blue-500 fill-none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Monitor: () => (
    <svg
      className="w-12 h-12 stroke-blue-500 fill-none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <rect x="2" y="3" width="20" height="14" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="2" y1="13" x2="22" y2="13" />
    </svg>
  ),
};

const PROCESS_STEPS = [
  {
    id: '01',
    title: '선물옵션 상담신청',
    description:
      'SMPLE11만의 특화된 노하우로 고객 맞춤형 최고급 상담 서비스를 제공합니다.',
    icon: <Icons.Chart />,
  },
  {
    id: '02',
    title: '해외선물 상담신청',
    description:
      '안전한 실거래 연동과 철저한 증거금 보호 시스템으로 안심하고 거래할 수 있습니다.',
    icon: <Icons.Candlestick />,
  },
  {
    id: '03',
    title: '안전업체 검증',
    description:
      '엄격한 기준을 통과한 안전 제휴사만을 엄선하여 고객의 소중한 자산을 보호합니다.',
    icon: <Icons.Shield />,
  },
  {
    id: '04',
    title: '모의계좌 신청',
    description:
      '실전과 동일한 환경의 최상위 HTS/MTS 시스템을 무료로 체험해 보실 수 있습니다.',
    icon: <Icons.Monitor />,
  },
];

// 스크롤 시 사라지는 버그 완벽 해결
function ProcessCard({ step, index }: { step: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return; // 한 번 보이면 끝

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={cardRef}
      className={`group relative p-6 md:p-8 border border-white/10 bg-zinc-950 hover:border-blue-500 transition-all duration-1000 ease-out rounded-none shadow-2xl flex flex-col items-center text-center
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }} // 나타나는 속도 살짝 높임
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="text-3xl md:text-4xl font-black text-blue-500 mb-4 md:mb-6 font-mono">
        {step.id}
      </div>

      <div className="mb-4 md:mb-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 transform scale-75 md:scale-100">
        {step.icon}
      </div>

      <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
        {step.title}
      </h3>

      <div className="w-10 h-[1px] bg-white/20 mb-3 md:mb-4 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500" />

      <p className="text-gray-400 text-xs md:text-sm leading-relaxed break-keep">
        {step.description}
      </p>
    </div>
  );
}

export default function Process() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-8 md:py-32 px-6 bg-black overflow-hidden border-t border-white/5">
      {/* 안정적인 구조의 사선 배경 디자인 */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-center">
        <div className="w-[150%] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -rotate-12 translate-y-64 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-none blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight break-keep">
            고객을 위한 최고의 서비스를 제공합니다!
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto break-keep leading-relaxed">
            오랜 기간 쌓아온 노하우, 신속하고 정확한 체결속도와 다양한 경험을
            기반으로 선물옵션 및 해외선물 거래를 완벽하게 지원합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
