<template>
  <header class="header block">
    <navigation :items="nav"/>
  </header>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Header',
  components: {
    Navigation,
  },
  data: () => ({
    nav: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
  }),
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/header';
</style>
