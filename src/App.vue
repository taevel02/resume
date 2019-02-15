<template>
  <div id="app">
    <main>
      <section class="section">
          <div class="container">
              <div class="columns">
                  <div class="column is-3">
                    <h1 class="title">
                      <div class="first name">KWON</div>
                      <div class="second name">TAEHOON</div>
                    </h1>
                    <h2 class="subtitle">FRONT-END WEB DEVELOPER</h2>
                  </div>
                  <div class="column is-8 is-offset-1">
                      <resume-contacts></resume-contacts>
                      <resume-objectives></resume-objectives>
                      <resume-awards></resume-awards>
                      <resume-experience></resume-experience>
                      <resume-skills></resume-skills>
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
import ResumeObjectives from './components/Objectives'
import ResumeExperience from './components/Experience'

export default {
  components: {
    ResumeSkills,
    ResumeContacts,
    ResumeAwards,
    ResumeTimeline,
    ResumeObjectives,
    ResumeExperience
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

<style lang="scss">
*:focus {
  outline: none;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  color: #424244;

  &:not(:last-child)::before {
    content: "";
    background-color: #dbdbdb;

    width: 1pt;
    height: 90%;

    top: 3.1em;
    left: 32%;
    position: absolute;
  }
}

main {
  flex: 1 0 auto;
}

a {
  color: #424244;
}

.name {
  text-align: justify;
}

.first {
  color: #1f92cc;
}
</style>
