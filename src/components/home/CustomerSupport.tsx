'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
// ✨ 새로 분리한 은하수 배경 컴포넌트 불러오기 (경로는 폴더 구조에 맞게 수정하세요)
import StarfieldBackground from '../ui/StarfieldBackground';

// --- 변경된 메뉴에 맞춘 직관적인 직선형 라인 아트 아이콘 ---
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

// --- 고객지원 3대 메뉴 데이터 ---
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
          const index = Number(entry.target.getAttribute('data-index'));

          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          } else {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const elements = document.querySelectorAll('.support-card');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden border-y border-white/5 bg-black">
      {/* ✨ 재사용 가능한 은하수 컴포넌트 삽입 */}
      <StarfieldBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* 타이틀 영역 */}
        <h3 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
          Customer Support
        </h3>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 md:mb-20 tracking-tighter">
          고객 지원 센터
        </h2>

        {/* 3개의 메뉴 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {SUPPORT_MENUS.map((menu, index) => {
            const isVisible = visibleItems.has(index);

            return (
              <Link
                key={index}
                href={menu.href}
                data-index={index}
                className={`support-card group relative flex flex-col items-center justify-center p-8 md:p-14 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-blue-500 transition-all duration-1000 ease-out rounded-none h-full shadow-2xl
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                <div className="text-gray-500 group-hover:text-blue-500 group-hover:-translate-y-2 transition-all duration-500">
                  {menu.icon}
                </div>
                <span className="text-white font-bold text-lg break-keep group-hover:text-blue-400 transition-colors">
                  {menu.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
