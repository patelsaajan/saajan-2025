<template>
    <div class="flex justify-between overflow-x-visible w-full relative">
        <TransitionGroup name="nav-slide" class="overflow-y-hidden">
            <NuxtLink
                v-if="showNav"
                to="/"
                key="home-link"
                class="cursor-pointer font-semibold w-fit hover:text-secondary transform hover:scale-105 transition-all duration-100"
                >
                SAAJAN PATEL
                </NuxtLink>
            <div
            v-if="showNav"
            >
                <UButton
                    key="menu-btn"
                    class="cursor-pointer transition-all duration-100 font-bold p-0"
                    @click="toggleMobileMenu"
                    variant="link"
                >
                    MENU
                </UButton>
            </div>
        </TransitionGroup>
      <!-- Mobile Menu -->
      <Transition
        name="mobile-nav-slide"
        @after-leave="onAfterLeave"
      >
        <div
          v-if="showMobileMenu"
          class="absolute top-0 right-0 w-full h-screen bg-background p-4 z-50 flex flex-col pt-4 items-center"
        >
          <!-- Close Button -->
          <span class="flex w-full justify-end">
            <UButton 
              class="cursor-pointer" 
              color="secondary" 
              @click="toggleMobileMenu"
              icon="fluent:dismiss-12-filled"
              variant="link"
            />
          </span>
  
          <!-- Menu Links -->
          <NuxtLink
            @click.prevent="navigate('/')"
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100 mt-4"
          >
            <h2>HOME</h2>
          </NuxtLink>

          <!-- Menu Links -->
          <NuxtLink
            @click.prevent="navigate('/about')"
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100 mt-4"
          >
            <h2>ABOUT</h2>
          </NuxtLink>            
  
          <a
            @click.prevent="navigateExternal('https://soyboy.saajanpatel.co.uk')"
            class="cursor-pointer font-semibold w-fit hover:text-soyboy transform hover:scale-105 transition-all duration-100 mt-4"
          >
            <h2>RECIPES</h2>
          </a>
  
          <NuxtLink
            @click.prevent="navigate('/contact')"
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100 mt-4"
          >
            <h2>CONTACT</h2>
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const showMobileMenu = ref(false)
  let pendingRoute: string | null = null
  const showNav = ref(false)
  
  onMounted(() => {
    showNav.value = true
  })
  
  function toggleMobileMenu() {
    showMobileMenu.value = !showMobileMenu.value
  }
  
  function navigate(path: string) {
    pendingRoute = path
    showMobileMenu.value = false
  }
  
  function navigateExternal(url: string) {
    pendingRoute = url
    showMobileMenu.value = false
  }
  
  function onAfterLeave() {
    if (!pendingRoute) return
    if (pendingRoute.startsWith('http')) {
      window.location.href = pendingRoute
    } else {
      router.push(pendingRoute)
    }
    pendingRoute = null
  }
  </script>
  
  <style>
  .mobile-nav-slide-enter-active,
  .mobile-nav-slide-leave-active {
    transition: transform 0.5s ease, opacity 0.3s ease;
  }
  
  .mobile-nav-slide-enter-from,
  .mobile-nav-slide-leave-to {
    transform: translateX(60%);
    opacity: 0;
  }
  
  .mobile-nav-slide-enter-to,
  .mobile-nav-slide-leave-from {
    transform: translateX(0);
    opacity: 1;
  }

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
  