import Image from 'next/image';
import Link from 'next/link';

const EDU_ITEMS = [
  {
    id: 1,
    title: '입문자를 위한\n트레이딩 교육',
    desc: '온라인 거래를 깊이 이해하고 트레이딩을 시작하는데 유용한 전략을 누려보세요.',
    link: '#',
  },
  {
    id: 2,
    title: 'SMPLE11의 완벽한\n트레이딩 전자서적 eBook',
    desc: '온라인 거래를 깊이 이해하고 트레이딩을 시작하는데 유용한 전략을 누려보세요.',
    link: '#',
  },
  {
    id: 3,
    title: '동영상을 통한\n트레이딩 튜토리얼',
    desc: '초급부터 고급까지 모든 설명 영상을 여기에서 확인하실 수 있습니다.',
    link: '#',
  },
];

export default function Education() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden border-t border-white/5">
      {/* 1920x1080 배경 이미지 영역 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/education-bg.webp"
          alt="Education Background"
          fill
          className="object-cover opacity-80"
        />
        {/* 텍스트 가독성을 위한 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center tracking-tight">
          글로벌 트레이딩 지식 강화
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {EDU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative p-10 border border-white/10 bg-zinc-950/60 backdrop-blur-sm hover:border-blue-500 transition-colors rounded-none group flex flex-col h-full"
            >
              {/* 이미지에 있던 배경 워터마크를 날카로운 기하학 도형으로 재해석 */}
              <div className="absolute top-8 left-8 z-0 text-blue-500/5 group-hover:text-blue-500/10 transition-colors">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 100 100"
                  className="fill-current"
                >
                  <polygon points="50,10 90,90 10,90" />
                </svg>
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-bold text-white mb-6 whitespace-pre-line leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed break-keep mb-10">
                  {item.desc}
                </p>
              </div>

              {/* 하단 링크 버튼 */}
              <div className="relative z-10 mt-auto">
                <Link
                  href={item.link}
                  className="text-red-500 font-bold text-sm hover:text-red-400 transition-colors flex items-center group-hover:gap-2 gap-1"
                >
                  지금 등록하기{' '}
                  <span className="text-xl leading-none mb-0.5">&rsaquo;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
