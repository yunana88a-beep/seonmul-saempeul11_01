'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';

const Icons = {
  Home: () => (
    <svg
      className="w-4 h-4 mr-2 inline-block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Building: () => (
    <svg
      className="w-4 h-4 mr-2 inline-block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <rect x="4" y="2" width="16" height="20" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
    </svg>
  ),
  Monitor: () => (
    <svg
      className="w-4 h-4 mr-2 inline-block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <rect x="2" y="3" width="20" height="14" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Checklist: () => (
    <svg
      className="w-4 h-4 mr-2 inline-block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <rect x="3" y="3" width="18" height="18" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  ),
  Headset: () => (
    <svg
      className="w-4 h-4 mr-2 inline-block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg
      className="w-3 h-3 ml-1.5 opacity-50 group-hover:opacity-100 transition-opacity"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
};

const NAV_ITEMS = [
  { label: '홈', href: '/', icon: <Icons.Home /> },
  { label: '회사소개', href: '/about', icon: <Icons.Building /> },
  { label: '프로그램 소개', href: '/program', icon: <Icons.Monitor /> },
  { label: '이용절차 및 무료체험', href: '/trial', icon: <Icons.Checklist /> },
  {
    label: '고객센터',
    href: '/support/notice',
    icon: <Icons.Headset />,
    subItems: [
      { label: '공지사항', href: '/support/notice' },
      { label: '자주 묻는 질문', href: '/support/faq' },
      { label: '1:1 상담 신청', href: 'https://telegram.org/?setln=ko' },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // ✨ 기능 1: 사이드바 오픈 시 배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-2 shadow-xl' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-white flex-shrink-0"
        >
          <span className="text-blue-600 mr-1">⚡</span>SMPLE11
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <div
                key={item.href}
                className="relative group h-16 flex items-center"
              >
                <Link
                  href={item.href}
                  className={`text-sm font-bold flex items-center transition-all px-4 py-2 whitespace-nowrap ${active ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.icon} {item.label}{' '}
                  {item.subItems && <Icons.ChevronDown />}
                </Link>
                {item.subItems && (
                  <div className="absolute top-[100%] left-0 w-48 bg-zinc-950 border border-white/10 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 rounded-none overflow-hidden">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-6 py-4 text-xs font-bold text-gray-400 hover:text-white hover:bg-blue-600/10 border-b border-white/5 last:border-0 transition-colors whitespace-nowrap"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="outline"
            className="text-sm py-2 px-6 border-white/40"
          >
            무료체험 신청하기
          </Button>
        </div>

        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden absolute right-6 top-6 z-50 p-2 text-white"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        )}

        {/* 모바일 사이드바 */}
        <div
          className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            // ✨ 기능 2: h-[100dvh] 및 pb-32 적용하여 하단바 가림 문제 해결
            className={`absolute right-0 top-0 bottom-0 w-64 h-[100dvh] bg-zinc-950 border-l border-white/10 p-6 pb-32 flex flex-col shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                const isSubOpen = openSubMenu === item.label;
                return (
                  <div key={item.href} className="flex flex-col">
                    {item.subItems ? (
                      <button
                        onClick={() => toggleSubMenu(item.label)}
                        className={`text-base font-bold p-3 flex items-center justify-between transition-colors w-full whitespace-nowrap ${active || isSubOpen ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}
                      >
                        <div className="flex items-center">
                          <span className="opacity-70 mr-3">{item.icon}</span>
                          {item.label}
                        </div>
                        <div
                          className={`transition-transform duration-300 ${isSubOpen ? 'rotate-180 text-blue-500' : 'text-white/40'}`}
                        >
                          <Icons.ChevronDown />
                        </div>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-bold p-3 flex items-center transition-colors whitespace-nowrap ${active ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}
                      >
                        <span className="opacity-70 mr-3">{item.icon}</span>
                        {item.label}
                      </Link>
                    )}
                    {item.subItems && isSubOpen && (
                      <div className="bg-white/5 flex flex-col mb-4 py-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium py-3 pl-4 flex items-center text-gray-400 hover:text-white hover:bg-white/5 whitespace-nowrap"
                          >
                            <span className="text-white/20 mr-3 font-mono ml-2">
                              -
                            </span>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ✨ 버튼 하단 여백 mb-8 추가 */}
            <div className="mt-8 pt-8 border-t border-white/10 ">
              <Button className="w-full">무료체험 신청하기</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
