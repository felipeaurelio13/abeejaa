'use client';

import React from 'react';

type Props = {
  index: number;
  reducedMotion: boolean;
};

const motionClass = (reducedMotion: boolean) => (reducedMotion ? '' : 'animate-[pulse_4s_ease-in-out_infinite]');

function BackgroundFrame() {
  return (
    <>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="amberFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="600" height="400" rx="24" fill="url(#bg)" />
      <rect x="16" y="16" width="568" height="368" rx="18" fill="none" stroke="rgba(255,255,255,.12)" />
    </>
  );
}

function HexPattern({ opacity = 0.25 }: { opacity?: number }) {
  return (
    <g opacity={opacity}>
      {Array.from({ length: 18 }).map((_, i) => {
        const row = Math.floor(i / 6);
        const col = i % 6;
        const x = 70 + col * 84 + (row % 2) * 42;
        const y = 72 + row * 70;
        return (
          <polygon
            key={i}
            points={`${x},${y} ${x + 28},${y + 16} ${x + 28},${y + 48} ${x},${y + 64} ${x - 28},${y + 48} ${x - 28},${y + 16}`}
            fill="rgba(251, 191, 36, 0.16)"
            stroke="rgba(253, 224, 71, 0.45)"
            strokeWidth="1.5"
          />
        );
      })}
    </g>
  );
}

export default function SceneVisual({ index, reducedMotion }: Props) {
  const pulse = motionClass(reducedMotion);

  if (index === 0) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <circle cx="125" cy="210" r="46" fill="#fbbf24" className="anim" />
        <g className="anim">
          <circle cx="305" cy="130" r="20" fill="#f59e0b" className={pulse} />
          <circle cx="370" cy="220" r="22" fill="#f59e0b" />
          <circle cx="468" cy="170" r="24" fill="#f59e0b" />
        </g>
        <path d="M170 204 C 228 172, 258 147, 286 133 M170 204 C 244 214, 306 221, 350 220 M170 204 C 286 198, 380 184, 442 171" stroke="url(#amberFlow)" strokeWidth="4" fill="none" className="anim" />
        <text x="74" y="278" fill="rgba(255,255,255,.9)" fontSize="24">nido solitario</text>
        <text x="388" y="112" fill="rgba(255,255,255,.9)" fontSize="24">colonia</text>
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <HexPattern />
        <g className="anim">
          <rect x="420" y="86" width="110" height="220" rx="14" fill="rgba(52, 211, 153, 0.2)" stroke="rgba(110, 231, 183, .6)" />
          <rect x="420" y="198" width="110" height="108" rx="8" fill="rgba(52, 211, 153, 0.55)" />
        </g>
        <g className="anim">
          <circle cx="88" cy="112" r="14" fill="#7dd3fc" />
          <circle cx="88" cy="190" r="14" fill="#fb923c" />
          <circle cx="88" cy="268" r="14" fill="#5eead4" />
          <path d="M108 112 H220 M108 190 H235 M108 268 H250" stroke="rgba(255,255,255,.75)" strokeWidth="3" />
        </g>
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <ellipse cx="130" cy="210" rx="56" ry="95" fill="#fde047" className="anim" />
        <ellipse cx="300" cy="212" rx="50" ry="76" fill="#fcd34d" className="anim" />
        <ellipse cx="470" cy="210" rx="72" ry="62" fill="#fef08a" className="anim" />
        <circle cx="468" cy="172" r="24" fill="rgba(15,23,42,.6)" />
        <line x1="292" y1="282" x2="332" y2="324" stroke="#f87171" strokeWidth="5" className="anim" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <circle cx="300" cy="88" r="30" fill="rgba(254,243,199,.95)" className="anim" />
        <path d="M300 118 V330" stroke="rgba(255,255,255,.7)" strokeWidth="2" />
        <path d="M300 160 C220 200,220 268,220 322" stroke="#f0abfc" strokeWidth="6" fill="none" className="anim" />
        <path d="M300 160 C380 200,380 268,380 322" stroke="#7dd3fc" strokeWidth="6" fill="none" className="anim" />
        <text x="152" y="352" fill="rgba(250,232,255,.95)" fontSize="22">huevo fecundado</text>
        <text x="342" y="352" fill="rgba(224,242,254,.95)" fontSize="22">no fecundado</text>
      </svg>
    );
  }

  if (index === 4) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <g className="anim">
          <circle cx="116" cy="204" r="46" fill="rgba(255,255,255,.45)" />
          <circle cx="248" cy="204" r="56" fill="rgba(217,249,157,.48)" />
          <circle cx="388" cy="204" r="66" fill="rgba(221,214,254,.48)" />
          <circle cx="528" cy="204" r="76" fill="rgba(252,211,77,.58)" />
        </g>
        <path d="M164 204 H192 M304 204 H322 M454 204 H470" stroke="rgba(255,255,255,.8)" strokeWidth="4" />
      </svg>
    );
  }

  if (index === 5) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <path d="M70 306 H530" stroke="rgba(255,255,255,.48)" strokeWidth="4" />
        <circle cx="92" cy="306" r="18" fill="#f59e0b" className="anim" />
        <rect x="144" y="256" width="72" height="50" rx="6" fill="rgba(56, 189, 248, .58)" className="anim" />
        <rect x="246" y="236" width="72" height="70" rx="6" fill="rgba(253, 230, 138, .62)" className="anim" />
        <rect x="348" y="216" width="72" height="90" rx="6" fill="rgba(252, 165, 165, .64)" className="anim" />
        <rect x="450" y="196" width="72" height="110" rx="6" fill="rgba(110, 231, 183, .6)" className="anim" />
      </svg>
    );
  }

  if (index === 6) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <circle cx="300" cy="200" r="102" fill="rgba(244,114,182,.17)" stroke="rgba(251,207,232,.8)" />
        <path d="M192 220 C250 172, 340 162, 410 112" stroke="url(#amberFlow)" strokeWidth="7" fill="none" className="anim" />
        <path d="M300 200 L420 150" stroke="rgba(125, 211, 252, .9)" strokeWidth="2" className="anim" />
        <circle cx="420" cy="150" r="11" fill="rgba(186,230,253,.95)" className={pulse} />
      </svg>
    );
  }

  if (index === 7) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <rect x="248" y="88" width="104" height="224" rx="20" fill="rgba(255,255,255,.17)" />
        <rect x="260" y="126" width="80" height="174" rx="12" fill="url(#amberFlow)" className="anim" />
        <circle cx="152" cy="130" r="36" fill="rgba(125, 211, 252, .38)" className="anim" />
        <circle cx="448" cy="280" r="46" fill="rgba(251, 146, 60, .36)" className="anim" />
      </svg>
    );
  }

  if (index === 8) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full">
        <BackgroundFrame />
        <path d="M70 90 H530" stroke="rgba(255,255,255,.3)" strokeWidth="2" />
        <g className="anim">
          <circle cx="90" cy="90" r="16" fill="#fca5a5" />
          <circle cx="180" cy="90" r="16" fill="#f0abfc" />
          <circle cx="280" cy="90" r="16" fill="#c4b5fd" />
          <circle cx="390" cy="90" r="16" fill="#86efac" />
          <circle cx="500" cy="90" r="16" fill="#fcd34d" />
        </g>
        <path d="M90 90 V250 H500" stroke="rgba(255,255,255,.52)" strokeWidth="3" fill="none" />
        <path d="M280 250 V320 H520" stroke="#fda4af" strokeWidth="5" fill="none" className="anim" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 600 400" className="h-full w-full">
      <BackgroundFrame />
      <HexPattern opacity={0.36} />
      <rect x="122" y="142" width="100" height="140" rx="8" fill="rgba(252, 211, 77, .58)" className="anim" />
      <rect x="252" y="112" width="100" height="170" rx="8" fill="rgba(251, 146, 60, .56)" className="anim" />
      <rect x="382" y="162" width="100" height="120" rx="8" fill="rgba(110, 231, 183, .5)" className="anim" />
      <path d="M100 304 H500" stroke="rgba(255,255,255,.48)" strokeWidth="2" />
    </svg>
  );
}
