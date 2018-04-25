<template>
  <div id="app">
    <main-header/>
    <transition name="jump" mode="out-in">
      <router-view/>
    </transition>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from '@/components/Header.vue';
import MainFooter from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss">
  @import 'assets/styles/main';
</style>
