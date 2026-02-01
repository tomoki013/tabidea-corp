import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-6 md:px-12 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <Link href="/company" className="hover:text-white transition-colors">Company</Link>
          <Link href="/news" className="hover:text-white transition-colors">News</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
        
        <div className="text-xs text-slate-500">
          &copy; 2025-{new Date().getFullYear()} Tabidea. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

