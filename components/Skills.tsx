"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiFastapi, SiReact, SiTensorflow, SiKeras, SiScikitlearn,
  SiMysql, SiPostgresql, SiGit, SiGithub, SiDocker, SiPostman,
  SiSwagger, SiOpencv, SiJavascript, SiHtml5, SiCss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Database } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, ReactElement> = {
  Python: <SiPython />,
  SQL: <Database size={18} />,
  JavaScript: <SiJavascript />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
  FastAPI: <SiFastapi />,
  "React.js": <SiReact />,
  TensorFlow: <SiTensorflow />,
  Keras: <SiKeras />,
  "Scikit-learn": <SiScikitlearn />,
  NumPy: <span className="font-mono text-xs">np</span>,
  Pandas: <span className="font-mono text-xs">pd</span>,
  OpenCV: <SiOpencv />,
  Matplotlib: <span className="font-mono text-xs">plt</span>,
  "Machine Learning": <span className="font-mono text-xs">ML</span>,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Docker: <SiDocker />,
  Postman: <SiPostman />,
  "Swagger UI": <SiSwagger />,
  "VS Code": <VscVscode />,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">What I work with</p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Skills &amp; <span className="text-gradient">Tools</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.06 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-5 font-display text-lg font-semibold text-ink">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-secondary/50 hover:text-secondary"
                  >
                    <span className="text-base text-secondary">{iconMap[item] ?? "•"}</span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
