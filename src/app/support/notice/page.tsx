'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const NOTICES = [
  {
    id: 5,
    category: '업데이트',
    title: 'SMPLE11 알고리즘 v4.2 패치 노트 안내 (수익 타점 최적화)',
    date: '2026.04.20',
    isNew: true,
  },
  {
    id: 4,
    category: '점검',
    title: '시스템 정기 서버 점검 안내 (04/22 02:00 ~ 05:00)',
    date: '2026.04.18',
    isNew: false,
  },
  {
    id: 3,
    category: '안내',
    title: '무료체험 신청자 폭주로 인한 상담 지연 안내',
    date: '2026.04.15',
    isNew: false,
  },
  {
    id: 2,
    category: '공지',
    title: 'SMPLE11 서비스 이용약관 및 개인정보 처리방침 개정 안내',
    date: '2026.04.10',
    isNew: false,
  },
  {
    id: 1,
    category: '공지',
    title: 'SMPLE11 공식 웹사이트 리뉴얼 오픈 안내',
    date: '2026.04.01',
    isNew: false,
  },
];

export default function NoticePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* 1. Hero Section: 배경 이미지 적용 */}
      <section className="relative pt-64 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/notice-bg.webp"
            alt="Notice Background"
            fill
            className="object-cover grayscale"
            priority
          />
          {/* 하단으로 갈수록 어두워지는 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h3 className="text-blue-500 font-bold tracking-[0.4em] uppercase text-sm mb-4">
            Notice & News
          </h3>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            공지사항
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto break-keep">
            SMPLE11의 주요 소식과 최신 업데이트 정보를 전달해 드립니다.
          </p>
        </div>
      </section>

      {/* 2. Search Bar: 필터 탭 제거 후 검색창만 유지 */}
      <section className="py-12 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-end mb-12">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-full bg-zinc-900 border border-white/10 px-5 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors rounded-none"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 3. Notice List */}
          <div className="border-t border-white/20">
            {NOTICES.map((notice) => (
              <Link
                href={`/support/notice/${notice.id}`}
                key={notice.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-white/5 hover:bg-zinc-950 transition-all group relative"
              >
                {/* 호버 시 좌측 파란 레이저 라인 효과 */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-4 md:mb-0">
                  <span className="text-gray-600 font-mono text-sm group-hover:text-blue-500 transition-colors">
                    {notice.id.toString().padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-4">
                    <h4 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                      {notice.title}
                    </h4>
                    {notice.isNew && (
                      <span className="px-2 py-0.5 bg-blue-600 text-[10px] font-black uppercase tracking-tighter">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-gray-500 font-mono text-sm flex items-center gap-4">
                  <span className="text-[11px] border border-white/20 px-2 py-0.5 text-gray-400 uppercase">
                    {notice.category}
                  </span>
                  {notice.date}
                </div>
              </Link>
            ))}
          </div>

          {/* 4. Pagination */}
          <div className="mt-20 flex justify-center gap-3">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`w-12 h-12 flex items-center justify-center font-mono text-sm border transition-all ${
                  num === 1
                    ? 'bg-white text-black border-white'
                    : 'border-white/10 text-gray-500 hover:border-white/40 hover:text-white'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
