import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <PageHeader 
        title="Privacy Policy" 
        subtitle="プライバシーポリシー" 
        imagePath="/images/nature.png"
      />

      <main className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">個人情報保護方針</h2>
          
          <p className="text-slate-600 mb-6">
            株式会社Tabidea（以下「当社」といいます。）は、お客様の個人情報保護の重要性を強く認識し、
            以下の通りプライバシーポリシーを定めます。
          </p>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">1. 個人情報の定義</h3>
            <p className="text-slate-600">
              本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報を意味するものとします。
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">2. 個人情報の利用目的</h3>
            <p className="text-slate-600 mb-4">当社は、お客様の個人情報を、以下の目的で利用いたします。</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>本サービスの提供および運営のため</li>
              <li>ユーザーからのお問い合わせに回答するため</li>
              <li>新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">3. 個人情報の第三者提供</h3>
            <p className="text-slate-600">
              当社は、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、
              あらかじめお客様の同意を得ないで、個人情報を第三者に提供しません。
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">4. お問い合わせ窓口</h3>
            <p className="text-slate-600">
              ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、
              以下のメールアドレスまでお願いいたします。<br />
              <br />
              contact@tabide.ai
            </p>
          </section>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
