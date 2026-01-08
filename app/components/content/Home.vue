<script setup lang="ts">
import { ref } from 'vue'

const localePath = useLocalePath()
const mode = ref<'Roughness' | 'Deformation' | 'Risk'>('Roughness')

const products = [
  {
    title: 'Road Roughness Estimation',
    insight: 'Detects network-wide roughness trends before complaints arise.',
    href: '/products/road-roughness',
    image: '/products/road-roughness.png',
    art: 'roughness',
  },
  {
    title: 'Deformation & Subsidence Mapping',
    insight: 'Identifies early ground movement that can affect long-term road stability.',
    href: '/products/deformation',
    image: '/products/deformation-subsidence.png',
    art: 'deformation',
  },
  {
    title: 'Lane Markings Visibility Monitoring',
    insight: 'Tracks marking clarity to support night-time safety and compliance.',
    href: '/products/lane-markings',
    image: '/products/lane-markings.png',
    art: 'lanes',
  },
  {
    title: 'Pavement Deterioration Early Warning',
    insight: 'Flags subtle pre-failure signals before defects become hazards.',
    href: '/products/early-warning',
    image: '/products/pavement-early-warning.png',
    art: 'warning',
  },
]

</script>

<template>
  <div id="top" class="space-y-0">
    <!-- SECTION 1: Landing -->
    <section class="relative min-h-screen flex items-center ">
    <div class="heroGlobeStatic" aria-hidden="true"></div>
    <!--<section class="relative pt-10 min-h-screen flex items-center py-16 ">-->
      <div class="mx-auto max-w-6xl px-5">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <!-- Logo / brand -->
            <div class="flex items-center gap-3">
              <!-- If you uploaded a logo: uncomment this -->
              <!-- <img src="/assets/wegtrax-logo.svg" alt="WEGtrax logo" class="h-10 w-10" /> -->
              <div class="h-10 w-10 rounded-lg" style="background: var(--bg-card-hover);" />
              <div class="leading-tight">
                <div class="text-lg font-semibold" style="color: var(--font-primary);">WEGtrax</div>
                <div class="text-xs" style="color: var(--font-muted);">Satellite + AI for infrastructure</div>
              </div>
            </div>

            <h1 class="mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl" style="color: var(--font-primary);">
              Road condition intelligence — at national scale
            </h1>

            <p class="mt-4 max-w-xl text-base sm:text-lg" style="color: var(--font-muted);">
              Monitor road quality continuously and consistently — without vehicle surveys, sensors, or disruption.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <a href="#how" class="rounded-md px-5 py-3 text-sm font-medium"
                 style="background: var(--bg-card-hover); color: var(--font-primary);">
                See how it works
              </a>
              <a href="#products" class="rounded-md px-5 py-3 text-sm font-medium"
                 style="border: 1px solid var(--border-primary); color: var(--font-primary);">
                What we do today
              </a>
            </div>
          </div>

          <!-- Interactive map mock -->
          <div class="rounded-2xl p-5"
               style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="text-sm" style="color: var(--font-muted);">National network view (mock)</div>

              <div class="flex gap-2">
                <button
                  class="rounded-full px-3 py-1 text-xs"
                  :style="mode==='Roughness'
                    ? 'border:1px solid var(--border-primary-hover); background: rgba(252,248,248,0.06); color: var(--font-primary);'
                    : 'border:1px solid var(--border-primary); background: transparent; color: rgba(252,248,248,0.7);'"
                  @mouseenter="mode='Roughness'"
                  @click="mode='Roughness'"
                >Roughness</button>

                <button
                  class="rounded-full px-3 py-1 text-xs"
                  :style="mode==='Deformation'
                    ? 'border:1px solid var(--border-primary-hover); background: rgba(252,248,248,0.06); color: var(--font-primary);'
                    : 'border:1px solid var(--border-primary); background: transparent; color: rgba(252,248,248,0.7);'"
                  @mouseenter="mode='Deformation'"
                  @click="mode='Deformation'"
                >Deformation</button>

                <button
                  class="rounded-full px-3 py-1 text-xs"
                  :style="mode==='Risk'
                    ? 'border:1px solid var(--border-primary-hover); background: rgba(252,248,248,0.06); color: var(--font-primary);'
                    : 'border:1px solid var(--border-primary); background: transparent; color: rgba(252,248,248,0.7);'"
                  @mouseenter="mode='Risk'"
                  @click="mode='Risk'"
                >Risk</button>
              </div>
            </div>

            <div class="relative mt-4 overflow-hidden rounded-xl"
                 style="background:#001217; border: 1px solid var(--border-muted);">
              <div class="h-64">
                <!-- “roads” -->
                <div class="absolute left-8 top-12 h-1 w-[70%] rotate-[8deg] rounded-full" style="background: rgba(252,248,248,0.12);" />
                <div class="absolute left-16 top-28 h-1 w-[60%] -rotate-[12deg] rounded-full" style="background: rgba(252,248,248,0.12);" />
                <div class="absolute left-10 top-44 h-1 w-[75%] rotate-[2deg] rounded-full" style="background: rgba(252,248,248,0.12);" />

                <!-- mode label -->
                <div class="absolute right-4 top-4 rounded-md px-3 py-2 text-xs"
                     style="border: 1px solid var(--border-muted); background: rgba(252,248,248,0.04); color: var(--font-muted);">
                  Hover mode: <span style="color: var(--font-primary);">{{ mode }}</span>
                </div>

                <!-- points -->
                <template v-if="mode==='Roughness'">
                  <div class="absolute left-[22%] top-[34%] h-3 w-3 rounded-full" style="background:#E2DCDE;" />
                  <div class="absolute left-[46%] top-[55%] h-3 w-3 rounded-full" style="background:#E2DCDE;" />
                  <div class="absolute left-[63%] top-[40%] h-3 w-3 rounded-full" style="background:#E2DCDE;" />
                </template>

                <template v-else-if="mode==='Deformation'">
                  <div class="absolute left-[28%] top-[30%] h-3 w-3 rounded-full" style="background:#20504C;" />
                  <div class="absolute left-[52%] top-[58%] h-3 w-3 rounded-full" style="background:#20504C;" />
                  <div class="absolute left-[70%] top-[45%] h-3 w-3 rounded-full" style="background:#20504C;" />
                </template>

                <template v-else>
                  <div class="absolute left-[18%] top-[38%] h-3 w-3 rounded-full" style="background:#FCF8F8;" />
                  <div class="absolute left-[44%] top-[60%] h-3 w-3 rounded-full" style="background:#FCF8F8;" />
                  <div class="absolute left-[60%] top-[42%] h-3 w-3 rounded-full" style="background:#FCF8F8;" />
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   <!-- SECTION 2: Writings / Why different -->
<section id="writings" class="relative min-h-screen flex items-center">
  <div class="mx-auto w-full max-w-6xl px-5 py-20">

    <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
      <!-- LEFT -->
      <div>
        <p class="text-sm tracking-wide text-white/60">Writings</p>

        <h2 class="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Traditional road monitoring happens <span class="text-white/70">on the road.</span><br />
          <span class="text-white">WEGtrax does not.</span>
        </h2>

        <p class="mt-4 max-w-xl text-white/70">
          We use satellite radar to observe the network frequently, detect surface response, and translate patterns into degradation signals.
        </p>

        <div class="mt-8 grid gap-4">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div class="flex items-start gap-4">
              <div class="mt-1 h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span class="text-white/80 text-lg">🛰️</span>
              </div>
              <div>
                <div class="text-white font-medium">Satellites already observe every road</div>
                <div class="mt-1 text-sm text-white/60">
                  Frequent coverage across regions — even where surveys are hard to run.
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div class="flex items-start gap-4">
              <div class="mt-1 h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span class="text-white/80 text-lg">📡</span>
              </div>
              <div>
                <div class="text-white font-medium">Radar responds to surface properties</div>
                <div class="mt-1 text-sm text-white/60">
                  Signal changes reflect texture/structure differences in the surface.
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div class="flex items-start gap-4">
              <div class="mt-1 h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span class="text-white/80 text-lg">📈</span>
              </div>
              <div>
                <div class="text-white font-medium">Patterns correlate with degradation</div>
                <div class="mt-1 text-sm text-white/60">
                  AI converts patterns into insights for prioritization and planning.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Illustration panel -->
      <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div class="text-sm text-white/70">How the signal becomes insight (mock)</div>

        <div class="mt-4 rounded-2xl border border-white/10 bg-[#001217] p-5">
          <div class="flex items-center justify-between text-xs text-white/60">
            <span>Road network</span>
            <span>Satellite passes</span>
          </div>

          <div class="mt-4 h-44 rounded-xl bg-black/20 relative overflow-hidden">
            <div class="absolute left-6 top-8 h-1 w-2/3 bg-white/10 rounded"></div>
            <div class="absolute left-10 top-20 h-1 w-3/4 bg-white/10 rounded"></div>
            <div class="absolute left-16 top-32 h-1 w-1/2 bg-white/10 rounded"></div>

            <div class="absolute left-20 top-14 h-3 w-3 rounded-full bg-white/70"></div>
            <div class="absolute left-56 top-24 h-3 w-3 rounded-full bg-white/70"></div>
            <div class="absolute left-40 top-34 h-3 w-3 rounded-full bg-white/70"></div>

            <div class="absolute right-4 top-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              Detect change → flag segments
            </div>
          </div>

          <div class="mt-4 grid grid-cols-3 gap-2 text-xs">
            <div class="rounded-lg bg-white/5 border border-white/10 p-2 text-white/70">Observe</div>
            <div class="rounded-lg bg-white/5 border border-white/10 p-2 text-white/70">Interpret</div>
            <div class="rounded-lg bg-white/5 border border-white/10 p-2 text-white/70">Prioritize</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


    <!-- SECTION 3: How it works (visual flow) -->
