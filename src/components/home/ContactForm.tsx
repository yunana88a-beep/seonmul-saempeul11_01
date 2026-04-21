'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function ContactForm() {
  const [source, setSource] = useState<string>('');
  const [otherSource, setOtherSource] = useState<string>('');

  const sources = [
    '유튜브',
    '블로그',
    'SNS(페이스북, 인스타)',
    '지인 소개',
    '기타',
  ];

  return (
    <section className="relative py-24 px-4 md:px-6 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Contact Background"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/10 to-black" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* 폼 컨테이너: 반투명 블랙 + 블러 효과로 뒤쪽 배경이 은은하게 비치도록 설정 */}
        <div className="border border-white/10 bg-black/60 backdrop-blur-md p-8 md:p-12 shadow-2xl relative">
          {/* 상단 파란색 포인트 라인 */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent" />

          <h2 className="text-3xl md:text-4xl font-black text-white mb-10 text-center tracking-tight">
            SMPLE11 자동매매 시작하기!
          </h2>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* 이름 */}
            <div>
              <div className="border-b border-white/20 pb-2 mb-3">
                <label className="text-gray-300 font-bold flex items-center gap-1 text-sm">
                  이름 <span className="text-blue-500">*</span>
                </label>
              </div>
              {/* 인풋 슬림화: p-4 -> px-4 py-3 으로 변경, 텍스트 크기도 조정 */}
              <input
                type="text"
                className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:border-blue-500 focus:bg-black transition-colors rounded-none"
              />
            </div>

            {/* 연락처 */}
            <div>
              <div className="border-b border-white/20 pb-2 mb-3">
                <label className="text-gray-300 font-bold flex items-center gap-1 text-sm">
                  연락처 <span className="text-blue-500">*</span>
                </label>
              </div>
              <div className="flex items-center gap-2 w-full">
                {/* 연락처 칸도 슬림하게 조절 */}
                <input
                  type="text"
                  maxLength={3}
                  className="flex-1 min-w-0 bg-zinc-900/50 border border-white/10 py-3 px-2 text-center text-white text-sm md:text-base focus:outline-none focus:border-blue-500 focus:bg-black rounded-none transition-colors"
                />
                <span className="text-white/30 flex-shrink-0">-</span>
                <input
                  type="text"
                  maxLength={4}
                  className="flex-1 min-w-0 bg-zinc-900/50 border border-white/10 py-3 px-2 text-center text-white text-sm md:text-base focus:outline-none focus:border-blue-500 focus:bg-black rounded-none transition-colors"
                />
                <span className="text-white/30 flex-shrink-0">-</span>
                <input
                  type="text"
                  maxLength={4}
                  className="flex-1 min-w-0 bg-zinc-900/50 border border-white/10 py-3 px-2 text-center text-white text-sm md:text-base focus:outline-none focus:border-blue-500 focus:bg-black rounded-none transition-colors"
                />
              </div>
            </div>

            {/* 연락 시간 */}
            <div>
              <div className="border-b border-white/20 pb-2 mb-3">
                <label className="text-gray-300 font-bold flex items-center gap-1 text-sm">
                  원하시는 연락 시간 (예시: 15시){' '}
                  <span className="text-blue-500">*</span>
                </label>
              </div>
              <input
                type="text"
                className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:border-blue-500 focus:bg-black transition-colors rounded-none"
              />
            </div>

            {/* 유입 경로 */}
            <div>
              <div className="border-b border-white/20 pb-2 mb-4">
                <label className="text-gray-300 font-bold flex items-center gap-1 text-sm">
                  SMPLE11는 어떻게 알게 되셨을까요?{' '}
                  <span className="text-blue-500">*</span>
                </label>
              </div>
              <div className="space-y-3 mt-4">
                {sources.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSource(item)}
                      className={`w-5 h-5 flex-shrink-0 border rounded-none flex items-center justify-center transition-colors ${
                        source === item
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-white/30 bg-black'
                      }`}
                    >
                      {source === item && <div className="w-2 h-2 bg-white" />}
                    </button>
                    <span
                      className="text-gray-300 text-sm md:text-base break-keep cursor-pointer"
                      onClick={() => setSource(item)}
                    >
                      {item}
                    </span>

                    {item === '기타' && (
                      <input
                        type="text"
                        placeholder="직접입력"
                        disabled={source !== '기타'}
                        value={otherSource}
                        onChange={(e) => setOtherSource(e.target.value)}
                        className={`ml-2 w-full max-w-[150px] md:max-w-[200px] bg-zinc-900/50 border py-1.5 px-3 text-white text-sm focus:outline-none rounded-none transition-colors ${
                          source === '기타'
                            ? 'border-white/40 focus:border-blue-500 opacity-100 bg-black'
                            : 'border-transparent opacity-30 cursor-not-allowed'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className="pt-8 mt-4 border-t border-white/10">
              <Button
                type="button"
                className="w-full text-base font-bold py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-none transition-colors"
              >
                무료 상담 신청 완료하기
              </Button>
              <p className="text-xs text-gray-500 text-center mt-4 break-keep">
                신청 시 개인정보 수집 및 이용에 동의하는 것으로 간주합니다.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
