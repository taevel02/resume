<template>
  <div id="app">
    <main>
      <section class="section">
          <div class="container">
              <div class="columns">
                  <div class="column is-3">
                    <h1 class="title">KWON TAEHOON</h1>
                    <h2 class="subtitle">FRONT-END WEB DEVELOPER</h2>
                  </div>
                  <div class="column is-8 is-offset-1">
                      <resume-contacts></resume-contacts>
                      <resume-skills></resume-skills>
                      <resume-awards></resume-awards>
                      <resume-timeline></resume-timeline>
                  </div>
              </div>
          </div>
      </section>
    </main>
  </div>
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
