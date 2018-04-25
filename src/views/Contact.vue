<template>
  <div class="contact block">
    <div>
      <h1>Contact <img src="../assets/images/mailbox.png" class="icons"/></h1>
      <component
          v-for="(column, i) in columns"
          :key="i"
          :is="column.type"
          :data="column.data"
          :html="column.html"/>
    </div>
  </div>
</template>

<script>
import Content from '@/components/Content.vue';

export default {
  name: 'Contact',
  components: {
    Content,
  },
  data: () => ({
    columns: [
      {
        type: 'Content',
        data: [
          'I am an open-minded positive individual who shapes new ideas with right values and bright vision. If you have any questions or interested in the partnership, I will be happy to talk:',
        ],
        html: [
          'by email <a href="mailto:leo@trytynichenko.com">leo@trytynichenko.com</a> or <a href="https://www.linkedin.com/in/trytynichenko/" target="_blank">LinkedIn</a>, even on <a href="skype:trytynichenko" target="_blank">Skype</a>.',
        ],
      },
    ],
  }),
};
</script>