<section id="how" class="relative min-h-screen flex items-center" style="border-top: 1px solid var(--border-muted);">
  <div class="mx-auto w-full max-w-6xl px-5 py-20">

    <!-- Left headline -->
    <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
      <div>
        <p class="text-sm tracking-wide" style="color: rgba(252,248,248,0.6);">
          From satellite signal to road intelligence
        </p>

        <h2 class="mt-3 text-3xl font-semibold sm:text-4xl" style="color: var(--font-primary);">
          A simple end-to-end flow that turns satellite signals into actionable road intelligence.
        </h2>

        <p class="mt-4 max-w-xl" style="color: var(--font-muted);">
          Designed to be calm, visual, and non-distracting — with subtle motion and hover explanations.
        </p>
      </div>

      <!-- Right visual cards -->
      <div class="grid gap-4 sm:grid-cols-2">

        <!-- STEP 1 -->
        <div class="group rounded-2xl p-5 relative overflow-hidden"
             style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
          <div class="text-xs" style="color: rgba(252,248,248,0.6);">Step 1</div>
          <div class="mt-1 text-lg font-semibold" style="color: var(--font-primary);">Data capture (Orbit)</div>

          <!-- Illustration box -->
          <div class="mt-4 rounded-xl relative h-36 overflow-hidden"
               style="background:#001217; border:1px solid rgba(252,248,248,0.10);">
            <!-- Earth curve -->
            <div class="absolute left-[-20%] bottom-[-40%] w-[140%] h-[120%] rounded-[999px]"
                 style="border: 1px solid rgba(252,248,248,0.10);"></div>

            <!-- Satellite -->
            <div class="absolute left-5 top-5 flex items-center gap-2">
              <div class="h-4 w-6 rounded-sm" style="background: rgba(252,248,248,0.18);"></div>
              <div class="h-1 w-5" style="background: rgba(252,248,248,0.18);"></div>
            </div>

            <!-- Scan arc (on hover) -->
            <div class="absolute left-4 top-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition"
                 style="border: 1px solid rgba(32, 80, 76, 0.45); filter: blur(0.2px);"></div>

            <!-- Slow falling dots -->
            <div class="dot dot1"></div>
            <div class="dot dot2"></div>
            <div class="dot dot3"></div>
          </div>

          <!-- Tooltip -->
          <div class="mt-3 text-sm opacity-0 group-hover:opacity-100 transition"
               style="color: rgba(252,248,248,0.75);">
            Consistent, network-wide observation
          </div>
        </div>

        <!-- STEP 2 -->
        <div class="group rounded-2xl p-5 relative overflow-hidden"
             style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
          <div class="text-xs" style="color: rgba(252,248,248,0.6);">Step 2</div>
          <div class="mt-1 text-lg font-semibold" style="color: var(--font-primary);">Signal processing (Filtering)</div>

          <div class="mt-4 rounded-xl relative h-36 overflow-hidden"
               style="background:#001217; border:1px solid rgba(252,248,248,0.10);">

            <!-- Grid -->
            <div class="absolute inset-0 grid-layer"></div>
            <div class="absolute inset-0 grid-layer bright"></div>

            <!-- Dots passing through -->
            <div class="filter-dot fd1"></div>
            <div class="filter-dot fd2"></div>
            <div class="filter-dot fd3"></div>
            <div class="filter-dot fd4"></div>
          </div>

          <div class="mt-3 text-sm opacity-0 group-hover:opacity-100 transition"
               style="color: rgba(252,248,248,0.75);">
            Noise reduced. Stable indicators retained.
          </div>
        </div>

        <!-- STEP 3 -->
        <div class="group rounded-2xl p-5 relative overflow-hidden"
             style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
          <div class="text-xs" style="color: rgba(252,248,248,0.6);">Step 3</div>
          <div class="mt-1 text-lg font-semibold" style="color: var(--font-primary);">AI interpretation</div>

          <div class="mt-4 rounded-xl relative h-36 overflow-hidden"
               style="background:#001217; border:1px solid rgba(252,248,248,0.10);">

            <!-- Abstract node form -->
            <div class="absolute left-6 top-6 node n1"></div>
            <div class="absolute left-16 top-14 node n2"></div>
            <div class="absolute left-28 top-8 node n3"></div>
            <div class="absolute left-36 top-18 node n4"></div>
            <div class="absolute left-22 top-26 node n5"></div>

            <!-- Connections -->
            <div class="absolute left-10 top-12 link l1"></div>
            <div class="absolute left-18 top-18 link l2"></div>
            <div class="absolute left-30 top-12 link l3"></div>
            <div class="absolute left-26 top-24 link l4"></div>
          </div>

          <div class="mt-3 text-sm opacity-0 group-hover:opacity-100 transition"
               style="color: rgba(252,248,248,0.75);">
            Patterns translated into condition intelligence.
          </div>
        </div>

        <!-- STEP 4 -->
        <div class="group rounded-2xl p-5 relative overflow-hidden"
             style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
          <div class="text-xs" style="color: rgba(252,248,248,0.6);">Step 4</div>
          <div class="mt-1 text-lg font-semibold" style="color: var(--font-primary);">Insight delivery</div>

          <div class="mt-4 rounded-xl relative h-36 overflow-hidden"
               style="background:#001217; border:1px solid rgba(252,248,248,0.10);">

            <!-- Road lines -->
            <div class="absolute left-6 top-10 h-1 w-[75%] rounded-full road"></div>
            <div class="absolute left-10 top-18 h-1 w-[65%] rounded-full road"></div>
            <div class="absolute left-8 top-26 h-1 w-[80%] rounded-full road"></div>

            <!-- Highlight segment on hover -->
            <div class="absolute left-28 top-18 h-1 w-24 rounded-full segment"></div>

            <!-- Tiny dashboard icon -->
            <div class="absolute right-4 bottom-4 h-8 w-10 rounded-lg dash"></div>
            <div class="absolute right-6 bottom-6 h-1 w-6 rounded" style="background: rgba(252,248,248,0.12);"></div>
            <div class="absolute right-6 bottom-4 h-1 w-4 rounded" style="background: rgba(252,248,248,0.10);"></div>
          </div>

          <div class="mt-3 text-sm opacity-0 group-hover:opacity-100 transition"
               style="color: rgba(252,248,248,0.75);">
            Action-ready insights for planning & prioritization.
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- Add these styles at the bottom of Home.vue (or in your global css) -->
<style scoped>
/* Step 1: slow dots */
.dot{
  position:absolute;
  width:10px; height:10px;
  border-radius:999px;
  background: rgba(252,248,248,0.70);
  top:-12px;
  animation: fall 7s linear infinite;
  opacity: 0.9;
}
.dot1{ left: 40%; animation-delay: 0s; }
.dot2{ left: 55%; animation-delay: 2.3s; opacity: 0.65; }
.dot3{ left: 70%; animation-delay: 4.6s; opacity: 0.55; }

