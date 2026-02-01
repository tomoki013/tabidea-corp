export default function BrandStory() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-slate-700" id="story">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="block text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">Brand Story</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-slate-800">
            サービス名「Tabidea」に込めた<br className="hidden md:block" />
            3つのピース
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            言葉にならない衝動や、ふと湧き上がる違和感。<br className="hidden md:block" />
            そのすべてが、次の旅のはじまりの合図です。<br className="hidden md:block" />
            Tabideaは、「Tabi」「Idea」「Deai」を重ね合わせ、<br className="hidden md:block" />
            あなたの深層にある想いを旅へと昇華させます。
          </p>
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
              直感を理解し、最適なプランへ導きます。
            </p>
          </div>

          <div className="bg-amber-50 rounded-3xl p-8 hover:bg-amber-100 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-amber-600 mb-1">Deai</h3>
            <span className="block text-sm font-semibold text-amber-400 mb-4">出会い</span>
            <p className="text-slate-600 leading-relaxed">
              目的地へ向かう途中でふと目に留まる景色、偶然居合わせた人との会話。
              そんな「セレンディピティ」までデザインします。
            </p>
          </div>
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

