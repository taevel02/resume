<template lang="pug">
  #app: main
    section.hero.is-dark.is-bold: .hero-body: .container
      h1.title Taehoon Kwon
      h2.subtitle Front-end web developer / Android developer

    section.section: .container: .columns
      .column.is-3
        resume-bio
        resume-skills
        resume-awards
        resume-contacts
      .column.is-8.is-offset-1
        resume-timeline
</template>

<script>
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import WebFont from 'webfontloader'

import ResumeBio from './components/Bio.vue'
import ResumeSkills from './components/Skills.vue'
import ResumeAwards from './components/Awards.vue'
import ResumeContacts from './components/Contacts.vue'
import ResumeTimeline from './components/Timeline.vue'

export default {
  components: {
    ResumeBio,
    ResumeSkills,
    ResumeAwards,
    ResumeContacts,
    ResumeTimeline
  },

  created () {
    WebFont.load({
      custom: {
        families: ['Spoqa Han Sans'],
        urls: ['//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css']
      }
    })
  }
}
</script>

<style>
  *:focus {
    outline: none;
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
</style>
