type MedalType = "gold" | "silver" | "bronze" | "trophy";

interface MedalCardProps {
  type: MedalType;
  emoji: string;
  name: string;
  title: string;
}

const badge: Record<MedalType, { bg: string; label: string }> = {
  gold:   { bg: "bg-[#D4AF37] text-black",  label: "Or" },
  silver: { bg: "bg-gray-300 text-black",    label: "Argent" },
  bronze: { bg: "bg-orange-700 text-white",  label: "Bronze" },
  trophy: { bg: "bg-[#CC0000] text-white",   label: "Palmarès" },
};

export default function MedalCard({ type, emoji, name, title }: MedalCardProps) {
  const { bg, label } = badge[type];
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:border-[#CC0000]/40 hover:shadow-md transition-all duration-300 h-full">
      <span className="text-3xl">{emoji}</span>
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold w-fit ${bg}`}>
        {label}
      </span>
      <div>
        <p className="font-bold text-[#0A0A0A] font-display text-lg leading-tight">{name}</p>
        <p className="text-gray-500 text-sm mt-1">{title}</p>
      </div>
    </div>
  );
}
