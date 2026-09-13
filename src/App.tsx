import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Vite will bundle these images; they live at repo root so we import via relative path
import swiftHero from "../swift-hero.jpg";
import swiftFront from "../swift-front.jpg";
import swiftSide from "../swift-side.jpg";
import swiftInterior from "../swift-interior.jpg";

const colors = [
  { id: "silver", label: "Premium Silver", hex: "#c8d3de", ring: "#dbe8f5", img: swiftSide },
  { id: "blue", label: "Speedy Blue", hex: "#0a5bff", ring: "#3b82f6", img: swiftHero },
  { id: "red", label: "Burning Red", hex: "#e11d2d", ring: "#ef4444", img: swiftFront },
  { id: "black", label: "Midnight Black", hex: "#0b0b0e", ring: "#2a2f3a", img: swiftSide },
] as const;

const variants = [
  {
    id: "gl-mt",
    name: "GL Manual",
    price: "PKR 43.36 Lac",
    badge: "Most Efficient",
    trans: "5-Speed MT",
    engine: "1.2L K12C",
    mileage: "22 KM/L",
    features: ["Push Start", "Retractable Mirrors", "7\" Display", "Rear Sensors"],
  },
  {
    id: "gl-cvt",
    name: "GL CVT",
    price: "PKR 45.46 Lac",
    badge: "Most Booked",
    trans: "CVT Auto",
    engine: "1.2L K12C",
    mileage: "21 KM/L",
    features: ["CVT + Cruise", "Keyless Entry", "Auto AC", "Hill Hold"],
    highlight: true,
  },
  {
    id: "glx-cvt",
    name: "GLX CVT",
    price: "PKR 49.19 Lac",
    badge: "Flagship",
    trans: "CVT Auto",
    engine: "1.2L Dual Jet",
    mileage: "20.5 KM/L",
    features: ["6 Airbags", "9\" Display + Camera", "LED Projectors", "16\" Alloys"],
  },
] as const;

