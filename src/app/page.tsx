import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import MVVC from '@/components/MVVC';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { newsData } from '@/lib/news-data';

export default function Home() {
  const latestNews = newsData.slice(0, 3);

  return (
    <main>
      <Header />
      <Hero />
      
      {/* Latest News Preview */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <span className="block text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">News</span>
              <h2 className="text-3xl font-bold text-slate-800">Latest Updates</h2>
            </div>
            <Link href="/news" className="hidden md:inline-block px-6 py-2 border border-slate-300 rounded-full text-slate-600 hover:bg-slate-50 transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`} className="group block hover:bg-slate-50 p-6 rounded-2xl transition-colors border border-transparent hover:border-slate-100">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                  {news.category}
                </span>
                <time className="block text-sm text-slate-400 mb-2">{news.date}</time>
                <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-orange-600 transition-colors">
                  {news.title}
                </h3>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/news" className="inline-block px-6 py-2 border border-slate-300 rounded-full text-slate-600 hover:bg-slate-50 transition-colors">
              View All
            </Link>
          </div>
        </div>
      </section>

      <BrandStory />
      <MVVC />
      <Footer />
    </main>
  );
}
