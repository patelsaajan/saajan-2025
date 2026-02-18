<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} ~ Saajan Patel` : 'Saajan Patel',
  meta: [{
    name: 'description', content:"Official website of Saajan Patel. Projects, insights and ideas on entrepreneurship, tech, strategy and building impactful digital products."
  }]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
