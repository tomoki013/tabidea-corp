import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <PageHeader 
        title="Terms of Service" 
        subtitle="利用規約" 
        imagePath="/images/architecture.png"
      />

      <main className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">利用規約</h2>
          
          <p className="text-slate-600 mb-6">
            この利用規約（以下「本規約」といいます。）は、株式会社Tabidea（以下「当社」といいます。）が
            提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。
            登録ユーザーの皆さま（以下「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
          </p>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">第1条（適用）</h3>
            <p className="text-slate-600">
              本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">第2条（禁止事項）</h3>
            <p className="text-slate-600 mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>他のユーザーに成りすます行為</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">第3条（免責事項）</h3>
            <p className="text-slate-600">
              当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。
              当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">第4条（利用規約の変更）</h3>
            <p className="text-slate-600">
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
            </p>
          </section>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
