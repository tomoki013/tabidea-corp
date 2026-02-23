import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export default function Company() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <PageHeader 
        title="Company" 
        subtitle="会社概要" 
        imagePath="/images/office.png"
      />

      <main className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Company Profile */}
          <section className="mb-24">
             <div className="text-center mb-12">
               <span className="block text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Profile</span>
               <h2 className="text-3xl font-bold text-slate-800">会社情報</h2>
             </div>
             
             <div className="overflow-hidden rounded-2xl border border-slate-200">
               <table className="w-full text-left text-slate-600">
                 <tbody className="divide-y divide-slate-100">
                   <tr className="bg-slate-50/50">
                     <th className="py-5 px-6 font-bold">事業者</th>
                     <td className="py-5 px-6">Tabidea</td>
                   </tr>
                   <tr className="bg-slate-50/50">
                     <th className="py-5 px-6 font-bold">運営責任者</th>
                     <td className="py-5 px-6">Tabidea</td>
                   </tr>
                   <tr className="bg-slate-50/50">
                     <th className="py-5 px-6 font-bold">お問い合わせ先</th>
                     <td className="py-5 px-6">gaomuyouxi81@gmail.com</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </section>

          {/* CEO Message */}
          <section className="mb-24">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                 <div className="aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden relative">
                   {/* Placeholder for CEO Image */}
                   <Image src="/images/introduce.jpg" alt="CEO" fill className="object-cover" />
                   {/* <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-400 font-bold">
                     CEO Image
                   </div> */}
                 </div>
              </div>
              <div className="md:w-2/3">
                <span className="block text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Message</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">「旅」の定義を再発明する</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  インターネットの普及により、私たちは世界中のあらゆる情報にアクセスできるようになりました。
                  しかし、情報が溢れすぎた現代において、「自分にとって本当に最高の旅」を見つけることは、逆に難しくなっています。
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Tabideaは、AIの力と人間の感性を融合させることで、この課題に挑みます。
                  単なる効率化ではなく、あなたの心の奥にある「願い」を叶えるためのテクノロジー。
                  私たちは、すべての人が自分だけの「正解の旅」に出会える世界を目指しています。
                </p>
                <p className="font-bold text-slate-800 text-right">
                  Operation Manager<br />
                  <span className="text-xl">Tabidea</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