export default function App() {
  const [activeColor, setActiveColor] = useState<(typeof colors)[number]>(colors[1]);
  const [activeVariant, setActiveVariant] = useState<string>("gl-cvt");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", variant: "GL CVT" });

  return (
    <div className="min-h-screen bg-night-950 text-ice-100 selection:bg-beam-400 selection:text-night-950">
      {/* Top Marquee */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-night-950/80 backdrop-blur-xl">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 chrome-trim opacity-[0.08]" />
          <div className="flex animate-marquee whitespace-nowrap py-2 text-[11px] font-bold tracking-[0.28em] text-white/80">
            <span className="mx-6">BOOKING OPEN — ALL NEW SUZUKI SWIFT</span>
            <span className="mx-6 text-beam-400">•</span>
            <span className="mx-6">DESIGNED TO STAND OUT. BUILT TO DRIVE AHEAD.</span>
            <span className="mx-6 text-beam-400">•</span>
            <span className="mx-6">SUZUKI KOHAT MOTORS — MAIN INDUS HIGHWAY NEAR PINDI PULL, KOHAT</span>
            <span className="mx-6 text-beam-400">•</span>
            <span className="mx-6">CALL 0332 0583940</span>
            <span className="mx-6 text-beam-400">•</span>
            <span className="mx-6">BOOKING OPEN — ALL NEW SUZUKI SWIFT</span>
            <span className="mx-6 text-beam-400">•</span>
            <span className="mx-6">DESIGNED TO STAND OUT. BUILT TO DRIVE AHEAD.</span>
            <span className="mx-6 text-beam-400">•</span>
            <span className="mx-6">SUZUKI KOHAT MOTORS — MAIN INDUS HIGHWAY NEAR PINDI PULL, KOHAT</span>
            <span className="mx-6 text-beam-400">•</span>
            <span className="mx-6">CALL 0332 0583940</span>
          </div>
        </div>

        {/* Nav */}
        <header className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-night-950 font-display text-[18px] leading-none shadow-lg">
              S
            </div>
            <div className="leading-none">
              <div className="font-condensed text-[15px] font-bold tracking-[0.14em] text-white">SUZUKI</div>
              <div className="font-condensed text-[11px] tracking-[0.22em] text-white/60">KOHAT MOTORS</div>
            </div>
            <div className="hidden md:ml-4 md:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] text-white/80">BOOKING OPEN</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[12px] font-semibold tracking-[0.14em] text-white/70 lg:flex">
            <a href="#colors" className="hover:text-white">COLOR LAB</a>
            <a href="#variants" className="hover:text-white">VARIANTS</a>
            <a href="#gallery" className="hover:text-white">GALLERY</a>
            <a href="#booking" className="hover:text-white">RESERVE</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+923320583940"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-bold tracking-wide text-night-950 hover:bg-ice-100 transition"
            >
              <span className="hidden sm:inline">0332 0583940</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-beam-400 px-4 py-2 text-[13px] font-extrabold text-night-950 btn-beam pulse-ring"
            >
              Reserve →
            </a>
          </div>
        </header>
      </div>

      {/* HERO — Poster Recreation */}
      <section className="relative overflow-hidden">
        {/* Background beams */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-night-900 via-night-950 to-night-950" />
          <div className="absolute -top-28 left-1/2 h-[520px] w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#0e2a4a]/40 via-[#0b1a33]/20 to-transparent blur-2xl" />
          <div className="absolute top-[18%] left-0 h-[2px] w-full streak-line opacity-60 [animation:streak_3.8s_linear_infinite]" />
          <div className="absolute top-[34%] left-0 h-[2px] w-full streak-line opacity-30 [animation:streak_3.8s_linear_infinite_0.9s]" />
          {/* chrome trim diagonal */}
          <div className="absolute bottom-[22%] left-0 h-[10px] w-[140%] -rotate-[7deg] chrome-trim opacity-90 shadow-[0_0_30px_rgba(255,255,255,0.35)]" />
          <div className="absolute bottom-[18%] left-0 h-[1px] w-[140%] -rotate-[7deg] bg-white/30" />
          {/* halftone bottom-left */}
          <div className="absolute bottom-0 left-0 h-[42%] w-[48%] halftone opacity-[0.18]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,196,255,0.18),transparent_55%)]" />
        </div>

        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 py-10 md:px-6 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          {/* Copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-beam-400/30 bg-beam-400/10 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-beam-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-beam-400 shadow-[0_0_10px_rgba(124,196,255,1)]" />
              BOOKING OPEN — LIMITED SLOTS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="poster-headline mt-5 text-[56px] font-black leading-[0.86] tracking-[0.01em] text-white sm:text-[72px] lg:text-[92px]"
            >
              <span className="block text-[14px] font-condensed font-semibold tracking-[0.34em] text-white/70 tagline-spaced mb-2">
                DESIGNED TO STAND OUT. BUILT TO DRIVE AHEAD.
              </span>
              <span className="block">ALL NEW</span>
              <span className="block bg-gradient-to-b from-white to-ice-300 bg-clip-text text-transparent text-glow">
                SWIFT
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 max-w-[520px] text-[14px] leading-6 text-white/70"
            >
              The iconic hatch — sharper design, Dual Jet efficiency and next-gen safety. Reserve yours today at{" "}
              <span className="font-semibold text-white">Suzuki Kohat Motors</span>, Main Indus Highway near Pindi Pull, Kohat.
            </motion.p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:+923320583940"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-black tracking-wide text-night-950 hover:bg-ice-100 transition btn-beam"
              >
                Call 0332 0583940
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[14px] font-bold text-white backdrop-blur hover:bg-white/10 transition"
              >
                Reserve in 30 seconds →
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-semibold tracking-[0.14em] text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 3 VARIANTS
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5">
                4 PREMIUM COLORS
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5">
                DELIVERY PRIORITY
              </span>
            </div>

            {/* Dealer strip inside hero like poster bottom */}
            <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-night-900/60 p-3 backdrop-blur">
              <div className="rounded-xl bg-white/[0.06] px-3 py-2.5">
                <div className="text-[10px] tracking-[0.16em] text-white/50">DEALER</div>
                <div className="text-[13px] font-bold text-white leading-tight">Suzuki Kohat Motors</div>
              </div>
              <div className="rounded-xl bg-white/[0.06] px-3 py-2.5">
                <div className="text-[10px] tracking-[0.16em] text-white/50">LOCATION</div>
                <div className="text-[13px] font-bold text-white leading-tight">Indus Highway, near Pindi Pull</div>
              </div>
              <div className="rounded-xl bg-beam-400 px-3 py-2.5 text-night-950">
                <div className="text-[10px] tracking-[0.16em] text-night-950/60">HOTLINE</div>
                <div className="text-[13px] font-black leading-tight">0332 0583940</div>
              </div>
            </div>
          </div>

          {/* Car Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* glow behind car */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-b from-beam-400/20 to-transparent blur-[40px]" />
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[560px] animate-float"
            >
              {/* glass card behind image for depth */}
              <div className="absolute inset-0 translate-y-6 rounded-[28px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] blur-[1px]" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-night-900/40 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
                <div className="relative overflow-hidden rounded-[20px] bg-night-900">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeColor.id}
                      src={activeColor.img}
                      alt={`Suzuki Swift ${activeColor.label}`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="aspect-[16/10] w-full object-cover"
                      style={
                        activeColor.id === "black"
                          ? { filter: "brightness(0.72) contrast(1.12) saturate(0.85)" }
                          : activeColor.id === "red"
                            ? { filter: "saturate(1.18)" }
                            : undefined
                      }
                    />
                  </AnimatePresence>
                  {/* shine sweep */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute inset-y-0 -left-1/2 w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent [transform:skewX(-18deg)_translateX(-100%)] [animation:shine_5s_linear_infinite]" />
                  </div>
                  {/* speed label */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-night-950/70 px-3 py-1.5 backdrop-blur border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-beam-400 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.18em] text-white">{activeColor.label.toUpperCase()}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1.5 text-[11px] font-black tracking-wide text-night-950">
                    From PKR 43.36 Lac*
                  </div>
                </div>
              </div>

              {/* floating specs */}
              <div className="absolute -bottom-4 -left-2 hidden md:flex gap-2">
                <div className="glass rounded-2xl px-4 py-3">
                  <div className="text-[10px] tracking-[0.14em] text-white/60">ENGINE</div>
                  <div className="text-[13px] font-bold text-white">1.2L K12C Dual Jet</div>
                </div>
                <div className="glass rounded-2xl px-4 py-3">
                  <div className="text-[10px] tracking-[0.14em] text-white/60">EFFICIENCY</div>
                  <div className="text-[13px] font-bold text-white">Up to 22 KM/L</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Trust / Logos */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
          <div className="text-[11px] tracking-[0.18em] text-white/50 font-semibold">AUTHORIZED SUZUKI DEALER • KOHAT • SINCE 1998</div>
          <div className="flex items-center gap-4 text-[11px] tracking-[0.14em] text-white/70">
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Genuine Warranty</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-beam-400" /> Priority Delivery</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Exchange Bonus</span>
          </div>
        </div>
      </section>

      {/* COLOR LAB */}
      <section id="colors" className="mx-auto max-w-[1280px] px-4 md:px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-beam-400" /> INTERACTIVE COLOR LAB
            </div>
            <h2 className="font-display mt-3 text-[32px] leading-none tracking-[0.02em] text-white sm:text-[40px]">
              CHOOSE YOUR <span className="text-beam-400">ATTITUDE.</span>
            </h2>
            <p className="mt-2 max-w-[560px] text-[13px] leading-5 text-white/60">
              Tap a color — the 360° studio updates instantly. All colors available for booking at Suzuki Kohat Motors.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold tracking-[0.16em] text-white/60">
            360° STUDIO • DRAG TO ROTATE
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-night-900 to-night-950 p-3">
            <div className="relative overflow-hidden rounded-[18px] bg-night-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeColor.id + "-lab"}
                  src={activeColor.img}
                  alt={activeColor.label}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="aspect-[16/10] w-full object-cover"
                  style={
                    activeColor.id === "black"
                      ? { filter: "brightness(0.68) contrast(1.15)" }
                      : activeColor.id === "silver"
                        ? { filter: "brightness(1.05) saturate(0.95)" }
                        : undefined
                  }
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-[11px] font-black text-night-950">
                {activeColor.label} • Swift
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="rounded-full bg-night-950/70 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white border border-white/10 backdrop-blur">
                  ● LIVE STUDIO
                </div>
                <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-night-950">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ready for Booking
                </div>
              </div>
            </div>

            {/* color dots */}
            <div className="mt-3 grid grid-cols-4 gap-3">
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveColor(c)}
                  className={`group relative overflow-hidden rounded-2xl border p-[1px] transition ${
                    activeColor.id === c.id ? "border-beam-400 bg-beam-400/20" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="rounded-[14px] bg-night-900 p-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="h-9 w-9 rounded-full border border-white/15 shadow-inner"
                        style={{ background: c.hex, boxShadow: `0 0 16px ${c.ring}66` }}
                      />
                      <div className="text-left leading-tight">
                        <div className="text-[12px] font-bold text-white">{c.label}</div>
                        <div className="text-[10px] tracking-[0.12em] text-white/50">{c.hex.toUpperCase()}</div>
                      </div>
                    </div>
                  </div>
                  {activeColor.id === c.id && (
                    <motion.div layoutId="color-active" className="absolute inset-0 rounded-2xl ring-1 ring-beam-400/50" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Specs / CTA */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="text-[11px] font-bold tracking-[0.18em] text-beam-400">WHY SWIFT?</div>
              <h3 className="font-display mt-2 text-[26px] leading-none text-white">BUILT TO DRIVE AHEAD</h3>
              <ul className="mt-4 grid gap-3 text-[13px] leading-5 text-white/70">
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-beam-400" />
                  <span>
                    <b className="text-white">Heartect Platform</b> — high-rigidity, low weight for agility + safety.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-beam-400" />
                  <span>
                    <b className="text-white">6 Airbags (GLX)</b> + ESP + Hill Hold — most safety in class.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-beam-400" />
                  <span>
                    <b className="text-white">9" Floating Display</b> — wireless Apple CarPlay / Android Auto (GLX).
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-beam-400" />
                  <span>
                    <b className="text-white">16" Precision Alloys</b> — diamond-cut, 185/55 R16.
                  </span>
                </li>
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-night-900 border border-white/10 px-3 py-3 text-center">
                  <div className="text-[16px] font-black text-white leading-none">6</div>
                  <div className="text-[10px] tracking-[0.12em] text-white/50">AIRBAGS</div>
                </div>
                <div className="rounded-xl bg-night-900 border border-white/10 px-3 py-3 text-center">
                  <div className="text-[16px] font-black text-white leading-none">22</div>
                  <div className="text-[10px] tracking-[0.12em] text-white/50">KM/L</div>
                </div>
                <div className="rounded-xl bg-night-900 border border-white/10 px-3 py-3 text-center">
                  <div className="text-[16px] font-black text-white leading-none">5★</div>
                  <div className="text-[10px] tracking-[0.12em] text-white/50">SAFETY</div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-beam-400/30 bg-beam-400 p-6 text-night-950">
              <div className="text-[11px] font-bold tracking-[0.18em] text-night-950/60">PRIORITY BOOKING</div>
              <div className="font-display mt-1 text-[22px] leading-none">LOCK YOUR COLOR TODAY</div>
              <p className="mt-2 text-[13px] leading-5 text-night-950/70">Choose your color + variant now. Our team calls you back in under 30 minutes.</p>
              <a
                href="#booking"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-night-950 px-5 py-3 text-[14px] font-black tracking-wide text-white hover:bg-black transition"
              >
                Reserve — 0332 0583940 →
              </a>
              <div className="mt-2 text-center text-[11px] font-semibold tracking-[0.1em] text-night-950/60">NO HIDDEN CHARGES • 100% REFUNDABLE TOKEN</div>
            </div>
          </div>
        </div>
      </section>

      {/* VARIANTS */}
      <section id="variants" className="mx-auto max-w-[1280px] px-4 md:px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[30px] leading-none text-white sm:text-[36px]">
              PICK YOUR <span className="text-beam-400">SWIFT.</span>
            </h2>
            <p className="mt-2 text-[13px] text-white/60">Ex-Karachi prices. Booking at Suzuki Kohat Motors. All prices subject to PBO at delivery.</p>
          </div>
          <div className="text-[11px] font-bold tracking-[0.14em] text-white/50">COMPARE & SELECT • TAP TO CHOOSE</div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveVariant(v.id)}
              className={`relative text-left rounded-[24px] border p-4 transition overflow-hidden ${
                activeVariant === v.id
                  ? "border-beam-400/60 bg-beam-400/[0.08] shadow-[0_0_40px_rgba(124,196,255,0.18)]"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              } ${v.highlight ? "ring-1 ring-white/10" : ""}`}
            >
              {v.highlight && <div className="absolute top-3 right-3 rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-black tracking-[0.12em] text-night-950">MOST BOOKED</div>}
              <div className="text-[11px] font-bold tracking-[0.16em] text-beam-400">{v.badge.toUpperCase()}</div>
              <div className="mt-1 font-display text-[20px] leading-none text-white">{v.name}</div>
              <div className="mt-1 text-[13px] font-semibold text-white/70">
                {v.trans} • {v.engine} • {v.mileage}
              </div>
              <div className="mt-3 inline-flex rounded-full bg-white px-3 py-1.5 text-[13px] font-black text-night-950">{v.price}</div>
              <ul className="mt-4 grid gap-1.5">
                {v.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[12px] text-white/70">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 text-[10px] text-emerald-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div
                className={`mt-4 flex w-full items-center justify-center rounded-full px-4 py-2.5 text-[13px] font-black transition ${
                  activeVariant === v.id ? "bg-beam-400 text-night-950" : "bg-white text-night-950"
                }`}
              >
                {activeVariant === v.id ? "Selected ✓" : "Select Variant"}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-[1280px] px-4 md:px-6 py-10">
        <h2 className="font-display text-center text-[28px] leading-none text-white sm:text-[32px]">EVERY ANGLE. PURE SWIFT.</h2>
        <p className="mx-auto mt-2 max-w-[560px] text-center text-[13px] text-white/60">Studio shots — Kohat roads, Kohat stories. Real car at our Indus Highway showroom.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-night-900">
            <img src={swiftFront} alt="Swift front" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-night-950">Signature LED • Front</div>
          </div>
          <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-night-900 md:translate-y-4">
            <img src={swiftInterior} alt="Swift interior" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-night-950">Floating 9" Display • Cabin</div>
          </div>
          <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-night-900">
            <img src={swiftSide} alt="Swift side" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-night-950">16" Alloys • Side Profile</div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="mx-auto max-w-[1280px] px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-night-900 to-night-950 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-beam-400/20 bg-beam-400/10 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-beam-400">
              <span className="h-1.5 w-1.5 rounded-full bg-beam-400" /> 30-SECOND RESERVATION
            </div>
            <h3 className="font-display mt-3 text-[28px] leading-none text-white">
              RESERVE YOUR <span className="text-beam-400">SWIFT</span>
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-white/60">
              Fill the form — our Kohat team calls you back in ~15 minutes to lock color, variant and delivery priority.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3">
                <div className="text-[11px] tracking-[0.14em] text-white/50">CALL DIRECT</div>
                <a href="tel:+923320583940" className="text-[15px] font-black text-white hover:text-beam-400">
                  0332 0583940
                </a>
              </div>
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3">
                <div className="text-[11px] tracking-[0.14em] text-white/50">VISIT SHOWROOM</div>
                <div className="text-[12px] font-bold leading-tight text-white">Main Indus Highway, near Pindi Pull, Kohat</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-night-950">✓</span>
              <div className="text-[12px] leading-tight text-white">
                <b>100% refundable token</b> • No file charges hidden • Delivery priority list
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white p-6 text-night-950 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!form.name || !form.phone) return;
                  setSubmitted(true);
                  setTimeout(() => setSubmitted(false), 8000);
                }}
                className="grid gap-4"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-[11px] font-bold tracking-[0.14em] text-night-950/60">FULL NAME</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Muhammad Ibrar"
                      className="rounded-xl border border-night-950/10 bg-white px-3 py-3 text-[14px] font-medium text-night-950 placeholder:text-night-950/40 focus:border-beam-400 focus:outline-none focus:ring-2 focus:ring-beam-400/20"
                      required
                    />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-[11px] font-bold tracking-[0.14em] text-night-950/60">PHONE / WHATSAPP</span>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="03XX XXXXXXX"
                      className="rounded-xl border border-night-950/10 bg-white px-3 py-3 text-[14px] font-medium text-night-950 placeholder:text-night-950/40 focus:border-beam-400 focus:outline-none focus:ring-2 focus:ring-beam-400/20"
                      required
                    />
                  </label>
                </div>
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-bold tracking-[0.14em] text-night-950/60">CHOOSE VARIANT</span>
                  <select
                    value={form.variant}
                    onChange={(e) => setForm({ ...form, variant: e.target.value })}
                    className="rounded-xl border border-night-950/10 bg-white px-3 py-3 text-[14px] font-medium text-night-950 focus:border-beam-400 focus:outline-none focus:ring-2 focus:ring-beam-400/20"
                  >
                    <option>GL Manual — PKR 43.36 Lac</option>
                    <option>GL CVT — PKR 45.46 Lac ⭐ Most Booked</option>
                    <option>GLX CVT — PKR 49.19 Lac</option>
                  </select>
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-bold tracking-[0.14em] text-night-950/60">COLOR PREFERENCE</span>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {colors.map((c) => (
                      <span
                        key={c.id}
                        className="inline-flex items-center gap-2 rounded-full border border-night-950/10 px-3 py-2 text-[12px] font-semibold"
                      >
                        <span className="h-3 w-3 rounded-full border border-black/10" style={{ background: c.hex }} />
                        {c.label.split(" ")[0]}
                      </span>
                    ))}
                  </div>
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-night-950 px-6 py-3.5 text-[14px] font-black tracking-wide text-white hover:bg-black transition btn-beam"
                >
                  Confirm Booking Request →
                </button>
                <div className="text-center text-[11px] leading-4 text-night-950/50">
                  By submitting, you agree our team may call/WhatsApp you about Swift availability. No spam. <br />
                  Or call directly:{" "}
                  <a href="tel:+923320583940" className="font-bold text-night-950 underline">
                    0332 0583940
                  </a>
                </div>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid place-items-center py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white text-[22px]">✓</div>
                <h4 className="font-display mt-4 text-[22px] leading-none text-night-950">BOOKING REQUEST RECEIVED!</h4>
                <p className="mt-2 max-w-[380px] text-[13px] leading-5 text-night-950/60">
                  Shukriya, {form.name || "Swift lover"}! Our Kohat team will call you at <b className="text-night-950">{form.phone || "your number"}</b> within 15-30
                  minutes for {form.variant}.
                </p>
                <div className="mt-4 grid w-full gap-2">
                  <a
                    href="tel:+923320583940"
                    className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-[14px] font-black text-white"
                  >
                    Call Now to Fast-Track →
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-night-950/10 px-6 py-3 text-[13px] font-bold text-night-950"
                  >
                    Book Another Variant
                  </button>
                </div>
                <div className="mt-3 text-[11px] text-night-950/50">Visit: Main Indus Highway near Pindi Pull, Kohat</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-night-900/40">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-night-950 font-display text-[18px]">S</div>
                <div className="leading-none">
                  <div className="font-condensed text-[15px] font-bold tracking-[0.14em] text-white">SUZUKI KOHAT MOTORS</div>
                  <div className="text-[11px] tracking-[0.16em] text-white/50">AUTHORIZED 3S DEALER</div>
                </div>
              </div>
              <p className="mt-3 max-w-[420px] text-[12px] leading-5 text-white/60">
                Official Suzuki dealership for Kohat Division. Sales, Service & Genuine Parts. All New Swift booking, test drive & exchange available.
              </p>
              <div className="mt-4 inline-flex flex-wrap gap-2 text-[11px] font-bold tracking-[0.12em]">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-white/70">Mon–Sat 9AM–7PM</span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-white/70">Sun 10AM–5PM</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.16em] text-white/50">CONTACT</div>
              <div className="mt-3 grid gap-2 text-[13px] leading-5 text-white/80">
                <a href="tel:+923320583940" className="font-black text-white hover:text-beam-400">
                  0332 0583940
                </a>
                <div>Main Indus Highway, near Pindi Pull, Kohat, KPK</div>
                <a href="https://wa.me/923320583940" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[12px] font-bold text-white">
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.16em] text-white/50">QUICK LINKS</div>
              <div className="mt-3 grid gap-2 text-[13px] text-white/70">
                <a href="#colors" className="hover:text-white">
                  Color Lab
                </a>
                <a href="#variants" className="hover:text-white">
                  Variants & Pricing
                </a>
                <a href="#gallery" className="hover:text-white">
                  Gallery
                </a>
                <a href="#booking" className="hover:text-white">
                  Reserve
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] tracking-[0.12em] text-white/40">
            <span>© {new Date().getFullYear()} Suzuki Kohat Motors. All rights reserved. Prices as per Pak Suzuki PBO.</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-beam-400" /> BOOKING OPEN — SWIFT
            </span>
          </div>
        </div>
      </footer>

      {/* Fixed bottom bar on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-night-950/95 p-3 backdrop-blur md:hidden">
        <div className="flex gap-2">
          <a href="tel:+923320583940" className="flex-1 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-[14px] font-black text-night-950">
            Call 0332 0583940
          </a>
          <a href="#booking" className="flex-1 inline-flex items-center justify-center rounded-full bg-beam-400 px-4 py-3 text-[14px] font-black text-night-950">
            Reserve
          </a>
        </div>
      </div>
    </div>
  );
}
