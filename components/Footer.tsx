import { ArrowUp } from "lucide-react";
import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line-glass">
      <div className="container-content flex flex-col items-center justify-between gap-4 py-10 text-sm text-ink-faint md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono text-xs">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex items-center gap-1.5 text-xs text-ink-dim transition-colors hover:text-ink"
        >
          Back to top
          <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
