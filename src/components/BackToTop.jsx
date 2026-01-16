import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#hero"
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-10 h-10 rounded-full
        bg-accent/90 border border-accent/90
        grid place-items-center
        shadow-lg text-dark

        transition-all duration-300 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }

        hover:-translate-y-1 hover:scale-[1.06]
        active:scale-[0.98]

        focus:outline-none focus:ring-2 focus:ring-accent
      `}
    >
      <span className="text-xl leading-none">↑</span>
    </a>
  );
}
