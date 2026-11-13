export default function SectionHeading({ eyebrow, title, intro, align = "start", className = "" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow inline-flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="rule-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-heading text-[clamp(1.85rem,3.6vw,3.1rem)] font-light leading-[1.12] text-foreground">
        {title}
      </h2>
      {intro && <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}