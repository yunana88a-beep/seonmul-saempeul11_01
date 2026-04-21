import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-tighter">SMPLE11</div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} SMPLE11. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
