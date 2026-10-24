import Link from "next/link";
export function Chapter({ label }: { number: string; label: string }) {
  return <p className="eyebrow">{label}</p>;
}
export function PageTurn({
  previous,
  next,
}: {
  previous: [string, string];
  next: [string, string];
}) {
  return (
    <nav className="page-turn" aria-label="More to explore">
      <Link href={previous[0]}>← {previous[1]}</Link>
      <Link href={next[0]}>{next[1]} →</Link>
    </nav>
  );
}
export function Footer() {
  return (
    <footer id="contact">
      <div>
        <h2>Get in touch</h2>
        <a href="mailto:abdallaheldessouky09@gmail.com">
          abdallaheldessouky09@gmail.com
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Abdallah El Dessouky · Cairo, Egypt</span>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
