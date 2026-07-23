"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      // eslint-disable-next-line no-console
      console.error(
        "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local"
      );
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">Get in touch</p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-muted">
            Have an opportunity, a project, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass flex flex-col gap-8 rounded-3xl p-8"
          >
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-white/10 sm:mx-0">
              <Image src={profile.photo} alt={profile.name} fill className="object-cover" sizes="112px" />
            </div>

            <div className="space-y-5">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-ink-muted hover:text-secondary">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                  <Mail size={18} />
                </span>
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-4 text-ink-muted hover:text-secondary">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                  <Phone size={18} />
                </span>
                {profile.phone}
              </a>
              <div className="flex items-center gap-4 text-ink-muted">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                  <MapPin size={18} />
                </span>
                {profile.location}
              </div>
            </div>

            <div className="flex gap-4 border-t border-white/10 pt-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-ink-muted transition-colors hover:text-secondary"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-ink-muted transition-colors hover:text-secondary"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass space-y-5 rounded-3xl p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Name
                </label>
                <input
                  required
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary/60"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Email
                </label>
                <input
                  required
                  name="user_email"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary/60"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted">
                Subject
              </label>
              <input
                required
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary/60"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity or idea..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary/60"
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </Button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-secondary">
                <CheckCircle2 size={16} /> Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} /> Couldn&apos;t send. Add your EmailJS keys to .env.local (see README).
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
