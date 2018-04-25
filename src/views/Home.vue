<template>
  <div class="home">
    <greeting :name="author"/>
    <columns v-for="(column, i) in columns" :key="i" :title="column.name">
      <component :is="column.type" :data="column.data" :html="column.html"/>
    </columns>
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import Columns from '@/components/Columns.vue';
import Content from '@/components/Content.vue';
import Lines from '@/components/Lines.vue';
import List from '@/components/List.vue';

export default {
  name: 'Home',
  components: {
    Greeting,
    Columns,
    Content,
    Lines,
    List,
  },
  data: () => ({
    author: 'Leonid Trytynichenko',
    columns: [
      {
        name: 'Intro',
        type: 'Content',
        data: [
          'This online version of my resume was created as an experiment to learning Vue.js from scratch. For development, I\'ve used manually configured vue-cli with the following features: Router, SCSS/SASS Pre-processors, ESLint + Airbnb config, Unit Testing on Jest and E2E Testing on Cypress.',
        ],
        html: [
          'Source code are available on <a href="https://github.com/trytynichenko/cv" target="_blank">GitHub</a>.',
        ],
      },
      {
        name: 'Personal Goal',
        type: 'Content',
        data: [
          'As a Developer, I want to make all users happy with the service providing the solution to their issues, thus, helping the business grow and make more profit.',
        ],
      },
      {
        name: 'Experience',
        type: 'Lines',
        data: [
          {
            title: 'Netvertise Ltd.',
            time: 'Nov 2015 - Apr 2018',
            description: 'Creative Director, Front-End Lead',
          },
          {
            title: 'Netvertise Ltd.',
            time: 'Apr 2014 - Oct 2015',
            description: 'Team Lead',
          },
          {
            title: 'Netvertise Ltd.',
            time: 'Nov 2013 - Apr 2014',
            description: 'Software Engineer',
          },
          {
            title: 'Pingbull LLC',
            time: 'Apr 2013 - Oct 2013',
            description: 'WordPress Team Lead',
          },
          {
            title: 'Pingbull LLC',
            time: 'Feb 2012 - Apr 2013',
            description: 'Software Engineer',
          },
          {
            title: 'Siter design agency',
            time: 'Jun 2010 - Jan 2012',
            description: 'CEO',
          },
          {
            title: 'WebLife',
            time: 'Feb 2010 - May 2010',
            description: 'Junior Software Engineer',
          },
        ],
      },
      {
        name: 'Skills',
        type: 'List',
        data: [
          {
            label: 'Languages',
            items: [
              { name: 'JavaScript (ES6)' },
              { name: 'PHP' },
              { name: 'HTML' },
              { name: 'CSS/Sass' },
              { name: 'SQL' },
              { name: 'Bash' },
            ],
          },
          {
            label: 'Back end',
            items: [

              { name: 'WordPress' },
              { name: 'Magento' },
              { name: 'Apache / Nginx' },
              { name: 'MySQL' },
              { name: 'Node' },
              { name: 'REST' },
            ],
          },
          {
            label: 'Front end',
            items: [
              { name: 'React + Redux' },
              { name: 'Vue.js + Vuex' },
              { name: 'Mustache' },
              { name: 'jQuery' },
              { name: 'Jest' },
              { name: 'Cypress.io' },
            ],
          },
          {
            label: 'Tools',
            items: [
              { name: 'Webpack' },
              { name: 'Gulp' },
              { name: 'Grunt' },
              { name: 'Git' },
              { name: 'Sentry' },
              { name: 'Kibana' },
            ],
          },
        ],
      },
      {
        type: 'List',
        data: [
          {
            label: 'Management',
            items: [
              { name: 'Jira' },
              { name: 'InVision' },
              { name: 'XMind' },
            ],
          },
          {
            label: 'CI/CD',
            items: [
              { name: 'Jenkins' },
              { name: 'GitLab' },
              { name: 'Capistrano' },
            ],
          },
          {
            label: 'Methodology',
            items: [
              { name: 'Scrum' },
              { name: 'Kanban' },
              { name: 'GitFlow' },
            ],
          },
          {
            label: 'Design',
            items: [
              { name: 'Adobe Photoshop' },
              { name: 'Adobe Illustrator' },
              { name: 'Adobe After Effects' },
            ],
          },
        ],
      },
      {
        name: 'Soft skills',
        type: 'List',
        data: [
          {
            items: [
              { name: 'Team Player' },
              { name: 'Knowledge Sharing' },
            ],
          },
          {
            items: [
              { name: 'Thinking As End User' },
              { name: 'Communication' },
            ],
          },
          {
            items: [
              { name: 'Flexible' },
              { name: 'Learn New' },
            ],
          },
          {
            items: [
              { name: 'Problem Solving' },
              { name: 'Time Management' },
            ],
          },
        ],
      },
      {
        name: 'Testimonials',
        type: 'Lines',
        data: [
          {
            title: 'Sasha Miller | Netvertise Ltd.',
            description: '"Leo is an excellent and driven employee whom I had the pleasure of working with at Netvertise Ltd. on a number of design and technical projects. He is able to tackle complicated issues with patience, understanding and is an efficient team leader. Leo is pleasant to work with and I highly recommend him."',
          },
          {
            title: 'David Tabachnikov | Netvertise Ltd.',
            description: '"Leonid is an amazingly passionate and driven professional. He\'s ability to follow-through and deliver, adding in personal insight and his vision, ultimately making any project he touches better than expected. Unfortunately, I worked with Leonid for just a short time, but I would gladly hire him for any future project, and he would be a great asset to any organization."',
          },
          {
            title: 'Alena Chuzha | Netvertise Ltd.',
            description: '"It is a real pleasure to have deal with such professional and devoted colleague as Leo. I would subscribe under all the best words that HR can apply to the successful Team Lead\'s profile. Leo completely involves into the projects and keeps all the team members together coordinating and helping them in getting excellent results in time. His possibility for multitasking and positive attitude brings a great value into the team motivation."',
          },
          {
            title: 'Kristoffer Homdrom Fredriksen | Pingbull LLC',
            description: '"In Pingbull I have the honour and pleasure of working with Leonid. He is structured, easy going, positive, and his passion for what he is doing is very strong. Leonid is an ambitious and very professional developer. He is always stretching for new goals, and struggles to optimize all parts of solutions he builds. Leonid is not afraid of using new methods to reach his goals, and often take part in recommending new ways to solve challenges we might face in our projects.This defiantly contributes to delivering innovative and robust new solutions."',
          },
          {
            title: 'Joahim Furuseth | Pingbull LLC',
            description: '"Leo is a dedicated developer, and I have had the privilege of working with him across several projects. I have found Leo to be structured and easy to work with. His skills in WordPress development is just amazing. When working on a project Leo is also creative and comes with his own ideas to the projects, this is very useful for me as a project manager."',
          },
        ],
      },
    ],
  }),
};
</script>
