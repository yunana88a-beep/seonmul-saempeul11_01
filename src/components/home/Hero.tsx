'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SLIDES = [
  {
    id: 1,
    tag: 'Automated System',
    title: '기술은 정밀하게\n매매는 단순하게',
    subtitle:
      '전문가급 전략을 클릭 한 번으로, 초보도 가능한 나스닥/유로달러 자동매매',
    image: '/images/hero1.webp',
  },
  {
    id: 2,
    tag: 'Proven Performance',
    title: '수익률이 증명한\n자동매매의 기준',
    subtitle: '시장 흐름을 예측하는 기술력, 그 어떤 타이밍도 놓치지 않습니다',
    image: '/images/hero2.webp',
  },
  {
    id: 3,
    tag: '24/7 Cloud Trading',
    title: '24시간 멈추지 않는\n수익 파이프라인',
    subtitle:
      '당신이 잠든 사이에도 SMPLE11 시스템은 흔들림 없이 수익을 창출합니다',
    image: '/images/hero3.webp',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // ✨ 모바일에서는 h-[75vh]로 줄이고 PC는 h-[90vh] 유지
    <section className="relative h-[75vh] md:h-[90vh] bg-black overflow-hidden flex items-center justify-center">
      {/* 1. 배경 이미지 영역 */}
      {SLIDES.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Hero Background ${slide.id}`}
            fill
            priority={index === 0}
            className="object-cover opacity-90"
          />
          {/* ✨ 서브페이지들과 동일하게 상하단 어두운 그라데이션 적용하여 텍스트 가독성 확보 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </div>
      ))}

      {/* 2. 텍스트 콘텐츠 영역 */}
      {SLIDES.map((slide, index) => {
        // ✨ 타이틀에 \n 이 있을 경우 앞, 뒤를 분리하여 뒤쪽 텍스트에만 그라데이션을 줍니다.
        const [line1, line2] = slide.title.split('\n');

        return (
          <div
            key={`text-${slide.id}`}
            className={`absolute z-10 w-full max-w-5xl px-6 text-center transition-all duration-700 flex flex-col items-center justify-center ${
              index === currentSlide
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-8 pointer-events-none'
            }`}
          >
            {/* ✨ 서브페이지에서 썼던 하이테크 느낌의 태그 추가 */}
            <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 border border-white/20 bg-white/5 backdrop-blur-md rounded-full">
              <span className="text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                {slide.tag}
              </span>
            </div>

            {/* ✨ 폰트 사이즈 조절 및 break-keep, 그라데이션 적용 */}
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-[1.2] md:leading-tight break-keep">
              {line1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-300">
                {line2 || ''}
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-2xl font-light max-w-3xl mx-auto break-keep leading-relaxed">
              {slide.subtitle}
            </p>
          </div>
        );
      })}

      {/* 3. 하단 슬라이드 인디케이터 (원루트 스타일로 각진 직선 형태로 디자인) */}
      <div className="absolute bottom-8 md:bottom-12 z-20 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 rounded-none ${
              index === currentSlide
                ? 'w-12 bg-blue-500'
                : 'w-6 bg-white/20 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
