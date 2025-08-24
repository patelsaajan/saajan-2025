<template>
    <div class="md:h-[calc(100dvh-80px)]">
      <div class="relative flex flex-col size-full justify-between">
          <Transition name="hero-image">
            <div 
                v-if="showHero"
                class="flex w-full justify-end mt-8"
            >
              <span class="relative after:absolute after:top-0 after:left-0 after:size-full after:bg-primary/15">
                  <NuxtImg
                      fit="cover"
                      src="/images/hero.jpg"
                      height="700"
                      width="900"
                      loading="lazy"
                      class="w-full sm:w-[750px] aspect-3/2 object-cover"
                  />
              </span>
            </div>
        </Transition>
        <div class="flex justify-center py-12">
          <LandingMarquee />
        </div>
        <div>
          <div class="overflow-hidden">
            <Transition name="hero-text">
              <span 
              v-if="showHero"
              class="block text-4xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl uppercase font-bebas"
              style="transition-delay: 0.2s"
              >
              Strategic.
            </span>
          </Transition>
        </div>
          <div class="relative">
            <TransitionGroup name="hero-icon" tag="div">
            <u-icon 
              v-if="showIcons"
              name="bxs:circle-half" 
              class="icon-semi-circle md:-left-6 xl:-left-8 2xl:-left-12"
              key="icon-1"
              style="transition-delay: 0.6s"
            />
            <u-icon 
              v-if="showIcons"
              name="bxs:circle-half" 
              class="icon-semi-circle md:-left-1 xl:-left-1 2xl:-left-2"
              key="icon-2"
              style="transition-delay: 0.4s"
            />
            <u-icon 
              v-if="showIcons"
              name="bxs:circle-half" 
              class="icon-semi-circle md:left-4 xl:left-6 2xl:left-8"
              key="icon-3"
              style="transition-delay: 0.2s"
            />
          </TransitionGroup>
            <div class="overflow-hidden">
              <Transition  name="hero-text" appear>
                <span 
                  v-if="showHero" 
                  class="block text-4xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl uppercase md:ml-30 xl:ml-40 2xl:ml-60 text-primary font-bebas"
                  style="transition-delay: 0.4s"
                >
                  Collaborative.
                </span>
              </Transition>
            </div>
          </div>
          <div class="overflow-hidden">
            <Transition name="hero-text">
                              <span 
                  v-if="showHero" 
                  class="block text-4xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl uppercase font-bebas"
                  style="transition-delay: 0.6s"
                >
                  Supportive.
                </span>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue"
  
  const showHero = ref(false)
  const showIcons = ref(false)
  
  onMounted(() => {
    showHero.value = true
    setTimeout(() => {
      showIcons.value = true
    }, 250) // 1s delay before icons slide in
  })
  </script>
  
  <style>
  .hero-text-enter-active,
  .hero-icon-enter-active {
    transition: transform 1s ease;
  }

  .hero-image-enter-active {
    transition: opacity 1s ease;
  }

  .hero-text-enter-from {
    transform: translateY(100%);
  }
  .hero-text-enter-to {
    transform: translateY(0);
  }
  .hero-image-enter-from {
    opacity: 0;
  }
  .hero-image-enter-to {
    opacity: 1;
  }
  .hero-icon-enter-from {
  transform: translateX(-400%) scale(0.5);
}

.hero-icon-enter-to {
  transform: translateX(0) scale(1);
}

  
  </style>
  