@keyframes fall{
  0%{ transform: translateY(0); }
  100%{ transform: translateY(165px); }
}

/* Step 2: grid + filtering */
.grid-layer{
  position:absolute;
  inset:0;
  background-image:
    linear-gradient(rgba(252,248,248,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(252,248,248,0.06) 1px, transparent 1px);
  background-size: 22px 22px;
  opacity: 0.55;
}
.grid-layer.bright{
  opacity: 0;
  transition: opacity 250ms ease;
}
.group:hover .grid-layer.bright{
  opacity: 0.35;
}

.filter-dot{
  position:absolute;
  width:10px; height:10px;
  border-radius:999px;
  background: rgba(252,248,248,0.65);
  animation: filterMove 6.8s ease-in-out infinite;
}
.fd1{ left: 20%; top: 12%; animation-delay: 0s; }
.fd2{ left: 42%; top: 18%; animation-delay: 1.7s; opacity: 0.55; }
.fd3{ left: 58%; top: 10%; animation-delay: 3.4s; opacity: 0.45; }
.fd4{ left: 75%; top: 16%; animation-delay: 5.1s; opacity: 0.35; }

@keyframes filterMove{
  0%{ transform: translateY(0) scale(1); filter: blur(0px); opacity: 0.55; }
  55%{ transform: translateY(65px) scale(0.92); filter: blur(0.3px); opacity: 0.35; }
  100%{ transform: translateY(140px) scale(0.88); filter: blur(0.2px); opacity: 0.25; }
}

/* Step 3: abstract nodes (muted teal only) */
.node{
  width: 10px; height: 10px; border-radius: 999px;
  background: rgba(252,248,248,0.22);
  border: 1px solid rgba(252,248,248,0.12);
}
.link{
  height: 2px;
  background: rgba(252,248,248,0.10);
  border-radius: 999px;
  transform-origin: left center;
}
.l1{ width: 90px; transform: rotate(12deg); }
.l2{ width: 80px; transform: rotate(-8deg); }
.l3{ width: 70px; transform: rotate(18deg); }
.l4{ width: 95px; transform: rotate(-14deg); }

.group:hover .node{
  animation: nodePulse 0.9s ease-in-out 1;
  border-color: rgba(32,80,76,0.55);
}
@keyframes nodePulse{
  0%{ background: rgba(252,248,248,0.20); }
  45%{ background: rgba(32,80,76,0.35); }
  100%{ background: rgba(252,248,248,0.20); }
}

/* Step 4: road + subtle highlight */
.road{
  background: rgba(252,248,248,0.10);
}
.segment{
  background: rgba(32,80,76,0.20);
  border: 1px solid rgba(32,80,76,0.35);
  opacity: 0;
  transition: opacity 250ms ease;
}
.group:hover .segment{
  opacity: 1;
}

.dash{
  border: 1px solid rgba(252,248,248,0.10);
  background: rgba(252,248,248,0.04);
}

/* Taller cards with breathing room */
.product-tile {
  min-height: 440px;
  transform: translateY(0);
  transition: transform 250ms ease, border-color 250ms ease;
}

/* Image area: top ~58% */
.product-media {
  height: 58%;
  min-height: 250px;
  background: #012028;
}

/* Muted by default */
.product-img {
  filter: grayscale(0.15) contrast(0.95) saturate(0.9);
  transition: filter 900ms ease, opacity 250ms ease;
}

/* Overlay to “calm” visuals */
.product-overlay {
  background: linear-gradient(
    180deg,
    rgba(1, 32, 40, 0.25),
    rgba(1, 32, 40, 0.55)
  );
  transition: opacity 250ms ease;
  opacity: 1;
}

/* The highlighted “signal” exists but hidden until hover */
.signal {
  opacity: 0;
  transition: opacity 350ms ease;
}

/* CTA hidden until hover */
.product-cta {
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 250ms ease, transform 250ms ease;
}

/* Hover: lift + sharpen + signal appears + CTA fades in */
.product-tile:hover {
  transform: translateY(-4px);
  border-color: rgba(252, 248, 248, 0.18);
}

.product-tile:hover .product-img {
  filter: grayscale(0) contrast(1.05) saturate(1);
  opacity: 0.9;
}

.product-tile:hover .signal {
  opacity: 1;
}

.product-tile:hover .product-cta {
  opacity: 1;
  transform: translateY(0);
}

.heroGlobeStatic{
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;              /* behind your content */
  opacity: 0.22;           /* overall softness */
  background-image: url("/hero/globe-static.png");
  background-repeat: no-repeat;
  background-size: clamp(520px, 60vw, 980px);
  background-position: left -180px center; /* pushes it off-screen like your example */
  filter: saturate(0.9) contrast(1.05);
}

/* Make it blend smoothly into your existing background */
.heroGlobeStatic::after{
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 28% 50%,
    rgba(1,32,40,0.0) 0%,
    rgba(1,32,40,0.0) 52%,
    rgba(1,32,40,0.75) 72%,
    rgba(1,32,40,1.0) 100%
  );
}

