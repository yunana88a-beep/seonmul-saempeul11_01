'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import StarfieldBackground from '../ui/StarfieldBackground';

const Icons = {
  Notice: () => (
    <svg
      className="w-10 h-10 stroke-current fill-none mb-4"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <rect x="4" y="2" width="16" height="20" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="12" y2="16" />
    </svg>
  ),
  Faq: () => (
    <svg
      className="w-10 h-10 stroke-current fill-none mb-4"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <rect x="3" y="3" width="18" height="18" />
      <path d="M9 9a3 3 0 1 1 6 0c0 2-3 3-3 3" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" />
    </svg>
  ),
  Inquiry: () => (
    <svg
      className="w-10 h-10 stroke-current fill-none mb-4"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <rect x="2" y="14" width="3" height="6" />
      <rect x="19" y="14" width="3" height="6" />
      <polyline points="22 17 22 22 15 22" />
    </svg>
  ),
};

const SUPPORT_MENUS = [
  { label: '공지사항', href: '/support/notice', icon: <Icons.Notice /> },
  { label: '자주 묻는 질문', href: '/support/faq', icon: <Icons.Faq /> },
  { label: '1:1 상담 신청', href: '/support/inquiry', icon: <Icons.Inquiry /> },
];

export default function CustomerSupport() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('.support-card');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="relative py-16 md:py-32 px-6 overflow-hidden border-y border-white/5 bg-black">
      <StarfieldBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h3 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
          Customer Support
        </h3>
        <h2 className="text-3xl md:text-6xl font-black text-white mb-12 md:mb-20 tracking-tighter leading-tight break-keep">
          고객 지원 센터
        </h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {SUPPORT_MENUS.map((menu, index) => {
            const isVisible = visibleItems.has(index);

            return (
              <Link
                key={index}
                href={menu.href}
                data-index={index}
                className={`support-card group relative flex flex-col items-center justify-center p-8 md:p-14 
                  border border-blue-500/20 bg-gradient-to-br from-blue-900/30 via-zinc-900/60 to-black 
                  backdrop-blur-md transition-all duration-1000 ease-out rounded-none h-full 
                  shadow-[0_0_30px_rgba(37,99,235,0.08)] hover:shadow-blue-500/30 hover:border-blue-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* ✨ 4개 꼭짓점 포인트 디자인 */}
                {/* 좌상단 */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-40 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500" />
                {/* 우상단 */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500 opacity-40 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500" />
                {/* 좌하단 */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500 opacity-40 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500" />
                {/* 우하단 */}
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-40 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500" />

                {/* 상단 파란색 바 (중앙에서 양옆으로 퍼지는 효과) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-700 opacity-50" />

                <div className="text-blue-400/80 group-hover:text-blue-500 group-hover:-translate-y-2 transition-all duration-500 transform scale-90 md:scale-100">
                  {menu.icon}
                </div>

                <span className="text-gray-100 font-bold text-lg break-keep group-hover:text-white transition-colors tracking-tight">
                  {menu.label}
                </span>

                {/* 중앙 블루 오버레이 (상시 푸른 기운을 유지) */}
                <div className="absolute inset-0 bg-blue-600/[0.03] group-hover:bg-blue-600/[0.08] transition-colors pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
