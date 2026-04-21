'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NoticeDetailPage() {
  const params = useParams();
  const noticeId = parseInt(params.id as string, 10); // URL 파라미터를 숫자로 변환
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 임시 데이터 기준 최소/최대 글 번호 설정 (실제 서버 연결 시 총 데이터 개수로 치환)
  const MIN_NOTICE_ID = 1;
  const MAX_NOTICE_ID = 5;

  const prevId = noticeId > MIN_NOTICE_ID ? noticeId - 1 : null;
  const nextId = noticeId < MAX_NOTICE_ID ? noticeId + 1 : null;

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* 1. Header (제목 및 정보) */}
          <div className="border-b border-white/10 pb-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 border border-blue-500 text-blue-500 text-xs font-bold uppercase tracking-widest">
                업데이트
              </span>
              <span className="text-gray-500 font-mono text-sm">
                No. {noticeId?.toString().padStart(3, '0')}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight text-gray-100">
              SMPLE11 알고리즘 v4.2 패치 노트 안내 (수익 타점 최적화)
            </h1>
            <div className="flex items-center gap-6 text-sm font-mono text-gray-500">
              <div>Date. 2026.04.20</div>
              <div>Author. SMPLE11 TEAM</div>
            </div>
          </div>

          {/* 2. Content (본문 영역) */}
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-base md:text-lg break-keep space-y-8">
            <p>
              안녕하세요. 가장 빠르고 정확한 단 하나의 경로, SMPLE11 팀입니다.
            </p>
            <p>
              항상 SMPLE11 자동매매 프로그램을 이용해 주시는 고객님들께 진심으로
              감사드립니다. 시장의 변동성에 더욱 기민하게 대응하고, 안정적인
              수익 모델을 강화하기 위해
              <strong>알고리즘 v4.2 패치</strong>가 진행되었습니다.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              주요 업데이트 내용
            </h3>
            <div className="bg-zinc-950 border border-white/10 p-8 space-y-6">
              <div>
                <h4 className="text-blue-500 font-bold mb-2">
                  1. 진입 타점 필터링 고도화
                </h4>
                <p className="text-gray-400 text-sm">
                  기존 볼린저밴드와 RSI의 다중 프레임 분석에 MACD 다이버전스
                  로직을 추가 결합하여, 페이크 돌파(False Breakout)에 의한
                  손실을 방지하고 승률을 약 8.5% 향상시켰습니다.
                </p>
              </div>
              <div className="w-full h-[1px] bg-white/5" />
              <div>
                <h4 className="text-blue-500 font-bold mb-2">
                  2. 스마트 트레일링 스탑(Trailing Stop) 개선
                </h4>
                <p className="text-gray-400 text-sm">
                  고정된 틱 수로 작동하던 기존 트레일링 스탑을, 실시간
                  변동성(ATR 지표)에 비례하여 유동적으로 간격을 조절하는 '스마트
                  트레일링' 방식으로 변경했습니다. 이를 통해 강한 추세장에서는
                  수익을 끝까지 끌고 갈 수 있습니다.
                </p>
              </div>
            </div>

            <p className="mt-8">
              이번 업데이트는 클라우드 서버에 자동 적용되며, 고객님들께서 별도로
              프로그램을 재설치하거나 설정하실 필요가 없습니다. <br />
              앞으로도 끊임없는 연구와 데이터 분석을 통해 최고의 트레이딩 환경을
              제공하겠습니다.
            </p>
            <p>감사합니다.</p>
          </div>

          {/* 3. Navigation (목록으로 돌아가기 & 이전/다음 글) */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Link
                href="/support/notice"
                className="px-8 py-4 border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-colors rounded-none w-full md:w-auto text-center"
              >
                목록으로 돌아가기
              </Link>

              <div className="flex w-full md:w-auto border border-white/10 rounded-none">
                {/* 이전글 버튼 로직 */}
                {prevId ? (
                  <Link
                    href={`/support/notice/${prevId}`}
                    className="flex-1 md:w-32 py-4 text-center text-sm font-bold text-gray-400 hover:text-white hover:bg-zinc-900 border-r border-white/10 transition-colors block"
                  >
                    이전글
                  </Link>
                ) : (
                  <div className="flex-1 md:w-32 py-4 text-center text-sm font-bold text-gray-600 bg-black/50 cursor-not-allowed border-r border-white/10 select-none">
                    이전글
                  </div>
                )}

                {/* 다음글 버튼 로직 */}
                {nextId ? (
                  <Link
                    href={`/support/notice/${nextId}`}
                    className="flex-1 md:w-32 py-4 text-center text-sm font-bold text-gray-400 hover:text-white hover:bg-zinc-900 transition-colors block"
                  >
                    다음글
                  </Link>
                ) : (
                  <div className="flex-1 md:w-32 py-4 text-center text-sm font-bold text-gray-600 bg-black/50 cursor-not-allowed select-none">
                    다음글
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
