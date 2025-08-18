<template>
  <Transition name="icon-links">
    <div 
      v-if="showIcons"
      class="flex gap-8"
    >
      <a href="https://github.com/patelsaajan">
        <UIcon name="i-simple-icons-github" class="size-10 text-primary"/>
      </a>
      <a href="https://www.linkedin.com/in/patelsaajan/">
        <UIcon name="i-simple-icons-linkedin" class="size-10 text-primary" />
      </a>
      <a href="https://www.instagram.com/soyboysaajan/">
        <UIcon name="i-simple-icons-instagram" class="size-10 text-primary" />
      </a>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { TransitionGroup } from 'vue';

const showIcons = ref(false)

onMounted(() => {
  setTimeout(() => {
    showIcons.value = true
  }, 500)
})

  
</script>

<style>
 .icon-links-enter-active {
    transition: opacity 1s ease;
  }
  .icon-links-enter-from {
    opacity: 0;
  }
  .icon-links-enter-to {
    opacity: 1;
  }
</style>