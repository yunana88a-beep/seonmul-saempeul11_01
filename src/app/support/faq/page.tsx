'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// FAQ 카테고리
const CATEGORIES = ['전체', '프로그램 이용', '결제/환불', '기술지원', '기타'];

// 임시 FAQ 데이터
const FAQ_DATA = [
  {
    id: 1,
    category: '프로그램 이용',
    q: 'SMPLE11 프로그램은 Mac OS에서도 사용 가능한가요?',
    a: 'SMPLE11 트레이딩 엔진은 현재 안정적인 구동을 위해 Windows 환경에 최적화되어 있습니다. Mac 사용자이신 경우, Parallels나 Bootcamp 등 Windows 가상 환경을 구축하시거나, 당사에서 제공하는 클라우드 서버(VPS) 호스팅 서비스를 이용하시면 PC 환경에 구애받지 않고 24시간 원활한 자동매매가 가능합니다.',
  },
  {
    id: 2,
    category: '결제/환불',
    q: '7일 무료체험 종료 후 자동으로 결제가 진행되나요?',
    a: '아니요, 절대 자동으로 결제되지 않습니다. 7일 무료체험이 종료되면 프로그램 이용이 자동으로 정지되며, 고객님께서 직접 연장 결제를 진행해 주셔야만 서비스가 재개됩니다. 안심하고 체험해 보세요.',
  },
  {
    id: 3,
    category: '기술지원',
    q: '트레이딩 중 PC를 꺼도 프로그램이 계속 돌아가나요?',
    a: '네, 가능합니다. SMPLE11는 클라우드 24/7 시스템을 지원하여, 최초 세팅 후 프로그램을 클라우드 서버에서 구동할 수 있습니다. PC를 끄거나 스마트폰만 사용하는 상황에서도 인공지능 알고리즘은 1년 365일 쉬지 않고 시장을 모니터링하며 매매를 진행합니다.',
  },
  {
    id: 4,
    category: '프로그램 이용',
    q: '자동매매를 시작하기 위한 최소 투자 금액이 정해져 있나요?',
    a: '프로그램 자체의 시스템적인 최소 투자 금액 제한은 없습니다. 다만, 다계약 분할 매수/매도 로직과 리스크 관리를 안정적으로 구동하기 위해 당사에서는 최소 300만 원 이상의 시드 머니 운용을 권장하고 있습니다.',
  },
  {
    id: 5,
    category: '기타',
    q: '프로그램 이용 중 손실이 발생할 수도 있나요?',
    a: 'SMPLE11의 알고리즘은 철저한 백테스팅과 손절가 자동 추적(Trailing Stop)을 통해 손실을 최소화하도록 설계되었으나, 금융 시장의 특성상 100% 수익을 보장하지는 않으며 원금 손실이 발생할 수 있습니다. 모든 투자의 최종 책임은 투자자 본인에게 있음을 인지해 주시기 바랍니다.',
  },
];

export default function FaqPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 아코디언 토글 로직
  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // 필터링 로직
  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchCategory = activeTab === '전체' || faq.category === activeTab;
    const matchSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative pt-64 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/faq-bg.webp"
            alt="FAQ Background"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-blue-500 font-bold tracking-[0.4em] uppercase text-sm mb-4">
            Customer Support
          </h3>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            자주 묻는 질문
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg md:text-xl break-keep">
            SMPLE11 서비스 이용에 관한 궁금증을 빠르게 해결해 드립니다.
          </p>
        </div>
      </section>

      {/* 2. Search & Filter Section */}
      <section className="py-12 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* 검색창 */}
          <div className="relative mb-12">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="궁금하신 내용을 검색해 보세요. (예: 환불, Mac, 클라우드)"
              className="w-full bg-zinc-900 border border-white/20 px-6 py-5 text-lg focus:outline-none focus:border-blue-500 transition-colors rounded-none placeholder-gray-600"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-500 hover:text-white transition-colors">
              <svg
                className="w-6 h-6"
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

          {/* 카테고리 탭 */}
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenFaqId(null);
                }}
                className={`px-6 py-3 text-sm font-bold whitespace-nowrap border transition-all rounded-none ${
                  activeTab === tab
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 3. FAQ Accordion List */}
          <div className="border-t border-white/10">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="border-b border-white/5 bg-zinc-950/30"
                  >
                    {/* 질문 (Header) */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left group hover:bg-black transition-colors"
                    >
                      <div className="flex gap-4 md:gap-6 items-start pr-4">
                        <span className="text-blue-500 font-mono text-2xl font-black mt-1 group-hover:animate-pulse">
                          Q.
                        </span>
                        <div>
                          <span className="text-xs font-bold text-gray-500 mb-2 block uppercase tracking-widest">
                            {faq.category}
                          </span>
                          <h4
                            className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-blue-400'}`}
                          >
                            {faq.q}
                          </h4>
                        </div>
                      </div>

                      {/* 펼치기/접기 아이콘 */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 rounded-none ${isOpen ? 'border-blue-500 bg-blue-600 text-white rotate-45' : 'border-white/20 text-gray-500 group-hover:border-blue-500 group-hover:text-blue-500'}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* 답변 (Content) - Tailwind transition 이용 */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 bg-black' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 md:p-8 pt-0 flex gap-4 md:gap-6 items-start">
                        <span className="text-gray-600 font-mono text-2xl font-black mt-1">
                          A.
                        </span>
                        <div className="text-gray-400 leading-relaxed text-base break-keep pt-2">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // 검색 결과가 없을 때
              <div className="py-20 text-center text-gray-500">
                검색 결과가 없습니다. 다른 키워드로 검색해 보세요.
              </div>
            )}
          </div>

          {/* 4. Bottom CTA (1:1 문의 유도) */}
          <div className="mt-20 p-8 border border-white/10 bg-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                원하시는 답변을 찾지 못하셨나요?
              </h4>
              <p className="text-gray-400 text-sm">
                고객센터를 통해 1:1 문의를 남겨주시면 빠르게 답변해
                드리겠습니다.
              </p>
            </div>
            <button className="px-8 py-4 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors whitespace-nowrap rounded-none">
              1:1 문의하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
