"use client"

// Globe + satellite orbit visualization representing Afaq Al-fiker's
// mission: global connectivity via satellite and fiber optic networks.
export function ConnectivityVisual() {
  const nodes = [
    { id: "n1", cx: 280, cy: 118, delay: "0s",   label: "MIDDLE EAST" },
    { id: "n2", cx: 148, cy: 195, delay: "0.6s", label: "EUROPE" },
    { id: "n3", cx: 415, cy: 210, delay: "1.1s", label: "ASIA" },
    { id: "n4", cx: 172, cy: 372, delay: "1.6s", label: "AFRICA" },
    { id: "n5", cx: 400, cy: 365, delay: "2.1s", label: "FAR EAST" },
  ]

  const connections = [
    { id: "c0", d: "M280,118 Q215,155 148,195",  dur: "3s",   w: 1.4, pDur: "2.2s", pDelay: "0s"    },
    { id: "c1", d: "M280,118 Q355,158 415,210",  dur: "2.6s", w: 1.4, pDur: "1.9s", pDelay: "0.7s"  },
    { id: "c2", d: "M148,195 Q145,282 172,372",  dur: "3.4s", w: 1.1, pDur: "2.6s", pDelay: "1.4s"  },
    { id: "c3", d: "M415,210 Q418,290 400,365",  dur: "2.9s", w: 1.1, pDur: "2.2s", pDelay: "0.4s"  },
    { id: "c4", d: "M172,372 Q287,405 400,365",  dur: "3.8s", w: 1.4, pDur: "2.9s", pDelay: "1.1s"  },
    { id: "c5", d: "M280,118 Q280,200 280,280",  dur: "2.2s", w: 0.9, pDur: "1.7s", pDelay: "0.2s"  },
    { id: "c6", d: "M148,195 Q215,238 280,280",  dur: "2.7s", w: 0.9, pDur: "2.1s", pDelay: "0.9s"  },
    { id: "c7", d: "M415,210 Q348,248 280,280",  dur: "3.1s", w: 0.9, pDur: "2.4s", pDelay: "1.6s"  },
  ]

  const stars: [number, number, number][] = [
    [42,72,1.3],[493,52,1.2],[528,208,1.4],[25,348,1.1],[518,418,1.3],
    [85,490,1.2],[468,502,1.1],[162,26,1.3],[385,528,1.2],[16,172,1.1],
    [545,132,1.4],[145,532,1.2],[495,342,1.1],[52,265,1.3],[318,42,1.2],
    [92,142,1.1],[442,168,1.3],[68,418,1.2],[520,265,1.1],[195,55,1.3],
    [340,18,1.0],[22,420,1.2],[540,380,1.1],[118,490,1.0],[460,480,1.2],
  ]

  return (
    <div className="relative w-full h-full min-h-[340px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 560 560"
        className="w-full h-full max-w-[540px]"
        aria-hidden="true"
      >
        <defs>
          {/* Globe fill */}
          <radialGradient id="cg" cx="38%" cy="36%" r="65%">
            <stop offset="0%" stopColor="#0d2045" />
            <stop offset="100%" stopColor="#060710" />
          </radialGradient>

          {/* Atmospheric rim */}
          <radialGradient id="atm" cx="50%" cy="50%" r="50%">
            <stop offset="74%" stopColor="transparent" />
            <stop offset="88%" stopColor="#1a5fa8" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#4a90d9" stopOpacity="0" />
          </radialGradient>

          {/* Shadow crescent for 3-D depth */}
          <radialGradient id="crescent" cx="72%" cy="62%" r="52%">
            <stop offset="25%" stopColor="#020408" stopOpacity="0.65" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Node inner glow */}
          <radialGradient id="ng" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5ba4cf" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563a8" stopOpacity="0" />
          </radialGradient>

          {/* Soft glow */}
          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Sharper glow for data packets */}
          <filter id="packetGlow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ambient glow around globe */}
          <filter id="ambientGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Globe clip */}
          <clipPath id="gc">
            <circle cx="280" cy="280" r="178" />
          </clipPath>

          {/* Satellite orbit path */}
          <path id="orbitPath" d="M 48 280 A 232 72 0 0 1 512 280 A 232 72 0 0 1 48 280" />
        </defs>

        {/* ── Stars ── */}
        {stars.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="white">
            <animate
              attributeName="opacity"
              values={i % 2 === 0 ? "0.2;0.55;0.2" : "0.1;0.4;0.1"}
              dur={`${2.5 + (i % 5) * 0.6}s`}
              repeatCount="indefinite"
              begin={`${(i * 0.25) % 3}s`}
            />
          </circle>
        ))}

        {/* ── Globe ambient glow ── */}
        <circle cx="280" cy="280" r="192" fill="#1a4080" opacity="0.18" filter="url(#ambientGlow)" />

        {/* ── Globe body ── */}
        <circle cx="280" cy="280" r="178" fill="url(#cg)" />

        {/* ── Wireframe grid (clipped) ── */}
        <g clipPath="url(#gc)">
          <ellipse cx="280" cy="280" rx="178" ry="42"  fill="none" stroke="#3a78c9" strokeWidth="0.65" strokeOpacity="0.28" />
          <ellipse cx="280" cy="280" rx="178" ry="100" fill="none" stroke="#3a78c9" strokeWidth="0.65" strokeOpacity="0.28" />
          <ellipse cx="280" cy="280" rx="178" ry="152" fill="none" stroke="#3a78c9" strokeWidth="0.5"  strokeOpacity="0.18" />
          <line x1="280" y1="102" x2="280" y2="458"   stroke="#3a78c9" strokeWidth="0.65" strokeOpacity="0.28" />
          <line x1="102" y1="280" x2="458" y2="280"   stroke="#3a78c9" strokeWidth="0.65" strokeOpacity="0.28" />
          <ellipse cx="280" cy="280" rx="55"  ry="178" fill="none" stroke="#3a78c9" strokeWidth="0.5"  strokeOpacity="0.18" />
          <ellipse cx="280" cy="280" rx="128" ry="178" fill="none" stroke="#3a78c9" strokeWidth="0.5"  strokeOpacity="0.18" />
        </g>

        {/* ── Shadow crescent (3-D depth) ── */}
        <circle cx="280" cy="280" r="178" fill="url(#crescent)" clipPath="url(#gc)" />

        {/* ── Globe rim ── */}
        <circle cx="280" cy="280" r="178" fill="none" stroke="#2563a8" strokeWidth="1.5" strokeOpacity="0.6" />

        {/* ── Atmospheric halo ── */}
        <circle cx="280" cy="280" r="194" fill="url(#atm)" />

        {/* ── Specular highlight ── */}
        <ellipse cx="235" cy="212" rx="52" ry="32" fill="white" opacity="0.026" />

        {/* ── Connection lines ── */}
        {connections.map((c, i) => (
          <path
            key={i}
            d={c.d}
            fill="none"
            stroke="#5ba4cf"
            strokeWidth={c.w}
            strokeOpacity="0.42"
            strokeDasharray="5 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-18;0"
              dur={c.dur}
              repeatCount="indefinite"
              begin={`${(i * 0.3) % 1.5}s`}
            />
          </path>
        ))}

        {/* ── Data packets traveling along connections ── */}
        {connections.map((c, i) => (
          <circle key={`pkt-${i}`} r="2.6" fill="#00c8ff" filter="url(#packetGlow)">
            <animateMotion
              dur={c.pDur}
              repeatCount="indefinite"
              begin={c.pDelay}
              path={c.d}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.88;1"
              dur={c.pDur}
              repeatCount="indefinite"
              begin={c.pDelay}
            />
          </circle>
        ))}

        {/* ── Central hub (headquarters) ── */}
        <circle cx="280" cy="280" r="7" fill="url(#ng)" filter="url(#glow)">
          <animate attributeName="r" values="7;10;7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="280" r="3.5" fill="#5ba4cf" filter="url(#glow)" />
        <circle cx="280" cy="280" r="1.5" fill="white" />

        {/* ── Network nodes ── */}
        {nodes.map((n) => (
          <g key={n.id} filter="url(#glow)">
            {/* Pulse ring */}
            <circle cx={n.cx} cy={n.cy} r="6" fill="none" stroke="#5ba4cf" strokeWidth="1">
              <animate attributeName="r"       values="5;20;5"     dur="2.8s" repeatCount="indefinite" begin={n.delay} />
              <animate attributeName="opacity" values="0.5;0;0.5"  dur="2.8s" repeatCount="indefinite" begin={n.delay} />
            </circle>
            {/* Node body */}
            <circle cx={n.cx} cy={n.cy} r="5.5" fill="#132c55" stroke="#5ba4cf" strokeWidth="1.5" />
            <circle cx={n.cx} cy={n.cy} r="2.2" fill="white" />
          </g>
        ))}

        {/* ── Node labels ── */}
        {nodes.map((n) => {
          const isLeft = n.cx < 280
          const isTop  = n.cy < 280
          const lx = isLeft ? n.cx - 12 : n.cx + 12
          const ly = isTop  ? n.cy - 12 : n.cy + 18
          return (
            <text
              key={n.id + "-label"}
              x={lx}
              y={ly}
              textAnchor={isLeft ? "end" : "start"}
              fill="#5ba4cf"
              fontSize="8.5"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              letterSpacing="0.08em"
              opacity="0.65"
            >
              {n.label}
            </text>
          )
        })}

        {/* ── Orbit ring (visual) ── */}
        <use
          href="#orbitPath"
          fill="none"
          stroke="#4a90d9"
          strokeWidth="0.9"
          strokeOpacity="0.22"
          strokeDasharray="6 5"
        />

        {/* ── Satellite ── */}
        <g filter="url(#glow)">
          <animateMotion dur="10s" repeatCount="indefinite">
            <mpath href="#orbitPath" />
          </animateMotion>
          {/* Body */}
          <rect x="-5.5" y="-3"  width="11"  height="6" rx="1.5" fill="#3a8fd4" />
          {/* Solar panels */}
          <rect x="-14"  y="-2"  width="7.5" height="4" rx="1"   fill="#1a5fa8" />
          <rect x="6.5"  y="-2"  width="7.5" height="4" rx="1"   fill="#1a5fa8" />
          {/* Antenna */}
          <line x1="0" y1="-3" x2="0" y2="-9" stroke="#5ba4cf" strokeWidth="1" />
          <circle cx="0" cy="-10.5" r="2.2" fill="#00c8ff">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* ── Signal pulses from satellite ── */}
        <g filter="url(#glow)">
          <circle cx="280" cy="82" r="4" fill="none" stroke="#00c8ff" strokeWidth="1.2">
            <animate attributeName="r"       values="3;24;3"   dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="82" r="3" fill="none" stroke="#00c8ff" strokeWidth="0.8">
            <animate attributeName="r"       values="2;15;2"   dur="2.6s" repeatCount="indefinite" begin="0.45s" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite" begin="0.45s" />
          </circle>
        </g>

        {/* ── Labels ── */}
        <text x="280" y="46"  textAnchor="middle" fill="#5ba4cf" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.65">
          SATELLITE LINK
        </text>
        <text x="520" y="288" textAnchor="start"  fill="#5ba4cf" fontSize="9"  fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="0.08em" opacity="0.5">
          FIBER OPTIC
        </text>
        <text x="520" y="300" textAnchor="start"  fill="#5ba4cf" fontSize="9"  fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="0.08em" opacity="0.5">
          NETWORK
        </text>
      </svg>
    </div>
  )
}
