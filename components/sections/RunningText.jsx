"use client";

const textLine1 = "Hello I'm Arya";
const textLine2 = "UI/UX Designer & Web Developer";

const repeat = (text, times = 10) =>
  Array(times).fill(`${text}   `).join("");

export default function RunningText() {
  return (
    <div
      style={{
        overflow: "hidden",
        padding: "2rem 0",
        background: "transparent",
        opacity: 0.05,
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          marginBottom: "0",
          userSelect: "none",
        }}
      >
        <span
          className="marquee-left"
          style={{
            display: "inline-block",
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1,
            color: "var(--text-primary)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {repeat(textLine1, 8)}
        </span>
        <span
          className="marquee-left"
          style={{
            display: "inline-block",
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1,
            color: "var(--text-primary)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
          aria-hidden
        >
          {repeat(textLine1, 8)}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        <span
          className="marquee-right"
          style={{
            display: "inline-block",
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1,
            color: "var(--text-primary)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {repeat(textLine2, 8)}
        </span>
        <span
          className="marquee-right"
          style={{
            display: "inline-block",
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1,
            color: "var(--text-primary)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
          aria-hidden
        >
          {repeat(textLine2, 8)}
        </span>
      </div>
    </div>
  );
}
