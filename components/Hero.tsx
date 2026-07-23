"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

function useTypingEffect(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: NodeJS.Timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(profile.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-secondary/40"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animation: `float ${5 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">Hi, I&apos;m</p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-5 h-9 font-mono text-xl text-secondary sm:text-2xl">
            {typed}
            <span className="animate-pulse">|</span>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={profile.resumeFile} download>
              <Button size="lg" variant="primary">
                <Download size={18} /> Download Resume
              </Button>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline">
                <Github size={18} /> View GitHub
              </Button>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors hover:text-secondary"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-ink-muted transition-colors hover:text-secondary"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right - photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px]"
        >
          <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-30 blur-3xl" />
          <div className="glass absolute inset-6 rounded-full" />
          <div className="relative h-[280px] w-[280px] animate-float overflow-hidden rounded-full border-2 border-white/10 shadow-glow sm:h-[340px] sm:w-[340px]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              className="object-cover object-top"
              sizes="340px"
            />
          </div>
          <div className="absolute -bottom-2 right-4 rounded-full bg-hero-gradient px-4 py-2 font-mono text-xs text-white shadow-glow-cyan">
            Open to Internships
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-ink-muted">
        <div className="h-9 w-5 rounded-full border border-white/20 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
        </div>
      </div>
    </section>
  );
}
