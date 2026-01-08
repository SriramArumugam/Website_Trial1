<script setup lang="ts">
import type { Navigation } from '~/app/utils/useNavigation'

defineProps({
  isText: { type: Boolean, default: false },
})

const navigation = getNavigation('home') as Record<string, Navigation>

const isScrolled = ref(false)

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 24
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})

function goToSection(hash: string) {
  const el = document.querySelector(hash)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>


<template>
  <div class="mx-auto my-2 flex w-full items-center justify-center">
    <header
    class="w-full"
    :class="isScrolled ? 'bg-transparent' : 'bg-[#001217]'"
    >
          <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2">

        <!-- MINI LOGO (appears after scroll) -->
        <a
          href="#top"
          class="flex items-center gap-2 transition-all duration-300"
          class="flex items-center gap-2"
          @click.prevent="goToSection('#top')"
        >
          <div
            class="h-8 w-8 rounded-lg"
            style="background: var(--bg-card-hover);"
          />
          <div class="hidden sm:block leading-tight">
            <div
              class="text-sm font-semibold"
              style="color: var(--font-primary);"
            >
              WEGtrax
            </div>
            <div
              class="text-[11px]"
              style="color: var(--font-muted);"
            >
              Satellite + AI
            </div>
          </div>
        </a>

        <!-- NAV ICONS (your existing navigation) -->
        <nav
          class="z-10 flex h-[50px] items-center justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"
        >
          <button
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            class="flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out
                   text-muted hover:border-white/5 hover:bg-zinc-900/50 hover:backdrop-blur-3xl sm:px-6"
            @click="goToSection(item.to)"
          >
            <UIcon
              :name="item.icon"
              class="size-7 font-light sm:size-6"
            />
          </button>
        </nav>

      </div>

    </header>
  </div>
</template>
