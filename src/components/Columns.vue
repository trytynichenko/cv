<template>
  <div class="columns block">
    <div class="block__title">{{ title }}</div>
    <div class="block__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Columns',
  props: {
    title: String,
  },
};
</script>
