<template>
  <div class="greeting block">
    <div class="title">
      <h1>Hi,<img src="../assets/images/v.png"/></h1>
      <h2>
        I am <strong>{{ name }}</strong>, a Front-end & WordPress software engineer.
        I have {{ experience }}+ years commercial experience working with clients
        from around the world, focused on building beautiful interfaces and providing responsive
        front-end development and WordPress websites.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  data: () => ({
    from: 2010,
  }),
  props: {
    name: String,
  },
  computed: {
    experience: data => new Date().getFullYear() - data.from,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/components/greeting';
</style>
