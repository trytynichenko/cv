<template>
  <footer class="footer block">
    <p>Made with <img src="../assets/images/fire.png"/> by {{ author }} &copy; {{ year }}</p>
    <p></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    author: 'Leonid Trytynichenko',
  }),
  computed: {
    year: () => new Date().getFullYear(),
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/footer';
</style>