</style>


    <!--  : Products -->
<section
  id="products"
  class="mx-auto max-w-6xl px-5 min-h-screen flex items-center py-16"
  style="border-top: 1px solid var(--border-muted); padding-top: 64px;"
>
  <div class="w-full">
    <h2 class="text-2xl font-semibold sm:text-3xl" style="color: var(--font-primary);">
      What WEGtrax monitors — continuously
    </h2>
    <p class="mt-3 max-w-2xl" style="color: var(--font-muted);">
      Signal-based intelligence for proactive infrastructure decisions.
    </p>

    <!-- 1 x 4 grid (desktop), stacked on mobile -->
    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <NuxtLink
        v-for="p in products"
        :key="p.title"
        :to="localePath(p.href)"
        class="product-tile group block rounded-2xl overflow-hidden"
        :aria-label="`View details for ${p.title}`"
        style="background: var(--bg-secondary); border: 1px solid var(--border-primary);"
      >
        <!-- IMAGE (top 55-60%) -->
        <div class="product-media relative">
          <!-- If the image exists, browser shows it. If not, fallback SVG still shows under it. -->
          <img
            :src="p.image"
            alt=""
            class="product-img absolute inset-0 h-full w-full object-cover opacity-70"
            loading="lazy"
            @error="(e) => ((e.target as HTMLImageElement).style.display = 'none')"
          />

          <!-- SVG fallback background (always rendered, image sits on top if present) -->
          <div class="absolute inset-0">
            <!-- Roughness -->
            <svg v-if="p.art==='roughness'" viewBox="0 0 560 360" class="h-full w-full">
              <rect width="560" height="360" fill="#012028" />
              <path d="M40 250 C120 170, 200 290, 280 210 C360 130, 440 290, 520 190"
                    fill="none" stroke="rgba(252,248,248,0.16)" stroke-width="10" stroke-linecap="round"/>
              <path class="signal"
                    d="M40 250 C120 170, 200 290, 280 210 C360 130, 440 290, 520 190"
                    fill="none" stroke="rgba(0,86,23,0.75)" stroke-width="6" stroke-linecap="round"
                    stroke-dasharray="16 14"/>
              <circle cx="210" cy="250" r="10" fill="rgba(0,86,23,0.45)"/>
              <circle cx="360" cy="195" r="10" fill="rgba(0,86,23,0.45)"/>
            </svg>

            <!-- Deformation -->
            <svg v-else-if="p.art==='deformation'" viewBox="0 0 560 360" class="h-full w-full">
              <rect width="560" height="360" fill="#012028" />
              <path d="M80 120 L480 120" stroke="rgba(252,248,248,0.14)" stroke-width="12" stroke-linecap="round"/>
              <path d="M80 230 L480 230" stroke="rgba(252,248,248,0.10)" stroke-width="12" stroke-linecap="round"/>
              <path class="signal" d="M280 70 L280 300" stroke="rgba(0,86,23,0.70)" stroke-width="6" stroke-dasharray="14 14"/>
              <path d="M200 120 C250 145, 310 95, 360 120" fill="none" stroke="rgba(0,86,23,0.40)" stroke-width="8"/>
            </svg>

            <!-- Lane markings -->
            <svg v-else-if="p.art==='lanes'" viewBox="0 0 560 360" class="h-full w-full">
              <rect width="560" height="360" fill="#012028" />
              <path d="M190 40 L90 360" stroke="rgba(252,248,248,0.12)" stroke-width="12" stroke-linecap="round"/>
              <path d="M370 40 L470 360" stroke="rgba(252,248,248,0.12)" stroke-width="12" stroke-linecap="round"/>
              <path d="M280 60 L280 340" stroke="rgba(252,248,248,0.10)" stroke-width="8" stroke-dasharray="18 16" stroke-linecap="round"/>
              <path class="signal" d="M280 60 L280 340" stroke="rgba(0,86,23,0.65)" stroke-width="8" stroke-dasharray="24 22" stroke-linecap="round"/>
            </svg>

            <!-- Early warning -->
            <svg v-else viewBox="0 0 560 360" class="h-full w-full">
              <rect width="560" height="360" fill="#012028" />
              <path d="M70 270 L490 270" stroke="rgba(252,248,248,0.13)" stroke-width="14" stroke-linecap="round"/>
              <path d="M160 270 Q220 230 280 270 T400 270" fill="none" stroke="rgba(252,248,248,0.10)" stroke-width="8"/>
              <path d="M280 120 L230 235 L330 235 Z" fill="rgba(0,86,23,0.18)" stroke="rgba(0,86,23,0.55)" stroke-width="6"/>
              <path class="signal" d="M280 155 L280 205" stroke="rgba(252,248,248,0.55)" stroke-width="10" stroke-linecap="round"/>
              <circle class="signal" cx="280" cy="225" r="8" fill="rgba(252,248,248,0.55)"/>
            </svg>
          </div>

          <!-- Subtle overlay to keep it “muted” by default -->
          <div class="absolute inset-0 product-overlay" />
        </div>

        <!-- TEXT -->
        <div class="p-5">
          <div class="text-base font-semibold" style="color: var(--font-primary);">
            {{ p.title }}
          </div>
          <div class="mt-2 text-sm" style="color: rgba(252,248,248,0.75);">
            {{ p.insight }}
          </div>

          <!-- View details (appears on hover) -->
          <div class="mt-4 text-sm product-cta" style="color: rgba(252,248,248,0.85);">
            View details →
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</section>

    <!-- SECTION 5: Impact (NEW Editorial Layout) -->
