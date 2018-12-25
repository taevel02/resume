<template lang="pug">
  #app: main
    section.hero.is-dark.is-bold: .hero-body: .container
      h1.title Taehoon Kwon (Jay)
      h2.subtitle Front-end web developer

    section.section: .container: .columns
      .column.is-3
        resume-skills
        resume-contacts
        // resume-awards
      .column.is-8.is-offset-1
        resume-timeline
</template>

<script>
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import WebFont from 'webfontloader'

import ResumeSkills from './components/Skills'
import ResumeAwards from './components/Awards'
import ResumeContacts from './components/Contacts'
import ResumeTimeline from './components/Timeline'

export default {
  components: {
    ResumeSkills,
    ResumeContacts,
    ResumeAwards,
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
