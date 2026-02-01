import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsData } from '@/lib/news-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const news = newsData.find((item) => item.slug === slug);
  
  if (!news) {
    return {
      title: 'News Not Found | Tabidea',
    };
  }

  return {
    title: `${news.title} | Tabidea News`,
    description: news.content.substring(0, 100).replace(/<[^>]*>?/gm, ''),
  };
}

export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

const NewsDetailPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const news = newsData.find((item) => item.slug === params.slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header />
      
      <main className="grow pt-32 pb-24 px-6 md:px-12 bg-white">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="mb-6 flex justify-center gap-4 items-center">
               <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full 
                  ${news.category === 'Press' ? 'bg-blue-100 text-blue-600' : 
                    news.category === 'Event' ? 'bg-purple-100 text-purple-600' : 
                    'bg-slate-100 text-slate-500'}`}
                >
                  {news.category}
                </span>
              <time className="text-slate-500 font-medium">{news.date}</time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              {news.title}
            </h1>
            {news.image && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="w-16 h-1 bg-linear-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          </header>

          {/* Content */}
          <div 
            className="prose prose-slate prose-lg max-w-none 
              prose-headings:font-bold prose-headings:text-slate-800
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-ul:list-disc prose-ul:pl-6
              prose-li:text-slate-600"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
            <Link 
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-300 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              View All News
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default NewsDetailPage
