<template>
  <div class="flex justify-between">
    <NuxtLink
        to="/"
        class="text-3xl font-bold"
    >
        Saajan Patel
    </NuxtLink>
    <span class="flex gap-8">
        <nuxt-link 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            PROJECTS
        </nuxt-link>
        <nuxt-link 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            ABOUT
        </nuxt-link>            
        <nuxt-link 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            BLOG
        </nuxt-link>            
        <nuxt-link 
            class="cursor-pointer font-semibold w-fit hover:text-primary transform hover:scale-105 transition-all duration-100"
        >
            CONTACT
        </nuxt-link>
        </span>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

  
</script>