<script setup lang="ts">
import { ref } from 'vue'

const localePath = useLocalePath()
const mode = ref<'Roughness' | 'Deformation' | 'Risk'>('Roughness')

const products = [
  {
    title: 'Road Roughness Estimation',
    subtitle: 'Where ride quality is degrading',
    detail: 'Network-level roughness insights to prioritize maintenance and track trends over time.',
    href: '/products/road-roughness',
  },
  {
    title: 'Deformation & Subsidence Mapping',
    subtitle: 'Where the ground itself is moving',
    detail: 'Early indicators of instability that can affect road structure and long-term safety.',
    href: '/products/deformation',
  },
  {
    title: 'Lane Markings Visibility Monitoring',
    subtitle: 'What drivers rely on at night',
    detail: 'Visibility and degradation tracking to support safety compliance and planning.',
    href: '/products/lane-markings',
  },
  {
    title: 'Pavement Deterioration Early Warning',
    subtitle: 'Before issues become hazards',
    detail: 'Proactive signals to shift from delayed repairs to preventive maintenance.',
    href: '/products/early-warning',
  },
]
</script>

<template>
  <div id="top" class="space-y-0">
    <!-- SECTION 1: Landing -->
    <section class="relative min-h-screen flex items-center ">
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


    <!-- SECTION 3: How it works -->
    <section id="how" class="mx-auto max-w-6xl px-5 min-h-screen flex items-center py-16 " style="border-top: 1px solid var(--border-muted); padding-top: 64px;">
    <div class="w-full">
      <h2 class="text-2xl font-semibold sm:text-3xl" style="color: var(--font-primary);">How it works</h2>
      <p class="mt-3 max-w-2xl" style="color: var(--font-muted);">
        A simple end-to-end flow that turns satellite signals into actionable road intelligence.
      </p>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-xl p-5" style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
          <div class="text-sm" style="color: rgba(252,248,248,0.6);">Step 1</div>
          <div class="mt-2 text-lg font-semibold" style="color: var(--font-primary);">Data capture</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">Frequent satellite observations over your network.</div>
        </div>

        <div class="rounded-xl p-5" style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
          <div class="text-sm" style="color: rgba(252,248,248,0.6);">Step 2</div>
          <div class="mt-2 text-lg font-semibold" style="color: var(--font-primary);">Signal processing</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">Extract stable indicators from the imagery.</div>
        </div>

        <div class="rounded-xl p-5" style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
          <div class="text-sm" style="color: rgba(252,248,248,0.6);">Step 3</div>
          <div class="mt-2 text-lg font-semibold" style="color: var(--font-primary);">AI interpretation</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">Translate patterns into condition insights.</div>
        </div>

        <div class="rounded-xl p-5" style="background: var(--bg-secondary); border: 1px solid var(--border-primary);">
          <div class="text-sm" style="color: rgba(252,248,248,0.6);">Step 4</div>
          <div class="mt-2 text-lg font-semibold" style="color: var(--font-primary);">Insight delivery</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">Dashboards + exports for planning and action.</div>
        </div>
      </div>
      </div>
    </section>

    <!-- SECTION 4: Products -->
    <section id="products" class="mx-auto max-w-6xl px-5 min-h-screen flex items-center py-16" style="border-top: 1px solid var(--border-muted); padding-top: 64px;">
    <div class="w-full">
      <h2 class="text-2xl font-semibold sm:text-3xl" style="color: var(--font-primary);">
        What can WEGtrax do today?
      </h2>
      <p class="mt-3 max-w-2xl" style="color: var(--font-muted);">
        Hover each card for details — click “More” for a dedicated page.
      </p>

      <div class="mt-10 grid gap-4 sm:grid-cols-2">
        <div
          v-for="p in products"
          :key="p.title"
          class="group rounded-xl p-6 transition"
          style="background: var(--bg-secondary); border: 1px solid var(--border-primary);"
        >
          <div class="text-lg font-semibold" style="color: var(--font-primary);">{{ p.title }}</div>
          <div class="mt-1 text-sm" style="color: rgba(252,248,248,0.7);">{{ p.subtitle }}</div>

          <div class="mt-4 text-sm opacity-0 transition group-hover:opacity-100" style="color: var(--font-muted);">
            {{ p.detail }}
          </div>

          <div class="mt-6 flex items-center gap-3">
            <NuxtLink
            :to="localePath(p.href)"
            class="rounded-md px-4 py-2 text-sm font-medium"
            style="background: var(--bg-card-hover); color: var(--font-primary);"
            :aria-label="`View details for ${p.title}`"
            >
            View details
          </NuxtLink>

            <a href="#contact" class="text-sm" style="color: rgba(252,248,248,0.75);">
              Discuss a pilot →
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- SECTION 5: Impact -->
    <section id="impact" class="mx-auto max-w-6xl px-5 min-h-screen flex items-center py-16 " style="border-top: 1px solid var(--border-muted); padding-top: 64px;">
    <div class="w-full">
      <h2 class="text-2xl font-semibold sm:text-3xl" style="color: var(--font-primary);">Impact</h2>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-xl p-5" style="border: 1px solid var(--border-primary); background: rgba(252,248,248,0.04);">
          <div class="text-lg font-semibold" style="color: var(--font-primary);">Scalable</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">From one corridor to national coverage with consistent monitoring.</div>
        </div>

        <div class="rounded-xl p-5" style="border: 1px solid var(--border-primary); background: rgba(252,248,248,0.04);">
          <div class="text-lg font-semibold" style="color: var(--font-primary);">Less CO₂ emissions</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">Reduced field vehicle surveys and operational footprint.</div>
        </div>

        <div class="rounded-xl p-5" style="border: 1px solid var(--border-primary); background: rgba(252,248,248,0.04);">
          <div class="text-lg font-semibold" style="color: var(--font-primary);">Automated monitoring</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">Continuous updates instead of occasional measurements.</div>
        </div>

        <div class="rounded-xl p-5" style="border: 1px solid var(--border-primary); background: rgba(252,248,248,0.04);">
          <div class="text-lg font-semibold" style="color: var(--font-primary);">Preventive maintenance</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">Intervene earlier instead of delayed repairs.</div>
        </div>

        <div class="rounded-xl p-5" style="border: 1px solid var(--border-primary); background: rgba(252,248,248,0.04);">
          <div class="text-lg font-semibold" style="color: var(--font-primary);">Fewer major repairs</div>
          <div class="mt-2 text-sm" style="color: var(--font-muted);">Better prioritization helps avoid expensive late-stage work.</div>
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
