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
          'I have a solid background in the design and implementation of the enterprise and business solutions with the external services integrations, good expertise in creating enterprise integration solutions and deep understanding of messaging platforms. Additional experience includes creating integrations with different CRMs and other 3rd-party solutions. Excellent problem-solving skills and interpersonal skills.',
          'In my day-to-day job, I am focused on building valuable relationships with the customers providing them with the solutions that make their businesses grow and on supervising, coaching and mentoring junior staff and conducting performance reviews.',
        ],
        html: [
          'PS: Source code related to this CV is available at <a href="https://github.com/trytynichenko/cv" target="_blank">GitHub</a>.',
        ],
      },
      {
        name: 'Experience',
        type: 'Lines',
        data: [
          {
            title: 'Master Of Code Global',
            time: 'From May 2018',
            description: 'Team Leader / Solution Architect',
            duties: [
              'Pre-sales technical communication with customers',
              'Leading development process across multiple teams',
              'Chatbot R&D and support',
              'Development and implementation of the product core functionality and support tools',
              'Database design',
              'Application architecture',
              'Investigating the technical alternatives and implementing better solutions',
              'Refactoring',
              'Testing and debugging',
              'Performance tuning',
            ],
          },
          {
            title: 'LivePerson',
            time: 'From September 2019',
            description: 'Vendor Employee - Solution Architect',
            duties: [
              'Consulting and contributing to the Engagement and Sales Teams for client assessment',
              'Requirement analysis and client meetings',
              'Collecting business and technical requirements',
              'Translate business requirements into application architecture and software solutions',
              'Decomposition of the project into features list',
              'High-level architecture/technology stack definition',
              'Preparing the estimates and development timelines',
              'POC / MVP development',
            ],
          },
          {
            title: 'Adobe',
            time: 'Sept 2018 - Feb 2019',
            description: 'Vendor Employee - Tech Lead',
            duties: [
              'Leading the development process',
              'Develop the application architecture and software solutions',
              'Setup and maintain Kubernetes cluster',
              'Setup application monitoring and auto-scaling',
              'Deployment Automation & Orchestration',
              'Knowledge Sharing sessions for development team members',
            ],
          },
          {
            title: 'Netvertise Ltd.',
            time: 'Nov 2015 - Apr 2018',
            description: 'Creative Director, Front-End Lead',
            duties: [
              'Leading the development process across multiple teams',
              'Scrum/Kanban implementation. Internal meetings and training',
              'Projects planning. Monitor and support the project development process',
              'Developping the company products (Front-end, Backend)',
              'Code review and refactoring',
              'Mentoring the development team members',
              'Leading the training courses, workshops, meetings',
              'Creating, monitoring and standardizing',
              'Conducting the technical interviews',
            ],
          },
          {
            title: 'Netvertise Ltd.',
            time: 'Apr 2014 - Oct 2015',
            description: 'Team Lead',
            duties: [
              'Leading development process',
              'Projects planning. Monitoring and supporting of the project development process',
              'WordPress core and theme development',
              'Mentoring the development team members',
              'Conducting the workshops and training courses',
              'Conducting the interviews',
            ],
          },
          {
            title: 'Netvertise Ltd.',
            time: 'Nov 2013 - Apr 2014',
            description: 'Software Engineer',
            duties: [
              'Magento eCommerce website development',
              'Code review and refactoring',
              'Interviews',
            ],
          },
          {
            title: 'Pingbull LLC',
            time: 'Apr 2013 - Oct 2013',
            description: 'WordPress Team Lead',
            duties: [
              'Leading development process',
              'WordPress core and theme development',
              'Deployment to various environments',
              'Code review and refactoring',
              'Mentoring development team members',
              'Conducting the workshops and training courses',
              'Creating the development standards',
              'Conducting the interviews',
            ],
          },
          {
            title: 'Pingbull LLC',
            time: 'Feb 2012 - Apr 2013',
            description: 'Software Engineer',
            duties: [
              'WordPress core and theme development',
              'Deployment to various environments',
              'Code review and refactoring',
            ],
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
            items: [
              { name: 'JavaScript' },
              { name: 'Node.js / PHP' },
              { name: 'HTML / CSS' },
              { name: 'SQL / NoSQL' },
              { name: 'Express' },
            ],
          },
          {
            items: [
              { name: 'React / Redux' },
              { name: 'Vue.js / Vuex' },
              { name: 'Github / GitLab' },
              { name: 'GitFlow' },
              { name: 'Agile' },
            ],
          },
          {
            items: [
              { name: 'Docker / Kubernetes' },
              { name: 'Grafana / Prometeus' },
              { name: 'Jenkins' },
              { name: 'JFrog' },
              { name: 'Splunk' },
            ],
          },
          {
            items: [
              { name: 'Microsoft Azure / AWS' },
              { name: 'LUIS / Dialog Flow' },
              { name: 'Microsoft Bot Framework' },
              { name: 'Jira / Trello' },
              { name: 'Salesforce' },
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
            title: 'Olga Grom | PMI-ACP, PMI Member, Senior Project Manager at Master Of Code Global',
            description: '"Leo has exceptional leadership skills and technical expertise that helped us to drive very important initiatives through POC stage to the successful delivery. We have worked together on high profile projects and every time it was a success and the customers came back with more opportunities. He has contributed a lot both to the architecture design, tech leadership and customer tech support. He has a rare combination of the business acumen together with the technical knowledge what makes him a valuable team member. Happy to have him in my team."',
          },
          {
            title: 'Santosh Hanumansetti | Computer Scientist at Adobe',
            description: '"It’s rare that you come across standout talent like Leo. I had the pleasure of working with Leo for almost a year at Adobe. I found him to have great expertise and profound knowledge on Azure/AWS DevOps, docker and Kubernetes. He brought in a culture of automating every piece of infrastructure along with monitoring which is critical for any production environment. Leo is result driven, experienced and efficient team player. Deliver results and move on. I absolutely would recommend him to any Company."',
          },
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
      {
        name: 'Contact',
        type: 'Content',
        data: [
          'I am an open-minded positive individual who shapes new ideas with the right values and bright vision. If you have any questions or interested in the partnership, I will be happy to talk:',
        ],
        html: [
          'by email <a href="mailto:leo@trytynichenko.com">leo@trytynichenko.com</a> or <a href="https://www.linkedin.com/in/trytynichenko/" target="_blank">LinkedIn</a>',
        ],
      },
    ],
  }),
};
</script>
