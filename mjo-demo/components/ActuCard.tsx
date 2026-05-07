interface ActuCardProps {
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

export default function ActuCard({ date, title, excerpt, category }: ActuCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
      <div className="h-44 bg-gradient-to-br from-[#0A0A0A] via-gray-800 to-gray-700 flex items-center justify-center">
        <span className="text-white/10 text-7xl font-bold font-display select-none">MJO</span>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[#CC0000] uppercase tracking-wide">{category}</span>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        <h3 className="font-bold text-[#0A0A0A] font-display text-base leading-snug">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{excerpt}</p>
        <button className="mt-auto text-sm font-semibold text-[#CC0000] hover:text-red-800 transition-colors text-left">
          Lire plus →
        </button>
      </div>
    </div>
  );
}