<section
  id="impact"
  class="mx-auto max-w-6xl px-5 min-h-screen flex items-center py-16"
  style="border-top: 1px solid var(--border-muted); padding-top: 64px;"
>
  <div class="w-full grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
    <!-- LEFT ANCHOR PANEL -->
    <div
      class="rounded-2xl overflow-hidden"
      style="background: var(--bg-secondary); border: 1px solid var(--border-primary);"
    >
      <div class="p-7 sm:p-8">
        <h2 class="text-2xl font-semibold sm:text-3xl" style="color: var(--font-primary);">
          Impact
        </h2>

        <p class="mt-3 max-w-md" style="color: var(--font-muted);">
          What continuous, satellite-based monitoring enables at scale.
        </p>
      </div>

      <!-- Calm infrastructure vignette (SVG illustration) -->
      <div class="relative h-56 sm:h-64">
        <svg viewBox="0 0 900 420" class="absolute inset-0 h-full w-full">
          <!-- background -->
          <rect width="900" height="420" fill="#012028" />

          <!-- distant haze -->
          <path d="M0 140 C200 80, 700 80, 900 140 L900 420 L0 420 Z"
                fill="rgba(252,248,248,0.04)"/>

          <!-- corridor / road fading -->
          <path d="M420 70 L330 420" stroke="rgba(252,248,248,0.12)" stroke-width="26" stroke-linecap="round"/>
          <path d="M480 70 L570 420" stroke="rgba(252,248,248,0.12)" stroke-width="26" stroke-linecap="round"/>

          <!-- center dashed -->
          <path d="M450 80 L450 420" stroke="rgba(252,248,248,0.10)" stroke-width="8"
                stroke-dasharray="18 18" stroke-linecap="round"/>

          <!-- subtle signal lines sweeping over corridor -->
          <path d="M120 170 C260 120, 640 120, 780 170" fill="none"
                stroke="rgba(0,86,23,0.35)" stroke-width="8" stroke-linecap="round"/>
          <path d="M140 220 C280 170, 620 170, 760 220" fill="none"
                stroke="rgba(0,86,23,0.25)" stroke-width="8" stroke-linecap="round"/>
          <path d="M160 270 C300 220, 600 220, 740 270" fill="none"
                stroke="rgba(0,86,23,0.18)" stroke-width="8" stroke-linecap="round"/>
        </svg>

        <!-- quote overlay -->
        <div
          class="absolute left-6 bottom-6 right-6 rounded-xl px-4 py-3"
          style="border: 1px solid rgba(252,248,248,0.10); background: rgba(0,18,23,0.55);"
        >
          <div class="text-sm sm:text-base" style="color: rgba(252,248,248,0.90);">
            “From reactive repairs to informed decisions.”
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT METRICS COLUMN -->
    <div class="space-y-4">
      <!-- Metric 1 -->
      <div class="impact-metric rounded-2xl p-6 sm:p-7"
           style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
        <div class="flex items-start gap-4">
          <div class="impact-icon">
            <!-- Network expanding icon -->
            <svg viewBox="0 0 64 64" class="h-8 w-8">
              <circle cx="18" cy="32" r="5" fill="rgba(252,248,248,0.55)"/>
              <circle cx="46" cy="18" r="5" fill="rgba(252,248,248,0.35)"/>
              <circle cx="46" cy="46" r="5" fill="rgba(252,248,248,0.35)"/>
              <path d="M22 30 L41 20" stroke="rgba(0,86,23,0.55)" stroke-width="3" stroke-linecap="round"/>
              <path d="M22 34 L41 44" stroke="rgba(0,86,23,0.55)" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="flex-1">
            <div class="text-xs uppercase tracking-wide" style="color: rgba(252,248,248,0.55);">
              Since deployment
            </div>
            <div class="mt-2 text-xl sm:text-2xl font-semibold impact-strong" style="color: var(--font-primary);">
              From corridor-level pilots to national coverage
            </div>
            <div class="mt-2 text-sm sm:text-base" style="color: var(--font-muted);">
              without changing monitoring effort.
            </div>

            
          </div>
        </div>
      </div>

      <!-- Metric 2 -->
      <div class="impact-metric rounded-2xl p-6 sm:p-7"
           style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
        <div class="flex items-start gap-4">
          <div class="impact-icon">
            <!-- Fewer vehicle paths -->
            <svg viewBox="0 0 64 64" class="h-8 w-8">
              <path d="M14 46 C20 34, 28 28, 36 22" stroke="rgba(252,248,248,0.45)" stroke-width="4" stroke-linecap="round"/>
              <path d="M18 50 C26 36, 34 30, 44 22" stroke="rgba(252,248,248,0.20)" stroke-width="4" stroke-linecap="round"/>
              <path d="M22 52 C32 38, 40 32, 50 24" stroke="rgba(252,248,248,0.12)" stroke-width="4" stroke-linecap="round"/>
              <circle cx="44" cy="20" r="4" fill="rgba(0,86,23,0.45)"/>
            </svg>
          </div>

          <div class="flex-1">
            <div class="text-xs uppercase tracking-wide" style="color: rgba(252,248,248,0.55);">
              Measured outcome
            </div>
            <div class="mt-2 text-xl sm:text-2xl font-semibold impact-strong" style="color: var(--font-primary);">
              Reduced field vehicle surveys
            </div>
            <div class="mt-2 text-sm sm:text-base" style="color: var(--font-muted);">
              and lower operational footprint.
              <span class="block mt-2" style="color: rgba(252,248,248,0.55);">
                (Up to X% fewer field inspections — replace when validated)
              </span>
            </div>

            
          </div>
        </div>
      </div>

      <!-- Metric 3 -->
      <div class="impact-metric rounded-2xl p-6 sm:p-7"
           style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
        <div class="flex items-start gap-4">
          <div class="impact-icon">
            <!-- Continuous signal wave -->
            <svg viewBox="0 0 64 64" class="h-8 w-8">
              <path d="M8 34 C14 26, 18 26, 24 34 C30 42, 34 42, 40 34 C46 26, 50 26, 56 34"
                    fill="none" stroke="rgba(0,86,23,0.55)" stroke-width="4" stroke-linecap="round"/>
              <path d="M10 44 L54 44" stroke="rgba(252,248,248,0.18)" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="flex-1">
            <div class="text-xs uppercase tracking-wide" style="color: rgba(252,248,248,0.55);">
              Measured outcome
            </div>
            <div class="mt-2 text-xl sm:text-2xl font-semibold impact-strong" style="color: var(--font-primary);">
              Continuous updates
            </div>
            <div class="mt-2 text-sm sm:text-base" style="color: var(--font-muted);">
              instead of episodic measurements.
            </div>

            
          </div>
        </div>
      </div>

      <!-- Metric 4 -->
      <div class="impact-metric rounded-2xl p-6 sm:p-7"
           style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
        <div class="flex items-start gap-4">
          <div class="impact-icon">
            <!-- Timeline / early intervention -->
            <svg viewBox="0 0 64 64" class="h-8 w-8">
              <path d="M10 40 L54 40" stroke="rgba(252,248,248,0.22)" stroke-width="4" stroke-linecap="round"/>
              <circle cx="22" cy="40" r="5" fill="rgba(0,86,23,0.45)"/>
              <circle cx="42" cy="40" r="5" fill="rgba(252,248,248,0.20)"/>
              <path d="M22 40 L42 40" stroke="rgba(0,86,23,0.45)" stroke-width="4" stroke-linecap="round"/>
              <path d="M18 26 L26 26" stroke="rgba(252,248,248,0.30)" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="flex-1">
            <div class="text-xs uppercase tracking-wide" style="color: rgba(252,248,248,0.55);">
              Measured outcome
            </div>
            <div class="mt-2 text-xl sm:text-2xl font-semibold impact-strong" style="color: var(--font-primary);">
              Earlier intervention
            </div>
            <div class="mt-2 text-sm sm:text-base" style="color: var(--font-muted);">
              before deterioration escalates.
            </div>

            
          </div>
        </div>
      </div>

      <!-- Metric 5 -->
      <div class="impact-metric rounded-2xl p-6 sm:p-7"
           style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
        <div class="flex items-start gap-4">
          <div class="impact-icon">
            <!-- Cost curve flattening -->
            <svg viewBox="0 0 64 64" class="h-8 w-8">
              <path d="M12 46 L12 18" stroke="rgba(252,248,248,0.18)" stroke-width="4" stroke-linecap="round"/>
              <path d="M12 46 L54 46" stroke="rgba(252,248,248,0.18)" stroke-width="4" stroke-linecap="round"/>
              <path d="M14 44 C24 30, 32 28, 42 26 C48 25, 52 24, 54 22"
                    fill="none" stroke="rgba(0,86,23,0.55)" stroke-width="4" stroke-linecap="round"/>
              <path d="M14 44 C22 34, 28 30, 34 28"
                    fill="none" stroke="rgba(252,248,248,0.18)" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="flex-1">
            <div class="text-xs uppercase tracking-wide" style="color: rgba(252,248,248,0.55);">
              Measured outcome
            </div>
            <div class="mt-2 text-xl sm:text-2xl font-semibold impact-strong" style="color: var(--font-primary);">
              Better prioritization
            </div>
            <div class="mt-2 text-sm sm:text-base" style="color: var(--font-muted);">
              helps avoid late-stage repair costs.
            </div>

            
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    <!-- SECTION 6: Contact -->
    <section id="contact" class="mx-auto max-w-6xl px-5 min-h-screen flex items-center py-16" style="border-top: 1px solid var(--border-muted); padding-top: 64px; padding-bottom: 80px;">
    <div class="w-full">
      <div class="rounded-2xl p-8 sm:p-10"
           style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
        <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 class="text-2xl font-semibold sm:text-3xl" style="color: var(--font-primary);">Contact us</h2>
            <p class="mt-3" style="color: var(--font-muted);">
              Ready to explore a pilot or partnership? Email us and we’ll respond with next steps.
            </p>

            <div class="mt-6 space-y-2 text-sm" style="color: rgba(252,248,248,0.8);">
              <div><span style="color: rgba(252,248,248,0.6);">Email:</span> s.arumugam@wegtrax.com</div>
              <div><span style="color: rgba(252,248,248,0.6);">Company:</span> WEGtrax</div>
            </div>
          </div>

          <div class="rounded-xl p-6" style="border: 1px solid var(--border-muted); background: rgba(252,248,248,0.04);">
            <div class="text-sm" style="color: rgba(252,248,248,0.7);">Fastest way</div>
            <a class="mt-3 inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-medium"
               style="background: var(--bg-card-hover); color: var(--font-primary);"
               href="mailto:s.arumugam@wegtrax.com?subject=WEGtrax%20Pilot%20Request">
              Email WEGtrax
            </a>
            <div class="mt-3 text-xs" style="color: rgba(252,248,248,0.6);">
              Tip: include your region + what roads you want to monitor.
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

  </div>
</template>
