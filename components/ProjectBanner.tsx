type Theme = "vision" | "ecommerce" | "prediction";

export default function ProjectBanner({ theme }: { theme: Theme }) {
  if (theme === "vision") {
    return (
      <svg viewBox="0 0 600 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="vision-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A0F24" />
            <stop offset="100%" stopColor="#0F1A3D" />
          </linearGradient>
          <linearGradient id="vision-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect width="600" height="300" fill="url(#vision-bg)" />
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 10 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={30 + c * 58} cy={30 + r * 48} r="1.4" fill="#2563EB" opacity="0.35" />
          ))
        )}
        {[
          [90, 90, 230, 60],
          [230, 60, 340, 130],
          [340, 130, 480, 80],
          [90, 90, 200, 190],
          [200, 190, 340, 130],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#vision-line)" strokeWidth="1.5" opacity="0.7" />
        ))}
        {[[90, 90], [230, 60], [340, 130], [480, 80], [200, 190]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill="#06B6D4">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <rect x="150" y="150" width="130" height="90" rx="4" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="6 4" />
        <text x="150" y="145" fill="#06B6D4" fontSize="11" fontFamily="monospace">object: 0.94</text>
        <rect x="330" y="170" width="100" height="70" rx="4" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 4" />
        <text x="330" y="165" fill="#3B82F6" fontSize="11" fontFamily="monospace">object: 0.88</text>
      </svg>
    );
  }

  if (theme === "ecommerce") {
    return (
      <svg viewBox="0 0 600 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ec-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A0F24" />
            <stop offset="100%" stopColor="#141C3A" />
          </linearGradient>
          <linearGradient id="ec-card" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect width="600" height="300" fill="url(#ec-bg)" />
        {[70, 240, 410].map((x, i) => (
          <g key={i} transform={`translate(${x}, 60)`}>
            <rect width="120" height="150" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
            <rect x="12" y="12" width="96" height="70" rx="8" fill="url(#ec-card)" opacity={0.5 + i * 0.15} />
            <rect x="12" y="92" width="70" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
            <rect x="12" y="108" width="45" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
            <rect x="12" y="126" width="96" height="20" rx="10" fill="#06B6D4" opacity="0.85" />
          </g>
        ))}
        <circle cx="520" cy="45" r="16" fill="none" stroke="#2563EB" strokeWidth="2" />
        <line x1="531" y1="56" x2="545" y2="70" stroke="#2563EB" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 600 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="pred-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A0F24" />
          <stop offset="100%" stopColor="#0F1A3D" />
        </linearGradient>
        <linearGradient id="pred-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#pred-bg)" />
      <g stroke="rgba(255,255,255,0.06)">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="60" y1={40 + i * 25} x2="560" y2={40 + i * 25} />
        ))}
      </g>
      <polyline
        points="60,220 130,190 200,205 270,150 340,170 410,110 480,130 550,70"
        fill="none"
        stroke="url(#pred-line)"
        strokeWidth="3"
      />
      {["60,220", "130,190", "200,205", "270,150", "340,170", "410,110", "480,130", "550,70"].map((p, i) => {
        const [x, y] = p.split(",");
        return <circle key={i} cx={x} cy={y} r="4" fill="#06B6D4" />;
      })}
      <text x="60" y="255" fill="#94A3B8" fontSize="11" fontFamily="monospace">predicted price trend</text>
      <g transform="translate(430, 30)">
        <rect width="130" height="46" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
        <text x="12" y="19" fill="#06B6D4" fontSize="10" fontFamily="monospace">R² Score</text>
        <text x="12" y="36" fill="#F8FAFC" fontSize="14" fontFamily="monospace" fontWeight="bold">0.9x</text>
      </g>
    </svg>
  );
}
