<template lang="pug">
  .content: .projects(v-for='history of timeline')
    p.title.is-4 {{ history.year }}
    .project(v-for='project in history.projects')
      .project__icons.icon: i.project__icon.fa.fa-circle-o
      .project__content
        a.project__name(:href='project.href') {{ project.name }}
        p.project__period {{ project.period }}
        p.project__description {{ project.description }}
        p.project__tags
          span.project__tag.tag(v-for='s in project.tags') {{ s }}
</template>

<script>
import timeline from '../data/timeline'
export default { data: () => ({ timeline }) }
</script>

<style lang="scss">
  .project {
    display: flex;
    position: relative;
    margin-bottom: 1.6rem;

    &:not(:last-child)::before {
      content: '';
      background-color: #dbdbdb;

      width: 0.2em;
      height: 100%;

      top: 1.7em;
      left: 0.63em;
      position: absolute;
    }

    &__icons {
      padding-top: 0.4em;
      flex: 0 0 auto;
    }

    &__icon {
      color: #777;
    }

    &__content {
      flex: 1 1 auto;
      padding: 0 0 0.2rem 1.5rem;
    }

    &__name {
      font-size: 1.2em;
    }

    &__period {
      color: #b5b5b5;
      margin-bottom: 0.5em !important;
    }

    &__tags {
      margin-top: -0.5em;
    }

    &__tag:not(:last-of-type) {
      margin-right: 0.5em;
      margin-bottom: 0.5em;
    }
  }
</style>
