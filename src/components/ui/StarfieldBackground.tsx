'use client';

import React from 'react';

export default function StarfieldBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* 🌌 은하수/별빛 반짝임 효과 CSS */}
      <style>{`
        .star-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        /* 크기와 위치가 다른 3개의 별 레이어를 만들어 입체감 부여 */
        .stars-1 {
          background-image: 
            radial-gradient(1px 1px at 10% 10%, #ffffff, transparent), 
            radial-gradient(1.5px 1.5px at 20% 80%, #ffffff, transparent), 
            radial-gradient(1px 1px at 80% 30%, #ffffff, transparent), 
            radial-gradient(2px 2px at 90% 90%, #ffffff, transparent), 
            radial-gradient(1px 1px at 40% 40%, #ffffff, transparent), 
            radial-gradient(1px 1px at 60% 70%, #ffffff, transparent);
          background-size: 150px 150px;
          animation: twinkle 3s ease-in-out infinite alternate;
        }
        
        .stars-2 {
          background-image: 
            radial-gradient(1px 1px at 30% 20%, #ffffff, transparent), 
            radial-gradient(2px 2px at 70% 80%, #ffffff, transparent), 
            radial-gradient(1.5px 1.5px at 10% 60%, #ffffff, transparent), 
            radial-gradient(1px 1px at 50% 90%, #ffffff, transparent), 
            radial-gradient(1px 1px at 80% 10%, #ffffff, transparent);
          background-size: 250px 250px;
          animation: twinkle 4s ease-in-out infinite alternate-reverse;
          opacity: 0.5;
        }
        
        .stars-3 {
          background-image: 
            radial-gradient(2px 2px at 50% 50%, #ffffff, transparent), 
            radial-gradient(1px 1px at 20% 30%, #ffffff, transparent), 
            radial-gradient(1px 1px at 80% 60%, #ffffff, transparent), 
            radial-gradient(1.5px 1.5px at 40% 10%, #ffffff, transparent);
          background-size: 350px 350px;
          animation: twinkle 5s ease-in-out infinite alternate;
          opacity: 0.3;
        }

        /* ✨ 문제의 transform: scale() 제거! 오직 투명도로만 반짝임 유지 */
        @keyframes twinkle {
          0% { opacity: 0.1; }
          100% { opacity: 0.8; }
        }
      `}</style>

      {/* 중앙에 아주 은은한 파란색 빛 번짐(블랙홀 같은 느낌) 추가 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_60%)]" />

      {/* 반짝이는 별 레이어 3개 */}
      <div className="star-layer stars-1" />
      <div className="star-layer stars-2" />
      <div className="star-layer stars-3" />
    </div>
  );
}
