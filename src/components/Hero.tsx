export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up pt-20">
        <span className="block text-lg font-bold tracking-[0.2em] text-slate-800 uppercase mb-6 drop-shadow-sm">Tabidea Corporate</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-slate-900 drop-shadow-sm">
          心の奥にある『行きたい』を、<br />
          一生モノの体験へ。
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-slate-800 font-medium mb-12 max-w-2xl mx-auto drop-shadow-sm">
          Tabideaは、あなたの「なんとなくどこかへ行きたい」という想いの奥にある、
          本当の願いをそっとすくい上げ、かたちにしていくトラベルパートナーです。
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-slate-600">
        <span className="text-sm font-medium tracking-wide">Scroll to Explore</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

