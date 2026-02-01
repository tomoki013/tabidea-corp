export default function MVVC() {
  return (
    <section className="bg-slate-50 text-slate-700" id="mvvc">
      
      {/* Mission */}
      <div className="py-24 px-6 md:px-12 bg-white" id="mission">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start md:items-center">
          <div className="md:w-1/2">
            <span className="inline-block py-1 type-sm font-bold text-orange-500 uppercase tracking-widest mb-4">Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-800 mb-6">
              旅の「ノイズ」を消し、<br />
              想像する「彩り」を最大化する。
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-slate-600">
              治安確認や手配の手間など「面倒な作業」は技術で解決し、
              計画時のワクワクや旅先での感動という「本質的な楽しさ」を広げます。
            </p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="py-24 px-6 md:px-12 bg-orange-50/50" id="vision">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-start md:items-center">
          <div className="md:w-1/2">
            <span className="inline-block py-1 type-sm font-bold text-sky-500 uppercase tracking-widest mb-4">Vision</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-800 mb-6">
              すべての旅人が、<br />
              自分だけの「正解の旅」に出会える世界。
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-slate-600">
              画一的なプランではなく、ユーザー自身が選び取り、編集し、
              心から満足できる旅を実現します。
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 px-6 md:px-12 bg-white" id="values">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Values</span>
            <h2 className="text-3xl font-bold text-slate-800">行動指針</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group">
              <div className="text-6xl font-black text-slate-100 mb-6 group-hover:text-orange-100 transition-colors">01</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-500 transition-colors">User in the Driver&apos;s Seat</h3>
              <p className="text-slate-600 leading-relaxed">
                技術は「提案」するが、「決定」はユーザー。
                計画という創造的な時間の楽しさを奪わず、支える存在であること。
              </p>
            </div>
            
            <div className="p-8 border border-slate-100 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group">
              <div className="text-6xl font-black text-slate-100 mb-6 group-hover:text-sky-100 transition-colors">02</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-sky-500 transition-colors">Safety as a Baseline</h3>
              <p className="text-slate-600 leading-relaxed">
                正確な情報（外務省データ等）をシームレスに連携させる。
                安全が担保されて初めて、人は心から旅を楽しめる。
              </p>
            </div>
            
            <div className="p-8 border border-slate-100 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group">
              <div className="text-6xl font-black text-slate-100 mb-6 group-hover:text-teal-100 transition-colors">03</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-teal-500 transition-colors">Share the Story</h3>
              <p className="text-slate-600 leading-relaxed">
                旅は行って終わりではない。「しおり」や「ブログ」のように形に残し、
                体験が次の誰かへとつながる仕組みを作る。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Culture */}
      <div className="py-24 px-6 md:px-12 bg-slate-900 text-white" id="culture">
        <div className="max-w-4xl mx-auto text-center">
          <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Culture</span>
          <div className="border-2 border-dashed border-slate-700 rounded-3xl p-12 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-sky-500"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8">「旅する開発者」であれ</h2>
            <p className="text-xl md:text-2xl font-light text-slate-300 mb-8 font-serif italic">
              Traveler & Builder
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              自分たちが最強のヘビーユーザーであり続ける。<br />
              UXへの執着を持ち、遊び心と信頼性を両立させる。
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

