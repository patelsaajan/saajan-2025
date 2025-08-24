<template>
    <div class="flex justify-between overflow-x-visible w-full">
      <TransitionGroup name="nav-slide" class="overflow-y-hidden">
        <NuxtLink
          v-if="showNav"
          to="/"
          class="cursor-pointer font-semibold w-fit hover:text-secondary transform hover:scale-105 transition-all duration-100"
        >
          SAAJAN PATEL
        </NuxtLink>
        <span v-if="showNav" class="flex gap-8">
          <!-- Example future link -->
          <!-- <NuxtLink 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
            to="/projects"
          >
            PROJECTS
          </NuxtLink> -->
  
          <NuxtLink 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
            to="/about"
          >
            ABOUT
          </NuxtLink>            
  
          <a 
            href="https://soyboy.saajanpatel.co.uk"
            class="cursor-pointer font-semibold w-fit hover:text-soyboy transform hover:scale-105 transition-all duration-100"
          >
            RECIPES
          </a>
  
          <NuxtLink 
            to="/contact"
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
          >
            CONTACT
          </NuxtLink>
        </span>
      </TransitionGroup>
    </div>
  </template>
  
  <script setup lang="ts">
  const showNav = ref(false)
  
  onMounted(() => {
    showNav.value = true
  })
  </script>
  
  <style>
  .nav-slide-enter-active {
    transition: transform 1s ease;
  }
  
  .nav-slide-enter-from {
    transform: translateY(-300%);
  }
  
  .nav-slide-enter-to {
    transform: translateY(0);
  }
  </style>
  