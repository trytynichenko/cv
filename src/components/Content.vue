<template>
  <div class="content">
    <p v-for="(item, i) in data" :key="i">
      {{ item }}
    </p>
    <p v-for="(item, i) in html" :key="i" v-html="item">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    data: Array,
    html: Array,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/content';
</style>
