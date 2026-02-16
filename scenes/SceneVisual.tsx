'use client';

type Props = {
  index: number;
  reducedMotion: boolean;
};

function HexGrid({ glow = false }: { glow?: boolean }) {
  return (
    <g className={glow ? 'opacity-90' : 'opacity-50'}>
      {Array.from({ length: 18 }).map((_, i) => {
        const row = Math.floor(i / 6);
        const col = i % 6;
        const x = 80 + col * 84 + (row % 2) * 42;
        const y = 80 + row * 72;
        return <polygon key={i} points={`${x},${y} ${x + 30},${y + 17} ${x + 30},${y + 51} ${x},${y + 68} ${x - 30},${y + 51} ${x - 30},${y + 17}`} className="fill-amber-200/30 stroke-amber-300/70" strokeWidth="2" />;
      })}
    </g>
  );
}

export default function SceneVisual({ index, reducedMotion }: Props) {
  const pulseClass = reducedMotion ? '' : 'animate-[pulse_3s_ease-in-out_infinite]';

  if (index === 0) {
    return <svg viewBox="0 0 600 400" className="h-full w-full anim"><circle cx="120" cy="200" r="40" className="fill-amber-400" /><circle cx="300" cy="120" r="20" className={`fill-amber-500 anim ${pulseClass}`} /><circle cx="360" cy="220" r="20" className="fill-amber-500" /><circle cx="460" cy="170" r="22" className="fill-amber-500" /><path d="M160 200 C 230 170, 250 140, 280 130 M160 200 C 240 220, 300 220, 340 220 M160 200 C 290 190, 380 180, 438 170" className="stroke-amber-300 stroke-[3] fill-none anim" /><text x="80" y="265" className="fill-white text-2xl">solitaria</text><text x="418" y="112" className="fill-white text-2xl">colonia</text></svg>;
  }

  if (index === 1) {
    return <svg viewBox="0 0 600 400" className="h-full w-full"><HexGrid glow /><circle cx="70" cy="100" r="16" className="fill-sky-300 anim" /><circle cx="70" cy="180" r="16" className="fill-orange-400 anim" /><circle cx="70" cy="260" r="16" className="fill-teal-300 anim" /><path d="M88 100 H210 M88 180 H220 M88 260 H230" className="stroke-white/80 stroke-2 anim" /><rect x="420" y="90" width="95" height="200" rx="10" className="fill-emerald-400/30 stroke-emerald-300" /><rect x="420" y="210" width="95" height="80" className="fill-emerald-300/70 anim" /></svg>;
  }

  if (index === 2) {
    return <svg viewBox="0 0 600 400" className="h-full w-full"><ellipse cx="130" cy="200" rx="55" ry="95" className="fill-yellow-300" /><ellipse cx="300" cy="210" rx="48" ry="75" className="fill-amber-300" /><ellipse cx="470" cy="200" rx="70" ry="60" className="fill-yellow-200" /><circle cx="470" cy="165" r="22" className="fill-slate-900/70 anim" /><line x1="292" y1="280" x2="330" y2="320" className="stroke-red-400 stroke-4 anim" /></svg>;
  }

  if (index === 3) {
    return <svg viewBox="0 0 600 400" className="h-full w-full"><circle cx="300" cy="90" r="34" className="fill-amber-100 anim" /><path d="M300 124 V330" className="stroke-white stroke-2" /><path d="M300 160 C220 200,220 270,220 320" className="stroke-fuchsia-300 stroke-[5] fill-none anim" /><path d="M300 160 C380 200,380 270,380 320" className="stroke-sky-300 stroke-[5] fill-none anim" /><text x="155" y="346" className="fill-fuchsia-200">fecundado</text><text x="360" y="346" className="fill-sky-200">no fecundado</text></svg>;
  }

  if (index === 4) {
    return <svg viewBox="0 0 600 400" className="h-full w-full"><circle cx="120" cy="200" r="50" className="fill-white/50 anim" /><circle cx="250" cy="200" r="58" className="fill-lime-200/50 anim" /><circle cx="390" cy="200" r="66" className="fill-violet-200/50 anim" /><circle cx="530" cy="200" r="74" className="fill-amber-300/60 anim" /><path d="M170 200 H192 M308 200 H325 M455 200 H470" className="stroke-white stroke-4" /></svg>;
  }

  if (index === 5) {
    return <svg viewBox="0 0 600 400" className="h-full w-full"><path d="M70 300 H530" className="stroke-white/60 stroke-4" /><circle cx="90" cy="300" r="18" className="fill-amber-400 anim" /><rect x="140" y="250" width="70" height="50" className="fill-cyan-300/60" /><rect x="240" y="230" width="70" height="70" className="fill-amber-200/60" /><rect x="340" y="210" width="70" height="90" className="fill-red-300/60" /><rect x="440" y="190" width="70" height="110" className="fill-emerald-300/60" /></svg>;
  }

  if (index === 6) {
    return <svg viewBox="0 0 600 400" className="h-full w-full"><circle cx="300" cy="200" r="100" className="fill-fuchsia-300/20 stroke-fuchsia-200" /><path d="M190 220 C250 170, 340 160, 410 110" className="stroke-amber-300 stroke-[6] fill-none anim" /><path d="M300 200 L420 150" className="stroke-cyan-300 stroke-2" /><circle cx="420" cy="150" r="11" className="fill-cyan-200" /></svg>;
  }

  if (index === 7) {
    return <svg viewBox="0 0 600 400" className="h-full w-full"><rect x="250" y="90" width="100" height="220" rx="20" className="fill-white/20" /><rect x="260" y="130" width="80" height="170" rx="12" className="fill-gradient-to-b from-sky-300 to-red-400" /><circle cx="150" cy="130" r="35" className="fill-sky-300/40 anim" /><circle cx="450" cy="280" r="45" className="fill-orange-300/40 anim" /></svg>;
  }

  if (index === 8) {
    return <svg viewBox="0 0 600 400" className="h-full w-full"><path d="M70 90 H530" className="stroke-white/30 stroke-2" /><circle cx="90" cy="90" r="16" className="fill-red-300" /><circle cx="180" cy="90" r="16" className="fill-fuchsia-300" /><circle cx="280" cy="90" r="16" className="fill-violet-300" /><circle cx="390" cy="90" r="16" className="fill-emerald-300" /><circle cx="500" cy="90" r="16" className="fill-amber-300" /><path d="M90 90 V250 H500" className="stroke-white/50 stroke-3 fill-none" /><path d="M280 250 V320 H520" className="stroke-red-300 stroke-[5] fill-none anim" /></svg>;
  }

  return <svg viewBox="0 0 600 400" className="h-full w-full"><HexGrid /><rect x="120" y="140" width="100" height="140" className="fill-amber-300/60 anim" /><rect x="250" y="110" width="100" height="170" className="fill-orange-300/60 anim" /><rect x="380" y="160" width="100" height="120" className="fill-emerald-300/60 anim" /><path d="M100 300 H500" className="stroke-white/50 stroke-2" /></svg>;
}
