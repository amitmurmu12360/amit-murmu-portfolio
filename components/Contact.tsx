"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { profile } from "@/data/site";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: profile.location, href: undefined },
  { icon: Github, label: "GitHub", href: profile.social.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.social.linkedin },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container-content py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about your data"
        description="Open to data analyst roles and analytics consulting engagements."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-panel flex flex-col gap-1 p-3"
        >
          {contactLinks.map(({ icon: Icon, label, href }) => {
            const content = (
              <div className="flex items-center gap-3.5 rounded-xl px-4 py-4 text-ink-dim transition-colors group-hover:text-ink">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line-glass bg-accent/10 text-accent">
                  <Icon size={16} />
                </div>
                <span className="text-sm">{label}</span>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-xl transition-colors hover:bg-white/[0.03]"
              >
                {content}
              </a>
            ) : (
              <div key={label} className="group">
                {content}
              </div>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="glass-panel space-y-5 p-7 md:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-medium text-ink-dim">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-line-glass bg-white/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs font-medium text-ink-dim">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-line-glass bg-white/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs font-medium text-ink-dim">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-xl border border-line-glass bg-white/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/50"
            />
          </div>

          <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center disabled:opacity-60">
            <Send size={15} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" ? <p className="text-sm text-signal-up">Message sent — I&apos;ll reply soon.</p> : null}
          {status === "error" ? (
            <p className="text-sm text-signal-down">Something went wrong. Email me directly instead.</p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
