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

function Label({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text x={x} y={y} fill="rgba(255,255,255,.86)" fontSize="18">
      {text}
    </text>
  );
}

export default function SceneVisual({ index, reducedMotion }: Props) {
  const pulse = motionClass(reducedMotion);

  if (index === 0) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Transición de nido solitario a colonia conectada">
        <BackgroundFrame />
        <circle cx="120" cy="208" r="44" fill="#fbbf24" className="anim anim-context" />
        <circle cx="300" cy="118" r="18" fill="#f59e0b" className={`anim anim-focus ${pulse}`} />
        <circle cx="374" cy="206" r="20" fill="#f59e0b" className="anim anim-flow" />
        <circle cx="470" cy="154" r="22" fill="#f59e0b" className="anim anim-outcome" />
        <path d="M166 208 C 228 170, 262 142, 286 121 M166 208 C 246 214, 304 212, 350 206 M166 208 C 292 198, 380 175, 448 156" stroke="url(#amberFlow)" strokeWidth="4" fill="none" className="anim anim-flow anim-path" />
        <Label x={62} y={274} text="nido individual" />
        <Label x={376} y={106} text="red cooperativa" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Flujo de recursos dentro de la colonia">
        <BackgroundFrame />
        <circle cx="86" cy="110" r="12" fill="#7dd3fc" className="anim anim-context" />
        <circle cx="86" cy="190" r="12" fill="#fb923c" className="anim anim-context" />
        <circle cx="86" cy="270" r="12" fill="#5eead4" className="anim anim-context" />
        <path d="M108 110 H258 M108 190 H258 M108 270 H258" stroke="rgba(255,255,255,.72)" strokeWidth="3" className="anim anim-flow anim-path" />
        <rect x="260" y="88" width="106" height="218" rx="10" fill="rgba(251,191,36,.18)" stroke="rgba(251,191,36,.52)" className="anim anim-focus" />
        <rect x="394" y="102" width="128" height="90" rx="10" fill="rgba(56,189,248,.25)" className="anim anim-outcome" />
        <rect x="394" y="214" width="128" height="90" rx="10" fill="rgba(52,211,153,.3)" className="anim anim-outcome" />
        <Label x={34} y={96} text="entradas" />
        <Label x={404} y={156} text="cría" />
        <Label x={404} y={266} text="reservas" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Comparación de castas de abejas">
        <BackgroundFrame />
        <ellipse cx="120" cy="212" rx="60" ry="98" fill="#fde047" className="anim anim-context" />
        <ellipse cx="300" cy="212" rx="48" ry="76" fill="#fcd34d" className="anim anim-focus" />
        <ellipse cx="474" cy="212" rx="70" ry="60" fill="#fef08a" className="anim anim-outcome" />
        <Label x={86} y={338} text="reina" />
        <Label x={266} y={338} text="obrera" />
        <Label x={442} y={338} text="zángano" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Bifurcación genética haplodiploide">
        <BackgroundFrame />
        <circle cx="300" cy="96" r="28" fill="rgba(254,243,199,.95)" className="anim anim-context" />
        <path d="M300 126 V162" stroke="rgba(255,255,255,.7)" strokeWidth="3" className="anim anim-flow anim-path" />
        <path d="M300 162 C220 194,220 266,210 324" stroke="#f0abfc" strokeWidth="7" fill="none" className="anim anim-flow anim-path" />
        <path d="M300 162 C380 194,380 266,390 324" stroke="#7dd3fc" strokeWidth="7" fill="none" className="anim anim-outcome anim-path" />
        <Label x={120} y={352} text="fecundado → hembra diploide" />
        <Label x={318} y={352} text="no fecundado → macho haploide" />
      </svg>
    );
  }

  if (index === 4) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Etapas del ciclo de vida de la abeja">
        <BackgroundFrame />
        <circle cx="100" cy="204" r="36" fill="rgba(255,255,255,.45)" className="anim anim-context" />
        <circle cx="230" cy="204" r="48" fill="rgba(217,249,157,.48)" className="anim anim-flow" />
        <circle cx="372" cy="204" r="60" fill="rgba(221,214,254,.48)" className="anim anim-focus" />
        <circle cx="516" cy="204" r="74" fill="rgba(252,211,77,.58)" className="anim anim-outcome" />
        <path d="M136 204 H182 M278 204 H312 M432 204 H442" stroke="rgba(255,255,255,.8)" strokeWidth="3" className="anim anim-flow anim-path" />
        <Label x={72} y={286} text="huevo" />
        <Label x={196} y={286} text="larva" />
        <Label x={336} y={286} text="pupa" />
        <Label x={482} y={286} text="adulto" />
      </svg>
    );
  }

  if (index === 5) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Escalera de tareas de una obrera">
        <BackgroundFrame />
        <path d="M70 308 H530" stroke="rgba(255,255,255,.45)" strokeWidth="4" className="anim anim-context anim-path" />
        <rect x="94" y="262" width="72" height="46" rx="7" fill="rgba(56,189,248,.55)" className="anim anim-context" />
        <rect x="188" y="240" width="72" height="68" rx="7" fill="rgba(253,230,138,.6)" className="anim anim-flow" />
        <rect x="282" y="220" width="72" height="88" rx="7" fill="rgba(252,165,165,.62)" className="anim anim-focus" />
        <rect x="376" y="198" width="72" height="110" rx="7" fill="rgba(110,231,183,.6)" className="anim anim-flow" />
        <rect x="470" y="176" width="72" height="132" rx="7" fill="rgba(167,139,250,.62)" className="anim anim-outcome" />
        <Label x={86} y={336} text="limpieza" />
        <Label x={188} y={336} text="nodriza" />
        <Label x={300} y={336} text="cera" />
        <Label x={392} y={336} text="guardia" />
        <Label x={474} y={336} text="forrajeo" />
      </svg>
    );
  }

  if (index === 6) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Comunicación por feromonas y danza">
        <BackgroundFrame />
        <circle cx="298" cy="204" r="106" fill="rgba(244,114,182,.16)" stroke="rgba(251,207,232,.8)" className="anim anim-context" />
        <circle cx="298" cy="204" r="14" fill="rgba(244,114,182,.9)" className={`anim anim-focus ${pulse}`} />
        <path d="M190 222 C250 176, 336 162, 410 112" stroke="url(#amberFlow)" strokeWidth="8" fill="none" className="anim anim-flow anim-path" />
        <path d="M298 204 L424 150" stroke="rgba(125, 211, 252, .95)" strokeWidth="3" className="anim anim-flow anim-path" />
        <circle cx="424" cy="150" r="11" fill="rgba(186,230,253,.95)" className="anim anim-outcome" />
        <Label x={202} y={116} text="ruta del baile" />
        <Label x={244} y={252} text="señal química" />
      </svg>
    );
  }

  if (index === 7) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Control de temperatura dentro de la colmena">
        <BackgroundFrame />
        <rect x="248" y="88" width="104" height="224" rx="20" fill="rgba(255,255,255,.16)" className="anim anim-context" />
        <rect x="262" y="126" width="76" height="172" rx="12" fill="url(#amberFlow)" className="anim anim-focus" />
        <path d="M90 140 H220" stroke="rgba(125,211,252,.9)" strokeWidth="6" className="anim anim-flow anim-path" />
        <path d="M510 268 H380" stroke="rgba(251,146,60,.92)" strokeWidth="6" className="anim anim-outcome anim-path" />
        <Label x={74} y={122} text="enfriar" />
        <Label x={442} y={252} text="calentar" />
        <Label x={228} y={344} text="núcleo de cría estable" />
      </svg>
    );
  }

  if (index === 8) {
    return (
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Línea temporal del reemplazo de reina">
        <BackgroundFrame />
        <path d="M74 98 H530" stroke="rgba(255,255,255,.34)" strokeWidth="3" className="anim anim-context anim-path" />
        <circle cx="92" cy="98" r="14" fill="#fca5a5" className="anim anim-context" />
        <circle cx="190" cy="98" r="14" fill="#f0abfc" className="anim anim-flow" />
        <circle cx="308" cy="98" r="14" fill="#c4b5fd" className="anim anim-focus" />
        <circle cx="430" cy="98" r="14" fill="#86efac" className="anim anim-outcome" />
        <path d="M92 98 V250 H430" stroke="rgba(255,255,255,.52)" strokeWidth="3" fill="none" className="anim anim-flow anim-path" />
        <path d="M308 250 V320 H530" stroke="#fda4af" strokeWidth="5" fill="none" className="anim anim-outcome anim-path" />
        <Label x={64} y={74} text="fallo" />
        <Label x={156} y={74} text="celda real" />
        <Label x={266} y={74} text="reina virgen" />
        <Label x={382} y={74} text="vuelo" />
        <Label x={452} y={338} text="riesgo sin larvas" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Reservas de la colonia y estabilidad final">
      <BackgroundFrame />
      <rect x="104" y="136" width="116" height="154" rx="10" fill="rgba(252, 211, 77, .58)" className="anim anim-context" />
      <rect x="242" y="108" width="116" height="182" rx="10" fill="rgba(251, 146, 60, .56)" className="anim anim-focus" />
      <rect x="380" y="154" width="116" height="136" rx="10" fill="rgba(110, 231, 183, .5)" className="anim anim-outcome" />
      <path d="M104 306 H496" stroke="rgba(255,255,255,.48)" strokeWidth="3" className="anim anim-flow anim-path" />
      <Label x={126} y={330} text="miel" />
      <Label x={252} y={330} text="bee bread" />
      <Label x={394} y={330} text="propóleo" />
      <Label x={208} y={84} text="balance de estabilidad" />
    </svg>
  );
}
