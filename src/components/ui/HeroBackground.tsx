import React from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
  src: string; // 이미지 경로 (필수)
  alt?: string; // 대체 텍스트
  opacity?: string; // 이미지 투명도 (기본값: opacity-60)
  gradient?: string; // 그라데이션 클래스 (기본값: 상단 어둡게)
  priority?: boolean; // LCP 최적화를 위한 우선 로딩 여부
}

export default function HeroBackground({
  src,
  alt = 'Hero Background',
  opacity = 'opacity-60',
  // 위쪽을 어둡게(80%), 중간은 살짝 비치게(50%), 아래는 까맣게(100%) 하는 기본 그라데이션
  gradient = 'bg-gradient-to-b from-black/80 via-black/50 to-black',
  priority = true,
}: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${opacity}`}
        priority={priority}
      />
      <div className={`absolute inset-0 ${gradient}`} />
    </div>
  );
}
