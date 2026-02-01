'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
          Tabidea
          <span className="text-orange-500">Corp.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/#mission" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">About</Link>
          <Link href="/company" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Company</Link>
          <Link href="/news" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">News</Link>
          
          <a 
            href="https://tabide.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-2.5 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Open App
          </a>
        </nav>
      </div>
    </header>
  );
}

