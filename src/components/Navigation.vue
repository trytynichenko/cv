<template>
  <nav class="nav">
    <router-link v-for="(item, i) in items" :key="i" :to="item.path">{{ item.name }}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    items: Array,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/navigation';
</style>
