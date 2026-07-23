"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">Where I&apos;ve worked</p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pb-4"
            >
              <span className="absolute -left-[3.15rem] flex h-8 w-8 items-center justify-center rounded-full bg-hero-gradient shadow-glow">
                <Briefcase size={14} className="text-white" />
              </span>

              <div className="glass rounded-2xl p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">{exp.role}</h3>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-secondary">
                    <Calendar size={13} /> {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink-muted">{exp.company}</p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-ink-muted/70">
                  <MapPin size={12} /> {exp.location}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
