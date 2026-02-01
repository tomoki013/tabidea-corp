export default function PageHeader({ 
  title, 
  subtitle, 
  imagePath = "/images/hero.png" 
}: { 
  title: string; 
  subtitle: string; 
  imagePath?: string;
}) {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
        <p className="text-lg md:text-xl font-medium text-orange-200 tracking-wide uppercase">{subtitle}</p>
      </div>
    </div>
  );
}
