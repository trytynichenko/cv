<template>
  <div class="list">
    <div v-for="(category, i) in data" :key="i" class="list__category">
      <div class="list__category__label">{{ category.label }}</div>
      <ul class="list__category__item">
        <li v-for="(item, k) in category.items" :key="k">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: Array,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/list';
</style>
