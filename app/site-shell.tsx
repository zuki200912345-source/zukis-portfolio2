import Link from "next/link";

export function Chapter({ number, label }: { number: string; label: string }) {
  return (
    <div className="chapter-label">
      <span>{number}</span>
      <span>{label}</span>
      <span className="chapter-line" />
    </div>
  );
}

export function PageTurn({
  previous,
  next,
}: {
  previous: [string, string];
  next: [string, string];
}) {
  return (
    <nav className="page-turn" aria-label="Continue exploring">
      <Link href={previous[0]}>
        <span className="mono">Previous chapter</span>
        <span>
          <i aria-hidden="true">←</i>
          {previous[1]}
        </span>
      </Link>
      <Link href={next[0]}>
        <span className="mono">Next chapter</span>
        <span>
          {next[1]}
          <i aria-hidden="true">→</i>
        </span>
      </Link>
    </nav>
  );
}

export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top mono">
        <span>Keep the conversation going</span>
        <a href="#main-content">Back to top ↑</a>
      </div>
      <a className="contact-title" href="mailto:abdallaheldessouky09@gmail.com">
        Say hello.<span aria-hidden="true">↗</span>
      </a>
      <div className="footer-bottom">
        <a href="mailto:abdallaheldessouky09@gmail.com">
          abdallaheldessouky09@gmail.com
        </a>
        <Link href="/about" className="mono">
          About Zuki ↗
        </Link>
        <span className="mono">
          © 2026 Abdallah El Dessouky · Cairo, Egypt
        </span>
      </div>
    </footer>
  );
}
