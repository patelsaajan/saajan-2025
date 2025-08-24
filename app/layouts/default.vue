<template>
  <div class="container relative bg-background text-text-primary">
    <!-- Desktop navbar: hidden on small screens, visible lg and up -->
    <layouts-navbar class="hidden lg:flex" />

    <!-- Mobile navbar: visible on small screens, hidden lg and up -->
    <layouts-mobileNavbar class="block lg:hidden" />

    <slot/>
  </div>
</template>
