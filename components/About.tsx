"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { about, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">Get to know me</p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto h-72 w-60 sm:h-80 sm:w-64"
          >
            <div className="absolute -inset-3 rounded-3xl bg-hero-gradient opacity-20 blur-2xl" />
            <div className="glass relative h-full w-full overflow-hidden rounded-3xl border-white/10">
              <Image
                src={profile.photo}
                alt={`${profile.name} portrait`}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-ink-muted">{about.summary}</p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink-muted">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-secondary" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl px-6 py-8 text-center transition-transform hover:-translate-y-1"
            >
              <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
