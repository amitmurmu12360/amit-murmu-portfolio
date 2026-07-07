"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/data/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line-glass bg-surface/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-content flex h-[4.5rem] items-center justify-between py-3">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink">
          {profile.name.toUpperCase()}
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden text-ink-dim transition-colors hover:text-ink sm:block"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden text-ink-dim transition-colors hover:text-ink sm:block"
          >
            <Linkedin size={18} />
          </a>
          <a href={profile.resumeUrl} className="btn-secondary hidden !px-4 !py-2 text-xs sm:inline-flex" download>
            <Download size={13} />
            Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="text-ink-dim transition-colors hover:text-ink md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line-glass bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-ink-dim transition-colors hover:bg-white/5 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-5 px-3 pt-2">
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-ink-dim hover:text-ink">
                  <Github size={19} />
                </a>
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-dim hover:text-ink">
                  <Linkedin size={19} />
                </a>
                <a href={profile.resumeUrl} download className="btn-primary ml-auto !px-4 !py-2.5 text-xs">
                  <Download size={13} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
