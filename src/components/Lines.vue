<template>
  <div class="lines">
    <div v-for="(item, i) in data" :key="i" class="line">
      <div class="line__row">
        <div class="line__title">{{ item.title }}</div>
        <div class="line__date">{{ item.time }}</div>
      </div>
      <div class="line__description">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lines',
  props: {
    data: Array,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/lines';
</style>
