<template>
  <div class="content">
    <div class="projects" v-for="history of timeline">
      <p class="title is-4">{{ history.year }}</p>
      <div class="project" v-for="project in history.projects">
        <div class="project__icons icon"><i class="project__icon fa fa-circle-o"></i></div>
        <div class="project__content"><a class="project__name" :href="project.href">{{ project.name }}</a>
          <p class="project__period">{{ project.period }}</p>
          <p class="project__description">{{ project.description }}</p>
          <p class="project__tags"><span class="project__tag tag" v-for="s in project.tags">{{ s }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import timeline from "../data/timeline";
export default { data: () => ({ timeline }) };
</script>

<style lang="scss">
.project {
  display: flex;
  position: relative;
  margin-bottom: 1.6rem;

  &:not(:last-child)::before {
    content: "";
    background-color: #dbdbdb;

    width: 2pt;
    height: 100%;

    top: 1.8em;
    left: 0.65em;
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
