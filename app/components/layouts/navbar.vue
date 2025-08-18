<template>
  <div class="flex justify-between overflow-x-visible w-full">
    <TransitionGroup name="nav-slide" class="overflow-y-hiddem">
    <NuxtLink
        v-if="showNav"
        to="/"
        class="cursor-pointer font-semibold w-fit hover:text-secondary transform hover:scale-105 transitionGroup-all duration-100"
    >
        SAAJAN PATEL
    </NuxtLink>
    <span 
         v-if="showNav"
        class="flex gap-8"
    >
        <!-- <nuxt-link 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            PROJECTS
        </nuxt-link> -->
        <!-- <nuxt-link 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            ABOUT
        </nuxt-link>             -->
        <!-- <nuxt-link 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            BLOG
        </nuxt-link>             -->
        <a 
            href="https://soyboy.saajanpatel.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            RECIPES
        </a>
        <!-- <nuxt-link 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            CONTACT
        </nuxt-link> -->
        </span>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const showNav = ref(false);

onMounted(() => {
    showNav.value = true
})

  
</script>

<style>
.nav-slide-enter-active {
    transition: transform 1s ease;
}

.nav-slide-enter-from {
    transform: translateY(100%);
}
.nav-slide-enter-to {
    transform: translateY(0);
}
  
  </style>