import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function AIPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <PageHeader
        title="AI Policy"
        subtitle="AI利用に関するポリシー"
        imagePath="/images/nature.png"
      />

      <main className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">AI利用に関するポリシー</h2>

          <p className="text-slate-600 mb-6">
            Tabideaでは、お客様に最適な旅行プランを提案するために人工知能（AI）技術を活用しています。
            本ポリシーでは、当社サービスにおけるAIの利用目的、限界、およびお客様にご留意いただきたい事項について定めています。
          </p>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">1. AIの利用目的</h3>
            <p className="text-slate-600">
              当社のAIは、お客様の潜在的な興味や関心を分析し、既存の検索エンジンでは見つけにくい「意外性のある目的地」や「パーソナライズされた体験」を提案することを目的としています。
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">2. 情報の正確性とハルシネーション</h3>
            <p className="text-slate-600 mb-4">
              AIは膨大なデータを基に回答を生成しますが、常に最新かつ正確な情報を保証するものではありません。
              特に以下の点にご注意ください。
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>施設の営業時間、料金、交通機関のダイヤなどの情報は、変更されている可能性があります。</li>
              <li>AIが事実とは異なる情報（ハルシネーション）を生成する場合があります。</li>
              <li>提案されたプランを実行する際は、必ず公式サイト等で最新情報をご確認ください。</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">3. 責任の所在</h3>
            <p className="text-slate-600">
              TabideaのAIによる提案はあくまで「アイデア」の一つです。
              最終的な旅行の実施判断、予約手配、および現地での行動については、お客様ご自身の責任において行っていただきますようお願いいたします。
              AIの提案に起因するトラブルについて、当社は一切の責任を負いかねます。
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">4. お問い合わせ</h3>
            <p className="text-slate-600">
              AIの挙動に関するご質問やフィードバックは、お問い合わせフォームよりお寄せください。
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
