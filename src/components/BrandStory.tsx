export default function BrandStory() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-slate-700" id="story">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-slate-800">
              私たちのミッション
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
             <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-orange-500 italic text-slate-600 mb-8">
               <p>
                 「言葉にならない衝動や、ふと湧き上がる違和感。そのすべてが、次の旅のはじまりの合図です。」
               </p>
             </div>
             <p>
               「どこか遠くへ行きたい」「日常を変えたい」。
             </p>
             <p>
               そんな曖昧な願いの裏側には、まだ自分でも気づいていない「本当の望み」が眠っています。
             </p>
             <p>
               Tabideaは、その深層にある想いを丁寧に汲み取り、旅という体験を通してそっと叶えていきます。
             </p>
          </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
                サービス名「Tabidea」に込めた3つのピース
            </h2>
            <p className="text-slate-500 font-bold">Tabidea = Tabi × Idea × Deai</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-sky-50 rounded-3xl p-8 hover:bg-sky-100 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-sky-600 mb-1">Tabi</h3>
            <span className="block text-sm font-semibold text-sky-400 mb-4">旅</span>
            <p className="text-slate-600 leading-relaxed">
              日常の境界線を越え、新しい景色と自分に出会うための冒険。
              すべての物語は、ここから始まります。
            </p>
          </div>

          <div className="bg-rose-50 rounded-3xl p-8 hover:bg-rose-100 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-rose-600 mb-1">Idea</h3>
            <span className="block text-sm font-semibold text-rose-400 mb-4">アイデア</span>
            <p className="text-slate-600 leading-relaxed">
              あなた自身さえまだ言語化できていない「旅の種」を、対話を通して見つけ出します。
              AIが一方的に答えを出すのではなく、あなたの深層心理にある「本当はこんな景色が見たかった」「こんな感情を味わいたかった」という直感を理解し、最適なプランへ昇華させます。
            </p>
          </div>

          <div className="bg-amber-50 rounded-3xl p-8 hover:bg-amber-100 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-amber-600 mb-1">Deai</h3>
            <span className="block text-sm font-semibold text-amber-400 mb-4">出会い</span>
            <p className="text-slate-600 leading-relaxed">
              緻密にデザインされたプランの上に生まれる、鮮やかな「偶然」。
              目的地へ向かう途中でふと目に留まる景色、偶然居合わせた人との会話。それらは一見バラバラな出来事に見えて、実はあなたの心の深層と共鳴して引き寄せられた、かけがえのないセレンディピティ（幸せな偶然）です。
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20 p-6 bg-orange-50 rounded-2xl">
          <p className="text-orange-600 font-bold">
            旅そのものだけではなく、その途中に散りばめられた「出会い」まで含めてデザインすることが、Tabideaの価値です。
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6 font-mono tracking-tighter">tabide.ai</h3>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              「tabide.ai（タビデ・アイ）」というドメインには、<br />
              日本語の「旅先で（tabide）」と「愛（ai）」という<br />
              2つの意味を重ねています。
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-sm md:text-base font-medium text-orange-200">
              <span className="flex items-center justify-center gap-2">
                 <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                 旅先で、本当の自分を支えてくれる存在がいること。
              </span>
              <span className="flex items-center justify-center gap-2">
                 <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                 旅先で、心から愛せる場所と出会えること。
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

