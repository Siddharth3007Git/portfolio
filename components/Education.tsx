"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">Academic Background</p>

          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
            My academic journey that built the foundation for software
            development, machine learning, and backend engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-4 border-l border-white/10 pl-10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative mb-12"
            >
              {/* Timeline Icon */}
              <span className="absolute -left-[3.2rem] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </span>

              {/* Card */}
              <div className="glass rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {edu.degree}
                  </h3>

                  <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-cyan-400">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                </div>

                {/* College */}
                <p className="mt-3 text-base font-semibold tracking-wide text-white">
                  {edu.school}
                </p>

                {/* Location */}
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} />
                  {edu.location}
                </p>

                {/* University */}
                {edu.university && (
                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {edu.university}
                  </p>
                )}

                {/* Details */}
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {edu.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}