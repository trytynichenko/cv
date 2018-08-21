<template>
  <div class="greeting block">
    <div class="title">
      <h1>Hey there,<img src="../assets/images/v.png"/></h1>
      <h2>
        My name is <strong>{{ name }}</strong> and I am a Software Engineer.
        I have {{ experience }}+ years of experience in software development.
        As a team lead, I take the responsibility for providing guidance,
        instruction, direction, and leadership to the team for the purpose of reaching the business
        goals and achieving successful results.
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
