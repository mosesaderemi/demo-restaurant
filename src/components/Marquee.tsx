const words = [
  "Bold flavours",
  "Made to order",
  "Warm hospitality",
  "Private dining",
  "Fresh ingredients",
  "Good moments",
];

export default function Marquee() {
  const strip = [...words, ...words];
  return (
    <div
      className="relative overflow-hidden border-y border-forest/15 bg-beige py-4"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {strip.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-display text-lg text-muted"
          >
            {word}
            <span className="h-1.5 w-1.5 rotate-45 bg-forest/40" />
          </span>
        ))}
      </div>
    </div>
  );
}