"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Eye, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <section id="resume" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">The full picture</p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            My <span className="text-gradient">Resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass grid grid-cols-1 items-center gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-[auto_1fr]"
        >
          <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10">
            <Image src={profile.photo} alt={profile.name} fill className="object-cover" sizes="160px" />
          </div>

          <div>
            <div className="flex items-center gap-3 text-ink-muted">
              <FileText size={20} className="text-secondary" />
              <span className="font-mono text-sm">Siddharth_Jagadale_Resume.pdf</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
              Information Technology Undergraduate
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
              A complete overview of my experience, projects, and technical skills — Python,
              FastAPI, React.js, Machine Learning, and Computer Vision.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={profile.resumeFile} download>
                <Button variant="primary">
                  <Download size={16} /> Download Resume
                </Button>
              </a>
              <a href={profile.resumeFile} target="_blank" rel="noreferrer">
                <Button variant="outline">
                  <Eye size={16} /> Preview Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
