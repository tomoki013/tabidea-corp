import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { newsData } from '@/lib/news-data';
import Link from 'next/link';

export default function News() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <PageHeader 
        title="News" 
        subtitle="ニュース" 
        imagePath="/images/meeting.png"
      />

      <main className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col gap-6">
            {newsData.map((news) => (
              <Link 
                key={news.id} 
                href={`/news/${news.slug}`} 
                className="group flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 
                    ${news.category === 'Press' ? 'bg-blue-100 text-blue-600' : 
                      news.category === 'Event' ? 'bg-purple-100 text-purple-600' : 
                      'bg-slate-100 text-slate-500'}`}
                  >
                    {news.category}
                  </span>
                  <time className="block text-sm text-slate-400">{news.date}</time>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-amber-600 transition-colors mb-2">
                    {news.title}
                  </h3>
                  <span className="text-sm font-medium text-slate-400 group-hover:text-amber-500 flex items-center gap-1">
                    Read more 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m-4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
