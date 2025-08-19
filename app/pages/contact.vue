<template>
  <div>
    <UButton
    @click="handleClick"
    >
        hello world
    </UButton>
  </div>
</template>

<script setup lang="ts">

const handleClick = async () => {
    try {
        await $fetch('/api/send', { method: 'POST' })
        return;
  } catch (error) {
    console.log('error', error)
    return { error };
  }
}
  
</script>