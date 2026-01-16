export default function Button({ children, href, className = "", ...props }) {
  const base =
    "uppercase font-bold tracking-wider underline decoration-accent underline-offset-[1rem] decoration-2 hover:text-accent duration-300";

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
