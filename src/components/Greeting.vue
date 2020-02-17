<template>
  <div class="greeting block">
    <div class="title">
      <h1>Hey there,<img src="../assets/images/v.png"/></h1>
      <h2>
        My name is <strong>{{ name }}</strong>. I am a Team Lead and Solutions Architect with
        a proven track record of the implemented solutions for enterprise
        and brands and a good knowledge of Backend, Frontend, and DevOps processes.
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
