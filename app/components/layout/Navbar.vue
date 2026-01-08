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
        <nav class="z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[
              localePath(item.to) === route.path
                ? 'border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm'
                : 'text-muted',
            ]"
            :to="localePath(item.to)"
            class="flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:backdrop-blur-3xl sm:px-6"
          >
            <UIcon
              :name="item.icon"
              class="size-7 font-light sm:size-6"
            />
          </NuxtLink>
        </nav>
      </SpotlightButton>
    </header>
  </div>
</template>
